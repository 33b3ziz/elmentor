import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { socket } from "../../socket";
import ChatBody from "./ChatBody";
import ChatEmpty from "./ChatEmpty";
import ChatBodySkeleton from "./ChatBodySkeleton";
import { useChat } from "../../contexts/ChatContext";

const Chat = () => {
	const { id } = useParams();
	const { chat, setChat } = useChat();
	const [page, setPage] = useState<number>(1);
	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		if (id) {
			const fetchChat = async () => {
				setLoading(true);
				socket.emit("get messages", id, 1, 0, (response: any) => {
					if ("error" in response) {
						setError(response.error);
					} else {
						response._id = id;
						setChat(response);
						console.log(response);
					}
					setLoading(false);
				});
			};

			fetchChat();
		} else {
			setChat(null);
		}
	}, [id]);
	return (
		<div className="w-full h-full">
			{!id && <ChatEmpty />}
			{loading && <ChatBodySkeleton />}
			{chat && <ChatBody ChatID={id} Chat={chat} setChat={setChat} />}
		</div>
	);
};
export default Chat;
