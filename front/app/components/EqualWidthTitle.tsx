'use client'
import { useLayoutEffect, useRef, useState } from 'react'

export default function EqualWidthTitle() {
    const w1 = useRef<HTMLSpanElement>(null)
    const w2 = useRef<HTMLSpanElement>(null)
    const [scale, setScale] = useState(1)

    useLayoutEffect(() => {
        if (!w1.current || !w2.current) return
        const a = w1.current.getBoundingClientRect().width
        const b = w2.current.getBoundingClientRect().width
        setScale(a / b) // étire "Maucourt" pour matcher "Charlotte"
    }, [])

    return (
        <h1 className="md:text-6xl text-2xl mb-10 uppercase flex flex-col ">
            <span ref={w1} className="-mb-2">Charlotte</span>
            <span ref={w2} style={{ display: 'inline-block', transformOrigin: 'left', transform: `scaleX(${scale})` }}>
                Maucourt
            </span>
        </h1>
    )
}