// // src/AuthService.js
// import { Authgear, WebContainer } from "@authgear/web";

// const container = new WebContainer({
//     clientID: "9f161b82b8690f52",
//     endpoint: "https://pokedex.authgear.cloud",
// });

// export const initializeAuth = async () => {
//     try {
//         await container.start();
//     } catch (err) {
//         console.error("Failed to start Authgear", err);
//     }
// };

// export const login = async () => {
//     try {
//         await container.authorize({ redirectURI: "http://localhost/after-authentication" });
//     } catch (err) {
//         console.error("Login failed", err);
//     }
// };

// export const createAccount = async (email, password) => {
//   // Placeholder for account creation via Authgear (if applicable)
//   // Authgear might handle this through a different flow or setup
//   console.log("Creating account is not setup. Implement if Authgear provides a method for it.");
// };

// export const finishAuthentication = async () => {
//   try {
//       // This method would typically be called to finalize the login process,
//       // such as after a redirect with an authentication token in the URL.
//       await container.finishOAuthRedirectFlow();
//       console.log("Authentication finished");
//   } catch (err) {
//       console.error("Failed to complete authentication", err);
//   }
// };


// export const logout = async () => {
//     try {
//         await container.logout();
//     } catch (err) {
//         console.error("Logout failed", err);
//     }
// };

// export default container;


// src/AuthService.js
import { Authgear, WebContainer } from "@authgear/web";

const container = new WebContainer({
    clientID: "9f161b82b8690f52",
    endpoint: "https://pokedex.authgear.cloud",
});

export const initializeAuth = async () => {
    try {
        await container.start();
    } catch (err) {
        console.error("Failed to start Authgear", err);
    }
};

export const login = async () => {
    try {
        await container.authorize({ redirectURI: "http://localhost/after-authentication" });
    } catch (err) {
        console.error("Login failed", err);
    }
};

export const createAccount = async (email, password) => {
    // Placeholder for account creation via Authgear (if applicable)
    // Authgear might handle this through a different flow or setup
    console.log("Creating account is not setup. Implement if Authgear provides a method for it.");
};

export const finishAuthentication = async () => {
    try {
        // This method would typically be called to finalize the login process,
        // such as after a redirect with an authentication token in the URL.
        await container.finishOAuthRedirectFlow();
        console.log("Authentication finished");
    } catch (err) {
        console.error("Failed to complete authentication", err);
    }
};

export const logout = async () => {
    try {
        await container.logout();
    } catch (err) {
        console.error("Logout failed", err);
    }
};

// Note: Exporting the container can be useful if you need to access it directly from other parts of your application
export default container;
