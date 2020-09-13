
	var items = [
		"1 Salmon",
		"2 Steak",
		"3 Chips"
	];

const App = () => 
	<section id="Grub">
	<h1>"Grub"</h1>
	<ul className = "ingredients">
		{items.map((ingredient, i) => <li key={i}>{ingredient}</li>)}
	</ul>
	</section>

export default App;
