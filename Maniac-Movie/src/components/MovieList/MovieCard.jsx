import React from 'react'
import './MovieCard.css'
import Star from '../../assets/2234894a5947b15d53493d82ca9236fd.png'

const MovieCard = () => {
  return (
    <a href = "" className='movie_card'>
        <img src = "https://images.squarespace-cdn.com/content/v1/5a7f41ad8fd4d236a4ad76d0/1669842753281-3T90U1EY5HUNCG43XERJ/A2_Poster_DC_v80_PAYOFF_221029_12trimHD.jpg" 
        alt = "movie poster" 
        className='movie_poster'/>

        <div className='movie_details'>
            <h3 className='movie_details_heading'>Avatar</h3>
            <div className='align_center movie_date_rate'>
                <p>10-20-2020</p>
                <p>8.0 {''} 
                    <img src = {Star} alt = "rating icon" className='card_emoji' /></p>
            </div>
            <p className='movie_description'>Avatar: The Way of Water follows Jake 
                Sully and Neytiri as they protect their family and flee to Pandora’s ocean‑dwelling 
                Metkayina clan when a familiar threat returns. The film explores new underwater ecosystems,
                 highlights themes of family and belonging, and expands the world of Pandora with stunning 
                 visual effects and deep emotional stakes.
            </p>
        </div>
    </a>
  );
};

export default MovieCard