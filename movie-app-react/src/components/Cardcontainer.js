import Button from './Button'
import movieimg from './download.jfif'
import { Link } from 'react-router-dom'

const Cardcontainer = () => {
    const onClick = () => {

    }

    return (
        <div className="sm:px-10 md:px-20 pt-20 space-y-5 pb-10 flex flex-wrap justify-center h-4/6 ">
            <div className="border-2 border-gray-600 w-60 h-4/5 px-5 p-2 rounded-xl shadow-md bg- mr-20 ">
                <div className='p-2 bg-red w-max'>
                    <img className="rounded-xl" src={movieimg}></img>
                </div>

                <div className="pt-2 block mt-1 text-lg leading-tight px-16 font-medium text-gray-300">Movies</div>
                <div className='pt-3 mt-2 pb-2 px-9'>
                    <Link to='./movies' className="p-2 rounded bg-gray-600  text-gray-200">
                        Season Library
                    </Link>
                </div>
            </div>

            <div className="border-2  border-gray-600 w-60 h-4/5 px-2 p-2 rounded-xl shadow-md bg- mr-20 ">
                <div className='p-2 bg-red w-max '>
                    <img className="rounded-xl" src='data:image/jpeg;base64,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'></img>
                </div>

                <div className="pt-2 block mt-1 text-lg leading-tight px-16 font-medium text-gray-300">Seasons</div>
                <div className='pt-3 mt-2 pb-2 px-9'>
                    <Link to='./movies' className="ml-7 p-2 rounded bg-gray-600  text-gray-200">
                        Season
                    </Link>
                </div>
            </div>

            <div className="border-2 border-gray-600 w-60 h-4/5 px-5 p-2 rounded-xl shadow-md bg- mr-20 ">
                <div className='p-2 bg-red w-max'>
                    <img className="rounded-xl" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT77FrghgpLyJ6LBKFt6BgR8WnzxaYgdNKJyA&usqp=CAU'></img>
                </div>

                <div className="pt-2 block mt-1 text-lg leading-tight px-10 font-medium text-gray-300">Short Stoies</div>
                <div className='pt-3 mt-2 ml-6 pb-2 px-9'>
                    <Link to='./movies' className="p-2 rounded bg-gray-600  text-gray-200">
                        Stories
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default Cardcontainer