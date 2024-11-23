

// import { useState } from "react";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Wordle from "./components/Wordle/Wordle"; // Wordle component
// import Keypad from "./components/Keypad/Keypad"; // Keypad component
// import Scoreboard from "./components/Score/Score"; // Scoreboard component
// import Modal from "./components/Modal/Modal"; // Modal component
// // import Scoreboard from "./components/Scoreboard/Scoreboard";

// function App() {
//   const wordList = [
//     "ninja",
//     "spade",
//     "pools",
//     "drive",
//     "relax",
//     "times",
//     "train",
//     "cores",
//     "pours",
//     "blame",
//     "banks",
//     "phone",
//     "bling",
//     "coins",
//     "hello",
//   ];

//   const getRandomSolution = () =>
//     wordList[Math.floor(Math.random() * wordList.length)];

//   const [solution, setSolution] = useState(getRandomSolution());
//   const [currentGuess, setCurrentGuess] = useState("");
//   const [attempts, setAttempts] = useState(0);
//   const [usedKeys, setUsedKeys] = useState({});
//   const [isCorrect, setIsCorrect] = useState(false);
//   const [gameOver, setGameOver] = useState(false);
//   const [scores, setScores] = useState([]); // Store scores

//   const handleKeyPress = (letter) => {
//     if (currentGuess.length < 5 && !gameOver) {
//       setCurrentGuess((prevGuess) => prevGuess + letter);
//     }
//   };

//   const handleSubmit = () => {
//     if (currentGuess.length === 5 && !gameOver) {
//       setAttempts((prevAttempts) => prevAttempts + 1);
//       if (currentGuess === solution) {
//         setIsCorrect(true);
//         setGameOver(true);
//         setScores((prevScores) => [...prevScores, attempts + 1]); // Save score
//       } else {
//         setUsedKeys((prevKeys) => ({
//           ...prevKeys,
//           [currentGuess]: "wrong", // Update your key coloring logic
//         }));
//       }
//       setCurrentGuess(""); // Clear the input after submission
//     }
//   };

//   const handleRestart = () => {
//     console.log("Restarting game...");
//     setSolution(getRandomSolution());
//     setCurrentGuess("");
//     setAttempts(0);
//     setUsedKeys({});
//     setIsCorrect(false);
//     setGameOver(false);
//   };

  
// return (
//   <BrowserRouter>
//       <div className="App">
//         <h1>Wordle</h1>
//         <Routes>
//           <Route
//             path="/"
//             element={
//               <Wordle
//                 solution={solution}
//                 currentGuess={currentGuess}
//                 attempts={attempts}
//                 usedKeys={usedKeys}
//                 onSubmit={handleSubmit}
//                 gameOver={gameOver}
//               />
//             }
//           />
//           <Route
//             path="/scoreboard"
//             element={<Scoreboard scores={scores} />}
//           />
//         </Routes>
//       </div>
//     </BrowserRouter>
// );

// }

// export default App;
// import { useState, useEffect } from "react";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Wordle from "./components/Wordle/Wordle";
// import Scoreboard from "./components/Score/Score";
// import React from 'react';
// import { auth, GoogleAuthProvider, signInWithPopup } from './firebase';
// //import GoogleSignUp from './GoogleSignUp'; // Import the GoogleSignUp component


// function App() {
//   const [wordList, setWordList] = useState([]);
//   const [solution, setSolution] = useState("");
//   const [currentGuess, setCurrentGuess] = useState("");
//   const [attempts, setAttempts] = useState(0);
//   const [usedKeys, setUsedKeys] = useState({});
//   const [isCorrect, setIsCorrect] = useState(false);
//   const [gameOver, setGameOver] = useState(false);
//   const [scores, setScores] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   //const [user, setUser] = useState(null);

//   const handleGoogleSignUp = async () => {
//     try {
//       const provider = new GoogleAuthProvider();
//       const result = await signInWithPopup(auth, provider);
//       const user = result.user;
//       console.log("User Info:", user);
//       // You can save user details to your backend or handle them as needed
//     } catch (error) {
//       console.error("Error signing in with Google: ", error.message);
//     }
//   }

//   // useEffect(() => {
//   //   const unsubscribe = auth.onAuthStateChanged(setUser);
//   //   return () => unsubscribe();
//   // }, []);

//   // Fetch word list from the backend
//   useEffect(() => {
//     const fetchWordList = async () => {
//       try {
//         setLoading(true);
//         const response = await fetch("http://localhost:5000/api/wordlist");
//         if (!response.ok) {
//           throw new Error("Failed to fetch word list");
//         }
//         const data = await response.json();
//         setWordList(data);
//         setSolution(data[Math.floor(Math.random() * data.length)]);
//         setLoading(false);
//       } catch (err) {
//         setError(err.message);
//         setLoading(false);
//       }
//     };

//     fetchWordList();
//   }, []);

//   const handleKeyPress = (letter) => {
//     if (currentGuess.length < 5 && !gameOver) {
//       setCurrentGuess((prevGuess) => prevGuess + letter);
//     }
//   };

//   const handleSubmit = () => {
//     if (currentGuess.length === 5 && !gameOver) {
//       setAttempts((prevAttempts) => prevAttempts + 1);
//       if (currentGuess === solution) {
//         setIsCorrect(true);
//         setGameOver(true);
//         setScores((prevScores) => [...prevScores, attempts + 1]);
//       } else {
//         setUsedKeys((prevKeys) => ({
//           ...prevKeys,
//           [currentGuess]: "wrong",
//         }));
//       }
//       setCurrentGuess("");
//     }
//   };

//   const handleRestart = () => {
//     console.log("Restarting game...");
//     setSolution(wordList[Math.floor(Math.random() * wordList.length)]);
//     setCurrentGuess("");
//     setAttempts(0);
//     setUsedKeys({});
//     setIsCorrect(false);
//     setGameOver(false);
//   };

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error}</div>;

//   return (
//     <BrowserRouter>
//       <div className="App">
//         <h1>Wordle2</h1>
//         <Routes>
//           <Route path="/" element={<Wordle solution={solution} currentGuess={currentGuess} attempts={attempts} usedKeys={usedKeys} onSubmit={handleSubmit} gameOver={gameOver} />} />
//           <Route path="/scoreboard" element={<Scoreboard scores={scores} />} />
//           {/* <Route path="/" element={<GoogleSignUp />} /> Show Google sign-up here */}
//         </Routes>
//         <button onClick={handleRestart}>Restart Game</button>
//         <button onClick={handleGoogleSignUp}>Sign Up with Google</button>
//       </div>
//     </BrowserRouter>
//   );
// }

// export default App;
// import { useState, useEffect } from "react";
// import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
// import Wordle from "./components/Wordle/Wordle";
// import Scoreboard from "./components/Score/Score";
// import React from 'react';
// import { auth, GoogleAuthProvider, signInWithPopup } from './firebase';

// function App() {
//   const [wordList, setWordList] = useState([]);
//   const [solution, setSolution] = useState("");
//   const [currentGuess, setCurrentGuess] = useState("");
//   const [attempts, setAttempts] = useState(0);
//   const [usedKeys, setUsedKeys] = useState({});
//   const [isCorrect, setIsCorrect] = useState(false);
//   const [gameOver, setGameOver] = useState(false);
//   const [scores, setScores] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [user, setUser] = useState(null);

//   // useNavigate is now within the BrowserRouter context
//   const navigate = useNavigate(); // Initialize the navigate function

//   const handleGoogleSignUp = async () => {
//     try {
//       const provider = new GoogleAuthProvider();
//       const result = await signInWithPopup(auth, provider);
//       const user = result.user;
//       console.log("User Info:", user);
//       setUser(user); // Save the user data
//       // After successful sign-up, redirect to the Wordle game page
//       navigate('/'); // Redirect to the game screen
//     } catch (error) {
//       console.error("Error signing in with Google: ", error.message);
//     }
//   };

//   // Fetch word list from the backend
//   useEffect(() => {
//     const fetchWordList = async () => {
//       try {
//         setLoading(true);
//         const response = await fetch("http://localhost:5000/api/wordlist");
//         if (!response.ok) {
//           throw new Error("Failed to fetch word list");
//         }
//         const data = await response.json();
//         setWordList(data);
//         setSolution(data[Math.floor(Math.random() * data.length)]);
//         setLoading(false);
//       } catch (err) {
//         setError(err.message);
//         setLoading(false);
//       }
//     };

//     fetchWordList();
//   }, []);

//   const handleKeyPress = (letter) => {
//     if (currentGuess.length < 5 && !gameOver) {
//       setCurrentGuess((prevGuess) => prevGuess + letter);
//     }
//   };

//   const handleSubmit = () => {
//     if (currentGuess.length === 5 && !gameOver) {
//       setAttempts((prevAttempts) => prevAttempts + 1);
//       if (currentGuess === solution) {
//         setIsCorrect(true);
//         setGameOver(true);
//         setScores((prevScores) => [...prevScores, attempts + 1]);
//       } else {
//         setUsedKeys((prevKeys) => ({
//           ...prevKeys,
//           [currentGuess]: "wrong",
//         }));
//       }
//       setCurrentGuess("");
//     }
//   };

//   const handleRestart = () => {
//     console.log("Restarting game...");
//     setSolution(wordList[Math.floor(Math.random() * wordList.length)]);
//     setCurrentGuess("");
//     setAttempts(0);
//     setUsedKeys({});
//     setIsCorrect(false);
//     setGameOver(false);
//   };

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error}</div>;

//   return (
//     <div className="App">
//       <h1>Wordle2</h1>
//       <Routes>
//         <Route path="/" element={<Wordle solution={solution} currentGuess={currentGuess} attempts={attempts} usedKeys={usedKeys} onSubmit={handleSubmit} gameOver={gameOver} />} />
//         <Route path="/scoreboard" element={<Scoreboard scores={scores} />} />
//       </Routes>
//       {user ? (
//         <button onClick={handleRestart}>Restart Game</button>
//       ) : (
//         <button onClick={handleGoogleSignUp}>Sign Up with Google</button>
//       )}
//     </div>
//   );
// }

// export default function AppWrapper() {
//   return (
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   );
// }
//-------------------------------------------
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import GameScreen from './components/Wordle/GameScreen';
// import GoogleSignUp from './components/Wordle/GoogleSignUp';
// import { auth, GoogleAuthProvider, signInWithPopup } from './firebase/firebase';  // Correct path
// import Scoreboard from './components/Wordle/Scoreboard';

// const App = () => {
  
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<GoogleSignUp/>} /> {/* Google Sign-Up Screen */}
//         <Route path="/game" element={<GameScreen />} /> {/* Game Screen */}
//         <Route path="/scoreboard" element={<Scoreboard scores={[]} />} /> {/* Scoreboard Screen */}
//       </Routes>
//     </BrowserRouter>
//   );
// };

// export default App;


import React, { useState, useEffect } from 'react';  // Import useState and useEffect
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GameScreen from './components/Wordle/GameScreen';
import GoogleSignUp from './components/Wordle/GoogleSignUp';
import Scoreboard from './components/Wordle/Scoreboard'; // Import Scoreboard

const App = () => {
  // State for managing scores
  const [scores, setScores] = useState([]);

  // UseEffect to load scores from localStorage on app load
  useEffect(() => {
    const storedScores = JSON.parse(localStorage.getItem('scores')) || [];
    setScores(storedScores);
  }, []);
  useEffect(() => {
    if (scores.length > 0) {
      localStorage.setItem('scores', JSON.stringify(scores));
    }
  }, [scores]);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GoogleSignUp />} /> {/* Google Sign-Up Screen */}
        <Route path="/game" element={<GameScreen scores={scores} setScores={setScores} />} /> {/* Game Screen */}
        <Route path="/scoreboard" element={<Scoreboard scores={scores} />} /> {/* Scoreboard Screen */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
