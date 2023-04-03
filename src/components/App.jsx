import heroes from "../helpers/heroes.json";
import HeroCard from "./HeroCard";
import "../assets/hero.css";

const App = () => {
	return (
		<div className="heroes">
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
	);
};

export default App;
