import React from 'react';
import { AddButton } from '../buttons/Buttons';
import store from '../../State/store';
import exportImages from '../../utils/exportImages';

const ExportButton = () => {
    const handleExport = async () => {
        console.log('Empieza el exporteo');
        const images = store.getState().images;
        const scale = store.getState().scale;
        const scaled_images = await exportImages(images, scale);    
        console.log('Imagenes escaladas ', scaled_images);
    }

    return <AddButton className="p-2" style={{ fontSize: '1.3rem' }} onClick={handleExport}>Re-scale</AddButton>;
}

export default ExportButton;