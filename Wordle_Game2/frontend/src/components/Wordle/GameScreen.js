// import React, { useState, useEffect } from 'react';
// // import Wordle from './Wordle/Wordle';  // Correct import path
// import { useNavigate } from 'react-router-dom';
// import Wordle from './Wordle';

// const GameScreen = () => {
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

//   const navigate = useNavigate();

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
//     <div className="game-screen">
//       <h1>Wordle Game</h1>
//       <Wordle 
//         solution={solution} 
//         currentGuess={currentGuess} 
//         attempts={attempts} 
//         usedKeys={usedKeys} 
//         onSubmit={handleSubmit} 
//         gameOver={gameOver} 
//       />
//       <button onClick={handleRestart}>Restart Game</button>
//     </div>
//   );
// };

// export default GameScreen;
//----------------------------------------------------------------------------
// working game----------------------------
// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Wordle from './Wordle';  // Assuming Wordle component is in this path

// const GameScreen = () => {
//   const [wordList, setWordList] = useState([]);
//   const [solution, setSolution] = useState("");
//   const [currentGuess, setCurrentGuess] = useState("");
//   const [attempts, setAttempts] = useState(0);
//   const [usedKeys, setUsedKeys] = useState({});
//   const [isCorrect, setIsCorrect] = useState(false);
//   const [gameOver, setGameOver] = useState(false);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [score, setScore] = useState(0); // To track the score of the current game
//   const [scores, setScores] = useState([]); // To store scores in an array
//   const navigate = useNavigate();

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
      
//       // Update score for each valid guess (5 points per guess)
//       setScore((prevScore) => prevScore + 5);
      
//       if (currentGuess === solution) {
//         setIsCorrect(true);
//         setGameOver(true);
//         setScores((prevScores) => [...prevScores, score]); // Add score to scoreboard when game ends
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
//     setSolution(wordList[Math.floor(Math.random() * wordList.length)]);
//     setCurrentGuess("");
//     setAttempts(0);
//     setUsedKeys({});
//     setIsCorrect(false);
//     setGameOver(false);
//     setScore(0); // Reset score
//   };

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error}</div>;

//   return (
//     <div className="game-screen">
//       <h1>Wordle Game</h1>
//       <Wordle
//         solution={solution}
//         currentGuess={currentGuess}
//         attempts={attempts}
//         usedKeys={usedKeys}
//         onSubmit={handleSubmit}
//         gameOver={gameOver}
//       />
//       <button onClick={handleRestart}>Restart Game</button>
//       <p>Score: {score}</p> {/* Display current score */}
//       <button onClick={() => navigate('/scoreboard')}>View Scoreboard</button> {/* Redirect to scoreboard */}
//     </div>
//   );
// };

// export default GameScreen;
//-----------------------------------------------
import React, { useState, useEffect } from 'react';
import Wordle from './Wordle'; // Assuming Wordle component exists
import { useNavigate } from 'react-router-dom';

const GameScreen = ({ setScores }) => {
  const [wordList, setWordList] = useState([]);
  const [solution, setSolution] = useState("");
  const [currentGuess, setCurrentGuess] = useState("");
  const [attempts, setAttempts] = useState(0);
  const [usedKeys, setUsedKeys] = useState({});
  const [gameOver, setGameOver] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Fetch word list from the backend
  useEffect(() => {
    const fetchWordList = async () => {
      try {
        setLoading(true);
        const response = await fetch("http://localhost:5000/api/wordlist");
        if (!response.ok) {
          throw new Error("Failed to fetch word list");
        }
        const data = await response.json();
        setWordList(data);
        setSolution(data[Math.floor(Math.random() * data.length)]);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchWordList();
  }, []);

  const handleKeyPress = (letter) => {
    if (currentGuess.length < 5 && !gameOver) {
      setCurrentGuess((prevGuess) => prevGuess + letter);
    }
  };

  const handleSubmit = () => {
    if (currentGuess.length === 5 && !gameOver) {
      setAttempts((prevAttempts) => prevAttempts + 1);
      if (currentGuess === solution) {
        setGameOver(true);
        // Update scores (add score based on attempts or guesses)
        setScores((prevScores) => {
          const newScore = 5 - attempts; // Example score logic
          return [...prevScores, newScore]; // Add score to array
        });
      }
      setCurrentGuess("");
    }
  };

  const handleRestart = () => {
    setSolution(wordList[Math.floor(Math.random() * wordList.length)]);
    setCurrentGuess("");
    setAttempts(0);
    setUsedKeys({});
    setGameOver(false);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="game-screen">
      <h1>Wordle Game</h1>
      <Wordle 
        solution={solution} 
        currentGuess={currentGuess} 
        usedKeys={usedKeys} 
        gameOver={gameOver}
        onSubmit={handleSubmit} 
      />
      <button onClick={handleRestart}>Restart Game</button>
    </div>
  );
};

export default GameScreen;
