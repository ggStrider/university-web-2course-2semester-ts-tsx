export interface PlanetCard {
  name: string;
  distanceToSunKm: number;
  hasLife: boolean;
  moons: PlanetCard[]
}
