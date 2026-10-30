"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export function ScrollToTop() {
	const pathname = usePathname();

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		const frame = requestAnimationFrame(() => {
			requestAnimationFrame(() => {
				window.scrollTo({ top: 0, left: 0, behavior: "instant" });
			});
		});

		return () => cancelAnimationFrame(frame);
	}, [pathname]);

	return null;
}