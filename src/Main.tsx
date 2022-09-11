import { FC, useState } from "react";
import { Portal } from "./Portal";


export const Main: FC = () => {
    const [showPortal, setShowPortal] = useState(false);
    const handleClick = () => {
        showPortal ? setShowPortal(false) : setShowPortal(true);
    };
    return (
        <div id="main" style={{backgroundColor: "lightblue", width: "90vw"}}>
            {/* <div style={{position: "relative"}}> */}
                { showPortal && <Portal />}
            {/* </div> */}
            <div style={{position: "absolute"}}>
                Main<br />
                <button onClick={handleClick}>Show/Hide portal</button>
            </div>
            
            
        {/* <div id="modal"></div> */}
            {/* <button onClick={handleClick}>button</button>
            
            {/* <Modal />
            <p>Main</p> */}
            
            {/* <Modal><p>Main</p></Modal> */}
            
        </div>
        
    )
}

