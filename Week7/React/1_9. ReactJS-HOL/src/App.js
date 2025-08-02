import React from 'react';

// Component: List of all Players
function ListofPlayers({ players }) {
  return (
    <ul>
      {players.map((item, index) => (
        <li key={index}>Mr. {item.name} <span>{item.score}</span></li>
      ))}
    </ul>
  );
}

// Component: Players with Score Below 70
function Scorebelow70({ players }) {
  const players70 = players.filter((item) => item.score <= 70);
  return (
    <ul>
      {players70.map((item, index) => (
        <li key={index}>Mr. {item.name} <span>{item.score}</span></li>
      ))}
    </ul>
  );
}

// Component: Odd Players using Destructuring
export function OddPlayers([first, , third, , fifth]) {
  return (
    <ul>
      <li>First : {first}</li>
      <li>Third : {third}</li>
      <li>Fifth : {fifth}</li>
    </ul>
  );
}

// Component: Even Players using Destructuring
export function EvenPlayers([, second, , fourth, , sixth]) {
  return (
    <ul>
      <li>Second : {second}</li>
      <li>Fourth : {fourth}</li>
      <li>Sixth : {sixth}</li>
    </ul>
  );
}

// Component: Merged Indian Players List
export function ListofIndianPlayers({ IndianPlayers }) {
  return (
    <ul>
      {IndianPlayers.map((player, index) => (
        <li key={index}>Mr. {player}</li>
      ))}
    </ul>
  );
}

function App() {
  // Flag for conditional rendering
  const flag = true;

  // List of 11 players with name and score
  const players = [
    { name: 'Jack', score: 50 },
    { name: 'Michael', score: 70 },
    { name: 'John', score: 40 },
    { name: 'Ann', score: 61 },
    { name: 'Elisabeth', score: 61 },
    { name: 'Sachin', score: 95 },
    { name: 'Dhoni', score: 100 },
    { name: 'Virat', score: 84 },
    { name: 'Jadeja', score: 64 },
    { name: 'Raina', score: 75 },
    { name: 'Rohit', score: 80 }
  ];

  // Indian Team for Odd/Even
  const IndianTeam = ['Sachin1', 'Dhoni2', 'Virat3', 'Rohit4', 'Yuvaraj5', 'Raina6'];

  // Merge T20 and Ranji Trophy Players
  const T20Players = ['First Player', 'Second Player', 'Third Player'];
  const RanjiTrophyPlayers = ['Fourth Player', 'Fifth Player', 'Sixth Player'];
  const IndianPlayers = [...T20Players, ...RanjiTrophyPlayers];

  // Conditional Rendering based on flag
  if (flag === true) {
    return (
      <div>
        <h1>List of Players</h1>
        <ListofPlayers players={players} />
        <hr />
        <h1>List of Players having Scores Less than 70</h1>
        <Scorebelow70 players={players} />
      </div>
    );
  } else {
    return (
      <div>
        <div>
          <h1>Indian Team</h1>
          <h1>Odd Players</h1>
          {OddPlayers(IndianTeam)}
          <hr />
          <h1>Even Players</h1>
          {EvenPlayers(IndianTeam)}
        </div>
        <hr />
        <div>
          <h1>List of Indian Players Merged:</h1>
          <ListofIndianPlayers IndianPlayers={IndianPlayers} />
        </div>
      </div>
    );
  }
}

export default App;
