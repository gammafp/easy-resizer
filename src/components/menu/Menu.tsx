import React from 'react';
import { useDispatch, connect } from 'react-redux';

// Redux
import { resetAllAction } from '../../State/global.actions';
import { AppDispatch, AppState } from '../../State/store';
import { setZoomAction, selectZoomLevel } from '../../State/zoom';

// Estilos
import './Menu.style.scss';

type Props = { zoom: number };

const MenuComponent: React.FunctionComponent<Props> = ({ zoom }) => {
    const dispatch = useDispatch<AppDispatch>();
    
    return (
        <nav className="menu noselect">
            <ul>
                <li className="icon">
                    <a href="https://gammafp.com" className="material-icons">
                        home
                    </a>
                </li>
                <li onClick={() => {
                    dispatch(setZoomAction(Math.random() * 100));
                }}>
                    Import
                </li>
                <li onClick={() => {
                    dispatch(resetAllAction());
                }}>
                    Reset
                </li>
            </ul>
        </nav>
    );
};

const mapStateToProps = (state: AppState) => ({
    zoom: selectZoomLevel(state)
});

export default connect(mapStateToProps)(MenuComponent);
