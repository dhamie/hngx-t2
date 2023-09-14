import {FlexibleDiv, FlexibleDiv1, FlexibleDivContent, ImageWrap, Title, Para, Button, Anchor, Span, Input} from "../components/styledcomp";
import React, { useState, useEffect, Fragment } from 'react';
import Card from '../components/card';
import CardSmaller from '../components/cardsmall';
import axios from "axios";
import Image from "next/image";
import Logo from "../public/images/Logo.png"
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import {AiOutlineMenu} from "react-icons/ai"



export default function Index() {
  const [movies, setMovies] = useState([]);
  const [movieRand, setMovieRand] = useState(3);
  const [movieOne, setMovieOne] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, updateSearchTerm] = useState('');
  const [searchResults, updateSearchResults] = useState([]);

  const SearchResults = () => {
    if (!searchTerm.length) { 
      return (<div></div>)
    }
    return (
      <FlexibleDiv $width="100%" $background="" $flexdir="column" >
        {searchResults.slice(0,5).map((movieSplit, index) => (              
            <CardSmaller dataTestId="movie-card" key={movieSplit.id} movieValues={movieSplit}></CardSmaller> 
        ))}
      </FlexibleDiv>
  );
};


const updateSearch = (e) => {
  updateSearchTerm(e.target.value);
};


useEffect(() => {
  const fetchMovies = async () => {
    try{ 
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json'
        },
        cache: 'force-cache',
        next: { revalidate: 10 },
      };
      const apiKey = "a267d09f4e9e419f565759a50273521f";
        const response = await axios.get(
            'https://api.themoviedb.org/3/movie/top_rated?api_key=a267d09f4e9e419f565759a50273521f&language=en-US'
            , options);
        const response2 = await axios.get(
          'https://api.themoviedb.org/3/movie/' + movieRand + '?api_key=' + apiKey +'&language=en-US'
          , options);
        if(searchTerm.length){          
          const searchResultsResponse = await axios.get(
            'https://api.themoviedb.org/3/search/movie?query='+ searchTerm + '&api_key=' + apiKey +'&language=en-US&page=1'
            , options)            
          //console.log(searchResultsResponse.data.results)
          updateSearchResults([...searchResultsResponse.data.results]);
        }   
        
        //console.log(response.data.results),        
        setMovies([...response.data.results]) 
        setMovieOne(response2.data)        
        setLoading(false)
    } catch (e) {
        console.log(e);
    }
  }; 

  // let movieRandom = [movies[5]]
  // //setMovieRand(movieRandom[0])    
  // setTimeout(() => { setMovieRand(movieRandom[0]), console.log(movieRand);}, 1000)
  // console.log(movieRand)

  fetchMovies() 
  // const setInter = setInterval(() => {fetchMovies()}, 1000);
  // return () => clearInterval(setInter);  
  
}, [searchTerm]);

if (loading) { 
  return (<div><Skeleton count={2} height="50vh"/></div>)
}
    return (
      
        <FlexibleDiv $width="100%" $background="" >

          <FlexibleDivContent 
          $margin="0" 
          $maxwidth="100%" 
          $flex="100%" 
          $width="100%" 
          $position="absolute" 
          $top="0" $left="0" 
          $zindex="1" 
          $padding="1rem"
          $res9maxwidth="100%" 
          $res9flex="100%" >
            <FlexibleDiv1 $width="90%" $background="transparent" $alignitems="start">

              <FlexibleDivContent 
              $maxwidth="30%" 
              $flex="30%" 
              $margin="0" 
              $res9maxwidth="30%" 
              $res9flex="30%" 
              $res7maxwidth="30%" 
              $res7flex="30%">
                <FlexibleDiv1 $margin="0" $width="80%" $background="transparent">
                  <ImageWrap $width="100%" $height="auto">
                      <Image
                          src={Logo}
                          alt='alt' 
                          width={0}
                          height={0}
                          style={{ width: '20%', height: 'auto', margin:'auto', display: 'block', objectFit: "contain", objectPosition: "center"}}
                          priority
                          data-testid="movie-poster"
                      />
                  </ImageWrap>
                </FlexibleDiv1>
              </FlexibleDivContent>

              <FlexibleDivContent 
              $maxwidth="40%" 
              $flex="40%" 
              $res9maxwidth="40%" 
              $res9flex="40%" 
              $res7maxwidth="40%" 
              $res7flex="40%">
                <FlexibleDiv1 $margin="auto" $width="80%" $background="transparent" $flexdir="initial">
                  <Input type="text" placeholder="Search for tutorials..." onKeyUp={updateSearch} />
                  <SearchResults />
                </FlexibleDiv1>
              </FlexibleDivContent>

              <FlexibleDivContent 
              $maxwidth="30%" 
              $flex="30%" 
              $margin="0"
              $res9maxwidth="30%" 
              $res9flex="30%" 
              $res7maxwidth="30%" 
              $res7flex="30%">
                <FlexibleDiv1 $margin="0" $width="80%" $background="transparent">
                  <Para $fontsize="1rem" $color="#fff" $margin="0">Sign In</Para>
                  <AiOutlineMenu className="icon" style={{ fill: "#BE113C"}}/>                  
                </FlexibleDiv1>
              </FlexibleDivContent>

            </FlexibleDiv1> 
          </FlexibleDivContent>

          <FlexibleDiv1 $width="100%" $height="80vh" $background="">
            <ImageWrap $width="100%" $height="100%">              
                <Image
                    src={`https://image.tmdb.org/t/p/w500${movieOne.poster_path}`}
                    alt='alt' 
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '100%', height: '100%', objectFit: "cover", objectPosition: "top"}}
                    priority
                    data-testid="movie-poster"
                />
            </ImageWrap>

            <FlexibleDivContent 
              $position="absolute" 
              $width="100%" 
              $background="rgba(0,0,0,.5)" 
              $maxwidth="100%" 
              $flex="100%" 
              $height ="100%"
              $top="0"
              $left ="0"
              $res9maxwidth="100%" 
              $res9flex="100%"
              >
              <FlexibleDiv1 $width="80%" $height ="80%" $background="transparent" $justifycontent="start" >
                <FlexibleDivContent $margin=" 0 0 0 2rem" $maxwidth="40%" $flex="40%" >
                  <Title $fontsize="3vw" $color="white">{movieOne.title}</Title>
                  <Para $fontsize="16px" $color="white">{movieOne.overview}</Para>
                  <Button>Watch Trailer</Button>                 
                </FlexibleDivContent>
              </FlexibleDiv1>
            </FlexibleDivContent>
          </FlexibleDiv1>
          
          <FlexibleDiv1 $width="80%" $height ="80%" $background="transparent" $justifycontent="start" $margin="3rem auto 1rem auto" $padding="0 1rem">
            <FlexibleDivContent $margin="0" $maxwidth="90%" $flex="90%" $res9maxwidth="90%"  $res9flex="90%">
              <Title $fontsize="" $color="#333">Featured Movie</Title>
            </FlexibleDivContent>
            <FlexibleDivContent $margin="0" $maxwidth="10%" $flex="10%" $res9maxwidth="10%"  $res9flex="10%">
              <Anchor $fontsize="14px">See More </Anchor> 
            </FlexibleDivContent>
          </FlexibleDiv1>

          <FlexibleDiv1 $width="80%" $background="" $margin="0 auto 3rem auto">
            {movies.slice(0,10).map((movieSplit, index) => (              
              <Card dataTestId="movie-card" key={movieSplit.id} movieValues={movieSplit}></Card> 
            ))}
          </FlexibleDiv1>

        </FlexibleDiv>
      
    );
}