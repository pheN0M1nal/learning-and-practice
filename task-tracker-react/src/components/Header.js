import PropTypes from 'prop-types';
import Button from "./Button";


const Header = ({ title }) => {
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color='black' text='Add' onClick={onClick}/>
        </header>
    )
}

const onClick = () =>{
    
}

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.prototype = {
    title: PropTypes.string.isRequired,
}

export default Header
