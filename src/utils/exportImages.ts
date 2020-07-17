import { ImagesType } from "../State/images";
import * as Phaser from 'phaser';
import b64toBlob from "./b64toBlob";
enum LOCAL_EVENTS {
    CHARGE_IMAGES = 'CHARGE_IMAGES',
    EXPORT_IMAGES_COMPLETE = 'EXPORT_IMAGES_COMPLETE'
}
class GetAtlas extends Phaser.Scene {
    atlas!: any;
    images!: ImagesType;
    new_scale: number = 1;
    constructor() {
        super({ key: 'GetAtlas' });
    }

    preload() {
        this.registry.events.on(LOCAL_EVENTS.CHARGE_IMAGES, (config: { images: ImagesType, scale: number }) => {
            const images: ImagesType = config.images;
            this.new_scale = config.scale;

            images.forEach((image) => {
                this.images = images;
                this.load.image(image.name, URL.createObjectURL(b64toBlob(image.src)));
            });
            this.load.start();
        })
        this.load.once(Phaser.Loader.Events.COMPLETE, async () => {
            let last_sprite: any = { x: 0, displayWidth: 0 };
            let canvas_width = 0;
            let canvas_height = 0;
            this.atlas = {
                "frames": this.images.map((image) => {
                    last_sprite = this.add.image(last_sprite.x + last_sprite.displayWidth, 0, image.name)
                        .setOrigin(0)
                        .setScale(this.new_scale)
                        .setName(image.name);
                    canvas_width += last_sprite.displayWidth;
                    canvas_height = (last_sprite.displayHeight > canvas_height) ? last_sprite.displayHeight : canvas_height;
                    this.game.scale.setGameSize(canvas_width, canvas_height);
                    return {
                        "filename": image.name,
                        "frame": {
                            "x": last_sprite.x,
                            "y": last_sprite.y,
                            "w": last_sprite.displayWidth,
                            "h": last_sprite.displayHeight
                        },
                        "anchor": {
                            "x": image.origin.x,
                            "y": image.origin.y
                        }
                    };
                })
            };
            this.game.renderer.snapshot((image: any) => {
                const json_atlas = JSON.stringify(this.atlas);
                this.scene.start('GetImage', { src: image.src, json: String(json_atlas) });
            });
        });
    }
}

class GetImages extends Phaser.Scene {
    options_atlas!: {
        src: string,
        json: string
    }
    constructor() {
        super({ key: 'GetImage' })
    }
    init(options: any) {
        this.options_atlas = options;
    }
    preload() {
        console.log('atlas: ', this.options_atlas.json)
        this.load.atlas('my_atlas', URL.createObjectURL(b64toBlob(this.options_atlas.src)), URL.createObjectURL(new Blob([this.options_atlas.json])));
        this.load.start();

        this.load.once(Phaser.Loader.Events.COMPLETE, () => {
            let texturesKeys = Object.keys(this.textures.get('my_atlas').frames);
            const output = texturesKeys.map((name) => {
                const textureB64 = this.textures.getBase64('my_atlas', name);
                return {
                    name,
                    src: textureB64,
                };
            }).filter((obj) => obj.name !== '__BASE');
            // TODO: Regresar esto: output
            this.registry.events.emit(LOCAL_EVENTS.EXPORT_IMAGES_COMPLETE, output);
        });
    }
}

const exportImages = (images: ImagesType, scale: number) => {
    const divElement = document.createElement('div');
    divElement.setAttribute('id', 'export-images');
    // divElement.setAttribute('style', 'position: absolute;top: -2000px;visibility: hidden');
    document.body.appendChild(divElement);

    const game = new Phaser.Game({
        width: 100,
        height: 100,
        type: Phaser.CANVAS,
        banner: {
            hidePhaser: true
        },
        parent: 'export-images',
        backgroundColor: 'rgba(0,0,0,0)',
        render: {
            pixelArt: true
        },
        scene: [GetAtlas, GetImages]
    });
    game.events.on(Phaser.Scenes.Events.READY, () => {
        game.events.emit(LOCAL_EVENTS.CHARGE_IMAGES, { images, scale });
    })
    return new Promise((resolve) => {
        game.events.on(LOCAL_EVENTS.EXPORT_IMAGES_COMPLETE, (images: any) => {
            game.destroy(true);
            document.body.removeChild(divElement);
            resolve(images);
        });
    });
}
export default exportImages;