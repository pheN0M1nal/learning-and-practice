import React,{useState} from 'react'
import MobileMenu from './MobileMenu';
const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () =>{
        setIsOpen(!isOpen)
    }

    return (
        <nav className='bg-gray-200'>
            <div className='max-w-6xl mx-auto border border-red-500'>
                <div className='px-2 py-2 flex justify-between'  >
                    <div>
                        logo and name
                    </div>
                    <div className='hidden md:block'>
                        <ul className='flex space-x-5'>
                            <li><a href='#'>Home</a></li>
                            <li><a href='#'>item1</a></li>
                            <li><a href='#'>item2</a></li>
                            <li><a href='#'>item3</a></li>
                        </ul>
                    </div>
                    <div className='md:hidden'>
                        <button className='' onClick={toggle} >
                            <svg className='w-6 h-6 ' xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                </div>
                </div>
            </div>
            <MobileMenu isOpen={isOpen} toggle={toggle}/>

        </nav>
    )
}
export default Header
