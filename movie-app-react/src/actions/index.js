export const addwish = (nr) =>{
    return{
        type: 'ADDWISH',
        payload: nr
    }
}

export const showall = () =>{
    return{
        type: 'SHOWALL'
    }
}

export const addtofav = (fav) =>{
    return{
        type: 'ADDTOFAV',
        payload: fav
    }
}