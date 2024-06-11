import { useEffect, useRef, useState } from "react";
import { socket } from "../../socket";
import ChatCard from "./ChatCard";
import SkeletonChatCard from "./ChatCardSkeleton";
import { Chat } from "../../types/chatTypes";
import { useChat } from "../../contexts/ChatContext";
import { Link } from "react-router-dom";

export const ChatList = () => {
	const divRef = useRef(null);
	const [chats, setChats] = useState<Chat[]>([]);
	const [page, setPage] = useState<number>(1);
	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState<string | null>(null);
	const { chat, setChat } = useChat();

	useEffect(() => {
		const fetchChats = async () => {
			if (page == 1) {
				setLoading(true);
			}
			socket.emit("get chats", page, (response: Chat[] | { error: string }) => {
				if ("error" in response) {
					setError(response.error);
				} else {
					setChats([...chats, ...response]);
					console.log(response);
				}
				setLoading(false);
			});
		};

		fetchChats();
	}, [page]);

	useEffect(() => {
		const handleMessage = ({ message }) => {
			setChat((prevChat) => ({
				...prevChat,
				messages: [message.message, ...prevChat.messages],
			}));
			const updateChat = chats.find((x) => x._id === message.chatID);
			const chatsArray = chats.filter((x) => x._id !== message.chatID);
			if (updateChat) {
				updateChat.lastMessage.sender = message.message.sender;
				updateChat.lastMessage.text = message.message.text;
				updateChat.lastUsage = new Date();
			} else {
			}

			chatsArray.push(updateChat);
			setChats(chatsArray);
		};
		socket.on("message", handleMessage);
		return () => {
			socket.off("message", handleMessage);
		};
	}, [chats, setChat]);
	useEffect(() => {
		const handleScroll = () => {
			const div = divRef.current;
			if (div && div.scrollHeight - div.scrollTop === div.clientHeight) {
				setPage((PreviousPage) => PreviousPage + 1);
			}
		};

		const div = divRef.current;
		if (div) {
			div.addEventListener("scroll", handleScroll);
		}

		return () => {
			if (div) {
				div.removeEventListener("scroll", handleScroll);
			}
		};
	}, []);
	return (
		<div
			ref={divRef}
			className="chat_container bg-grey-lighter flex-1 overflow-auto scroll-smooth">
			{error && <p>Error: {error}</p>}
			{chats.map((chat) => (
				<ChatCard key={chat._id} chat={chat} />
			))}
			{loading && <SkeletonChatCard />}
		</div>
	);
};
