import { Link } from "react-router-dom";
import { formatDate } from "../../services/formatDate";
import ChatBodySheet from "./ChatBodySheet";
import { useSmallScreen } from "../../contexts/SmallScreenContext";

function ChatCard({ chat }) {
	const { smallScreen } = useSmallScreen();

	const userID: any = "663513b7b3e15785e556d3ba";
	let sender = { name: "", ID: "" };
	let receiver = { name: "", ID: "" };

	const dateStringify = (date: string) => {
		return formatDate(new Date(date));
	};

	for (let user of chat.users) {
		if (user.user != userID) {
			receiver.name = user.userName;
			receiver.ID = user.user;
		} else {
			sender.name = user.userName;
			sender.ID = user.user;
		}
	}

	const getInitial = () => {
		return receiver ? receiver.name.charAt(0).toUpperCase() : "";
	};

	return (
		<div>
			{smallScreen && (
				<ChatBodySheet>
					<Link
						to={`/chats/${chat._id}`}
						className="px-3 flex items-center bg-grey-400 flex items-center space-x-4"
						id={`${chat._id}`}>
						<div className="h-16 w-16 rounded-full bg-gray-400 text-white text-xl font-bold flex items-center justify-center">
							{getInitial()}
						</div>
						<div className="ml-4 flex-1 border-b border-grey-lighter py-4">
							<div className="flex items-bottom justify-between">
								<p className="text-grey-darkest">{receiver.name}</p>
								<p className="text-xs text-grey-darkest">
									{dateStringify(chat.lastUsage)}
								</p>
							</div>
							<p className="text-grey-dark mt-1 text-sm">
								{chat.lastMessage.text}
							</p>
						</div>
					</Link>
				</ChatBodySheet>
			)}
			{!smallScreen && (
				<Link
					to={`/chats/${chat._id}`}
					className="px-3 flex items-center bg-grey-400 flex items-center space-x-4"
					id={`${chat._id}`}>
					<div className="h-16 w-16 rounded-full bg-gray-400 text-white text-xl font-bold flex items-center justify-center">
						{getInitial()}
					</div>
					<div className="ml-4 flex-1 border-b border-grey-lighter py-4">
						<div className="flex items-bottom justify-between">
							<p className="text-grey-darkest">{receiver.name}</p>
							<p className="text-xs text-grey-darkest">
								{dateStringify(chat.lastUsage)}
							</p>
						</div>
						<p className="text-grey-dark mt-1 text-sm">
							{chat.lastMessage.text}
						</p>
					</div>
				</Link>
			)}
		</div>
	);
}

export default ChatCard;
