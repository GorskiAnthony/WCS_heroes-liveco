import { useState } from "react";
import heroes from "../helpers/heroes.json";
import HeroCard from "./HeroCard";
import "../assets/hero.css";

const App = () => {
	let saveTheme = localStorage.getItem("theme");

	if (!saveTheme) {
		saveTheme = "light";
	}

	const [theme, setTheme] = useState(saveTheme);

	const handleTheme = () => {
		setTheme(theme === "light" ? "dark" : "light");
	};
	localStorage.setItem("theme", theme);

	return (
		<div>
			<button onClick={handleTheme}>
				{theme === "light" ? "🌕" : "😎"}
			</button>
			<div className={`heroes ${theme}`}>
				{heroes.map((hero) => (
					// <HeroCard key={hero.id} {...hero} />
					<HeroCard
						key={hero.id}
						name={hero.name}
						appearance={hero.appearance}
						images={hero.images}
					/>
				))}
			</div>
		</div>
	);
};

export default App;
