import { useDispatch, useSelector } from "react-redux"
import { toggleDarkMode } from "../redux/featurs/preferences/preferenceSlice"
import { useEffect } from "react"

function Peferences() {

const darkMode = useSelector((state)=>state.performances.darkMode)
const dispatch = useDispatch()

     useEffect(()=>{

      if(darkMode){
        document.documentElement.classList.add('dark');
      }else{
        document.documentElement.classList.remove('dark');
      }

     },[darkMode])
  return (
    <div className="flex flex-col mt-12 items-center space-y-4" >
        <h2 className="text-2xl fomt-bold" >Peferences</h2>
        <p>Dark Mode: { darkMode ? "Enabled" : "Disabled" }</p>
        <button onClick={()=>dispatch(toggleDarkMode())} className="px-4 py-2 bg-green-500 text-white hover:bg-green-800 rounded-md" >Toggle Dark Mode</button>
    </div>
  )
}

export default Peferences