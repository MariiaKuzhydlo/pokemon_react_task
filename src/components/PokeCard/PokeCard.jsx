import React from "react";
import s from "./PokeCard.module.css"

const PokeCard = ({ pokemon, loading, infoPokemon }) => {
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
												<span className={s.type} key={index}>
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
