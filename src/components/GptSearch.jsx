import React from 'react'
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestions from './GptMovieSuggestions';
import { head } from '../utils/constants';

const GptSearch = () => {
  return (
    <div>
        <div className='absolute -z-10 opacity-90'>
        <img
          src= {head}
          alt="logo"
        />
        </div>
        <GptSearchBar/>
        <GptMovieSuggestions/>
    </div>
  )
}

export default GptSearch;