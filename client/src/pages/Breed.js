import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import '../styles/Breed.css';

const Breed = () => {
    
    const {id} = useParams();

    const [breed, setBreed] = useState();

    
    useEffect(() => {
        const getBreedByName = async() => {
            const res = await fetch(`/api/breeds/${id}`);
            const breedObject = await res.json();
            setBreed(breedObject);
        }
        getBreedByName();
    }, [id])

    return (
        <div className = 'breed'>
            {breed && 
            <div>
                <div className = 'breedMainContainer'>
                    <img
                        className = 'breedImage'
                        src = {breed.image}
                        alt = {breed.name}
                    />
                    <div className = 'breedTextContainer'>
                        <div className = 'breedInfo'>
                            <div className = 'breedTitle'>{breed.name}</div>
                            <div className = 'breedDesc'>{breed.description}</div>
                        </div>
                        <div className = 'breedSpecsContainer'>
                            <div className = 'breedSpecsCol1'>
                                <div className = 'breedSpecsCol1Row'>Life Span</div>
                                <div className = 'breedSpecsCol1Row'>Temperament</div>
                                <div className = 'breedSpecsCol1Row'>Weight</div>
                                <div className = 'breedSpecsCol1Row'>Origin</div>
                                <div className = 'breedSpecsCol1Row'>Wikipedia URL</div>
                            </div>
                            <div className = 'breedSpecsCol2'>
                                <div className = 'breedSpecsCol2Row'>{breed.lifeSpan}</div>
                                <div className = 'breedSpecsCol2Row'>{breed.temperament}</div>
                                <div className = 'breedSpecsCol2Row'>{breed.weight + '  Kgs'}</div>
                                <div className = 'breedSpecsCol2Row'>{breed.origin}</div>
                                <div className = 'breedSpecsCol2Row'>{breed.wikipediaURL}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>}
        </div>
    )
}

export default Breed;
