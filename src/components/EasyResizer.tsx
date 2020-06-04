import React from 'react'
import MenuComponent from './menu/Menu';
import './EasyResizer.scss';
import { AddButton } from './buttons/Buttons';
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';

// Import imagen
import uno from '../assets/test/uno.jpg';
import { AppState } from '../State/store';
import { useSelector } from 'react-redux';
import DragDropFiles from './dragDropFiles/DragDropFiles';

const SwapPalette = () => {
    const images = useSelector((state: AppState) => state.images);
    console.log(images);
    return (
        <div className="principal-container">
            <MenuComponent />
            <DragDropFiles>
                <div className="image-container--scroll">
                    <PerfectScrollbar >
                        <div className="images-container">
                            {
                                images.map((image) => {
                                    return (
                                        <div className="image-container" key={image.id}>
                                            <div className="figure">
                                                <img src={image.src} alt="Imagen Muestra" />
                                                <figcaption>
                                                    asdfijasdpfijaospdfijaposdfijasopdfjiaopdjfsioapsdjfioajsdfioapsdofijaspdofijaopsdfjopasdifjopasdifjopasdifjoipasfjopasidjfopasidjfopdisfjpoasdifjpoaisdfjopasdijfopasidfjopaisdjfopaisjdfpoasdifjpaosdifjpoasdifjpoasidfpoasdifjpoasdifjpoasdifjklasdfjlkñasfjklasdñfjklasfjlas Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam similique iusto praesentium blanditiis ipsa dignissimos quos reiciendis nulla laboriosam aperiam dicta aliquid laudantium accusamus, totam perspiciatis, sint cupiditate harum molestias.
                                            </figcaption>
                                            </div>
                                        </div>
                                    );
                                })
                            }
                        </div>
                    </PerfectScrollbar>
                </div>
            </DragDropFiles>

            <div className="tools d-flex justify-content-center">
                <div className="d-flex justify-content-between align-items-center tools-container">
                    <div className="ml-5">
                        <span className="scale-text">
                            Scale:&nbsp;
                        </span>
                        <input type="number" defaultValue="1" min="0" max="20" className="input-scale" />
                    </div>
                    <div className="mr-5">
                        <AddButton className="p-2" style={{ fontSize: '1.3rem' }}>Re-scale</AddButton>
                    </div>
                </div>
            </div>
            {/* <SplitPane
                split="vertical"
                className="panels-container"
                defaultSizes={[20, 60, 20]}
                minSize={[200, 500, 200]}
            >
                <div className="images-panel">

                </div>
                <div className="canvas-tool-container d-block">
                    <div className="canvas-panel">Arriba</div>
                </div>
                <div className="color-panel">
                    <div className="color-from">
                        <h4 className="title">
                            Scale:
                        </h4>
                        <div className="d-flex justify-content-center">
                            <input type="number" defaultValue="0" min="0" max="20" className="input-scale" />
                        </div>
                    </div>
                    <div className="color-to">
                        <div className="d-flex justify-content-center">
                            <AddButton className="mt-4 p-2" style={{ fontSize: '1.3rem' }}>Re-scale</AddButton>
                        </div>
                    </div>
                </div>
            </SplitPane> */}
        </div>
    )
}

export default SwapPalette;