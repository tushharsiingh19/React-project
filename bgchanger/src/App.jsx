import { useState } from 'react'

function App(){
  const [color,setColor]=useState("black")
  return ( 
   <div className=' w-full min-h-screen' 
   style={{backgroundColor:color}}>
    <div className="absolute bottom-0 left-0 flex gap-4 bg-blue-500 text-white justify-around p-4 w-full ">
      <button className='
       bg-red-600
      hover:bg-red-800
      text-white
      px-6
      py-3
      rounded-lg
      shadow-lg' onClick={()=>{setColor("red")}}>red</button>
     <button className='
       bg-yellow-600
      hover:bg-yellow-800
      text-white
      px-6
      py-3
      rounded-lg
      shadow-lg'  onClick={()=>{setColor("yellow")}}>yellow</button>
      <button className='
       bg-green-600
      hover:bg-green-800
      text-white
      px-6
      py-3
      rounded-lg
      shadow-lg'  onClick={()=>{setColor("green")}}>green</button>
       <button className='
       bg-blue-600
      hover:bg-blue-800
      text-white
      px-6
      py-3
      rounded-lg
      shadow-lg'  onClick={()=>{setColor("blue")}}>blue</button>
      </div>
    </div> 
    
    
  );
  
}
export default App
