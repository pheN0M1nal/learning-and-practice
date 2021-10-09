export const addtocart = (nr) =>{
    return{
        type: 'ADDTOCART',
        payload: nr
    }
}

export const showall = () =>{
    return{
        type: 'SHOWALL'
    }
}