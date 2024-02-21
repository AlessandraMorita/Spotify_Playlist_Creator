import './searchBar.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import arrowLeft from '../../../../assets/icons/small-left.png';
import arrowRigth from '../../../../assets/icons/small-right.png';
import searchIcon from '../../../../assets/icons/search.png';

export default function SearchBar({ handleLogin, search, searchInput }) {
    const navigate = useNavigate();

    function goBack() {
        navigate(-1);
    }

    function goForward() {
        navigate(1);
    }

    function handleSubmit(event) {
        event.preventDefault();
        search();
    }

    function handleKeyDown(event) {
        if(event.key === 'Enter') {
            handleSubmit(event);
        };
    }

    return (
        <div className='searchBar'>
            <div className='searchBar__navigation'>
                <button className='arrowLeft' onClick={ goBack } >
                    <img src={arrowLeft} alt='go back' />
                </button>
                <button className='arrowRigth'onClick={ goForward } >
                    <img src={arrowRigth} alt='go forward' />
                </button>                
            </div>

            <div className='searchBar__searchTerm'>
                <input type='text' placeholder='What do you want to listen to?' onChange={ (event) => { searchInput(event.target.value) } } onKeyDown={ handleKeyDown }/>
                <button type='submit' onClick={handleSubmit} >
                    <img src={searchIcon} alt='Search' />
                </button>
                
            </div>

            <div className='searchBar__login'>
                <button className='signUp'>Sign up</button>
                <button className='login' onClick={ handleLogin }>Log in</button>                
            </div>

        </div>
    )
}