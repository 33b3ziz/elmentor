const Videos = ({ localVideoComponent, remoteVideoComponent }) => {
	return (
		<div className="flex-1">
			<video
				ref={localVideoComponent}
				autoPlay
				className="rounded-lg w-52"
				muted></video>
			<video
				ref={remoteVideoComponent}
				className="rounded-lg w-52"
				autoPlay></video>
		</div>
	);
};

export default Videos;
