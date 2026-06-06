import { useState } from 'react';
import "./ToggleSwitch.css";
export const ToggleSwitch = ()=>{
    const [isOn, setIsOn] = useState(false);
    const handleToggleSwitch = ()=>{
        setIsOn(!isOn);
    }
    const checkIsON = isOn ? "ON": "OFF"
    return(
        <div className="toggle-switch" style={{backgroundColor:isOn ? "#029307": "#6e6868"}} onClick={handleToggleSwitch}>
            <div className={`switch ${checkIsON}`}>
                <span className="switch-state">{checkIsON}</span>
            </div>
        </div>
    )
}