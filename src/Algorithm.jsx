import React from 'react';

const plateWeights = [20, 15, 10, 5, 2.5, 1.25];

const calculatePlates = (weight) => {

  let remainingWeight = weight;
  const plates = {};

  for (let plate of plateWeights) {
    const count = Math.floor(remainingWeight / plate);
    if (count > 0) {
      plates[plate] = count;
      remainingWeight -= plate * count;
    }
  }

  if (remainingWeight > 0) {
    return null;
  }

  return plates;
  
};

const PlateCalculator = ({ weight }) => {
  const plates = calculatePlates(weight);

  if (!plates) {
    return <p>Cannot achieve the desired weight with the given plates.</p>;
  }

  return (
    <div>
      <p>Plate distribution for {weight} kg:</p>
      <ul>
        {Object.keys(plates).map((plate, index) => (
          <li key={index}>{plate} kg: {plates[plate]} plate(s)</li>
        ))}
      </ul>
    </div>
  );
};

export default PlateCalculator;
