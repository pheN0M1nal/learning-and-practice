import { useSelector } from 'react-redux';
import foodlogo from '../food-logo.jpg';
import checklist from '../checklist.png'
import { Link } from "react-router-dom";

const Header = ({ setListIsOpen }) => {
    const orders = useSelector(state=> state.orders);
    const noOfOrders     = orders[orders.length -1].id;
    const toggle = ()=>{
        setListIsOpen(true);
        
    }
    return (
        <nav className='headernav'>
            <div className='wrapper'>
                <div style={{display: 'flex'}}>
                    <div className='logo'>
                        <img src={foodlogo} className='logo'/>
                    </div>
                    <div style={{marginTop: '7px'}}>
                        <span className='name'>Eco Taste</span>
                    </div>
                </div>

                <div style={{display: 'flex'}}>
                    <div className='links'>
                        <Link to='./' className='link'>
                                <span style={{fontSize: '20px', fontWeight:'bolder'}}>Home</span>
                            </Link>
                        <Link to='./all-products' className='link'>
                            <span style={{fontSize: '20px', fontWeight:'bolder', marginLeft:'40px'}}>Products</span>
                        </Link>
                    </div>
                    <div className="wrapper2">
                            <span className='cart-badge' id="targetEl" value="0">{noOfOrders}</span>
                            <img src={checklist} className='checklist' onClick={toggle}/>
                    </div>
                </div>
            </div>       
        </nav>  
    )
}
export default Header
