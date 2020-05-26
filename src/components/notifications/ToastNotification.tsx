import React, { Component } from 'react';
import { Observer, GLOBAL_EVENT } from '../../Observer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './ToastNotification.scss';

class ToastNotification extends Component {
    componentDidMount() {
        // TODO: los toast tienen un error cuando son lanzados por segunda vez (posible error de la herramienta de toast)
        Observer.on(GLOBAL_EVENT.NOTIFICATION_SYSTEM.WARNING, (msg: string) => {
            toast.warn(msg, {
                className: 'toast-warn',
                position: 'top-center',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
        });
        Observer.on(GLOBAL_EVENT.NOTIFICATION_SYSTEM.ERROR, (msg: string) => {
            toast.error(msg, {
                className: 'toast-error',
                position: 'top-center',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
        });
        Observer.on(GLOBAL_EVENT.NOTIFICATION_SYSTEM.CLEAR, () => {
            toast.dismiss();
        });
    }

    render() {
        return <ToastContainer />;
    }
}

export default ToastNotification;
