// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// function App() {
//   const [pokemonList, setPokemonList] = useState([]);
//   const [selectedPokemon, setSelectedPokemon] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       const result = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151');
//       console.log('List of Pokémon:', result.data.results);
//       setPokemonList(result.data.results); // Save the list of Pokemon
//     };
//     fetchData();
//   }, []);

//   const handlePokemonClick = async (url) => {
//     const detailsResult = await axios.get(url);
//     console.log('Details of selected Pokémon:', detailsResult.data);
//     setSelectedPokemon(detailsResult.data); // Save the details of the selected Pokemon
//   };

//   return (
//     <div className="App">
//       <h1>Pokédex</h1>
//       <ul>
//         {pokemonList.map(poke => (
//           <li key={poke.name} onClick={() => handlePokemonClick(poke.url)}>
//             {poke.name}
//           </li>
//         ))}
//       </ul>
//       {selectedPokemon && (
//         <div>
//           <h2>{selectedPokemon.forms[0].name}</h2>
//           <img src={selectedPokemon.sprites.front_default} alt={selectedPokemon.forms[0].name} />
//           <p>Height: {selectedPokemon.height}</p>
//           <p>Weight: {selectedPokemon.weight}</p>
//           <div>
//             <h3>Types</h3>
//             {selectedPokemon.types.map((type, index) => (
//               <p key={index}>{type.type.name}</p>
//             ))}
//           </div>
//           <div>
//             <h3>Abilities</h3>
//             {selectedPokemon.abilities.map((ability, index) => (
//               <p key={index}>{ability.ability.name}</p>
//             ))}
//           </div>
//           <div>
//             <h3>Stats</h3>
//             {selectedPokemon.stats.map((stat, index) => (
//               <p key={index}>{stat.stat.name.toUpperCase()}: {stat.base_stat}</p>
//             ))}
//           </div>
//           <div>
//             <h3>Top 5 Moves</h3>
//             {selectedPokemon.moves.slice(0, 5).map((move, index) => (
//               <p key={index}>{move.move.name}</p>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;





// // // App.js
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import './App.css'; // The styles for the grid container
// import './PokemonCard.css'; // The styles for individual cards
// //import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
// import PokemonCard from './PokemonCard';
// import PokemonDetails from './PokemonDetails';
// import PokemonList from './PokemonList';
// import { Routes, Route, useNavigate } from 'react-router-dom';

// function App() {
//   const [pokemonList, setPokemonList] = useState([]);

//   const navigate = useNavigate();
//   useEffect(() => {
//     const fetchData = async () => {
//       const result = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151');
//       setPokemonList(result.data.results);
//     };
    
//     fetchData();
//   }, []);

//   const handlePokemonClick = (pokeId) => {
//     navigate(`/pokemon/${pokeId}`); // Use the navigate function to change the route
//   };

//   useEffect(() => {
//     const fetchData = async () => {
//       const result = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151');
//       const pokemonWithTypesPromises = result.data.results.map(async (pokemon) => {
//         const pokemonDetails = await axios.get(pokemon.url);
//         return {
//           ...pokemon,
//           types: pokemonDetails.data.types.map((typeInfo) => typeInfo.type.name)
//         };
//       });
//       const pokemonWithTypes = await Promise.all(pokemonWithTypesPromises);
//       setPokemonList(pokemonWithTypes);
//     };
  
//     fetchData();
//   }, []);
  
//   return (
    
//       <div className="App">
//         <h1>Pokédex</h1>
//         <Router>
//       <Routes>
//         <Route path="/" element={<PokemonList />} />
//         <Route path="/pokemon/:id" element={<PokemonDetails />} />
//       </Routes>
//     </Router>
//     </div>
    
//   );
// }

// export default App;



// import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// import AuthForm from './AuthForm';
// import './App.css';
// import './PokemonCard.css';
// import PokemonList from './PokemonList';
// import PokemonDetails from './PokemonDetails';

// function App() {
//   return (

    
//     <div className="App">
      
//       <h1>Pokédex</h1>
//       <Routes>
//         <Route path="/" element={<PokemonList />} />
//         <Route path="/pokemon/:id" element={<PokemonDetails />} />
//       </Routes>
//     </div>
//   );
// }

// export default App;


// import React, { useEffect, useState } from 'react';

// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// import './App.css';
// import './PokemonCard.css';
// //import container from './AuthService';
// import { initializeAuth, login, logout } from './AuthService';
// import AuthForm from './AuthForm';
// import PokemonList from './PokemonList';
// import PokemonDetails from './PokemonDetails';


// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   useEffect(() => {
//     initializeAuth().then(() => {
//       setIsLoggedIn(true);
//     });
//   }, []);

  


  

// //   return (
// //     <div className="App">
// //       <h1>Pokédex</h1>
// //       <button onClick={logout}>Logout</button>

// //       <Routes>
// //         <Route path="/" element={<PokemonList />} />
        
// //         <Route path="/pokemon/:id" element={<PokemonDetails />} />
// //       </Routes>
// //     </div>
// //   );
// // }

// // export default App;

// return (
  
//     <div className="App">
//       <h1>Pokédex</h1>
//       <Routes>
//         <Route path="/" element={isLoggedIn ? <PokemonList /> : <Navigate replace to="/login" />} />
//         <Route path="/login" element={<AuthForm setIsLoggedIn={setIsLoggedIn} />} />
//         <Route path="/pokemon/:id" element={isLoggedIn ? <PokemonDetails /> : <Navigate replace to="/login" />} />

//       </Routes>
//     </div>
  
// );
// }

// export default App;


import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import './App.css';
import './PokemonCard.css';
import { initializeAuth } from './AuthService';
import AuthForm from './AuthForm';

import PokemonList from './PokemonList';
import PokemonDetails from './PokemonDetails';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Initialize authentication and set login status
    initializeAuth().then(() => {
      setIsLoggedIn(true);
    }).catch(err => {
      console.error("Error initializing authentication:", err);
    });
  }, []);

  return (
    // <Router>
      <div className="App">
        <h1>Pokédex</h1>
        <Routes>
          <Route path="/" element={isLoggedIn ? <Navigate replace to="/pokemonlist" /> : <Navigate replace to="/login" />} />
          <Route path="/login" element={<AuthForm setIsLoggedIn={setIsLoggedIn} />} />
          
          <Route path="/pokemonlist" element={isLoggedIn ?<PokemonList />: <Navigate replace to="/login" />} />
          <Route path="/pokemon/:id" element={isLoggedIn ?<PokemonDetails />: <Navigate replace to="/login"/>} />
        </Routes>
      </div>
    // </Router>
  );
}

export default App;
