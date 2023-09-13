import {FlexibleDiv, FlexibleDiv1, FlexibleDivContent, ImageWrap, Title, Para, Button, Anchor, Span} from "../../components/styledcomp"
import { useState, useEffect } from 'react';
import { useRouter } from "next/router";
import axios from "axios";
import Image from "next/image";

export default function Movie() {
  const [movieDetails, setMovieDetails] = useState([]);
  const [movieID, setMovieID] = useState()
  const [movieGenre, setMovieGenre] = useState([])
  const router = useRouter();   
  
  const setMovieIDFn = () => {
    const moviePassed = parseInt(router.query["id"])    
    setMovieID(moviePassed);    
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
                setMovieDetails(response.data)
                setMovieGenre(response.data.genres)
                //console.log(movieGenre)
            } catch (e) {
                //console.log(e);
            }
            
        };
        
        fetchMovies()
        // const setInter = setInterval(() => {fetchMovies()}, 1000);
        // return () => clearInterval(setInter);   
    }     
  }, [setMovieIDFn, movieDetails, movieGenre]);

    return (
        <FlexibleDiv $width="100%" $background="">
            <FlexibleDivContent 
              $maxwidth="20%" 
              $flex="20%" 
              $height ="100%"
              $top="0"
              $left ="0"
              $res9maxwidth="20%" 
              $res9flex="20%"
              $res7maxwidth="20%" 
              $res7flex="20%">

            </FlexibleDivContent>
            <FlexibleDivContent
              $maxwidth="80%" 
              $flex="80%" 
              $height ="100%"
              $top="0"
              $left ="0"
              $res9maxwidth="80%" 
              $res9flex="80%"
              $res7maxwidth="80%" 
              $res7flex="80%"
              $margin="0 0 3rem 0">
                <FlexibleDiv1 $width="100%" $padding="1.5rem .5rem">
                    <FlexibleDiv1 $width="100%" $height="600px" $borderrad="1rem" $boxshadow="rgba(0, 0, 0, 0.09) 0px 3px 12px;">
                        <ImageWrap $width="100%" $height="100%">
                            <Image
                                src={`https://image.tmdb.org/t/p/w500/${movieDetails.backdrop_path}`}
                                alt='alt' 
                                width={0}
                                height={0}
                                sizes="100vw"
                                style={{ width: '100%', height: '700px', objectFit: "cover", objectPosition: "center"}}
                                priority
                                data-testid="movie-poster"
                            />
                        </ImageWrap>
                    </FlexibleDiv1>
                </FlexibleDiv1>

                

                <FlexibleDiv1 $width="100%" $padding=".5rem" $alignitems="start">
                    <FlexibleDivContent
                        $maxwidth="60%" 
                        $flex="60%" 
                        $height ="100%"
                        $top="0"
                        $left ="0"
                        $res9maxwidth="60%" 
                        $res9flex="60%">
                            
                            <Title data-testid="movie-title" $fontsize="2rem" $margin="0" $color="">{movieDetails.title}</Title>

                            <FlexibleDiv1 $width="100%" $padding="" $justifycontent="start">                                
                                <Para data-testid="movie-release-date" $fontsize="1rem" $margin="0.5rem" $color="#555">{new Date(movieDetails.release_date).toUTCString()}</Para>
                                <Span $fontsize="1rem" $margin="0.1rem" $color="#555"> - </Span> 
                                <Para data-testid="movie-runtime" $fontsize="1rem" $margin="0.5rem" $color="#555">{movieDetails.runtime} mins</Para>                    
                            </FlexibleDiv1>

                            <FlexibleDiv1 $width="100%" $padding="" $justifycontent="start" $margin="1rem 0"> 
                                {movieGenre.map((genreSplit, index) => (              
                                    <Button key ={genreSplit.id} $margin="0 1rem 0 0" $background="#F9E9EC" $border="0" $color="#BE113C">{genreSplit.name}</Button> 
                                ))}                 
                            </FlexibleDiv1>

                            <Para data-testid="movie-overview" $fontsize="1rem" $margin="0.5rem" $color="">{movieDetails.overview}</Para>
                            

                    </FlexibleDivContent>
                    <FlexibleDivContent 
                        $maxwidth="40%" 
                        $flex="40%" 
                        $height ="100%"
                        $top="0"
                        $left ="0"
                        $res9maxwidth="40%" 
                        $res9flex="40%"
                        $margin="0">
                            <FlexibleDiv1 $width="100%" $padding=".5rem 2rem" $flexdir="column" $margin="0">
                                <Button $margin="0 0 1rem 0" $width="100%">See ShowTimes</Button>
                                <Button $margin="0 0 0" $width="100%" $background="#F9E9EC" $color="#333">More Watch ShowTimes</Button> 
                            </FlexibleDiv1>                            
                    </FlexibleDivContent>                    
                </FlexibleDiv1>
                
            </FlexibleDivContent>
        </FlexibleDiv>
        )
  }

