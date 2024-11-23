// import React from "react";

// export default function Scoreboard({ attempts, score, results }) {
//   return (
//     <div className="scoreboard">
//       <h2>Scoreboard</h2>
//       <p>Attempts: {attempts}</p>
//       <p>Score: {score}</p>

//       <h3>Results:</h3>
//       <ul>
//         {results.map((result, index) => (
//           <li key={index} style={{ color: result.won ? "green" : "red" }}>
//             {result.guess} - {result.won ? "Correct!" : "Incorrect!"}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// import React from 'react';
// import './Scoreboard.scss'; // Import styles


// const Scoreboard = ({ scores }) => {
//   return (
//     <div className="scoreboard">
//       <h1>Scoreboard</h1>
//       <ul>
//         {scores.length === 0 ? (
//           <li>No scores available</li>
//         ) : (
//           scores.map((score, index) => (
//             <li key={index}>Game {index + 1}: {score} attempts</li>
//           ))
//         )}
//       </ul>
//     </div>
//   );
// };

// export default Scoreboard;

// import React from 'react';

// const Scoreboard = ({ scores }) => {
//   return (
//     <div className="scoreboard">
//       <h1>Scoreboard</h1>
//       <ul>
//         {scores.length === 0 ? (
//           <li>No scores available</li>
//         ) : (
//           scores.map((score, index) => (
//             <li key={index}>Game {index + 1}: {score} points</li>
//           ))
//         )}
//       </ul>
//     </div>
//   );
// };

// export default Scoreboard;



import React from 'react';

const Scoreboard = ({ scores }) => {
  return (
    <div>
      <h1>Scoreboard</h1>
      {scores.length === 0 ? (
        <p>No scores yet</p>
      ) : (
        <ul>
          {scores.map((score, index) => (
            <li key={index}>Score {index + 1}: {score}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Scoreboard;

