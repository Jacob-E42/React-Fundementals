const Person = ({ name, age, hobbies }) => {
	return (
		<p>
			Learn some information about this person:
			<h2>
				Name: {name.length > 8 ? name.slice(0, 6) : name} Age: {age}
			</h2>
			<h3>{age >= 18 ? "Please go vote!" : "You must be 18."}</h3>
			<ul>
				Hobbies:
				{hobbies.map((h) => (
					<li>{h}</li>
				))}
			</ul>
		</p>
	);
};
