import Link from "next/link";
import {FlexibleDiv, FlexibleDiv1} from "../components/styledcomp";
import { useState, useEffect, Fragment } from 'react';
import Card from '../components/card';
import axios from "axios";

export default function index() {
  const [movies, setMovies] = useState([]);
  const staff = [
    {name: 'Billy', role: 'admin'},
    {name: 'Sally', role: 'contributor'}
];
  

useEffect(() => {
  const fetchMovies = async () => {
    try{ 
      const apiKey = "a267d09f4e9e419f565759a50273521f";
        const response = await axios.get(
            'https://api.themoviedb.org/3/movie/top_rated?api_key=a267d09f4e9e419f565759a50273521f&language=en-US'
        );
        console.log(response.data.results)
        setMovies([...response.data.results])
    } catch (e) {
        console.log(e);
    }
  }; 
  fetchMovies()        
}, [setMovies]);

    return (
      <>
        <FlexibleDiv $width="100%" $background="green" $padding="1rem">
          <FlexibleDiv1 $width="80%" $background="red">
            {movies.slice(0,10).map((movieSplit, index) => (              
              <Card dataTestId="movie-card" key={movieSplit.id} movieValues={movieSplit}></Card> 
            ))}
          </FlexibleDiv1>
        </FlexibleDiv>
      </>
    );
}