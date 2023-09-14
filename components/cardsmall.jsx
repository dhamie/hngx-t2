import Link from "next/link";
import {FlexibleDiv, FlexibleDiv1, FlexibleDivContent, ImageWrap, Title, Para } from "./styledcomp"
import { useState, useEffect } from 'react';
import Image from "next/image";
import { BsFillHeartFill } from "react-icons/bs";


export default function CardSmall({dataTestId, movieValues}) {
    const imageLoader = ({ src, width, quality }) => {
        return `https://image.tmdb.org/t/p/w500/${src}?w=${width}&q=${quality || 75}`
    }
    
    return (
        <FlexibleDivContent data-testid={dataTestId} 
        $padding="0 1rem" 
        $margin=".5rem 0" 
        $width="100%" 
        $res9maxwidth="100%" 
        $res9flex="100%" 
        $maxwidth="100%"  
        $flex="100%">
            <Link key={movieValues.id} href={'/movie/'+ movieValues.id } >
                <FlexibleDiv1 $padding="0" 
                    $height="100px"  
                    $background="" 
                    $alignitems="start" 
                    $boxshadow="rgba(0, 0, 0, 0.09) 0px 3px 12px;" 
                    $borderrad="1rem" 
                    $zindex="1" 
                    $width="100%" 
                    $flexdir="row">
                    <ImageWrap $width="30%">
                        <Image
                            src={`https://image.tmdb.org/t/p/w500/${movieValues.poster_path}`}
                            alt='alt' 
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ width: '100%', height: '110px', objectFit: "cover", objectPosition: "top"}}
                            priority
                            data-testid="movie-poster"
                        />
                    </ImageWrap>
                    <FlexibleDiv1 $width="70%" $height="100%" $margin="0" $padding=".5rem" $flexdir="column" $alignitems="start">
                        <Para data-testid="movie-release-date" $margin=".2rem">Release Date: {movieValues.release_date}</Para>
                        <Title data-testid="movie-title" $height="auto" $fontsize=".8rem" $margin=".2rem">{movieValues.title}</Title>                        
                    </FlexibleDiv1>
                </FlexibleDiv1>     
            </Link>            
        </FlexibleDivContent>
        )
  }

