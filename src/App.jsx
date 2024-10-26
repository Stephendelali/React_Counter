import { useState } from 'react'


function App() {
  const [counter,setCounter] = useState(0); 

  // const Increase = ()=>{
  //   if  (counter < 10 ) {
  //     setCounter(counter + 1)
  //   }
  //   else{
  //    alert("reduce number")
  //   }
  // }

  return (
    <>
    <div className="border flex space-x-4 p-4 rounded">    
    <div className="w-full bg-gray-200 rounded-full h-6 overflow-hidden">
        <div
          className="bg-green-500 h-full"
          style={{ width: `${(counter / 100) * 100}%` }}
        ></div>
        </div>
      <button onClick={()=> counter<100 ?setCounter(counter + 1): alert("This counter ranges from 0 to 100") } className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
      Increase
      </button>
      <button onClick={() => counter>0? setCounter(counter-1):alert("This counter ranges from 0 to 100")} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700">
      Decrease
      </button>
      <button onClick={Reset => setCounter(0) } className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-700">
      Reset
      </button>
      <p className="text-3xl font-bold text-blue-600">Counter: <span className="text-green-500">{counter}</span></p>
    </div>
    </>
  )
}

export default App
