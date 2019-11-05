//reducer
export const initialState = [

{
    item: 'Learn about reducers',
    completed: false,
    id: 1
  },

]

export const todoReducer = (state, action) => {
    switch (action.type) {

// ADD TODO
 case "ADDTODO":
     return [...state,
    {
        item: action.payload,
        completed: false,
        id: Date.now()
    }];

// Toggle Todo

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

// Clear Todo
case 'CLEARTODO':
    let Clear =
    state.filter(item => {
        if (item.complteed === true){
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
