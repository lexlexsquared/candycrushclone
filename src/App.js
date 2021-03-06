import { useState, useEffect } from 'react';

const width = 8;
const candyColors = [
  'blue',
  'green',
  'orange',
  'purple',
  'red',
  'yellow'
];

const App = () => {
  const [currentColorArrange, setCurrentColorArrange] = useState([]);
  
  const createBoard = () => {
    const randColorArrange = [];
    for (let i =0; i < (width * width); i++) {
      const randomColor = candyColors[Math.floor(Math.random() *candyColors.length)];
      randColorArrange.push(randomColor);
    };
    setCurrentColorArrange(randColorArrange);
  };

  useEffect(() => {
    createBoard()
  }, []);
  
  console.log(currentColorArrange);

  return (
    <div className="app">
      <div className="game">
        {currentColorArrange.map((candyColor, index) => (
          <img
            key={index}
            style={{backgroundColor: candyColor}}
            alt={candyColor}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
