// // import React, { useState } from 'react';
// // import { createAccount, login } from './AuthService';  // Import your authentication services

// // const AuthForm = () => {
// //     const [email, setEmail] = useState('');
// //     const [password, setPassword] = useState('');
// //     const [isLoginMode, setIsLoginMode] = useState(true);  // Toggle between Login and Signup

// //     const handleSubmit = (event) => {
// //         event.preventDefault();
// //         if (isLoginMode) {
// //             login(email, password);
// //         } else {
// //             createAccount(email, password);
// //         }
// //     };

// // const AuthForm = ({ setIsLoggedIn }) => {
// //     const handleLogin = async () => {
// //         await login();
// //         setIsLoggedIn(true);
// //     };

// //     return (
// //         <div>
// //             <h2>{isLoginMode ? 'Login' : 'Create Account'}</h2>
// //             <form onSubmit={handleSubmit}>
// //                 <div>
// //                     <label>Email:</label>
// //                     <input
// //                         type="email"
// //                         value={email}
// //                         onChange={(e) => setEmail(e.target.value)}
// //                         required
// //                     />
// //                 </div>
// //                 <div>
// //                     <label>Password:</label>
// //                     <input
// //                         type="password"
// //                         value={password}
// //                         onChange={(e) => setPassword(e.target.value)}
// //                         required
// //                     />
// //                 </div>
// //                 <button type="submit">{isLoginMode ? 'Login' : 'Sign Up'}</button>
// //                 <button
// //                     type="button"
// //                     onClick={() => setIsLoginMode(!isLoginMode)}
// //                 >
// //                     Switch to {isLoginMode ? 'Sign Up' : 'Login'}
// //                 </button>
// //             </form>
// //         </div>
// //     );
// // };

// // export default AuthForm;


// //Version 2

// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { createAccount, login, finishAuthentication } from './AuthService';  // Import your authentication services

// const AuthForm = ({ setIsLoggedIn }) => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [isLoginMode, setIsLoginMode] = useState(true);  // Toggle between Login and Signup
//     const [error, setError] = useState('');
//     const navigate = useNavigate();

//     useEffect(() => {
//         // Attempt to finish authentication when the component mounts
//         const checkAuthentication = async () => {
//             const result = await finishAuthentication(); // Simulated function
//             if (result.isAuthenticated) {
//                 setIsLoggedIn(true);
//                 navigate('/after-authentication'); // Redirect after successful authentication
//             }
//         };

//         checkAuthentication();
//     }, [setIsLoggedIn, navigate]);

//     const handleSubmit = async (event) => {
//         event.preventDefault();
//         try {
//             if (isLoginMode) {
//                 await login(email, password);
//             } else {
//                 await createAccount(email, password);
//             }
//             setIsLoggedIn(true);
//             navigate('/after-authentication'); // Redirect after successful login/signup
//         } catch (err) {
//             setError('Authentication failed: ' + err.message);  // Display error message
//             console.error('Authentication error:', err);
//         }
//     };

//     return (
//         <div>
//             <h2>{isLoginMode ? 'Login' : 'Create Account'}</h2>
//             <form onSubmit={handleSubmit}>
//                 {error && <p className="error">{error}</p>}
//                 <div>
//                     <label>Email:</label>
//                     <input
//                         type="email"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                         required
//                     />
//                 </div>
//                 <div>
//                     <label>Password:</label>
//                     <input
//                         type="password"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                         required
//                     />
//                 </div>
//                 <button type="submit">{isLoginMode ? 'Login' : 'Sign Up'}</button>
//                 <button
//                     type="button"
//                     onClick={() => setIsLoginMode(!isLoginMode)}
//                 >
//                     Switch to {isLoginMode ? 'Sign Up' : 'Login'}
//                 </button>
//             </form>
//         </div>
//     );
// };

// export default AuthForm;


    // import React, { useState, useEffect } from 'react';
    // import { useNavigate } from 'react-router-dom';
    // import { createAccount, login, finishAuthentication } from './AuthService';  // Import your authentication services
    // import './AuthForm.css';

    // const AuthForm = ({ setIsLoggedIn }) => {
    //     const [email, setEmail] = useState('');
    //     const [password, setPassword] = useState('');
    //     const [isLoginMode, setIsLoginMode] = useState(true);  // Toggle between Login and Signup
    //     const [error, setError] = useState('');
    //     const navigate = useNavigate();

    //     useEffect(() => {
    //         // Attempt to finish authentication when the component mounts
            
    //     const finalizeLoginProcess = async () => {
    //         try {
    //             const isAuthenticated = await finishAuthentication(); // Ensure this returns a boolean
    //             console.log("Authentication check:", isAuthenticated);
    //             if (isAuthenticated) {
    //                 setIsLoggedIn(true);
    //                 navigate('/pokemonlist');
    //             } else {
    //                 console.log("Not authenticated on mount, showing login form.");
    //             }
    //         } catch (error) {
    //             console.error("Error finishing authentication:", error);
    //             setError("Authentication finishing error: " + error.message);
    //         }
    //     };

    //         finalizeLoginProcess();
    //     }, [setIsLoggedIn, navigate]);

    //     const handleSubmit = async (event) => {
    //         event.preventDefault();
    //         try {
    //             if (isLoginMode) {
    //                 await login(email, password);
    //             } else {
    //                 await createAccount(email, password);
    //             }
    //             // Assuming `login` and `createAccount` can directly set the logged in status
    //             setIsLoggedIn(true);
    //             navigate('/pokemonlist'); // Redirect after successful login/signup
    //         } catch (err) {
    //             setError('Authentication failed: ' + err.message);  // Display error message
    //             console.error('Authentication error:', err);
    //         }
    //     };

    //     return (
    //         <div className="auth-form">

    //             <h2>{isLoginMode ? 'Login' : 'Create Account'}</h2>
    //             <form onSubmit={handleSubmit}>
    //                 {error && <p className="error">{error}</p>}
    //                 <div>
                    
    //                 {/* <img src="https://wallpapers.com/ash-and-pikachu-hd" alt="Ash and Pikachu" className="login-image"/> */}

    //                     <label>Email:</label>
    //                     <input
    //                         type="email"
    //                         value={email}
    //                         onChange={(e) => setEmail(e.target.value)}
    //                         required
    //                     />
    //                 </div>
    //                 <div>
    //                     <label>Password:</label>
    //                     <input
    //                         type="password"
    //                         value={password}
    //                         onChange={(e) => setPassword(e.target.value)}
    //                         required
    //                     />
    //                 </div>
    //                 <button type="submit">{isLoginMode ? 'Login' : 'Sign Up'}</button>
    //                 <button
    //                     type="button"
    //                     onClick={() => setIsLoginMode(!isLoginMode)}
    //                 >
    //                     Switch to {isLoginMode ? 'Sign Up' : 'Login'}
    //                 </button>
    //             </form>
    //         </div>
    //     );
    // };

    // export default AuthForm;


    import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { createAccount, login, finishAuthentication } from './AuthService';
import { TextField, Button, Typography, Box, Container, Grid } from '@mui/material';
import { styled } from '@mui/system';

const StyledFormContainer = styled(Container)(({ theme }) => ({
  padding: theme.spacing(4),
  marginTop: theme.spacing(8),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  borderRadius: theme.shape.borderRadius,
}));

const AuthForm = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const finalizeLoginProcess = async () => {
      try {
        const isAuthenticated = await finishAuthentication();
        if (isAuthenticated) {
          setIsLoggedIn(true);
          navigate('/pokemonlist');
        }
      } catch (error) {
        console.error("Error finishing authentication:", error);
        setError("Authentication error: " + error.message);
      }
    };
    finalizeLoginProcess();
  }, [setIsLoggedIn, navigate]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (isLoginMode) {
        await login(email, password);
      } else {
        await createAccount(email, password);
      }
      setIsLoggedIn(true);
      navigate('/pokemonlist');
    } catch (err) {
      setError('Authentication failed: ' + err.message);
    }
  };

  return (
    <StyledFormContainer>
      
      <img src="https://cdn.vox-cdn.com/thumbor/Kae_wP8xpwG55A8vIJO-kw7K5Y4=/0x0:1366x768/920x518/filters:focal(525x192:743x410):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/71772445/ash-pikachu.0.0.jpg" alt="Ash and Pikachu" style={{ width: '100%', height: 'auto', marginBottom: 20 }}/>
      <Typography component="h1" variant="h5">{isLoginMode ? 'Login' : 'Create Account'}</Typography>
      {error && <Typography color="error">{error}</Typography>}
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
          {isLoginMode ? 'Login' : 'Sign Up'}
        </Button>
        <Grid container justifyContent="flex-end">
          <Grid item>
            <Button onClick={() => setIsLoginMode(!isLoginMode)} sx={{ textTransform: 'none' }}>
              {isLoginMode ? 'Need to create an account? Sign up' : 'Already have an account? Sign in'}
            </Button>
          </Grid>
        </Grid>
      </Box>
    </StyledFormContainer>
  );
};

export default AuthForm;
