import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

const user = {
  name: "Hedy Lamarr",
  imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
  imageSize: 90,
};

const products = [
  { title: "Cabbage", id: 1 },
  { title: "Garlic", id: 2 },
  { title: "Apple", id: 3 },
];

const listItems = products.map((product) => {
  return <li key={product.id}>{product.title}</li>;
});

function MyButton() {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
  }
  return (
    <button onClick={handleClick}>My Button clicked {count} times </button>
  );
}

function App() {
  return (
    <div className="App">
      <h1 className="title-app">
        Welcome to my new app <span className="user-app">{user.name}</span>
      </h1>
      <img
        className="img-app"
        src={user.imageUrl}
        alt={"Photo of " + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize,
        }}
      />
      <ul>{listItems}</ul>
      <MyButton />
      <MyButton />
      <MyButton />
    </div>
  );
}

export default App;
