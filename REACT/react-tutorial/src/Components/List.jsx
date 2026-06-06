import styled from "styled-components";
export const SeriesCard = (props) => {

    const {image,title,rating,year,genre,watchUrl}=props.data;
    return (
    <li key = {props}>
        <div>
            <img src={image}

                alt="image" width="40%"
                height="40%" />
        </div>
        <h2>Name: {title} </h2>
        <h3>Rating: {rating}</h3>
        <p>Summary: {year}</p>
        <p>Genre:{genre} </p>
        <a href={watchUrl} target="_blank">
            <button>Watch Now</button>
        </a>
         <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
    </li>
    )

}