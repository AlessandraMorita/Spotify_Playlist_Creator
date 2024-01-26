import './searchBar.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import arrowLeft from '../../../../assets/icons/small-left.png';
import arrowRigth from '../../../../assets/icons/small-right.png';
import searchIcon from '../../../../assets/icons/search.png';

export default function SearchBar() {
    const navigate = useNavigate();

    function goBack() {
        navigate(-1);
    }

    function goForward() {
        navigate(1);
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
                <input type='text' placeholder='What do you want to listen to?'/>
                <button type='submit'>
                    <img src={searchIcon} alt='Search' />
                </button>
                
            </div>

            <div className='searchBar__login'>
                <button className='signUp'>Sign up</button>
                <button className='login'>Log in</button>                
            </div>

        </div>
    )
}