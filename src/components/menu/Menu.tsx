import React from 'react';
import { ImagesType, setImages, resetImages } from '../../State/images';

// Estilos
import './Menu.style.scss';
import ImportButton from './ImportButton.component';
import { useDispatch } from 'react-redux';

const MenuComponent: React.FunctionComponent = () => {
    
    const dispatch = useDispatch();

    const receiveImages = (images: ImagesType) => {
        dispatch(setImages(images));
    }

    return (
        <nav className="menu noselect">
            <ul>
                <li className="icon">
                    <a href="https://gammafp.com" className="material-icons">
                        home
                    </a>
                </li>
                <ImportButton
                    loadImages={receiveImages}
                    multiple={true}
                >
                    Import
                </ImportButton>
                <li onClick={() => {
                    dispatch(resetImages());
                }}>
                    Reset
                </li>
            </ul>
        </nav>
    );
};

export default MenuComponent;
