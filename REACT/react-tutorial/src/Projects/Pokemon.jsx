import {PokemonCards} from "./PokemonCards";
import {useState, useEffect} from "react";

export const Pokemon = ()=>{

    const [pokemon,setPokemon]=useState([]);
    const [loading,setLoading]=useState(true);
    const [error,setError]=useState("");
    const [search,setSearch]=useState("");

    const  API = "https://pokeapi.co/api/v2/pokemon?limit=20";

    const fetchPokemon = async ()=>{
        try{
          const res = await fetch(API);
          const data = await res.json();
        //   console.log(data);
          const detailedPokemonData = data.results.map(async (curPokemon)=>{
            const res_url = await fetch(curPokemon.url);
            const url_data = await res_url.json();
            return url_data;

            // console.log(url)
          })

          const detailedResponse = await Promise.all(detailedPokemonData);
        //   console.log(detailedResponse);

          setPokemon(detailedResponse);
          setLoading(false);

        }catch(error){
            console.log(error);
            setLoading(false);
            setError(error);
        }
    }


    useEffect(()=>{
        fetchPokemon();
    },[]);

    // search functionality

    const searchPokemon = pokemon.filter((curPokemon)=>
        curPokemon.name.toLowerCase().includes(search.toLowerCase())
    );

    if(loading){
        return <div>
            <h1>loading...</h1>
        </div>
    }
    if(error){
        return(
            <div>
                <h1>{error.message}</h1>
            </div>
        )
    }

    

    return(
        <>
        
            <section className="min-h-screen bg-gradient-to-b from-yellow-300 to-yellow-100 px-4 py-10">

                <div className="text-center mb-6">
                    <h1 className="text-5xl font-extrabold text-gray-800 drop-shadow-md tracking-wide">⚡ Lets Catch Pokemon</h1>
                </div>
                <div className="flex justify-center mb-8">
                    <input type="text" placeholder="Enter Pokemon Name" value={search} onChange={(e)=> setSearch(e.target.value)}className="w-full max-w-md px-5 py-3 rounded-full border-2 border-yellow-500 shadow-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 text-gray-700 text-lg"/>
                </div>
                <div>
                    <ul className="flex flex-wrap gap-6 justify-center p-6">

                        {
                            searchPokemon.map((curPokemon)=>{
                                return <PokemonCards key={curPokemon.id}
                                 PokemonData = {curPokemon}/>
                            })
                        }
                    </ul>
                </div>
            </section>
        </>
    )
}