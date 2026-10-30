import { ArrowDown } from "lucide-react";
import { TextFullScreen } from "./ui/TextFullScreen";

export default function Preloader() {
	return (
		<TextFullScreen>
			<div className="scroll-fade overflow-hidden">
				<h1
					className="preloader-text font-bold uppercase
						transition duration-1800 delay-400 ease-expo
						starting:translate-y-full starting:opacity-0
						motion-reduce:transition-none"
				>
					Charlotte Maucourt
				</h1>
			</div>
			<div
				className="scroll-fade pointer-events-none fixed bottom-16 left-1/2 flex -translate-x-1/2"
				aria-hidden="true"
			>
				<div
					className="transition duration-1600 delay-1400 ease-expo
						starting:translate-y-8 starting:opacity-0
						motion-reduce:transition-none"
				>
					<ArrowDown
						className="motion-safe:animate-bounce [animation-duration:2s] [animation-delay:3s]"
						size={40}
						strokeWidth={1.2}
					/>
				</div>
			</div>
		</TextFullScreen>
	);
}
