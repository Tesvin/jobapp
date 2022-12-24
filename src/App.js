import { useEffect, useState } from 'react';
import './App.css';

//const url = 'https://course-api.com/react-tabs-project'

const App = () => {
  let [jobs, setJobs] = useState([])

 const API_URL = 'https://course-api.com/react-tabs-project'

 const fetchData = async () => {
  const response = await fetch(API_URL)
  const resData = await response.json()
  setJobs(resData)
  console.log(resData)
}

useEffect(() => {
    fetchData()
}, [])

  return (
    <div className="App">
     {jobs.map((job) => {
      const {id, title, dates, duties} = job;
      return (
        <li key={id}>
          <div className='jobs'>
            <h1>{title}</h1>
            <h2>{dates}</h2>
            <h3>{duties}</h3>
          </div>
        </li>
      )
     })}
    </div>
  ); 
}

export default App;
