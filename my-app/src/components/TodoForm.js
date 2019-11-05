import React, { useState, useReducer } from 'react'
import { initialState, todoReducer } from "../reducers/Reducer";

// import Todo from './Todo';

const TodoList = props => {
     const [state1, dispatch] = useReducer(todoReducer, initialState);
    const [newTitleText, setNewTitleText] = useState("");

    const handleChanges = e => {
        setNewTitleText(e.target.value);
        };
    console.log('reducerstate',state1)

  
    return (
        <div className="Container">
  
            <div>
          
                <h1>REDUCER TODO</h1>

        {/* Input field */}
    
        <input
            className="Input"
            type="text"
            name="newTitle"
            value={newTitleText}
            onChange={handleChanges}
          />


        {/* ADD TO DO */}
        <button
        className="Btn"
          onClick={() => {
            dispatch({ type: "ADD_TODO", payload: newTitleText });
            
          }}
        >
          Add Item
        </button>

        {/* Clear TO DO */}
        <button
        className="Btn"
          onClick={() => {
            dispatch({ type: "CLEAR_TODO", payload: newTitleText });
            
          }}
        >
          Subtract Item
        </button>

            </div>

{/* MAP OVER TO DO LIST */}

    {state1.map(state => {
        return(
            
            <div 
            className={`item ${state.completed ? 'purchased' :''}`}
            onClick={() => {
                dispatch({ type: "TOGGLE", payload: state.id });
                console.log('click toggle')
            }}>
           
            {state.item}

        </div>
    )
})}

    

        </div>
    )

}

export default TodoList;