import { FC, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

const createElement = (): HTMLElement => {
    const el = document.createElement("div");
    el.setAttribute("id", "portal");
    el.setAttribute("style","height: 100%");
    return el;
};

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
