import { PlanetCardView } from "./components/PlanetCardView";
import type { PlanetCard } from "./components/PlanetCard";

const moon: PlanetCard = {
  name: "Moon",
  distanceToSunKm: 146_692_378,
  hasLife: false,
  moons: []
}

const earth: PlanetCard = {
  name: "Earth",
  distanceToSunKm: 149_600_000,
  hasLife: true,
  moons: [moon]
};

function App() {
  return (
    <div className="App">
      <h1>Planets</h1>

      <PlanetCardView card={earth} />
      <PlanetCardView card={moon} />

    </div>
  );
}

export default App;