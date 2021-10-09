import { useSelector } from 'react-redux';
const OrderListModal = ({ listIsOpen, setListIsOpen }) => {
    const orders = useSelector(state => state.orders)
    const onClick = () =>{
        setListIsOpen(false)
    }
    return (
        <div className={listIsOpen ? 'listOpen' : 'listClosed'}>
        <span className='orderlist'>Order List</span>
        <div className='x'>        
            <button onClick={onClick}>X</button>
        </div>
        {orders.map((order) =>(
            <div className='orderwrapper' key={order.id}>
                <span>{order.name}</span>
                <span>Price: <span style={{color: 'red'}}>{order.price} $</span></span>
            </div>
        ))}
            <div className='orderwrapper'>
                <span>Total Price : <span style={{color: 'red'}}>200 $</span></span>
            </div>     
        </div>
    )
}
export default OrderListModal

