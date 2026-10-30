import { TextFullScreen } from "@/components/ui/TextFullScreen";
import Link from "next/link";

export default async function Page() {
	return (
		<div className="">
			<TextFullScreen title="Contact" />
			<div className="max-w-6xl pb-28 flex flex-col gap-10 h-{50vh]">
				<div className="flex xl:gap-50 gap-3.5">
					<h2 className="xl:min-w-56 min-w-24">Email</h2>
					<div className="flex flex-col underline">
						<Link href="mailto:charlotte.maucourt@orange.fr?subject=Prise%20de%20contact">
							charlotte.maucourt@orange.fr
						</Link>
					</div>
				</div>
				<div className="flex xl:gap-50 gap-3.5">
					<h2 className="xl:min-w-56 min-w-24">Instagram</h2>
					<div className="flex flex-col underline">
						<Link
							href="https://www.instagram.com/charlotte.maucourt/"
							target="_blank"
						>
							@charlotte.maucourt
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
