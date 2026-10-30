import type React from "react";

type Props = {
	children?: React.ReactNode;
	title?: string;
};

export const TextFullScreen = ({ children, title }: Props) => {
	return (
		<section className="relative h-svh">
			<div className="pointer-events-none fixed inset-0 flex items-center justify-center">
				{children ?? (
					<h1 className="scroll-fade xl:text-6xl text-4xl font-bold uppercase">
						{title}
					</h1>
				)}
			</div>
		</section>
	);
};
