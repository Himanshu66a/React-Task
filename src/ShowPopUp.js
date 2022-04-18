import React,{useState} from 'react'
import './showpopup.css'

function ShowPopUp({func,topic}) {
const [taskinfo, settaskinfo] = useState('');

  return (
    <>
    <div className='background'>
        <div className='popup'>
            <h1>{topic}</h1>
            <textarea cols="20" rows="7" 
            value={taskinfo}
            placeholder='Add details..'
            onChange={(e)=>settaskinfo(e.target.value)}
            />
            
            {/* <input type="text" /> */}
            <button onClick={()=>func(false)}>Close</button>
        </div>
    </div>
    </>
  )
}

export default ShowPopUp