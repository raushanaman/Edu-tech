import SeriesData from "../api/SeriesData.json";
import { SeriesCard } from "./List";

export const Card = () => {

    return (
       <ul className="grid grid-three--cols">
        {SeriesData.map((curElem)=>(
            <SeriesCard key ={curElem.id} data={curElem}/>
        ))}
       </ul>
    )
};
