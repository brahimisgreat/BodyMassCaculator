import "./App.css";
import BodyMass from "./componets/BodyMass";
import Navbar from "./componets/navbar";

function App() {
  return (
    <>
      <div className="hero">
        <div className="rectangle">
          <Navbar />
          <BodyMass />
        </div>
      </div>
    </>
  );
}

export default App;
