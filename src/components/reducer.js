export const initialState = {
    newTask: [
            { title: "Wake Up", done: false },
            { title: "Drink Coffee", done: false },
            { title: "Leave House", done: false },
            ],
    }

export function reducer(state, action){
    const newState = {...state};

    switch(action.type){
        case 'add':
            newState.newTask.push({ title: action.payload, done: false })
            break;
        case 'check':
            newState.newTask[action.payload].done=!newState.newTask[action.payload].done;
            break;
        case 'del':
            newState.newTask.splice(action.payload,1);
            break;
        default:
    }
    return newState; 
}