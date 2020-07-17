import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './ContextMenu.style.scss';
import { deleteImage } from '../../State/images';
import { AppState } from '../../State/store';
import { contextMenuType, closeContextMenu } from '../../State/contextMenu';

let cambio = true;

const ContextMenu = (props: any) => {
    const sideMenuContext: contextMenuType = useSelector(
        (state: AppState) => state.contextMenu
    );
    const dispatch = useDispatch();

    let fadeIn = cambio ? 'fadeIn' : 'fadeIn2';
    let contextMenuClassName = `context-menu animated ${
        sideMenuContext.active ? 'active ' + ((cambio = !cambio), fadeIn) : ''
    }`;

    // Colocamos la posición, en el top se corrige
    const positionXYMenu = {
        top:
            sideMenuContext.y + 80 > globalThis.innerHeight
                ? `${sideMenuContext.y - 200}px`
                : `${sideMenuContext.y}px`,
        left: `${sideMenuContext.x}px`,
    };

    const closeMenu = () => {
        dispatch(closeContextMenu());
    };

    const handleClickDelete = () => {
        const image = document.querySelector('#id_' + sideMenuContext.id) as HTMLDivElement;
        image.classList.add('animate__zoomOut');

        setTimeout(() => {
            dispatch(deleteImage({ id: sideMenuContext.id }));
        }, 400);
        closeMenu();
    };

    return (
        <div
            className={contextMenuClassName}
            style={positionXYMenu}
            onContextMenu={(e) => {
                e.preventDefault();
            }}
        >
            <div className="options" onClick={handleClickDelete}>
                Delete image
            </div>
        </div>
    );
};

export default ContextMenu;
