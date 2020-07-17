import React from 'react'
import MenuComponent from './menu/Menu';
import './EasyResizer.scss';
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';

import 'animate.css';

import ExportButton from './exportButton/ExportButton';

// Import imagen
import store, { AppState } from '../State/store';
import { useSelector, useDispatch } from 'react-redux';
import DragDropFiles from './dragDropFiles/DragDropFiles';
import { activateContextMenu, closeContextMenu } from '../State/contextMenu';
import { setScale } from '../State/scale';

const SwapPalette = () => {
    const images = useSelector((state: AppState) => state.images);
    const dispatch = useDispatch();
    const contextMenuHandle = (event: React.MouseEvent<HTMLDivElement, MouseEvent>, id: string) => {
        dispatch(
            activateContextMenu({
                id,
                x: event.clientX,
                y: event.clientY,
                active: true
            })
        );
    }

    const clickHandle = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (store.getState().contextMenu.active) {
            dispatch(closeContextMenu());
        }
    }

    return (
        <div className="principal-container" onContextMenu={(event) => event.preventDefault()} onClickCapture={(event) => clickHandle(event)}>
            <MenuComponent />
            <DragDropFiles>
                <div className="image-container--scroll">
                    <PerfectScrollbar >
                        <div className="images-container">
                            {
                                images.map((image) => {
                                    return (
                                        <div className="image-container animate__animated animate__bounceIn" key={image.id} id={`id_${image.id}`} onContextMenu={(event) => contextMenuHandle(event, image.id)}>
                                            <div className="figure">
                                                <img src={image.src} alt="Imagen Muestra" />
                                                <figcaption>
                                                    {image.name}
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
                        <input type="number" defaultValue="1" min="0" max="20" className="input-scale" onChange={(event) => {
                            dispatch(setScale( Number(event.target.value) ));
                            console.log('cambio: ', event.target.value);
                        }}/>
                    </div>
                    <div className="mr-5">
                       <ExportButton />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SwapPalette;