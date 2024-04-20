// // import React, { useState, useEffect } from 'react';
// // import { getPokemonList } from './pokeapi';

// // function PokemonList() {
// //   const [pokemon, setPokemon] = useState([]);

// //   useEffect(() => {
// //     getPokemonList().then(data => {
// //       setPokemon(data.results);
// //     });
// //   }, []);

// //   return (
// //     <ul>
// //       {pokemon.map(poke => (
// //         <li key={poke.name} onClick={() => handlePokemonClick(poke.url)}>
// //           {poke.name}
// //         </li>
// //       ))}
// //     </ul>
// //   );
// // }

// // export default PokemonList;


// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';
// // import PokemonCard from './PokemonCard';
// // import './PokemonList.css';

// // function PokemonList() {
// //   console.log("PokemonList is rendering");

// //   const [pokemonList, setPokemonList] = useState([]); // Full list of pokemon
// //   const [filteredPokemonList, setFilteredPokemonList] = useState([]); // Filtered list based on search
// //   const [searchQuery, setSearchQuery] = useState('');
// //   const [searchType, setSearchType] = useState('name'); // 'name' or 'number'

// //   useEffect(() => {
// //     // Fetch the initial list of pokemon
// //     const fetchData = async () => {
// //       const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151');
// //       // Transform the response to include the pokemon number
// //       const transformedPokemonList = response.data.results.map(pokemon => ({
// //         ...pokemon,
// //         number: pokemon.url.split('/').slice(-2)[0]
// //       }));
// //       setPokemonList(transformedPokemonList);
// //       setFilteredPokemonList(transformedPokemonList); // Initially, no filter is applied
// //     };
// //     fetchData();
// //   }, []);

// //   const handleSearchChange = (event) => {
// //     setSearchQuery(event.target.value);
// //   };

// //   const handleSearchTypeChange = (event) => {
// //     setSearchType(event.target.value);
// //   };

// //   const handleSearch = () => {
// //     // Apply the search filter based on searchType and searchQuery
// //     const filteredList = pokemonList.filter(pokemon => {
// //       return searchType === 'name'
// //         ? pokemon.name.toLowerCase().includes(searchQuery.toLowerCase())
// //         : pokemon.number.startsWith(searchQuery);
// //     });
// //     setFilteredPokemonList(filteredList);
// //   };

// //   return (
// //     <>
// //       <div className="search-container">
// //         <p>select me</p>
// //         <select value={searchType} onChange={handleSearchTypeChange}>
// //           <option value="name">Search by Name</option>
// //           <option value="number">Search by Number</option>
// //         </select>
// //         <input 
// //           type="text" 
// //           placeholder={`Enter ${searchType}`} 
// //           value={searchQuery} 
// //           onChange={handleSearchChange} 
// //         />
// //         <button onClick={handleSearch}>Search</button>
// //       </div>

// //       <div className="pokemon-grid">
// //         {filteredPokemonList.map(pokemon => (
// //           <PokemonCard
// //             key={pokemon.name}
// //             number={pokemon.number}
// //             name={pokemon.name}
// //             image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.number}.png`}
// //             types={['type1', 'type2']} // You'll need to fetch the actual types for each Pokemon
// //             onClick={() => {/* Implement the onClick functionality */}}
// //           />
// //         ))}
// //       </div>
// //     </>
// //   );
// // }

// // export default PokemonList;


// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';
// // import { useNavigate } from 'react-router-dom';
// // import PokemonCard from './PokemonCard';
// // import './PokemonList.css';

// // function PokemonList() {
// //   const [pokemonList, setPokemonList] = useState([]);
// //   const navigate = useNavigate();

// //   useEffect(() => {
// //     const fetchData = async () => {
// //       const result = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151');
// //       const pokemonWithTypes = await Promise.all(result.data.results.map(async (pokemon) => {
// //         const pokemonDetails = await axios.get(pokemon.url);
// //         return {
// //           ...pokemon,
// //           id: pokemon.url.split('/').slice(-2)[0],
// //           types: pokemonDetails.data.types.map((typeInfo) => typeInfo.type.name)
// //         };
// //       }));
// //       setPokemonList(pokemonWithTypes);
// //     };
  
// //     fetchData();
// //   }, []);

// //   return (
// //     <div className="pokemon-grid">
// //       {pokemonList.map((pokemon) => (
// //         <div key={pokemon.id} onClick={() => navigate(`/pokemon/${pokemon.id}`)}>
// //           <PokemonCard
// //             name={pokemon.name}
// //             image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
// //             types={pokemon.types}
// //           />
// //         </div>
// //       ))}
// //     </div>
// //   );
// // }

// // export default PokemonList;



// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import PokemonCard from './PokemonCard';
// import './PokemonList.css'; // Make sure to create this CSS file for styling

// function PokemonList() {
//   const [pokemonList, setPokemonList] = useState([]); // Full list of pokemon
//   const [filteredPokemonList, setFilteredPokemonList] = useState([]); // Filtered list based on search
//   const [searchQuery, setSearchQuery] = useState('');
//   const [searchType, setSearchType] = useState('name'); // 'name' or 'number'

//   useEffect(() => {
//     // Fetch the initial list of pokemon
//     const fetchData = async () => {
//       const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151');
//       // Transform the response to include the pokemon number
//       const transformedPokemonList = response.data.results.map(pokemon => ({
//         ...pokemon,
//         number: pokemon.url.split('/').slice(-2)[0]
//       }));
//       setPokemonList(transformedPokemonList);
//       setFilteredPokemonList(transformedPokemonList); // Initially, no filter is applied
//     };
//     fetchData();
//   }, []);

//   const handleSearchChange = (event) => {
//     setSearchQuery(event.target.value);
//   };

//   const handleSearchTypeChange = (event) => {
//     setSearchType(event.target.value);
//   };

//   const handleSearch = () => {
//     // Apply the search filter based on searchType and searchQuery
//     const filteredList = pokemonList.filter(pokemon => {
//       return searchType === 'name'
//         ? pokemon.name.toLowerCase().includes(searchQuery.toLowerCase())
//         : pokemon.number.startsWith(searchQuery);
//     });
//     setFilteredPokemonList(filteredList);
//   };

//   return (
//     <>
//       <div className="search-container">
//         <select value={searchType} onChange={handleSearchTypeChange}>
//           <option value="name">Search by Name</option>
//           <option value="number">Search by Number</option>
//         </select>
//         <input 
//           type="text" 
//           placeholder={`Enter ${searchType}`} 
//           value={searchQuery} 
//           onChange={handleSearchChange} 
//         />
//         <button onClick={handleSearch}>Search</button>
//       </div>

//       <div className="pokemon-grid">
//         {filteredPokemonList.map(pokemon => (
//           <PokemonCard
//             key={pokemon.name}
//             number={pokemon.number}
//             name={pokemon.name}
//             image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.number}.png`}
//             types={['type1', 'type2']} // You'll need to fetch the actual types for each Pokemon
//             onClick={() => {/* Implement the onClick functionality */}}
//           />
//         ))}
//       </div>
//     </>
//   );
// }

// export default PokemonList;



// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import PokemonCard from './PokemonCard';
// import './PokemonList.css';
// import { useNavigate } from 'react-router-dom';


// function PokemonList() {
//     const [pokemonList, setPokemonList] = useState([]);
//     const [filteredPokemonList, setFilteredPokemonList] = useState([]);
//     const [searchQuery, setSearchQuery] = useState('');
//     const [searchType, setSearchType] = useState('name');
//     const navigate = useNavigate();

//     useEffect(() => {
//         // Fetch the initial list of pokemon
//         const fetchData = async () => {
//             const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151');
//             const transformedPokemonList = response.data.results.map(pokemon => ({
//                 ...pokemon,
//                 number: pokemon.url.split('/').slice(-2)[0]  // Get the Pokemon number from URL
//             }));
//             setPokemonList(transformedPokemonList);
//             setFilteredPokemonList(transformedPokemonList);  // Initialize with no filter
//         };
//         fetchData();
//     }, []);

//     const handleSearchChange = (event) => {
//         setSearchQuery(event.target.value.toLowerCase());
//         handleSearch(event.target.value.toLowerCase());  // Filter on each input change
//     };

//     const handleSearchTypeChange = (event) => {
//         setSearchType(event.target.value);
//     };

//     // This function now automatically filters based on the current search type and query
//     const handleSearch = (query) => {
//         const filteredList = pokemonList.filter(pokemon => {
//             return searchType === 'name' ? pokemon.name.toLowerCase().includes(query) : pokemon.number.startsWith(query);
//         });
//         setFilteredPokemonList(filteredList);
//     };

//     const handleCardClick = (pokemonId) => {
//       // Navigate to the PokemonDetails route
//       navigate(`/pokemon/${pokemonId}`);
//     };
    

//     return (
//       <>
//         <div className="search-container">
//           {/* Your search bar should only appear once here */}
//           <select value={searchType} onChange={handleSearchTypeChange}>
//             {/* ... */}
//           </select>
//           <input 
//             type="text" 
//             value={searchQuery} 
//             onChange={handleSearchChange} 
//             // ... other props
//           />
//           <button onClick={() => handleSearch(searchQuery)}>Search</button>

//         </div>
  
//         <div className="pokemon-grid">
//           {/* Map function for PokemonCard here */}
//           {filteredPokemonList.map(pokemon => (
//             <PokemonCard
//               key={pokemon.number}
//               number={pokemon.number}
//               name={pokemon.name}
//               image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.number}.png`}
//               types={pokemon.types} // Make sure this is set to actual types
//               onClick={() => handleCardClick(pokemon.number)}
//             />
//           ))}
//         </div>
//       </>
//     );
//   }
// export default PokemonList;




// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import PokemonCard from './PokemonCard';
// import './PokemonList.css';
// import { useNavigate } from 'react-router-dom';

// function PokemonList() {
//     const [pokemonList, setPokemonList] = useState([]); // This holds the full list of pokemon.
//     const [filteredPokemonList, setFilteredPokemonList] = useState([]); // This will hold the filtered list for display.
//     const [searchQuery, setSearchQuery] = useState('');
//     const [searchType, setSearchType] = useState('name'); // 'name' or 'number' for search
//     const navigate = useNavigate();

//     // Fetch the initial list of pokemon
//     useEffect(() => {
//         const fetchData = async () => {
//             const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=1000');
//             const transformedPokemonList = response.data.results.map(pokemon => ({
//                 ...pokemon,
//                 number: pokemon.url.split('/').slice(-2)[0] // Extract the Pokemon number from URL
//             }));
//             setPokemonList(transformedPokemonList);
//             setFilteredPokemonList(transformedPokemonList); // Initially no filter applied
//         };
//         fetchData();
//     }, []);

//     // Handle search input changes
//     const handleSearchChange = (event) => {
//         setSearchQuery(event.target.value.toLowerCase());
//     };

//     // Handle changes in search type (name or number)
//     const handleSearchTypeChange = (event) => {
//         setSearchType(event.target.value);
//     };

//     // Filter the list based on search query and type
//     const handleSearch = () => {
//         const query = searchQuery.toLowerCase();
//         const filteredList = pokemonList.filter(pokemon => {
//           return searchType === 'name'
//             ? pokemon.name.toLowerCase().includes(query)
//             : pokemon.number.startsWith(query);
//         });
//         setFilteredPokemonList(filteredList);
//       };
      

//     // Navigate to the Pokemon details page when a card is clicked
//     const handleCardClick = (pokemonId) => {
//         navigate(`/pokemon/${pokemonId}`);
//     };

//     return (
//         <>
//             <div className="search-container">
//                 <select value={searchType} onChange={handleSearchTypeChange}>
//                     <option value="name">Search by Name</option>
//                     <option value="number">Search by Number</option>
//                 </select>
//                 <input 
//                     type="text" 
//                     placeholder={`Enter ${searchType}`} 
//                     value={searchQuery} 
//                     onChange={handleSearchChange} 
//                 />
//                 <button onClick={handleSearch}>Search</button>
//             </div>

//             <div className="pokemon-grid">
//                 {filteredPokemonList.map(pokemon => (
//                     <PokemonCard 
//                         key={pokemon.name}
//                         number={pokemon.number}
//                         name={pokemon.name}
//                         image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.number}.png`}
//                         types={['type1', 'type2']} // This needs to be replaced with actual type fetching logic
//                         onClick={() => handleCardClick(pokemon.number)}
//                     />
//                 ))}
//             </div>
//         </>
//     );
// }

// export default PokemonList;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PokemonCard from './PokemonCard';
import './PokemonList.css';
import { useNavigate } from 'react-router-dom';

function PokemonList() {
    const [pokemonList, setPokemonList] = useState([]);
    const [filteredPokemonList, setFilteredPokemonList] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchType, setSearchType] = useState('name'); // 'name' or 'number' for search
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=10000');
            const dataWithTypes = await Promise.all(response.data.results.map(async (pokemon) => {
                const pokemonData = await axios.get(pokemon.url);
                return {
                    ...pokemon,
                    number: pokemon.url.split('/').slice(-2)[0], // Extract the Pokemon number from URL
                    types: pokemonData.data.types.map(type => type.type.name) // Map the types
                };
            }));
            setPokemonList(dataWithTypes);
            setFilteredPokemonList(dataWithTypes);
        };
        fetchData();
    }, []);

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value.toLowerCase());
    };

    const handleSearchTypeChange = (event) => {
        setSearchType(event.target.value);
    };

    const handleSearch = () => {
        const query = searchQuery.toLowerCase();
        const filteredList = pokemonList.filter(pokemon => {
            return searchType === 'name'
                ? pokemon.name.toLowerCase().includes(query)
                : pokemon.number.startsWith(query);
        });
        setFilteredPokemonList(filteredList);
    };

    const handleCardClick = (pokemonId) => {
        navigate(`/pokemon/${pokemonId}`);
    };

    return (
        <>
            <div className="search-container">
                <select value={searchType} onChange={handleSearchTypeChange}>
                    <option value="name">Search by Name</option>
                    <option value="number">Search by Number</option>
                </select>
                <input 
                    type="text" 
                    placeholder={`Enter ${searchType}`} 
                    value={searchQuery} 
                    onChange={handleSearchChange} 
                />
                <button onClick={handleSearch}>Search</button>
            </div>

            <div className="pokemon-grid">
                {filteredPokemonList.map(pokemon => (
                    <PokemonCard 
                        key={pokemon.name}
                        number={pokemon.number}
                        name={pokemon.name}
                        image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.number}.png`}
                        types={pokemon.types} // Now using actual types fetched
                        onClick={() => handleCardClick(pokemon.number)}
                    />
                ))}
            </div>
        </>
    );
}

export default PokemonList;
