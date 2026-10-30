"use client";

import { ReactLenis } from "lenis/react";
import "lenis/dist/lenis.css";
import type React from "react";

function SmoothScrolling({ children }: { children: React.ReactNode }) {
	return (
		<ReactLenis
			root
			options={{
				lerp: 0.1,
				duration: 1.5,
				syncTouch: true,
			}}
		>
			{children}
		</ReactLenis>
	);
}

export default SmoothScrolling;
