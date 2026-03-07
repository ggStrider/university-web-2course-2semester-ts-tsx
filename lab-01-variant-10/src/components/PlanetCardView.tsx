import React from "react";
import type { PlanetCard } from "./PlanetCard";
import "./PlanetCardView.css"

interface PlanetCardViewProps {
  card: PlanetCard;
}

export const PlanetCardView: React.FC<PlanetCardViewProps> = ({ card }) => {
  return (
    <div className="planet-card">
      <h2 className="planet-name">{card.name}</h2>
      <p>
        <strong>Distance to Sun:</strong> {card.distanceToSunKm} km
      </p>
      <p>
        <strong>Has life:</strong> {card.hasLife ? "Yes" : "No"}
      </p>
      <div>
        <strong>Moons:</strong>
        {card.moons && card.moons.length > 0 ? (
          <ul>
            {card.moons.map((moon, index) => (
              <li key={index}>{moon.name}</li>
            ))}
          </ul>
        ) : (
          <span> doesn't have any moon</span>
        )}
      </div>
    </div>
  );
};