import {FlexibleDiv, FlexibleDiv1, FlexibleDivContent, ImageWrap, Title, Para, Button, Anchor, Span, Input} from "../components/styledcomp";
import React, { useState, useEffect, Fragment } from 'react';
import Card from '../components/card';
import CardSmaller from '../components/cardsmall';
import axios from "axios";
import Image from "next/image";
import Logo from "../public/images/Logo.png"
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import {AiOutlineMenu, AiFillFacebook, AiFillInstagram, AiOutlineTwitter, AiFillYoutube} from "react-icons/ai"
import { signIn, signOut, useSession } from "next-auth/react";




export default function Grid({children, columns}) {
    return (
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${columns}, 1fr)`,
          gridGap: 10,
          padding: 10,
          width: '100%'
        }}
      >
        {children}
      </div>
    );
  }
  