import React, { useRef } from 'react';
import './DragDropFiles.scss';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../State/store';

const DragDropFiles = (props: any) => {
    const dragBox = useRef<HTMLDivElement>(null);
    const images = useSelector((state: AppState) => state.images);
    const dispatch = useDispatch();

    const handleDragEnterOver = (event: React.DragEvent<HTMLDivElement>) => {
        dragBox.current?.classList.add('drag-drop-box-over');
        event.preventDefault();
    };
    const handleDargLeave = (event: React.DragEvent<HTMLDivElement>) => {
        dragBox.current?.classList.remove('drag-drop-box-over');
    };
    const handleDrop = async (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        dragBox.current?.classList.remove('drag-drop-box-over');
    };

    return (
        <div
            ref={dragBox}
            className={`${props.className} drag-drop-box`}
            onDragEnter={handleDragEnterOver}
            onDragOver={handleDragEnterOver}
            onDragLeave={handleDargLeave}
            onDrop={handleDrop}
        >
            {(images.length <= 0) ? (
                <div className="pt-5">
                    <div className="drag-drop-box-notification mt">You can drop an image here!</div>
                </div>
            ) : (
                ''
            )}
            {props.children}
        </div>
    );
};

export default DragDropFiles;
