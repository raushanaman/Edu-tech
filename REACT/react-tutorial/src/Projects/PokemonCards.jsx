export const PokemonCards = ({PokemonData})=>{

    
    return(
        <>

        <li className="bg-gradient-to-b from-yellow-100 to-yellow-300 border-4 border-yellow-400 rounded-2xl shadow-xl p-5 flex flex-col items-center gap-3 w-60 hover:scale-105 transition-transform duration-300">
            {console.log(PokemonData.name)}
            <figure className="bg-white rounded-full p-3 shadow-inner w-36 h-36 flex items-center justify-center">
                <img src={PokemonData.sprites.other.dream_world.front_default} 
                alt={PokemonData.name}
                className="w-28 h-28 object-contain drop-shadow-lg"
                />
            </figure>
              <h2 className="text-xl font-bold capitalize text-gray-800 tracking-wide">{PokemonData.name}</h2>
              <div className="bg-yellow-400 text-gray-800 text-sm font-semibold px-3 py-1 rounded-full shadow">
                <p>
                    {
                        PokemonData.types.map((curType)=> curType.type.name).join(", ")
                    }
                </p>
              </div>
              <div className="w-full bg-white/60 rounded-xl px-4 py-2 text-sm text-gray-700 flex justify-between">
                <p>
                    <span className="font-semibold">Height: </span>{PokemonData.height}
                </p>
              </div>
              <div className="w-full bg-white/60 rounded-xl px-4 py-2 text-sm text-gray-700 flex justify-between">
                <p>
                    <span className="font-semibold">Weight: </span>{PokemonData.weight}
                </p>
              </div>
              <div className="w-full bg-white/60 rounded-xl px-4 py-2 text-sm text-gray-700 flex justify-between">
                <p>
                    <span className="font-semibold">Speed: </span>{PokemonData.stats[5].base_stat}
                </p>
              </div>
        </li>
        </>
    )

}