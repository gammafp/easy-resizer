import React from 'react';
import { ImagesType, setImages, resetImages } from '../../State/images';

// Estilos
import './Menu.style.scss';
import ImportButton from './ImportButton.component';
import { useDispatch } from 'react-redux';
import Patreon from '../../Vendor/become_patreon.png';
import kofi from '../../Vendor/kofi.png';

const MenuComponent: React.FunctionComponent = () => {

    const dispatch = useDispatch();

    const receiveImages = (images: ImagesType) => {
        dispatch(setImages(images));
    }

    return (
        <nav className="menu noselect">
            <ul className="d-flex justify-content-between">
                <div className="d-flex">
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
                </div>
                <div className="d-flex">
                    <li>
                        <a
                            href="https://www.patreon.com/join/gammafp?"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src={Patreon} alt="Patreon" />
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://ko-fi.com/gammafp"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src={kofi} className="w-100 h-100" alt="ko-fi" />
                        </a>
                    </li>
                </div>
            </ul>
        </nav>
    );
};

export default MenuComponent;
