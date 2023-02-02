const Tweet = (props) => {
	return (
		<p>
			Username: {props.username}
			Name: {props.name}
			Date: {props.date}
			Message: {props.message}
		</p>
	);
};
