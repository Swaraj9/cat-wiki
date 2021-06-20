import '../styles/SearchBar.css';
import SearchIcon from '@material-ui/icons/Search';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

const SearchBar = () => {

    let history = useHistory();

    const [breeds, setBreeds] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const getBreeds = async () => {
        const res = await fetch('/api/breeds');
        const breedObjects = await res.json();
        setBreeds(() => [...breedObjects]);
    }

    const openBreedPage = () => {
        if(breeds.map(breed => breed.name).includes(inputValue)){
            const breedId = breeds.filter(breed => breed.name === inputValue)[0].id;
            history.push(`/breeds/${breedId}`);
        }
    }

    useEffect(() => {
        getBreeds();
    }, [])

    return (
        <div className = 'inputContainer'>
            <input
                className = 'input'
                placeholder = 'Get to know more about your cat breed . . .'
                list = 'breeds'
                onChange = {(e) => setInputValue(e.target.value)}
                value = {inputValue}
            />
            <datalist id = 'breeds'>
                {breeds && breeds.map(breed => <option key = {breed.id} value = {breed.name}>{breed.origin}</option>)}
            </datalist>
            <button
                onClick = {openBreedPage}
            >
                <SearchIcon className = 'inputIcon'/>
            </button>
        </div>
    )
}

export default SearchBar
