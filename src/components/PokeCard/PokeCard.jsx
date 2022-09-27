import React from "react";
import s from "./PokeCard.module.css"

const PokeCard = ({ pokemon, loading, infoPokemon }) => {

	const getTypeStyle = (type) => {
		let backgroundColor = "";
		switch (type) {
			case "grass":
				backgroundColor = "#9bcc50";
				break;
			case "poison":
				backgroundColor = "#b97fc9";
				break;
			case "fire":
				backgroundColor = "#fd7d24";
				break;
			case "flying":
				backgroundColor = "#3dc7ef";
				break;
			case "water":
				backgroundColor = "#4592c4";
				break;
			case "bug":
				backgroundColor = "#729f3f";
				break;
			case "normal":
				backgroundColor = "#a4acaf";
				break;
			case "electric":
				backgroundColor = "#eed535";
				break;
			case "ground":
				backgroundColor = "#ab9842";
				break;
			case "fairy":
				backgroundColor = "#fdb9e9";
				break;
			case "fighting":
				backgroundColor = "#d56723";
				break;
			case "psychic":
				backgroundColor = "#f366b9";
				break;
			case "rock":
				backgroundColor = "#a38c21";
				break;
			case "steel":
				backgroundColor = "#9eb7b8";
				break;
			case "ghost":
				backgroundColor = "#7b62a3";
				break;
			case "ice":
				backgroundColor = "#51c4e7";
			case "dragon":
				backgroundColor = "#f16e57";

			default:
				backgroundColor = "#000";
				break;
		}
		return { backgroundColor };
	};

	return (
		<>
			{
				loading ? <h1>Loading...</h1> :
					pokemon.map((item) => {
						return (
							<div className={s.card} key={item.id} onClick={() => infoPokemon(item)} >
								<div className={s.pokeImg}>
									<img src={item.sprites.front_default} alt={`${item.name}`} />
								</div>
								<div className={s.info}>
									<div className={s.name}>{item.name}</div>
									<div className={s.types}>
										{item.types.map((type, index) => {
											return (
												<span className={s.type} key={index}
													style={getTypeStyle(type.type.name)}>
													{type.type.name}
												</span>
											)
										})}
									</div>
								</div>
							</div>
						)
					})
			}
		</>
	)
}

export default PokeCard;
