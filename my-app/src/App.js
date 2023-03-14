import logo from "./logo.svg";
import "./App.css";

const user = {
  name: "Hedy Lamarr",
  imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
  imageSize: 90,
};

function MyButton() {
  return <button>My Button </button>;
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
      <MyButton />
    </div>
  );
}

export default App;
