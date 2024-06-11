const ChatBodySkeleton = () => {
	return (
		<div className="h-full flex flex-col animate-pulse">
			<div className="py-2 px-3 bg-background flex flex-row justify-between items-center">
				<div className="flex w-full items-center">
					<div className="h-12 w-12 rounded-full bg-messageSkeletonSecondary-foreground"></div>
					<div className="ml-4 flex-1">
						<div className="h-5 bg-messageSkeletonSecondary-foreground rounded w-2/6"></div>
					</div>
				</div>
			</div>
			<div className="flex-1 overflow-auto bg-chat">
				<div className="py-2 px-3">
					<div className="flex justify-center mb-2">
						<div className="rounded-2xl py-2 px-4 bg-messageSkeletonSecondary shadow-md">
							<div className="h-4 bg-messageSkeletonSecondary-foreground rounded w-36 float-right"></div>
						</div>
					</div>

					<div className="flex mb-2">
						<div className="rounded-br-3xl rounded-tr-3xl rounded-bl-xl py-3 px-4 space-y-2 bg-messageSkeletonSecondary shadow-md">
							<div className="h-4 bg-messageSkeletonSecondary-foreground rounded w-1/4"></div>
							<div className="h-4 bg-messageSkeletonSecondary-foreground rounded w-64"></div>
							<div className="h-4 bg-messageSkeletonSecondary-foreground rounded w-1/6 float-right"></div>
						</div>
					</div>
					<div className="flex mb-2">
						<div className="rounded-br-3xl rounded-tr-3xl rounded-bl-xl py-3 px-4 space-y-2 bg-messageSkeletonSecondary shadow-md">
							<div className="h-4 bg-messageSkeletonSecondary-foreground rounded w-1/4"></div>
							<div className="h-4 bg-messageSkeletonSecondary-foreground rounded w-56"></div>
							<div className="h-4 bg-messageSkeletonSecondary-foreground rounded w-1/6 float-right"></div>
						</div>
					</div>
					<div className="flex justify-end mb-2">
						<div className="rounded-bl-2xl rounded-tl-2xl rounded-br-xl py-3 px-4 space-y-2 bg-messageSkeletonMain shadow-md">
							<div className="h-4 bg-messageSkeletonMain-foreground rounded w-72"></div>
							<div className="h-4 bg-messageSkeletonMain-foreground w-1/6 float-right"></div>
						</div>
					</div>
					<div className="flex mb-2">
						<div className="rounded-br-3xl rounded-tr-3xl rounded-bl-xl py-3 px-4 space-y-2 bg-messageSkeletonSecondary shadow-md">
							<div className="h-4 bg-messageSkeletonSecondary-foreground rounded w-1/4"></div>
							<div className="h-4 bg-messageSkeletonSecondary-foreground rounded w-72"></div>
							<div className="h-4 bg-messageSkeletonSecondary-foreground rounded w-1/6 float-right"></div>
						</div>
					</div>
				</div>
			</div>
			<div className="bg-background px-8 py-4 flex items-center">
				<div className="flex-1 mx-4">
					<div className="h-6 bg-messageSkeletonSecondary-foreground rounded w-full"></div>
				</div>
			</div>
		</div>
	);
};

export default ChatBodySkeleton;
