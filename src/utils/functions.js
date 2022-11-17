import { FaStar } from "react-icons/fa";


export const makeStars = (total)=>{
    
    var stars = []

    for(var i =0; i < total; i++){

        stars.push(<FaStar />);

    }

    return stars;

}