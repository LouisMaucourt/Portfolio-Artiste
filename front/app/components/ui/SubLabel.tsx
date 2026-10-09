import type React from "react";

type subLabelProps = {
	children: React.ReactNode;
	className?: string;
};
export const SubLabel = ({ children, className }: subLabelProps) => {
	return (
		<h3 className={`uppercase ${className} xl:text-sm text-xs mb-2`}>
			[ {children} ]
		</h3>
	);
};
