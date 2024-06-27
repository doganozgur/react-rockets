import "./App.css";
import RocketList from "./components/RocketList";

const filterParams = {
  year: 2018,
  customerName: "NASA",
};

function App() {
  return <RocketList filterParams={filterParams} />;
}

export default App;
