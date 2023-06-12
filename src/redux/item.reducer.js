export const itemReducer=(state=[],action)=>{
    switch (action.type) {
        case "ADD_ALL_ITEM":
            return action.payload;
        case "GET_ALL_ITEM":
            return action.payload;
        default:
           return state;
    }
}