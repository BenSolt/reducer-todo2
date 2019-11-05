//reducer
export const initialState = [
    
    {
        item: 'Learn about javaScript',
        completed: false,
        id: 1
      },

    {
        item: 'Learn about reducers',
        completed: false,
        id: 2
      },

]

export const todoReducer = (state, action) => {
    switch (action.type) {

// ADD TODO step 3
 case "ADD_TODO":
     return [...state,
    {
        item: action.payload,
        completed: false,
        id: Date.now()
    }];

// Toggle Todo step 4

case "TOGGLE":
    let Clicktoggle =
    state.map(item => {
        if(item.id === action.payload) {
     return {
        ...item,
        completed: !item.completed 
     }
     
    } else {
        return item;
        
    }
    });
    return Clicktoggle;

// Clear Todo step 5
case 'CLEAR_TODO':
    let Clear =
    state.filter(item => {
        if (item.completed === true){
            return !item.completed   
        }else{
            return item;
        }
    })
    return Clear;


default: 
return state;
 };
}
