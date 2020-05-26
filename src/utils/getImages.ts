import clearName from './clearNames';
import generateId from './generateId';
import { Observer, GLOBAL_EVENT } from '../Observer';

// Nos ayuda a tener la/las imágenes a partir de un file input
const getImageFiles = (files: any) => {
    return new Promise((resolve, reject) => {
        const Files = Array.from(files).filter((file: any) => {
            if (file.size > 1600000) {
                Observer.emit(
                    GLOBAL_EVENT.NOTIFICATION_SYSTEM.ERROR,
                    `The file is too big. The minimun is: 1.6MB`
                );
                return void 0;
            }
            const newAcceptFormImages = ['image/jpg', 'image/jpeg', 'image/png', 'image/gif'];
            return newAcceptFormImages.includes(file.type) && file.size < 1650000;
        });

        const FilesOut: any = [];

        Files.forEach((file: any): void => {
            const name = clearName(file.name);
            const reader = new FileReader();
            reader.onload = (fileURL: any) => {
                const finalFile = fileURL.target;
                const img = new Image();
                img.onload = () => {
                    FilesOut.push({
                        id: generateId(),
                        name,
                        width: img.width,
                        height: img.height,
                        src: finalFile.result,
                        active: false,
                        changeName: false,
                        origin: { x: 0.5, y: 0.5 },
                    });
                    if (Files.length === FilesOut.length) {
                        resolve(FilesOut);
                    }
                };
                img.src = URL.createObjectURL(file);
            };
            reader.readAsDataURL(file);
        });
    });
};

export default getImageFiles;
