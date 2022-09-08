import React, { FC, useState } from 'react';
import ReactDOM from 'react-dom';

const modalRoot = document.createElement('div');
modalRoot.setAttribute('id', 'portal-root');
document.body.appendChild(modalRoot);

export const Modal:any = () => {
    return ReactDOM.createPortal(
        <h2>This is modal</h2>,
        document.getElementById("modal")!
    );
};

