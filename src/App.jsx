import Background from "./components/Background";
import Cards from "./components/Cards";
import CardInfoContext from "./context/CardDetailsContext";

function App() {
  return (
    <main>
      <CardInfoContext>
        <Cards />
        <Background />
      </CardInfoContext>
    </main>
  );
}

export default App;
