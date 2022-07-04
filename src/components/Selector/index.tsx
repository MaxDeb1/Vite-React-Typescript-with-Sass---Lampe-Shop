import React from 'react';
import { BsSun } from "react-icons/bs";
import { RiMoonClearLine } from "react-icons/ri";

import './style.scss'
import { Items } from '../../Pages/main'

type Props = {
    data: Items;
    active: number;
    setActive: React.Dispatch<React.SetStateAction<number>>;
    lightOn: boolean;
    setLightOn: React.Dispatch<React.SetStateAction<boolean>>;
  };

const Selector = ({data, active, setActive, lightOn, setLightOn}: Props) => {

    const handleLampClick = 
        (e: React.MouseEvent<HTMLLIElement, MouseEvent>) =>{
            const target = e.target as Element
            setActive(Number(target.id) - 1)
    }

    const handleLightClick =
        (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
            const target = e.target as Element
            setLightOn(!lightOn)
    }

    return (
        <div className="lamp">
            <ul className="lamp__informations">
                <li className="specs"><strong>Material:</strong> {data.lamps[active].material}</li>
                <li className="specs"><strong>Dimensions (cm):</strong> {data.lamps[active].dimensions}</li>
                <li className="specs"><strong>Net Weight:</strong> {data.lamps[active].weight}</li>
                <li className="specs"><strong>Electrification:</strong> <br /> {data.lamps[active].electrification}</li>
            </ul>
            <div className={`lamp__selected ${data.lamps[active].material}`}>
                <img src={data.lamps[active].img.wide} alt="" />
            </div>
            <div className="lamp__selector">
                <ul className="lamps">
                {
                    data.lamps.map((item) => 
                        <li 
                            key={item.id}
                            id={item.id}
                            className={`lampe ${item.id === active + 1 ? "active" : ""}`}
                            onClick={handleLampClick}
                        >
                            <img src={item.img.small} alt="" />
                        </li>
                    )
                }
                </ul>
                <div className={`switch ${lightOn === false ? "lightOff" : "lightOn"}`}>
                    <div className="day" {...(lightOn === true && {onClick: handleLightClick})} >
                        <BsSun />
                    </div>
                    <div className="night" {...(lightOn === false && {onClick: handleLightClick})} >
                        <RiMoonClearLine />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Selector;