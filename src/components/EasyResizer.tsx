import React from 'react'
import MenuComponent from './menu/Menu';
import { SplitPane } from 'react-multi-split-pane';
import './EasyResizer.scss';
import { AddButton } from './buttons/Buttons';

const SwapPalette = () => {
    return (
        <div className="principal-container">
            <MenuComponent />
            <SplitPane
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
            </SplitPane>
        </div>
    )
}

export default SwapPalette;