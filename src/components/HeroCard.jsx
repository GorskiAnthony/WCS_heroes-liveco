/**
 * App.jsx
 *
 * <HeroCard name={hero.name} appearance={appearance}  ... />
 */
import { useState } from "react";

function HeroCard({ name, appearance, images }) {
	const { gender, race, height, weight, eyeColor, hairColor } = appearance;

	const [like, setLike] = useState(0);
	const [dislike, setDislike] = useState(0);

	/**
	 * localStorage
	 * - setItem pour enregister une donnée dans le navigateur
	 * - getItem pour récupérer la donnée dans le navigateur
	 */

	const handleLike = () => {
		setLike(like + 1);
	};

	const handleDislike = () => {
		setDislike(dislike + 1);
	};

	/**
     * 	{
		"id": 644,
		"name": "Superman",
		"appearance": {
			"gender": "Male",
			"race": "Kryptonian",
			"height": ["6'3", "191 cm"],
			"weight": ["225 lb", "101 kg"],
			"eyeColor": "Blue",
			"hairColor": "Black"
		},
		"images": {
			"xs": "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/xs/644-superman.jpg",
			"sm": "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/sm/644-superman.jpg",
			"md": "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/644-superman.jpg",
			"lg": "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/lg/644-superman.jpg"
		}
	},
     */

	return (
		<div className="hero">
			<img src={images.md} alt={name} />
			<h1>{name}</h1>
			<section>
				<h2>Apparence</h2>
				<p>Genre: {gender}</p>
				<p>Race: {race}</p>
				<p>
					Poids: {weight[1]} ({weight[0]})
				</p>
				<p>
					Taille: {height[1]} ({height[0]})
				</p>
				<p>Couleur des yeux: {eyeColor}</p>
				<p>Couleur des cheveux: {hairColor}</p>
			</section>
			<div className="buttons">
				<button onClick={handleLike}>👍 {like} </button>
				<button onClick={handleDislike}>👎 {dislike}</button>
			</div>
		</div>
	);
}

export default HeroCard;
