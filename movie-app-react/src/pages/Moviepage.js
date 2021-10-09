import React from 'react'
import Card from '../components/Card'
const Moviepage = () => {

    const movies = [{
        id: 1,
        img: 'https://media.wired.com/photos/5932d503f682204f73697c96/master/pass/TDK_P3_1280.jpg',
        title: 'The Dark Knight Rises',
        description: "Bane, an imposing terrorist, attacks Gotham City and disrupts its eight-year-long period of peace.",
        link: 'https://www.imdb.com/title/tt1345836/'
    },
    {
        id: 2,
        img: 'https://i.gadgets360cdn.com/large/Edge-Of-Tomorrow_1494244371909.jpg',
        title: 'Edge of tomorrow',
        description: "A soldier fighting aliens gets to relive the same day over and over again, the day restarting every time he dies.",
        link: 'https://www.imdb.com/title/tt1631867/'
    },
    {
        id: 3,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh0Aw7dkeDigXrphgTv5CrwC0Hzv3F47BvfwjXTjRgDK7FAjPPBRojm8gzinhIRoO68mY&usqp=CAU',
        title: 'La La Land',
        description: "While navigating their careers in Los Angeles, a pianist and an actress fall in love while attempting to reconcile their aspirations for the future.",
        link:'https://www.imdb.com/title/tt3783958/'
    },
    {
        id: 4,
        img: 'https://www.cnet.com/a/img/XbbnFp4-jvUrYOohMXglPaQw-Nw=/1200x675/center/top/2016/10/28/3809e66e-d3fe-46bb-963a-705d88f5a902/doctor-strange6.jpg',
        title: 'Doctor Strange',
        description: "While on a journey of physical and spiritual healing, a brilliant neurosurgeon is drawn into the world of the mystic arts.",
        link: 'https://www.imdb.com/title/tt1211837'
        
    },
    {
        id: 5,
        img: 'https://www.cnet.com/a/img/XbbnFp4-jvUrYOohMXglPaQw-Nw=/1200x675/center/top/2016/10/28/3809e66e-d3fe-46bb-963a-705d88f5a902/doctor-strange6.jpg',
        title: 'Doctor Strange',
        description: "While on a journey of physical and spiritual healing, a brilliant neurosurgeon is drawn into the world of the mystic arts.",
        link: 'https://www.imdb.com/title/tt1211837'
        
    },
    {
        id: 6,
        img: 'https://www.cnet.com/a/img/XbbnFp4-jvUrYOohMXglPaQw-Nw=/1200x675/center/top/2016/10/28/3809e66e-d3fe-46bb-963a-705d88f5a902/doctor-strange6.jpg',
        title: 'Doctor Strange',
        description: "While on a journey of physical and spiritual healing, a brilliant neurosurgeon is drawn into the world of the mystic arts.",
        link: 'https://www.imdb.com/title/tt1211837'
        
    },
    {
        id: 7,
        img: 'https://www.cnet.com/a/img/XbbnFp4-jvUrYOohMXglPaQw-Nw=/1200x675/center/top/2016/10/28/3809e66e-d3fe-46bb-963a-705d88f5a902/doctor-strange6.jpg',
        title: 'Doctor Strange',
        description: "While on a journey of physical and spiritual healing, a brilliant neurosurgeon is drawn into the world of the mystic arts.",
        link: 'https://www.imdb.com/title/tt1211837'
        
    }
]

    return (
        <div>
            <div className=''>
            <div className='text-gray-300 font-bold text-2xl'>
                <h1 className='text-center pt-5 mb-5'>Best Movies Collection!</h1>
                <div className='flex flex-col items-center md:grid grid-cols-3'>
                    
                {
                    movies.map((movie) => (
                        <Card img={movie.img} title={movie.title} description={movie.description} link={movie.link}/>
                    ))
                }
                </div>

            </div>
        </div>
        </div>
        
        
    )
}

export default Moviepage

// {tasks.map((task) => (
//     <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle}/>
// ))}