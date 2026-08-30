'use client'

import { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

export default function Preloader() {
    const containerRef = useRef<HTMLDivElement>(null)
    const textRef = useRef<HTMLHeadingElement>(null)
    const [isDone, setIsDone] = useState(false)

    useGSAP(() => {
        const tl = gsap.timeline({
            onComplete: () => setIsDone(true),
        })

        tl.to(textRef.current, {
            y: '0%',
            duration: 1.8,
            delay: 0.3,
            ease: 'power4.out',
        })
            .to(containerRef.current, {
                y: '-100%',
                duration: 0.8,
                delay: 0.3,
                ease: 'power4.inOut',
            })
    }, [])

    if (isDone) return null

    return (
        <div ref={containerRef} className="fixed inset-0 bg-white z-40 w-screen h-screen">
            <div className="relative h-full">
                <div className="absolute bottom-10 overflow-hidden">
                    <h2
                        ref={textRef}
                        className="preloader-text uppercase text-[var(--red)] font-bold block translate-y-full"
                    >
                        Charlotte Maucourt
                    </h2>
                </div>
            </div>
        </div>
    )
}