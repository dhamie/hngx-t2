import {FlexibleDiv} from "../components/styledcomp"
import { useState, useEffect } from 'react';
import { useRouter } from "next/router";
import axios from "axios";

export default function Movie() {
  const [movieDetails, setMovieDetails] = useState([]);
  const [movieID, setMovieID] = useState()
  const router = useRouter();   
  
  const setMovieIDFn = () => {
    const moviePassed = parseInt(router.query["id"])    
    return setMovieID(moviePassed);    
}

useEffect(() => {
    if (router.isReady){
        setMovieIDFn()         
        const fetchMovies = async () => {                    
            try{                
                const apiKey = "a267d09f4e9e419f565759a50273521f";
                const response = await axios.get(
                    'https://api.themoviedb.org/3/movie/' + movieID + '?api_key=' + apiKey +'&language=en-US'
                );
                //console.log(response.data)
                setMovieDetails(response.data)
            } catch (e) {
                //console.log(e);
            }
            
        };
        
        // fetchMovies()
        const setInter = setInterval(() => {fetchMovies()}, 1000);
        return () => clearInterval(setInter);   
    }     
  }, [router.isReady, movieID, movieDetails]);

    return (
        <FlexibleDiv>
            {movieDetails.id}
        </FlexibleDiv>
        )
  }

