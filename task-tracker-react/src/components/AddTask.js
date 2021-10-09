import { useState } from 'react';

const AddTask = ({ onAdd }) => {


    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)



    const onSubmit = (e) => {

        e.preventDefault();

        if(!text){
            alert('Please add a text');
            return;
        }
         
        onAdd({text, day, reminder})

        setReminder(false)
        setDay('')
        setText('')
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className="form-control">
                <label>Task</label>
                <input type='text' placeholder='Add Task' 
                 value ={text} onChange={(e) => setText(e.target.value)}/>
            </div>

            <div className="form-control">
                <label>Day & Time</label>
                <input type='text' placeholder='Add Day and Time'  
                value ={day} onChange={(e) => setDay(e.target.value)}/>
            </div>

            <div className="form-control form-control-check">
                <label>Set Reminder</label>
                <input checked={reminder} 
                type='checkbox'
                  value ={reminder} 
                  onChange={(e) => setReminder(e.currentTarget.checked)} />
            </div>

            
            <input type='submit' value='Save Task' 
            className='btn btn-block'/>
           
        </form>
    )
}

export default AddTask