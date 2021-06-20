import { useEffect, useState } from 'react';
import '../styles/Home.css'
import {Link} from 'react-router-dom';

const Home = () => {

    const [breeds, setBreeds] = useState([]);

    const getBreeds = async () => {
        const res = await fetch('/api/breeds');
        const breedObjects = await res.json();
        setBreeds(() => [...breedObjects]);
    }

    useEffect(() => {
        getBreeds();
    }, [])

    return (
        <div className = 'home'>
            <div className = 'homeHero'>
                <div className = 'homeHeroImgContainer'>
                    {breeds.map(breed => 
                        breed.image && 
                        <Link 
                            key = {breeds.indexOf(breed)}
                            className = 'homeHeroImgPanel'
                            to = {`/breeds/${breed.id}`}
                        >
                            <img  
                                src = {breed.image.url} 
                                alt = {breed.name}
                                className = 'homeHeroImg'
                            />
                            <div className = 'homeHeroImgCaption'>{breed.name}</div>
                        </Link>)}
                </div>
            </div>
        </div>
    )
}

export default Home
