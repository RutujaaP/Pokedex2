// //This component will receive props like the Pokémon's image, name, number, and type, and display them in a card format.

// PokemonCard.js
// PokemonCard.js
// import React from 'react';
import React, { useState, useEffect } from 'react';
import './PokemonCard.css'; // Assuming your styles will be here

function PokemonCard({ key, name, number, image, types, onClick }) {
    return (
      <div className="pokemon-card" onClick={onClick}>
        <img src={image} alt={name} className="pokemon-image" />
        <div className="pokemon-info">
          <span className="pokemon-number">#{number.toString().padStart(3, '0')}</span>
          <h3 className="pokemon-name">{name}</h3>
          <div className="pokemon-types">
            {types.map((type, index) => (
              <button key={index} className={`pokemon-type-button ${type.toLowerCase()}`}>{type}</button>
            ))}
          </div>
        </div>
      </div>
    );
  }
  
  export default PokemonCard;


//PokemonList.js
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import PokemonCard from './PokemonCard';

// function PokemonList() {
//   const [pokemonList, setPokemonList] = useState([]);
//   const [searchQuery, setSearchQuery] = useState('');

//   useEffect(() => {
//     const fetchData = async () => {
//       const result = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151');
//       setPokemonList(result.data.results.map(pokemon => ({
//         ...pokemon,
//         number: pokemon.url.split('/').slice(-2)[0]
//       })));
//     };
//     fetchData();
//   }, []);

//   const handleSearchChange = (event) => {
//     setSearchQuery(event.target.value);
//   };

//   const filteredPokemonList = pokemonList.filter(pokemon => {
//     return (
//       pokemon.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
//       pokemon.number.toString().startsWith(searchQuery)
//     );
//   });

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Search by name or number"
//         value={searchQuery}
//         onChange={handleSearchChange}
//       />
//       <div className="pokemon-grid">
//         {filteredPokemonList.map(pokemon => (
//           <PokemonCard
//             key={pokemon.number}
//             number={pokemon.number}
//             name={pokemon.name}
//             image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.number}.png`}
//             types={['type1', 'type2']} // Replace with actual types
//             onClick={() => {/* handle click event */}}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }


// const PokemonList = (pokemon)=> {
//   const [pokemonList, setPokemonList] = useState([]);
//   const [filteredPokemonList, setFilteredPokemonList] = useState([]);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [searchType, setSearchType] = useState('name');

//   return (
//     <>
     
//       <div className="pokemon-card">
//       </div>
//     </>
//   );
// }

// export default PokemonList;


