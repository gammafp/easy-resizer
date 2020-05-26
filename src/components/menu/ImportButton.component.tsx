import React from 'react';
import getImageFiles from '../../utils/getImages';

const ImportButton = (props: any) => {
    const inputHandle = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        const files_loaded = await getImageFiles(files);
        props.loadImages(files_loaded);
    };

    return (
        <React.Fragment>
            <li className="fileUpload">
                {props.children}
                <input
                    type="file"
                    className="upload cursor-pointer uploadSprites"
                    accept={props.accept}
                    multiple={props.multiple}
                    onChange={inputHandle}
                />
            </li>
        </React.Fragment>
    );
};
export default ImportButton;
