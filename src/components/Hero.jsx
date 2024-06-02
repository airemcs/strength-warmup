import { useState } from 'react'

export default function Hero() {

  const [unit, setUnit] = useState('kg');
  const [value, setValue] = useState(0);

  const [exercises, setExercises] = useState([
    { weight: 0, reps: 0 },
    { weight: 0, reps: 0 },
    { weight: 0, reps: 0 },
    { weight: 0, reps: 0 },
    { weight: 0, reps: 0 },
  ]);

  function handleInputChange(event) {

    const newValue = parseFloat(event.target.value);
    setValue(newValue);

    const updatedExercises = exercises.map((exercise, index) => {
      
      const updatedWeight = newValue * (index + 1);
      return { ...exercise, weight: updatedWeight };

    });

    setExercises(updatedExercises);
    
  }

  return (
  <>

  {/* primary, secondary, accent, neutral, base-100 */}
  {/* roboto, rubik, kanit, bebas, teko, cairo */}

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
        <select id="measurement" className="bg-base-100 text-white border border-neutral text-sm rounded-lg focus:border-gray w-full p-2.5 font-cairo">
          <option value="kg" defaultValue>KG</option>
          <option value="lbs">LBS</option>
        </select>
        </form>
      </div>

      <div className="">
      <form className="max-w-sm mx-auto">
        <p className="label-text text-lg pb-2 font-cairo">Warmup Method</p>
        <select id="method" className="bg-base-100 text-white border border-neutral text-sm rounded-lg focus:border-gray w-full p-2.5 font-cairo">
          <option value="pyramid" defaultValue>Pyramid</option>
          <option value="ramp">Ramp-Up</option>
          <option value="percentage">Percentage-Based</option>
          <option value="stepped">Stepped</option>
          <option value="volume">Volume</option>
        </select>
        </form>
      </div>

      <div className="grid content-end py-2 lg:py-0">
        <button className="btn btn-primary w-full font-cairo">Display Plates</button>
      </div>

    </div>

    <p className="text-xl lg:text-4xl my-8 text-center font-cairo">SETS</p>

    {exercises.map((exercise, index) => (
    <div key={index}>
      <p className="text-center text-xl font-cairo mb-6">Set {index + 1}: {exercise.weight} {unit} x {exercise.reps} reps</p>
      {/* <hr className="" /> */}
    </div>
    ))}

  </div>
  </div>
  
  </>
  );
}
