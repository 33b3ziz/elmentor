import { useEffect, useRef } from "react";
import Message from "./Message";

const ChatMessages = ({ Chat }) => {
	const messagesEndRef = useRef<HTMLDivElement>(null);

	const scrollToBottom = () => {
		if (messagesEndRef.current) {
			messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
		}
	};

	useEffect(() => {
		scrollToBottom();
	}, [Chat]);

	return (
		<div className="chat_container_dark flex-1 overflow-auto bg-chat">
			<div className="flex flex-col-reverse py-2 px-3">
				<div ref={messagesEndRef} />
				{/* <div className="flex justify-center mb-2">
					<div className="rounded-2xl py-2 px-4 bg-white text-gray-300">
						<p className="text-sm uppercase">February 20, 2018</p>
					</div>
				</div> */}
				{Chat.messages.map((message: any, index: any) => (
					<Message key={index} message={message} receiver={Chat.user} />
				))}
			</div>
		</div>
	);
};

export default ChatMessages;
