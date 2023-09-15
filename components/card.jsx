import Link from "next/link";
import {FlexibleDiv, FlexibleDiv1, FlexibleDivContent, ImageWrap, Title, Para } from "./styledcomp"
import { useState, useEffect } from 'react';
import Image from "next/image";
import { BsFillHeartFill } from "react-icons/bs";


export default function Card({dataTestId, movieValues}) {
    const imageLoader = ({ src, width, quality }) => {
        return `https://image.tmdb.org/t/p/w500/${src}?w=${width}&q=${quality || 75}`
    }
    const [isModal, setIsModal] = useState(false);
    
    return (
        <FlexibleDivContent data-testid={dataTestId} $padding="1rem" $margin="0">
            <Link key={movieValues.id} href= {{pathname: '/movies/[id]', query: { id: movieValues.id }}}>
                <FlexibleDiv1 $padding="0" 
                    $height="100%"  
                    $background="" 
                    $alignitems="start" 
                    $boxshadow="rgba(0, 0, 0, 0.09) 0px 3px 12px;" 
                    $borderrad="1rem" 
                    $zindex="1" 
                    $width="100%">
                    <ImageWrap $width="100%">
                        <Image
                            src={`https://image.tmdb.org/t/p/w500/${movieValues.poster_path}`}
                            alt='Poster' 
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ width: '100%', height: '380px', objectFit: "cover", objectPosition: "top"}}
                            data-testid="movie-poster"
                        />
                    </ImageWrap>
                    <FlexibleDiv1 $width="100%" $height="100%" $margin="0" $padding="1.1rem 1rem" $flexdir="column" $alignitems="start">
                        <Para data-testid="movie-release-date" $margin="0" $fontsize=".6rem">{movieValues.release_date}</Para>
                        <Title data-testid="movie-title" $height="55px" $fontsize="1rem" $margin="0">{movieValues.title}</Title>                        
                    </FlexibleDiv1>
                </FlexibleDiv1>     
            </Link>
            <FlexibleDivContent $padding="1rem" $margin="0" $position="absolute" $top="3%" $right="10%" $zindex="2">
                    <BsFillHeartFill className={ isModal ? "icon-noclick icon-click" : "icon-noclick" } onClick={() => setIsModal((prevIsModal) => !prevIsModal)}/>
            </FlexibleDivContent>
        </FlexibleDivContent>
        )
  }

