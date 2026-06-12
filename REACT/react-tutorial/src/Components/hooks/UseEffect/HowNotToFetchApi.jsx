import { useEffect, useState } from "react";

export const HowNotToFetchApi = ()=>{

    const [apiData, setApiData] = useState(null);
    const [loading, setLoading]=useState(true);
    const [error,setError]= useState("");


    // const fetchPokemon = ()=>{

    //          fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
    //     .then((res)=> res.json())
    //     .then((data) => {
    //         setApiData(data);
    //         setLoading(false); 
    //     })
    //     .catch((err)=>{
    //         console.log(error);
    //         setError(error);
    //         setLoading(false);  
    //     });
    // }


    const fetchPokemon = async ()=>{
        try{
            const res = await fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
            const data = await res.json();
            setApiData(data);
            setLoading(false);


        }catch(error){
             console.log(error);
            setError(error);
            setLoading(false); 
        }
    }
    useEffect(()=>{
        fetchPokemon();
    },[]);

console.log(apiData);
if(loading) return <h1>Loading...</h1>;
if(error) return <h1>{error.message}</h1>;

//    if(apiData){
    return(
        <section>
           <header>
            <h1>Lets catch pokemon</h1>

           </header>
           <ul className="card-demo">
            <li className="pokemon-card">
                <figure>

                </figure>
                <h2>{apiData.name}</h2>
            </li>
           </ul>

        </section>
    )
}
