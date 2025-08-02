import React, { useState } from 'react';

function CurrencyConvertor() {
  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (currency.toLowerCase() === 'euro') {
      const result = parseFloat(amount) * 80;
      alert(`Converting to Euro Amount is ${result}`);
    } else {
      alert('Currency not supported for conversion.');
    }
  };

  return (
    <div>
      <h2 style={{ color: 'green' }}>Currency Convertor!!!</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Amount:
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Currency:
          <input
            type="text"
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            required
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

function App() {
  const [count, setCount] = useState(5);

  const increment = () => {
    setCount(count + 1);
    sayHello();
  };

  const sayHello = () => {
    alert("Hello! Member1");
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const sayWelcome = (message) => {
    alert(message);
  };

  const handleClick = (e) => {
    alert("i was clicked");
  };

  return (
    <div style={{ margin: "20px" }}>
      <h1>Counter: {count}</h1>
      <button onClick={increment}>Increment</button> &nbsp;
      <button onClick={decrement}>Decrement</button> &nbsp;
      <button onClick={() => sayWelcome("welcome")}>Say Welcome</button> &nbsp;
      <button onClick={handleClick}>Click on me</button>

      <hr />
      <CurrencyConvertor />
    </div>
  );
}

export default App;
