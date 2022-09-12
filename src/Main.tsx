import { FC, useState } from "react";
import { Portal } from "./Portal";


export const Main: FC = () => {
    const [showPortal, setShowPortal] = useState(false);
    const handleClick = () => {
        showPortal ? setShowPortal(false) : setShowPortal(true);
    };
    return (
        <div id="main" style={{
            backgroundColor: "lightblue", width: "90vw"
            }}>
                { showPortal && <Portal />}
            <div style={{position: "absolute"}}>
                Main<br />
                <button onClick={handleClick}>Show/Hide portal</button>
            </div>            
        </div>
        
    );
};

