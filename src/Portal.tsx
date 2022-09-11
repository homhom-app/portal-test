import React, { FC, ReactNode, useEffect, useState } from 'react';
import ReactDOM, { createPortal } from 'react-dom';

/* const modalRoot = document.createElement('div');
modalRoot.setAttribute('id', 'portal-root');
document.body.appendChild(modalRoot); */
const createElement = (): HTMLElement => {
    const el = document.createElement("div");
    el.setAttribute("id", "portal");
    el.setAttribute("style","height: 100%");
    return el;
};

type Props = {
    children: ReactNode;
};

/* export const Modal: FC<Props> = ({children}) => {
    const [showPortal, setShowPortal] = useState(false);
    useEffect(() => {
        const el = document.querySelector<HTMLElement>("#portal") ?? createElement();
        document.body.appendChild(el);    
    },[]);    
    useEffect(() => {
        setShowPortal(true);
    },[]);

    if (!showPortal) {
        return null;
    }
    return createPortal(children,document.getElementById("portal")!);
}; */
export const Portal: FC = () => {
    const [showPortal, setShowPortal] = useState(false);
    useEffect(() => {
        const el = document.querySelector<HTMLElement>("#portal") ?? createElement();
        const el_main = document.querySelector<HTMLElement>("#main")!;
        el_main.appendChild(el);    
    },[]);    
    useEffect(() => {
        setShowPortal(true);
    },[]);

    if (!showPortal) {
        return null;
    }
    return createPortal(
        <div style={{backgroundColor: "white", height: "100%", textAlign: "right"}}>
            Portal
            </div>
        ,document.getElementById("portal")!);
};
/* export const Modal:FC = () => {
    return ReactDOM.createPortal(
        <div style={{backgroundColor: "white"}}>
        <h2>This is modal</h2>
        </div>,
        document.getElementById("modal")!
    ); */
    /* return (
        <div style={{backgroundColor: "white", position: "static"}}>
        <h2>This is modal</h2>
        </div>
    ) 
};*/

