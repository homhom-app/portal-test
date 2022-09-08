import { useState } from "react";
import { Modal } from "./Modal";

export const Main = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => {
        isOpen ? setIsOpen(false) : setIsOpen(true);
    };
    return (
        <div className="main" style={{backgroundColor: "lightblue", width: "90vw"}}>
        <div id="modal"></div>
            <button onClick={handleClick}>button</button>
            {isOpen && <Modal />}
            
        </div>
        
    )
}

