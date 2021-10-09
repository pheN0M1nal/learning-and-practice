const orderReducer = (state = [
{
  id:1,
  name:'Item Name 1',
  price: 57,quantity:0
},
{
  id:2,
  name:'Item Name 1', 
  price: 57,quantity:0
}
  ], action) =>{
    switch (action.type){
        case 'ADDTOCART' :
            return [...state, action.payload];
        case 'SHOWALL' :
            return state;
        default:
            return state;    
    }
}

export default orderReducer;