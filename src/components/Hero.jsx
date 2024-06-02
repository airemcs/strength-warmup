import React, { useState, useEffect } from 'react';

export default function Hero() {

  const [unit, setUnit] = useState('kg');
  const [value, setValue] = useState('');
  const [method, setMethod] = useState('pyramid');
  const [exercises, setExercises] = useState([]);

  const handleMethodChange = (e) => {
    setMethod(e.target.value);
  };

  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  const handleUnitChange = (e) => {
    setUnit(e.target.value);
  };

  useEffect(() => {

    if (!value) {
      setExercises([]);
      return;
    }

    const projectedWeight = parseFloat(value);
    if (isNaN(projectedWeight)) {
      setExercises([]);
      return;
    }

    let updatedExercises = [];
    switch (method) {
      case 'pyramid':
        updatedExercises = [
          { weight: projectedWeight * 0.4, reps: 10 },
          { weight: projectedWeight * 0.5, reps: 8 },
          { weight: projectedWeight * 0.6, reps: 6 },
          { weight: projectedWeight * 0.7, reps: 4 },
          { weight: projectedWeight * 0.8, reps: 2 },
          { weight: projectedWeight * 0.9, reps: 1 },
          { weight: projectedWeight * 1.0, reps: 1 },
        ];
        break;
      case 'ramp':
        updatedExercises = [
          { weight: projectedWeight * 0.3, reps: 10 },
          { weight: projectedWeight * 0.4, reps: 8 },
          { weight: projectedWeight * 0.5, reps: 6 },
          { weight: projectedWeight * 0.6, reps: 4 },
          { weight: projectedWeight * 0.7, reps: 2 },
          { weight: projectedWeight * 0.8, reps: 1 },
          { weight: projectedWeight * 0.9, reps: 1 },
        ];
        break;
      case 'percentage':
        updatedExercises = [
          { weight: projectedWeight * 0.4, reps: 8 },
          { weight: projectedWeight * 0.5, reps: 6 },
          { weight: projectedWeight * 0.6, reps: 5 },
          { weight: projectedWeight * 0.7, reps: 4 },
          { weight: projectedWeight * 0.8, reps: 3 },
          { weight: projectedWeight * 0.9, reps: 2 },
          { weight: projectedWeight * 0.95, reps: 1 },
        ];
        break;
      case 'volume':
        updatedExercises = [
          { weight: projectedWeight * 0.3, reps: 12 },
          { weight: projectedWeight * 0.4, reps: 10 },
          { weight: projectedWeight * 0.5, reps: 8 },
          { weight: projectedWeight * 0.6, reps: 6 },
          { weight: projectedWeight * 0.7, reps: 4 },
          { weight: projectedWeight * 0.8, reps: 2 },
        ];
        break;
      default:
        break;
    }
    setExercises(updatedExercises);
  }, [value, method]);

  return (
  <>

  <div className="flex flex-col justify-center items-center h-screen my-12">
  <div className="w-3/4 lg:w-1/2 block p-4 bg-neutral border border-gray-300 rounded-lg">

    <p className="text-2xl lg:text-6xl text-center font-cairo">STRENGTH WARMUP CALCULATOR</p>
    <hr className="my-4" />

    <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">

      <div className="">
        <p className="label-text text-lg pb-2 font-cairo">Projected Weight</p>
        <input type="text" className="input input-bordered w-full max-w-xs font-cairo" value={value} onChange={handleInputChange} />
      </div>

      <div className="">
      <form className="max-w-sm mx-auto">
        <p className="label-text text-lg pb-2 font-cairo">Measurement Unit</p>
        <select disabled id="measurement" className="bg-base-100 text-white border border-neutral text-sm rounded-lg focus:border-gray w-full p-2.5 font-cairo" value={unit} onChange={handleUnitChange}>
          <option value="kg">KG</option>
          <option value="lbs">LBS</option>
        </select>
      </form>
      </div>

      <div className="">
      <form className="max-w-sm mx-auto">
        <p className="label-text text-lg pb-2 font-cairo">Warmup Method</p>
        <select id="method" className="bg-base-100 text-white border border-neutral text-sm rounded-lg focus:border-gray w-full p-2.5 font-cairo" value={method} onChange={handleMethodChange}>
          <option value="pyramid">Pyramid</option>
          <option value="ramp">Ramp-Up</option>
          <option value="percentage">Percentage-Based</option>
          <option value="volume">Volume</option>
        </select>
      </form>
      </div>

      <div className="grid content-end py-2 lg:py-0">
        <button className="btn btn-primary w-full font-cairo">Display Plates</button>
      </div>

    </div>

    <p className="text-xl lg:text-4xl my-2 lg:my-4 text-center font-cairo">SETS</p>

    <div className="overflow-x-auto">
    <table className="table-auto w-full text-center">

      <thead>
        <tr>
          <th className="px-4 py-2 font-cairo">Set</th>
          <th className="px-4 py-2 font-cairo">Weight</th>
          <th className="px-4 py-2 font-cairo">Reps</th>
        </tr>
      </thead>

      <tbody>
      {exercises.map((exercise, index) => (
      <tr key={index}>
        <td className="border px-4 py-2 font-cairo">{index + 1}</td>
        <td className="border px-4 py-2 font-cairo">{exercise.weight.toFixed(2)} {unit}</td>
        <td className="border px-4 py-2 font-cairo">{exercise.reps}</td>
      </tr>
      ))}
      </tbody>
      
    </table>
    </div>

  </div>
  </div>

  </>
  );
}
