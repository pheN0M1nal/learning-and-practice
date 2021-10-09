const wishesReducer = (state = [{
    id:1,
    title: 'John Wich',
    kind: 'Movie'
}], action) =>{
    switch (action.type){
        case 'ADDWISH':
            return [...state, action.payload]
        case 'SHOWALL' :
            return state;
        default:
            return state;    
    }
}

export default wishesReducer;