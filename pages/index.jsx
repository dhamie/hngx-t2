import {FlexibleDiv, FlexibleDiv1, FlexibleDivContent, ImageWrap, Title, Para, Button, Anchor, Span, Input} from "../components/styledcomp";
import React, { useState, useEffect, Fragment, useId } from 'react';
import Image from "next/image";
import one from "../public/images/1.PNG"
import two from "../public/images/2.PNG"
import thr from "../public/images/3.PNG"
import fou from "../public/images/4.PNG"
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { Draggable } from "react-beautiful-dnd";
import {
  DndContext,
  closestCenter,
  MouseSensor,
  TouchSensor,
  DragOverlay,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  rectSortingStrategy,
} from '@dnd-kit/sortable';

import Grid from '../components/grid';
import Sortable from '../components/sortable';
import {Imaged} from '../components/imaged';



export default function Index() {
  const { data: session }= useSession();
  const router = useRouter();
  const sensors = useSensors(useSensor(MouseSensor), useSensor(TouchSensor));
  const id = useId()
  // console.log("session",  session)
  const images = [
    {
      id:'1',
      name: '',
      path: one
    },
    {
      id:'2',
      name: '',
      path: two
    },
    {
      id:'3',
      name: '',
      path: thr
    },
    {
      id:'4',
      name: '',
      path: fou
    },
  ]

  const [items, setItems] = useState(images);
  const [activeId, setActiveId] = useState(null);

  // const { asPath } = useRouter();
  //   const origin =
  //       typeof window !== 'undefined' && window.location.origin
  //           ? window.location.origin
  //           : '';

  //   const URL = `${origin}${asPath}`;
  //   //console.log(URL);

  const [loading, setLoading] = useState(true); 
  
  
  const DNDComp = () => {
    if(session){
      return (
        <FlexibleDiv $width="100%">
          <button onClick={()=>signOut()}>log out</button>
          <DndContext
                id={id}
                sensors={sensors}
                collisionDetection={closestCenter}
                onDragStart={handleDragStart}
                onDragEnd={handleDragEnd}
                onDragCancel={handleDragCancel}
              >
                <SortableContext items={items} strategy={rectSortingStrategy}>
                  <Grid columns={4}>
                    {items.map((item, index) => (
                      <Sortable key={index} url={item.path.src} index={index} />
                    ))}
                  </Grid>
                </SortableContext>

                <DragOverlay adjustScale={true}>
                  {activeId ? (
                    <Imaged url={activeId} index={items.indexOf(activeId)} />
                  ) : null}
                </DragOverlay>
            </DndContext>
        </FlexibleDiv>
              
    )}else{
        return(
          <div><button onClick={()=>{
            router.push("/api/auth/signin")
          }                
          }>sign in</button></div>
        )
    }
    
  }

  function handleDragStart(event) {
    setActiveId(event.active.id);
    //console.log(event.active.id)
  }

  function handleDragEnd(event) {
    const {active, over} = event;

    if (active.id !== over.id) {
      setItems((items) => {
        const oldIndex = items.findIndex((item) => item.path.src === active.id);
        const newIndex = items.findIndex((item) => item.path.src === over.id);
       //console.log(active.id)
        return arrayMove(items, oldIndex, newIndex);
      });
    }

    setActiveId(null);
  }

  function handleDragCancel() {
    setActiveId(null);
  }

useEffect(() => {
  setLoading(false)
}, []);

// if (loading) { 
//   return (<div><Skeleton count={2} height="50vh"/></div>)
// }
    return (
        
        <FlexibleDiv $width="100%" $background="" >
              
              {session ? 
                <FlexibleDiv $width="100%">
                  <button onClick={()=>signOut()}>log out</button>
                  <DndContext
                        id={id}
                        sensors={sensors}
                        collisionDetection={closestCenter}
                        onDragStart={handleDragStart}
                        onDragEnd={handleDragEnd}
                        onDragCancel={handleDragCancel}
                      >
                        <SortableContext items={items} strategy={rectSortingStrategy}>
                          <Grid columns={4}>
                            {items.map((item, index) => (
                              <Sortable key={index} url={item.path.src} index={index} />
                            ))}
                          </Grid>
                        </SortableContext>

                        <DragOverlay adjustScale={true}>
                          {activeId ? (
                            <Imaged url={activeId} index={items.indexOf(activeId)} />
                          ) : null}
                        </DragOverlay>
                    </DndContext>
                </FlexibleDiv> : 
                <div>
                  <button onClick={()=>{router.push("/api/auth/signin")}}>sign in</button>
                </div> 
              }
              
              {/* <ul> 
                {images.map((movieSplit, index) => (              
                  <li key={movieSplit.id}>
                          <Image
                          src={movieSplit.path}
                          alt='Poster' 
                          width={0}
                          height={0}
                          sizes="100vw"
                          style={{ width: '100px', height: '100px', objectFit: "cover", objectPosition: "top"}}
                      />
                  </li>
                ))}
              </ul> */} 
          
         
        </FlexibleDiv>
      
    );
}