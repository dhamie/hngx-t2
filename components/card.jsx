import Link from "next/link";
import {FlexibleDiv, FlexibleDivContent} from "./styledcomp"
import { useState, useEffect } from 'react';

export default function card({dataTestId, movieValues}) {

    return (
        <FlexibleDivContent data-testid={dataTestId}>
            <Link key={movieValues.id} href={{ pathname: '/movie', query: { id: movieValues.id } }}>                    
                    {movieValues.title}                    
            </Link>
        </FlexibleDivContent>
        )
  }

