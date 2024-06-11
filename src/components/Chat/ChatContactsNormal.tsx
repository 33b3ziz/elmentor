import { useEffect, useState } from "react";
import ChatHeader from "./ChatHeader";
import { ChatList } from "./ChatList";
import { Search } from "lucide-react";

const ChatContactsNormal = () => {
	const [minWidth, defaulWidth, maxWidth] = [25, 35, 80];
	const [width, setWidth] = useState(defaulWidth);
	const [isResized, setIsResized] = useState(false);

	useEffect(() => {
		const handleMouseMove = (e: { movementX: number }) => {
			setWidth((previousWidth) =>
				Math.max(minWidth, Math.min(maxWidth, previousWidth + e.movementX / 10))
			);
		};
		const handleMouseUp = () => {
			setIsResized(false);
		};

		if (!isResized) {
			return;
		}

		window.addEventListener("mousemove", handleMouseMove);
		window.addEventListener("mouseup", handleMouseUp);
		return () => {
			window.removeEventListener("mousemove", handleMouseMove);
			window.removeEventListener("mouseup", handleMouseUp);
		};
	}, [isResized]);

	return (
		<div className="flex" style={{ width: `${width}%` }}>
			<div className="bg-background w-full flex flex-col">
				<ChatHeader />
				<div className="py-2 px-2">
					<div className="flex w-full border border-background px-2 py-1.5 text-sm bg-chat rounded-lg focus-within:border-messageSkeletonSecondary-foreground">
						<Search className="text-messageSkeletonSecondary-foreground" />
						<input
							type="text"
							className="w-full bg-transparent focus:outline-none mx-1.5 text-base placeholder-messageSkeletonSecondary-foreground"
							placeholder="search..."
						/>
					</div>
				</div>
				<ChatList />
			</div>
			<div className="group w-3 bg-chat flex justify-center items-center">
				<div
					className="cursor-col-resize hover:w-1.5 hover:h-16 active:w-1.5 active:h-16 rounded-3xl bg-background h-12 w-1"
					onMouseDown={() => {
						setIsResized(true);
					}}
				/>
			</div>
		</div>
	);
};

export default ChatContactsNormal;
