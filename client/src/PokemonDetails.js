// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';

// import './PokemonDetails.css'; // Make sure to include the CSS file

// function PokemonDetails() {
//   const [details, setDetails] = useState(null);
//   const { id } = useParams();

//   useEffect(() => {
//     const fetchDetails = async () => {
//       const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
//       const response = await axios.get(url);
//       setDetails(response.data);
//     };

//     fetchDetails();
//   }, [id]);

//   if (!details) return <p>Loading...</p>;
//   const stats = {
//     hp: details.stats.find(stat => stat.stat.name === 'hp').base_stat,
//     attack: details.stats.find(stat => stat.stat.name === 'attack').base_stat,
//     defense: details.stats.find(stat => stat.stat.name === 'defense').base_stat,
//     specialAttack: details.stats.find(stat => stat.stat.name === 'special-attack').base_stat,
//     specialDefense: details.stats.find(stat => stat.stat.name === 'special-defense').base_stat,
//     speed: details.stats.find(stat => stat.stat.name === 'speed').base_stat,
//   };

//   return (
//     <div className="pokemon-details-container">
//       <div className="pokemon-details-card">
//         <h2 className="pokemon-name">{details.name}</h2>
//         <img src={details.sprites.front_default} alt={details.name} className="pokemon-image" />
//         <p className="pokemon-description">{details.flavor_text}</p> {/* Replace this with your actual description data */}
//         <div className="pokemon-attributes">
//           <span className="pokemon-height">Height: {details.height}m</span>
//           <span className="pokemon-weight">Weight: {details.weight}kg</span>
//         </div>
//         <div className="pokemon-types">
//           <h3>Types</h3>
//           {details.types.map((type, index) => (
//             <span key={index} className={`pokemon-type ${type.type.name}`}>{type.type.name}</span>
//           ))}
//         </div>
//         <div className="pokemon-abilities">
//           <h3>Abilities</h3>
//           {details.abilities.map((ability, index) => (
//             <span key={index}>{ability.ability.name}</span>
//           ))}
//         </div>
//         <div className="stats-container">
//   <h3>Stats</h3>
//   {Object.entries(stats).map(([key, value]) => (
//     <div key={key} className="stat">
//       <span className="stat-name">{key.replace(/-/g, ' ')}</span>
//       <div className="stat-bar">
//         <div className="stat-fill" style={{ width: `${value}%` }}></div>
//       </div>
//     </div>
//   ))}
// </div>
        
//         <div className="pokemon-moves">
//           <h3>Top 5 Moves</h3>
//           {details.moves.slice(0, 5).map((move, index) => (
//             <span key={index} className="pokemon-move">{move.move.name}</span>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default PokemonDetails;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';
// import { Box, Typography, LinearProgress, Chip } from '@mui/material';
// import HeightIcon from '@mui/icons-material/Height';
// import ScaleIcon from '@mui/icons-material/Scale';

// function getTypeColor(type) {
//   // Placeholder function - map types to specific colors
//   const typeColors = {
//     grass: "#78C850",
//     poison: "#aa5599",
//     ice: "#66ccff",
//     fire: "#ff4422",
//     electric: "#ffcc33",
//     water: "#3399ff",
//     fighting: "#bb5544",
//     ground: "#ddbb55",
//     flying: "#8899ff",
//     psychic: "#ff5599",
//     bug: "#aabb22",
//     rock: "#bbaa66",
//     ghost: "#6666bb",
//     dragon: "#7766ee",
//     dark: "#775544",
//     steel: "#aaaabb",
//     fairy: "#ee99ee",
//     normal: "cyan"
//   };
//   return typeColors[type] || '#777'; // Default color if type not found
// }

// function PokemonDetails() {
//   const [details, setDetails] = useState(null);
//   const [extraDetails, setExtraDetails] = useState(null);
//   const { id } = useParams();

//   useEffect(() => {
//     const fetchDetails = async () => {
//       const pokeAPIUrl = `https://pokeapi.co/api/v2/pokemon/${id}`;
//       const pokeResponse = await axios.get(pokeAPIUrl);
//       setDetails(pokeResponse.data);

//       const additionalDetailsUrl = `https://courses.cs.washington.edu/courses/cse154/webservices/pokedex/pokedex.php?pokemon=${pokeResponse.data.name.toLowerCase()}`;
//       const additionalResponse = await axios.get(additionalDetailsUrl);
//       setExtraDetails(additionalResponse.data);
    

//     // Fetch evolution data
//     try {
//       const evolutionData = await axios.get(`/api/evolution?name=${pokeResponse.data.name}`);
//       setEvolutions(evolutionData.data);
//     } catch (error) {
//       console.error("Error fetching evolution data:", error);
//     }
//   };


//     fetchDetails();
//   }, [id]);

//   if (!details || !extraDetails) return <p>Loading...</p>;

//   return (
//     <Box sx={{ maxWidth: 400, m: 'auto', p: 3, boxShadow: 3, borderRadius: 2 }}>
//       <Typography variant="h4" component="h2" gutterBottom>
//         {details.name}
//       </Typography>
//       <Box sx={{ my: 2 }}>
//         <img 
//           src={details.sprites.other.dream_world.front_default || details.sprites.front_default}
//           alt={details.name} 
//           style={{ width: '100%' }}
//         />
//       </Box>
      
//       <Typography variant="h6" component="h3" gutterBottom>Description</Typography>
//       <Typography variant="body1" paragraph>{extraDetails.info.description}</Typography>

//       <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
//         <HeightIcon color="action" />
//         <Typography variant="body1" marginLeft={1}>
//           Height: {details.height}
//         </Typography>
//       </Box>

//       <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
//         <ScaleIcon color="action" />
//         <Typography variant="body1" marginLeft={1}>
//           Weight: {details.weight}
//         </Typography>
//       </Box>

//       <Typography variant="h6" component="h3" gutterBottom>Types</Typography>
//       <Box sx={{ mb: 2 }}>
//         {details.types.map((typeInfo, index) => (
//           <Chip 
//             key={index} 
//             label={typeInfo.type.name} 
//             sx={{ backgroundColor: getTypeColor(typeInfo.type.name), color: '#fff', mr: 0.5 }} 
//           />
//         ))}
//       </Box>

//       <Typography variant="h6" component="h3" gutterBottom>Abilities</Typography>
//       <Box sx={{ mb: 2 }}>
//         {details.abilities.map((ability, index) => (
//           <Chip key={index} label={ability.ability.name} variant="outlined" sx={{ mr: 0.5 }} />
//         ))}
//       </Box>

//       <Typography variant="h6" component="h3" gutterBottom>Stats</Typography>
//       {details.stats.map((statInfo, index) => (
//         <Box key={index} sx={{ mb: 1 }}>
//           <Typography variant="body2" component="span">{statInfo.stat.name.replace(/-/g, ' ')}:</Typography>
//           <LinearProgress 
//             variant="determinate" 
//             value={statInfo.base_stat} 
//             sx={{ height: 8, borderRadius: 5, mt: 0.5 }} 
//           />
//         </Box>
//       ))}

//       <Typography variant="h6" component="h3" gutterBottom>Top 5 Moves</Typography>
//       <Box sx={{ mb: 2 }}>
//         {details.moves.slice(0, 5).map((move, index) => (
//           <Chip key={index} label={move.move.name} variant="outlined" sx={{ mr: 0.5 }} />
//         ))}

//          {/* Evolution Data Display */}
//       <Typography variant="h6" component="h3" gutterBottom>Evolution</Typography>
//       {evolutions.map((evolution, index) => (
//         <Typography key={index}>
//           {evolution.name} (Stage {index + 1})
//         </Typography>
//       ))}

//       </Box>
      
//     </Box>
//   );
// }

// export default PokemonDetails;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Box, Typography, LinearProgress, Chip } from '@mui/material';
import HeightIcon from '@mui/icons-material/Height';
import ScaleIcon from '@mui/icons-material/Scale';

function getTypeColor(type) {
  const typeColors = {
    grass: "#78C850",
    poison: "#aa5599",
    ice: "#66ccff",
    fire: "#ff4422",
    electric: "#ffcc33",
    water: "#3399ff",
    fighting: "#bb5544",
    ground: "#ddbb55",
    flying: "#8899ff",
    psychic: "#ff5599",
    bug: "#aabb22",
    rock: "#bbaa66",
    ghost: "#6666bb",
    dragon: "#7766ee",
    dark: "#775544",
    steel: "#aaaabb",
    fairy: "#ee99ee",
    normal: "cyan"  // Default for types not specifically listed
  };
  return typeColors[type.toLowerCase()] || '#777'; // Default color if type not found
}

function PokemonDetails() {
  const [details, setDetails] = useState(null);
  // const [extraDetails, setExtraDetails] = useState(null);
  const [evolutions, setEvolutions] = useState([]); // Store evolution data
  const { id } = useParams();
  const [description, setdescription] = useState(null);
  useEffect(() => {
    const fetchDetails = async () => {
      const pokeAPIUrl = `https://pokeapi.co/api/v2/pokemon/${id}`;
      const pokeResponse = await axios.get(pokeAPIUrl);
      setDetails(pokeResponse.data);

      // const additionalDetailsUrl = `https://courses.cs.washington.edu/courses/cse154/webservices/pokedex/pokedex.php?pokemon=${pokeResponse.data.name.toLowerCase()}`;
      // const additionalResponse = await axios.get(additionalDetailsUrl);
      // setExtraDetails(additionalResponse.data);

      const descUrl = `https://pokeapi.co/api/v2/pokemon-species/${id}/`;
      const descResponse = await axios.get(descUrl);
      setdescription(descResponse?.data?.flavor_text_entries.filter((entry) => entry.language.name === "en"));

      // try {
      //   const evolutionData = await axios.get(`https://yourserver.com/api/evolution?name=${pokeResponse.data.name}`);
      //   setEvolutions(evolutionData.data);
      // } catch (error) {
      //   console.error("Error fetching evolution data:", error);
      // }
    };

    fetchDetails();
  }, [id]);

  if (!details) return <p>Loading...</p>;

  return (
    <Box sx={{ maxWidth: 400, m: 'auto', p: 3, boxShadow: 3, borderRadius: 2 }}>
      <Typography variant="h4" component="h2" gutterBottom>
        {details.name}
      </Typography>
      <Box sx={{ my: 2 }}>
        
        <img 
          src={details.sprites.other.dream_world.front_default || details.sprites.front_default}
          alt={details.name} 
          style={{ width: '100%' }}
        />
      </Box>
      
      <Typography variant="h6" component="h3" gutterBottom>Description</Typography>
      {console.log("description:", description)}
      <Typography variant="body1" paragraph>
        {description?.[0]?.flavor_text ?? ""}
    </Typography>
       
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        <HeightIcon color="action" />
        <Typography variant="body1" marginLeft={1}>
          Height: {details.height}
        </Typography>
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        <ScaleIcon color="action" />
        <Typography variant="body1" marginLeft={1}>
          Weight: {details.weight}
        </Typography>
      </Box>

      <Typography variant="h6" component="h3" gutterBottom>Types</Typography>
      <Box sx={{ mb: 2 }}>
        {details.types.map((typeInfo, index) => (
          <Chip 
            key={index} 
            label={typeInfo.type.name} 
            sx={{ backgroundColor: getTypeColor(typeInfo.type.name), color: '#fff', mr: 0.5 }} 
          />
        ))}
      </Box>

      <Typography variant="h6" component="h3" gutterBottom>Abilities</Typography>
      <Box sx={{ mb: 2 }}>
        {details.abilities.map((ability, index) => (
          <Chip key={index} label={ability.ability.name} variant="outlined" sx={{ mr: 0.5 }} />
        ))}
      </Box>

      <Typography variant="h6" component="h3" gutterBottom>Stats</Typography>
      {details.stats.map((statInfo, index) => (
        <Box key={index} sx={{ mb: 1 }}>
          <Typography variant="body2" component="span">{statInfo.stat.name.replace(/-/g, ' ')}:</Typography>
          <LinearProgress 
            variant="determinate" 
            value={statInfo.base_stat} 
            sx={{ height: 8, borderRadius: 5, mt: 0.5 }} 
          />
        </Box>
      ))}

      <Typography variant="h6" component="h3" gutterBottom>Top 5 Moves</Typography>
      <Box sx={{ mb: 2 }}>
        {details.moves.slice(0, 5).map((move, index) => (
          <Chip key={index} label={move.move.name} variant="outlined" sx={{ mr: 0.5 }} />
        ))}
      </Box>

      
    </Box>
  );
}

export default PokemonDetails;

