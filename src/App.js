import "./styles.css";
import NavBar from "./components/NavBar/NavBar";
import AvailableItems from "./components/Items/AvailableItems/AvailableItems";

export default function App() {
  return (
    <div className="App">
      <NavBar />
      <AvailableItems />
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
