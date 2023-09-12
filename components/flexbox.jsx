import {FlexibleDiv} from "./styledcomp"
import { useState, useEffect } from 'react';

export default function flexbox({count}) {
    const [flexCount, setFlexCount] = useState(0);
    const [component, setComponent] = useState('')
    const flexCountFn = () => {
        setFlexCount(flexCount = count);
        for (let i = 0; i < count; i++) {
            return (
                <FlexibleDiv></FlexibleDiv>
            )
        }
        setComponent()
    }

    useEffect(() => {
        window.addEventListener('load', flexCountFn, {once: true});        
    })

    return (
        <FlexibleDiv>

        </FlexibleDiv>
        )
  }

