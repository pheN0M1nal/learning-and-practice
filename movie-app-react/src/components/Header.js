import movielogo from './movie-logo.png';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import MobileMenu from './MobileMenu';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }
    

    let noOfFav = useSelector(state=>state.favroties[state.favroties.length - 1].id);

        let noOfWishes = useSelector(state=>state.wishes[state.wishes.length - 1].id);
    

    return (
        <nav className=" text-gray-200">
            <div className='px-5 pt-1 flex justify-between'>
                <div className='flex'>

                        <div>
                            <a href="#" className="flex items-center">
                                <div className="w-14 md:w-20">
                                    <img className='w-20' src="data:image/svg+xml;base64,PHN2ZyBpZD0iQ2FwYV8xIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA1MTIgNTEyIiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHdpZHRoPSI1MTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGc+PGc+PHBhdGggZD0ibTQ5NS42MzkgMzcyLjU5NmgtNDc5LjI3OGMtNC44ODcgMC04Ljg0OS0zLjk2Mi04Ljg0OS04Ljg0OXYtMzEwLjA2MmMwLTQuODg3IDMuOTYyLTguODQ5IDguODQ5LTguODQ5aDQ3OS4yNzljNC44ODcgMCA4Ljg0OSAzLjk2MiA4Ljg0OSA4Ljg0OXYzMTAuMDYyYy0uMDAxIDQuODg3LTMuOTYzIDguODQ5LTguODUgOC44NDl6IiBmaWxsPSIjZjhmNmY2Ii8+PC9nPjxnPjxwYXRoIGQ9Im01MDQuNDg5IDUzLjY5NXYzMTAuMDM4YzAgNC44OTgtMy45NjYgOC44NjQtOC44NjQgOC44NjRoLTIwLjAzMmM0Ljg5OCAwIDguODY0LTMuOTY2IDguODY0LTguODY0di0zMTAuMDM4YzAtNC44ODgtMy45NjYtOC44NTQtOC44NjQtOC44NTRoMjAuMDMyYzQuODk4IDAgOC44NjQgMy45NjYgOC44NjQgOC44NTR6IiBmaWxsPSIjZWJlYmViIi8+PC9nPjxnPjxwYXRoIGQ9Im01MDQuNDg4IDk3LjgxNWgtNDk2Ljk3NnYtNDQuMTNjMC00Ljg4NyAzLjk2Mi04Ljg0OSA4Ljg0OS04Ljg0OWg0NzkuMjc5YzQuODg3IDAgOC44NDkgMy45NjIgOC44NDkgOC44NDl2NDQuMTN6IiBmaWxsPSIjZmQ4MDg3Ii8+PC9nPjxnPjxwYXRoIGQ9Im01MDQuNDg5IDUzLjY5NXY0NC4xMjFoLTIwLjAzMnYtNDQuMTIxYzAtNC44ODgtMy45NjYtOC44NTQtOC44NjQtOC44NTRoMjAuMDMyYzQuODk4IDAgOC44NjQgMy45NjYgOC44NjQgOC44NTR6IiBmaWxsPSIjZmU2NDZmIi8+PC9nPjxnPjxwYXRoIGQ9Im00OTUuNjM5IDM3Mi41OTZoLTQ3OS4yNzhjLTQuODg3IDAtOC44NDktMy45NjItOC44NDktOC44NDl2LTQ2LjY5OGg0OTYuOTc2djQ2LjY5OGMwIDQuODg3LTMuOTYyIDguODQ5LTguODQ5IDguODQ5eiIgZmlsbD0iI2JmYmZiZiIvPjwvZz48Zz48cGF0aCBkPSJtNTA0LjQ4OSAzMTcuMDQ4djQ2LjY4NWMwIDQuODk4LTMuOTY2IDguODY0LTguODY0IDguODY0aC0yMC4wMzJjNC44OTggMCA4Ljg2NC0zLjk2NiA4Ljg2NC04Ljg2NHYtNDYuNjg1eiIgZmlsbD0iI2FjYWNhYyIvPjwvZz48Zz48cGF0aCBkPSJtMjA4LjcxNiAzNzIuNTk2aDk0LjU2OHY5NC41NjhoLTk0LjU2OHoiIGZpbGw9IiM5YzljOWMiLz48L2c+PGc+PHBhdGggZD0ibTI4Mi45MjggMzcyLjU5NmgyMC4zNTZ2OTQuNTY4aC0yMC4zNTZ6IiBmaWxsPSIjODM4MzgzIi8+PC9nPjxnPjxwYXRoIGQ9Im0yNzMuMjk5IDQ2Ny4xNjNoLTM0LjU5OHYtNDMuNjEyYzAtOS41MzkgNy43MzMtMTcuMjcxIDE3LjI3MS0xNy4yNzFoLjA1NmM5LjUzOSAwIDE3LjI3MSA3LjczMyAxNy4yNzEgMTcuMjcxeiIgZmlsbD0iI2Y4ZjZmNiIvPjwvZz48Zz48cGF0aCBkPSJtMzA4Ljc4OSAyNzYuMzY4aC0xMDUuNTc4Yy0xMy41MiAwLTI0LjQ3OS0xMC45Ni0yNC40NzktMjQuNDc5di04OC45MTJjMC0xMy41MiAxMC45Ni0yNC40NzkgMjQuNDc5LTI0LjQ3OWgxMDUuNTc4YzEzLjUyIDAgMjQuNDc5IDEwLjk2IDI0LjQ3OSAyNC40Nzl2ODguOTEyYy4wMDEgMTMuNTE5LTEwLjk1OSAyNC40NzktMjQuNDc5IDI0LjQ3OXoiIGZpbGw9IiNmZDgwODciLz48L2c+PGc+PHBhdGggZD0ibTMzMy4yNjQgMTYzLjAxMXY4OC44NDNjMCAxMy41NDItMTAuOTc4IDI0LjUwOS0yNC41MDkgMjQuNTA5aC0yMC4wMzJjMTMuNTMyIDAgMjQuNTA5LTEwLjk2OCAyNC41MDktMjQuNTA5di04OC44NDNjMC0xMy41MzItMTAuOTc4LTI0LjUwOS0yNC41MDktMjQuNTA5aDIwLjAzMmMxMy41MzEtLjAwMSAyNC41MDkgMTAuOTc3IDI0LjUwOSAyNC41MDl6IiBmaWxsPSIjZmU2NDZmIi8+PC9nPjxnPjxwYXRoIGQ9Im0yNzkuMjAxIDIwMC45NjEtMzguOTE4LTIyLjQ2OWMtNC45ODItMi44NzYtMTEuMjA4LjcxOS0xMS4yMDggNi40NzF2NDQuOTM5YzAgNS43NTIgNi4yMjcgOS4zNDcgMTEuMjA4IDYuNDcxbDM4LjkxOC0yMi40NjljNC45ODItMi44NzcgNC45ODItMTAuMDY3IDAtMTIuOTQzeiIgZmlsbD0iI2Y4ZjZmNiIvPjwvZz48Zz48cGF0aCBkPSJtMjc5LjE4NyAyMTMuOTEyLTM4Ljg4MiAyMi40NDZjLTQuODk4IDIuODM1LTEwLjk4OC0uNTkxLTExLjIxOC02LjE1IDEuMDkyLS4wOCAyLjIwNC0uMzkxIDMuMjQ1LTEuMDAybDI2LjQ5My0xNS4yOTVjNC45ODgtMi44NzUgNC45ODgtMTAuMDg2IDAtMTIuOTYxbC0yNi40OTMtMTUuMjk1Yy0xLjA0Mi0uNjExLTIuMTUzLS45MjItMy4yNDUtMS4wMDIuMjMtNS41NTkgNi4zMi04Ljk4NCAxMS4yMTgtNi4xNWwzOC44ODIgMjIuNDQ2YzQuOTg4IDIuODc3IDQuOTg4IDEwLjA4OSAwIDEyLjk2M3oiIGZpbGw9IiNlYmViZWIiLz48L2c+PGc+PHBhdGggZD0ibTI0Ni43NDYgMzUyLjMzNGgxOC41MDdjNC4xNDkgMCA3LjUxMi0zLjM2MyA3LjUxMi03LjUxMnMtMy4zNjMtNy41MTItNy41MTItNy41MTJoLTE4LjUwN2MtNC4xNDkgMC03LjUxMiAzLjM2My03LjUxMiA3LjUxMnMzLjM2NCA3LjUxMiA3LjUxMiA3LjUxMnoiLz48cGF0aCBkPSJtNDk1LjYyNSAzNy4zMjVoLTQ3OS4yNWMtOS4wMjkgMC0xNi4zNzUgNy4zNDUtMTYuMzc1IDE2LjM3NXYzMTAuMDM0YzAgOS4wMjkgNy4zNDYgMTYuMzc1IDE2LjM3NSAxNi4zNzVoMTg0LjgyOXY3OS41NDNoLTM4LjYxOGMtNC4xNDkgMC03LjUxMiAzLjM2My03LjUxMiA3LjUxMnMzLjM2MyA3LjUxMiA3LjUxMiA3LjUxMmgxODYuODI4YzQuMTQ5IDAgNy41MTItMy4zNjMgNy41MTItNy41MTJzLTMuMzYzLTcuNTEyLTcuNTEyLTcuNTEyaC0zOC42MTl2LTIyLjkzYzAtNC4xNDktMy4zNjMtNy41MTItNy41MTItNy41MTJzLTcuNTEyIDMuMzYzLTcuNTEyIDcuNTEydjIyLjkzaC0xNC45NjF2LTM2LjA3M2MwLTEzLjY4MS0xMS4xMy0yNC44MTEtMjQuODExLTI0LjgxMXMtMjQuODExIDExLjEzLTI0LjgxMSAyNC44MTF2MzYuMDczaC0xNC45NjF2LTc5LjU0M2g3OS41NDN2MjEuMDM4YzAgNC4xNDkgMy4zNjMgNy41MTIgNy41MTIgNy41MTJzNy41MTItMy4zNjMgNy41MTItNy41MTJ2LTIxLjAzOGgxODQuODNjOS4wMjkgMCAxNi4zNzUtNy4zNDYgMTYuMzc1LTE2LjM3NXYtMzEwLjAzNGMuMDAxLTkuMDMtNy4zNDUtMTYuMzc1LTE2LjM3NC0xNi4zNzV6bS0yNDkuNDEyIDM4Ni4yNTRjMC01LjM5NyA0LjM5LTkuNzg3IDkuNzg3LTkuNzg3czkuNzg3IDQuMzkgOS43ODcgOS43ODd2MzYuMDczaC0xOS41NzN2LTM2LjA3M3ptMjUwLjc2My01OS44NDZjMCAuNzQ1LS42MDYgMS4zNTEtMS4zNTEgMS4zNTFoLTQ3OS4yNWMtLjc0NSAwLTEuMzUxLS42MDYtMS4zNTEtMS4zNTF2LTM5LjE3Mmg0ODEuOTUyem0wLTU0LjE5NmgtNDgxLjk1MnYtMjA0LjIxaDQ4MS45NTJ6bTAtMjE5LjIzNGgtNDgxLjk1MnYtMzYuNjAzYzAtLjc0NS42MDYtMS4zNTEgMS4zNTEtMS4zNTFoNDc5LjI1Yy43NDUgMCAxLjM1MS42MDYgMS4zNTEgMS4zNTF6Ii8+PHBhdGggZD0ibTIwMy4yNSAyODMuODhoMTA1LjVjMTcuNjYyIDAgMzIuMDMxLTE0LjM2OSAzMi4wMzEtMzIuMDMxdi04OC44MzRjMC0xNy42NjItMTQuMzY5LTMyLjAzMS0zMi4wMzEtMzIuMDMxaC01NS44ODVjLTQuMTQ5IDAtNy41MTIgMy4zNjMtNy41MTIgNy41MTJzMy4zNjMgNy41MTIgNy41MTIgNy41MTJoNTUuODg1YzkuMzc3IDAgMTcuMDA3IDcuNjI5IDE3LjAwNyAxNy4wMDd2ODguODM0YzAgOS4zNzctNy42MjkgMTcuMDA3LTE3LjAwNyAxNy4wMDdoLTEwNS41Yy05LjM3NyAwLTE3LjAwNy03LjYyOS0xNy4wMDctMTcuMDA3di04OC44MzRjMC05LjM3NyA3LjYyOS0xNy4wMDcgMTcuMDA3LTE3LjAwN2gxNC4wMTJjNC4xNDkgMCA3LjUxMi0zLjM2MyA3LjUxMi03LjUxMnMtMy4zNjMtNy41MTItNy41MTItNy41MTJoLTE0LjAxMmMtMTcuNjYyIDAtMzIuMDMxIDE0LjM2OS0zMi4wMzEgMzIuMDMxdjg4LjgzNGMwIDE3LjY2MiAxNC4zNyAzMi4wMzEgMzIuMDMxIDMyLjAzMXoiLz48cGF0aCBkPSJtMjIxLjU2MiAyMjkuODhjMCA1LjQyMiAyLjgwMyAxMC4yNzcgNy40OTkgMTIuOTg4IDIuMzQ4IDEuMzU1IDQuOTIyIDIuMDMzIDcuNDk3IDIuMDMzczUuMTUxLS42NzggNy40OTgtMi4wMzRsMzguODgzLTIyLjQ0OGM0LjY5NS0yLjcxMSA3LjQ5OC03LjU2NiA3LjQ5OC0xMi45ODggMC01LjQyMS0yLjgwMy0xMC4yNzYtNy40OTgtMTIuOTg2bC0zOC44ODItMjIuNDQ5Yy00LjY5NS0yLjcxMS0xMC4zMDItMi43MS0xNC45OTcgMC00LjY5NSAyLjcxMS03LjQ5OCA3LjU2Ni03LjQ5OCAxMi45ODd6bTUzLjgyNC0yMi40NDgtMzguNzk5IDIyLjQ0OC0uMDQyLTQ0Ljg3M3oiLz48ZWxsaXBzZSBjeD0iNDUuNzQ4IiBjeT0iNzEuMzI2IiByeD0iNy41MTIiIHJ5PSI3LjUxMiIgdHJhbnNmb3JtPSJtYXRyaXgoLjk4NyAtLjE2IC4xNiAuOTg3IC0xMC44MzQgOC4yNDkpIi8+PGNpcmNsZSBjeD0iNzcuNDQ5IiBjeT0iNzEuMzI2IiByPSI3LjUxMiIvPjxjaXJjbGUgY3g9IjEwOS4xNTEiIGN5PSI3MS4zMjYiIHI9IjcuNTEyIi8+PC9nPjwvZz48L3N2Zz4=" />
                                </div>
                            
                                <span className="ml-5 font-extrabold text-2xl">WATCHIFY</span>
                            </a>
                        </div>


                                    
                    <div className="flex items-center space-x-10 px-20">
                        <Link to='./' className=' text-gray-300 font-bold px-10 text-grey-700'>
                           Home
                        </Link>
                        <div className='hidden md:flex md: space-x-12'>
                            <div className='flex'>
                                <Link to='./fav' className=' text-gray-300 font-bold text-grey-700'>
                                    Favroties
                                </Link>
                                <div className='rounded-full overflow-hidden'>
                                    <span className='bg-red-500 px-1 mx-2 rounded-full'>{noOfFav}</span>
                                    </div>
                                </div>
                            <div className='flex'>
                                <Link to='./wish' className=' text-gray-300 font-bold px-2 text-grey-700'>
                                    Wish List
                                </Link>
                                <div className='rounded-full overflow-hidden'>
                                    <span className='bg-red-500 rounded-full px-1'>{noOfWishes}</span>
                                </div>
                                
                            </div>
                        </div>
                        
                    </div>
                    <div className='flex items-center mr-5 md:hidden'>
                    <button onClick={toggle}>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
                        </svg>
                    </button>
                    </div>
                </div>

            </div>
            <MobileMenu isOpen={isOpen}/>
            <div className='border mt-3 border-gray-600'></div>
        </nav>
    )
}

//<img className="h-20" src={movielogo}></img>
//<h1 className="text-xl text-center pt-5 font-extrabold">Movies and seasons</h1>
export default Header
