import {FlexibleDiv, FlexibleDiv1, FlexibleDivContent, ImageWrap, Title, Para, Button, Anchor, Span, Input} from "../components/styledcomp";
import React, { useState, useEffect, Fragment } from 'react';
import Image from "next/image";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";



export default function Index() {
  const { data: session }= useSession()  ;
  const router = useRouter();
  // console.log("session",  session)

  const [loading, setLoading] = useState(true); 
  

useEffect(() => {
  setLoading(false)
}, []);

// if (loading) { 
//   return (<div><Skeleton count={2} height="50vh"/></div>)
// }
    return (
        
        <FlexibleDiv $width="100%" $background="" >
              {session ? <div><button onClick={()=>signOut()}>log out</button></div> : <div><button onClick={()=>{
                router.push("/api/auth/signin")
              }                
              }>sign in</button></div> }
         
        </FlexibleDiv>
      
    );
}