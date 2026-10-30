import type React from "react";

export const NotFound = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="h-svh w-svw flex justify-center items-center ">
			{children}
		</div>
	);
};
