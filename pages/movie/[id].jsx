import {FlexibleDiv, FlexibleDiv1, FlexibleDivContent, ImageWrap, Title, Para, Button, Anchor, Span} from "../../components/styledcomp"
import { useState, useEffect } from 'react';
import { useRouter } from "next/router";
import axios from "axios";
import Image from "next/image";
import Logo from "../../public/images/Logo_dash.png"
import { GrVideo, GrHomeRounded, GrCirclePlay, GrCalendar, GrLogout } from "react-icons/gr";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export default function Movie({repo, err}) {
  const [movieDetails, setMovieDetails] = useState([]);
  const [movieGenre, setMovieGenre] = useState([])
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  // const moviePassed = parseInt(router.query["id"])   
  

useEffect(() => {
    if (router.isReady){
      const fetchMovies = () => {
            if(!repo.success){
                setMovieDetails(repo)
                setMovieGenre(repo.genres)
                setLoading(false)            
            }
        };
        
        //console.log(repo)
        const timer = setTimeout(() => fetchMovies() , 3000);
        return () => clearTimeout(timer);        
    } 

  }, [movieDetails, movieGenre]);

  if (loading) { 
    return (<div><Skeleton count={1} height="100vh"/></div>)
  }

  if (repo.success == false) {
    console.log(repo.status_message)
    return (<div>check console, request could not be made for movie id(can be due to the id not existing when fetched)<Skeleton count={1} height="100vh"/></div>)
  }

    return (
        
        <FlexibleDiv $width="100%" $height="100vh" $background="" $alignitems="start">
            
            <FlexibleDivContent 
              $maxwidth="15%" 
              $flex="15%" 
              $height ="100%"
              $top="0"
              $left ="0"
              $margin = "0"
              $res9maxwidth="15%" 
              $res9flex="15%"
              $res7maxwidth="15%" 
              $res7flex="15%"
              >

                <FlexibleDiv1 $width="100%" $height="100%" $padding="3rem 0rem" $margin="0" $background="white" $borderrad="0 5rem 5rem 0" $border=".5px solid #ccc" >
                    <FlexibleDiv1 $margin="0" $width="100%" $height="100%" $flexdir="column" $alignitems="center" $justifycontent="start">

                       <FlexibleDiv1 $margin="0" $width="85%" >
                        <ImageWrap $width="100%" $height="auto">
                                <Image
                                    src={Logo}
                                    alt='Logo' 
                                    width={0}
                                    height={0}
                                    style={{ width: '95%', height: 'auto', margin:'auto', display: 'block', objectFit: "contain", objectPosition: "center"}}
                                    rel="preload"
                                />
                            </ImageWrap>
                       </FlexibleDiv1>

                       <FlexibleDiv1 $margin="3rem 0 0 0" $width="100%" $flexdir="column">

                            <FlexibleDiv1 $margin="0" $width="100%" $height="10vh">
                                <FlexibleDiv1 $margin="0" $width="70%" $justifycontent="start">   
                                    <GrHomeRounded className="icon"/> 
                                    <Para $fontsize="1rem" $color="#555" $margin="0">Home</Para>
                                </FlexibleDiv1>  
                            </FlexibleDiv1>

                            <FlexibleDiv1 $margin="0" $width="100%" $height="10vh">
                                <FlexibleDiv1 $margin="0" $width="70%" $justifycontent="start">   
                                    <GrVideo className="icon"/>
                                    <Para $fontsize="1rem" $color="#555" $margin="0">Movies</Para>
                                </FlexibleDiv1>
                            </FlexibleDiv1>

                            <FlexibleDiv1 $margin="0" $width="100%" $height="10vh"> 
                                <FlexibleDiv1 $margin="0" $width="70%" $justifycontent="start">  
                                    <GrCirclePlay className="icon"/> 
                                    <Para $fontsize="1rem" $color="#555" $margin="0">Tv Series</Para>
                                </FlexibleDiv1>
                            </FlexibleDiv1>

                            <FlexibleDiv1 $margin="0" $width="100%" $height="10vh"> 
                                <FlexibleDiv1 $margin="0" $width="70%" $justifycontent="start">  
                                    <GrCalendar className="icon"/> 
                                    <Para $fontsize="1rem" $color="#555" $margin="0">Upcoming</Para>
                                </FlexibleDiv1>
                            </FlexibleDiv1> 
                            
                       </FlexibleDiv1>
                       

                       <FlexibleDivContent 
                        $maxwidth="100%" 
                        $flex="100%" 
                        $res9maxwidth="100" 
                        $res9flex="100"  
                        $position="absolute" 
                        $bottom="5%">
                            <FlexibleDiv1 $margin="0" $width="100%" $height="10vh"> 
                                <FlexibleDiv1 $margin="0" $width="70%" $justifycontent="start">  
                                        <GrLogout className="icon"/> 
                                        <Para $fontsize="1rem" $color="#555" $margin="0">Log Out</Para>
                                    </FlexibleDiv1> 
                            </FlexibleDiv1>
                        </FlexibleDivContent>

                    </FlexibleDiv1>   
                </FlexibleDiv1>

            </FlexibleDivContent>
            <FlexibleDivContent
              $maxwidth="85%" 
              $flex="85%" 
              $height ="100%"
              $top="0"
              $left ="0"
              $res9maxwidth="85%" 
              $res9flex="85%"
              $res7maxwidth="85%" 
              $res7flex="85%"
              $margin="0 0 3rem 0"
              $padding="1.5rem"
              $overflow="hidden scroll">
                <FlexibleDiv1 $width="100%" $padding=".5rem">
                    <FlexibleDiv1 $width="100%" $height="600px" $borderrad="1rem" $boxshadow="rgba(0, 0, 0, 0.09) 0px 3px 12px;">
                        <ImageWrap $width="100%" $height="100%">
                            <Image
                                src={`https://image.tmdb.org/t/p/w500/${movieDetails.backdrop_path}`}
                                alt='Back Drop' 
                                width={0}
                                height={0}
                                sizes="100vw"
                                style={{ width: '100%', height: '700px', objectFit: "cover", objectPosition: "center"}}
                                data-testid="movie-poster"
                                rel="preload"
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
                        $res9flex="60%"
                        $margin="0">
                            
                            <Title data-testid="movie-title" $fontsize="2rem" $margin="0" $color="">{movieDetails.title}</Title>

                            <FlexibleDiv1 $width="100%" $padding="" $justifycontent="start">                                
                                <Para data-testid="movie-release-date" $fontsize="1rem" $margin="0.5rem" $color="#555" $fontweight="600">{new Date(movieDetails.release_date).toUTCString()}</Para>
                                <Span $fontsize="1rem" $margin="0.1rem" $color="#555"> - </Span> 
                                <Para data-testid="movie-runtime" $fontsize="1rem" $margin="0.5rem" $color="#555" $fontweight="600">{movieDetails.runtime} mins</Para>                    
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
                                <FlexibleDiv1 $margin="1rem 0" $width="100%" $flexdir="column" $alignitems="start" $background="#F9E9EC" $border="1px solid #BE113C" $borderrad="1rem" $padding="1rem">
                                    <Title $fontsize="1rem" $margin=".5rem 0">Play movie quizes and earn free tickets</Title>
                                    <Para $fontsize=".8rem" $color="#555" $margin=".5rem 0">50k people are playing now</Para>
                                    <Button $fontsize="14px" $padding=".8rem" $margin="1rem auto" $width="80%" $background="#F0C8D1" $color="#BE113C" $border="0" $borderrad="3rem">Start Playing</Button> 
                                </FlexibleDiv1>
                            </FlexibleDiv1>                            
                    </FlexibleDivContent>                    
                </FlexibleDiv1>
                
            </FlexibleDivContent>
        </FlexibleDiv>
        )
  }





export async function getServerSideProps({ params }) {
    // const apiKey = "a267d09f4e9e419f565759a50273521f";
    // const response = await axios.get(
    //     'https://api.themoviedb.org/3/movie/' + params.id + '?api_key=' + apiKey +'&language=en-US'
    // ); 
    try{
        const apiKey = "a267d09f4e9e419f565759a50273521f";
        const res = await fetch('https://api.themoviedb.org/3/movie/' + params.id + '?api_key=' + apiKey +'&language=en-US')
        const repo = await res.json()
        
        
        return {
            props: { repo }, 
          };    
    } catch (err) {
        console.log(err.name + ' ' + err.message + ' ' +  err.stack);
        return {
            props: { err }, 
          };   
    } 

}




