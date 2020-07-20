import React from 'react';
import { AddButton } from '../buttons/Buttons';
import store from '../../State/store';
import exportImages from '../../utils/exportImages';
import { ImagesType } from '../../State/images';
import { saveAs } from 'file-saver';
import * as JSZIP from 'jszip';

const JSZip = require('jszip');

const ExportButton = () => {
    const handleExport = async () => {
        const images = store.getState().images;
        const scale = store.getState().scale;
        const scaled_images = await exportImages(images, scale) as Array<Pick<ImagesType[0], 'name' | 'src' > >;    
        const zip: JSZIP = new JSZip();
        scaled_images.forEach(image => {
            zip.file(image.name, image.src.replace('data:image/png;base64', ''), {base64: true})
        });

        const file = await zip.generateAsync({ type: 'blob' });
        saveAs(file, 'EasyResize.zip');
    }

    return <AddButton className="p-2" style={{ fontSize: '1.3rem' }} onClick={handleExport}>Re-scale</AddButton>;
}

export default ExportButton;