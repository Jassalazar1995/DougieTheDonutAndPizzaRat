import { useEffect, useReducer, useState } from 'react'
import './App.css'

function App() {
  let [input, setInput] = useState(100)
  let [ reports, setReports] =useState([])
  let [ borough, dispatch] =useReducer(handleClick, 'QUEENS')
  let url = `https://data.cityofnewyork.us/resource/erm2-nwe9.json?borough=${borough}&agency=NYPD&$limit=${input}&$select=agency,descriptor,resolution_description,borough`

  
  useEffect(()=>   async function policeData(){
    try{
    let response = await fetch(url)
    let data = await response.json()
    console.log(data)
    setReports(data)
    } catch(error){
      console.log(error)
    }
  },[])
  
  function handleChange(){
    
  }

  function handleClick(){
    dispatch()
  }
  
  return (
    <>
    <input type='number' onChange={handleChange} value = {input}></input>
    <button onClick={handleClick}>Manhattan</button>
    <button onClick={handleClick}>Brooklyn</button>
    <button>Queens</button>
    <button>Bronx</button>
    <button>Staten Island</button>
    
    <div>{reports.map((item)=>{
      return(
        <div>
        <p>Descritpor: {item.descriptor}</p>
        <p>Resolution :{item.resolution_description}</p>
        </div>
      )
    })}</div>
    </>
  )
}

export default App
