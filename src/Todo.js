import React, { useState, useEffect } from 'react'
import './todo.css'
import ShowPopUp from './ShowPopUp';
import { AiTwotoneDelete } from 'react-icons/ai';
import { AiFillInfoCircle } from 'react-icons/ai';


const getLocalItmes = () => {
    let list = localStorage.getItem('lists');
    if (list) {
        return JSON.parse(localStorage.getItem('lists'));
    }
    else return []
}



    function Todo() {
    
        const [item, setitem] = useState('');
        const [list, setlist] = useState(getLocalItmes());
        const [pop, setpop] = useState(false);
        const [edit, setedit] = useState('');
    
        useEffect(() => {
            localStorage.setItem('lists', JSON.stringify(list))
        }, [list]);
    


        const deleteitem = (ind)=>{
            const result = list.filter((element, index) => { 
              return  index!==ind;
            } )
            setlist(result)
        }



    const handleclick = () => {
        if (item === '')
            return;
        else {
            setlist([...list, item]);
            setitem('')
        }

    }
    const popup = (ele) => {
        setpop(true);
        setedit(ele);
    }
    
    return (
        <>
            <div className='todo' >
                <h1>Task List</h1>
                <input type="text" value={item}
                 onChange={(e) => { setitem(e.target.value) }} 
                 placeholder='Enter task..' />
                
                <button onClick={handleclick} className='add'>Add item</button>
                <div className='items' >
                    {
                        list.map((ele,ind) => {
                            return <div className='task'  key={ind}  >
                                {ele} 
                                <AiTwotoneDelete
                                 onClick={()=>deleteitem(ind)}
                                  className='icon' 
                                  title='delete' />
                            {/* <button onClick={()=>deleteitem(ind)} >Delete</button>  */}
                            {/* <button onClick={() => popup(ele)}>view</button>  */}
                            <AiFillInfoCircle onClick={() => popup(ele)} className='info-icon'
                             title='info' />
                            </div>

                            
                        })
                    }
                </div>
                {/* <button onClick={popup}>zz</button> */}
            </div>
            <div>
                {
                    pop && <ShowPopUp func={setpop} topic={edit} />
                }
            </div>
        </>
    )
}

export default Todo