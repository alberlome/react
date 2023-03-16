import "./App.css";

function CardList() {
  const cardList: Array<any> = [
    {
      id: 1,
      name: "Formula One",
      description: "This is the description for F1",
      stars: 4,
    },
    {
      id: 2,
      name: "MotoGP",
      description: "This is the description for MotoGP",
      stars: 4,
    },
    {
      id: 3,
      name: "WRC",
      description: "This is the description for Worl Rally Championship",
      stars: 3,
    },
  ];

  return (
    <div>
      {cardList.map((card) => (
        <div key={card.id}> {card.name} </div>
      ))}
    </div>
  );
}

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>Sports Stream Watch</h1>
      <p>
        The resume of sports are in streaming now most important in the world.
      </p>
      <CardList />
    </div>
  );
}

export default App;
