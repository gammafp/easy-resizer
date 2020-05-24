// Acá solo hay componentes de estilos para botones de la aplicación que devuelven un evento determinado
import React from 'react';
import { css } from 'glamor';

const button_styles = css({
    color: 'var(--main-light)',
    border: '1px solid var(--main-light)',
    display: 'inline-block',
    borderRadius: '4px',
    lineHeight: '21px',
    fontSize: '1.3rem',
    minWidth: '25px',
    height: '25px',
    textAlign: 'center',
    cursor: 'pointer',
    ':hover': {
        color: 'var(--main-primary)',
        border: '1px solid var(--main-primary)'
    },
    ':active': {
        color:'var(--main-light)',
        border: '1px solid var(--main-light)'
    }
});

export const AddButton = (props) => {
    const text_button = (props.children !== undefined) ? props.children : '+';
    return ( 
        <div className={`${button_styles} noselect ${props.className}`} style={props.style} onClick={props.onClick}>
            {text_button}
        </div>
    )
}
