import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom"
import { getSearchMoviesAPI } from "../services/fakeApi";
import { SearchBox } from '../components/SearchBox/SearchBox';
import { ContainerForm } from "components/Movies/MoviesDetails.styled";
import { Link } from "./Global.styled";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Movies = () => {
    const [searchMovie, setSearchMovie] = useState([]);
    const [inputText, setInputText] = useState('');
    const [searchParams, setSearchParams] = useSearchParams();
    const queryParams = searchParams.get('query');

    const handleInput = (e) => {
        setInputText(e.target.value.toLowerCase())
    }


    useEffect(() => {
        if (queryParams === null) {
            return;
        }
        getSearchMoviesAPI(queryParams)
            .then(date => {
                if (!date.length) {
                    toast.error('No found! Try again!');
                    setSearchParams({})
                    return;
                }
                setSearchMovie(date)
            })
            .catch(error => console.error(error));
    }, [queryParams, setSearchParams]);

    const onSubmitForm = (e) => {
        e.preventDefault();
        if (inputText.trim() === '') {
            toast.error('Please fill out something');
            return;
        }
        setSearchParams(inputText ? { query: inputText } : {});
        const visibleChange = searchMovie.filter((movie) => movie.title.includes(queryParams));
        if (visibleChange === []) {
            return;
        }
        setSearchMovie(visibleChange)
    };

    return (
        <ContainerForm>
            <SearchBox onSubmit={onSubmitForm} onChange={handleInput} name={inputText} />
            {searchMovie && (
                searchMovie.map(({ id, title }) => (
                    <Link to={`${id}`} key={id}>
                        <AiOutlineInfoCircle />
                        {title}
                    </Link>
                ))
            )}
            <ToastContainer autoClose={3000} />
        </ContainerForm>
    )
};

export default Movies;
