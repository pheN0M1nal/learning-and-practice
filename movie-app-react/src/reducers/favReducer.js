const favReducer = (state = [{id: 1,
    img: 'https://i.gadgets360cdn.com/large/Edge-Of-Tomorrow_1494244371909.jpg',
    title: 'Edge of tomorrow',
    description: "A soldier fighting aliens gets to relive the same day over and over again, the day restarting every time he dies.",
    link: 'https://www.imdb.com/title/tt1631867/'}], action)=>{
    switch(action.type){
        case 'ADDTOFAV':
            return [...state, action.payload];    
        default:
            return state;
    }
}

export default favReducer;