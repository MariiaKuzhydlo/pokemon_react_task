import React from "react";
import s from "./PokeInfo.module.css"

const PokeInfo = ({ data }) => {

	return (
		<>
			{
				(!data) ? "" : (
					<div className={s.information} >
						<img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`} alt="" />
						<h1 className={s.name}>{data.name} </h1>
						<div className={s.detail}>
							<div className={s.types}>
								Type
								<span className={s.type}>
									{data.types[0].type.name}
								</span>
							</div>
							<div className={s.baseStat}>
								{
									data.stats.map(poke => {
										return (
											<div className={s.baseInfo}>
												<div>{poke.stat.name}</div>
												<div>{poke.base_stat}</div>
											</div>
										)
									})
								}
							</div>
							<div className={s.weight}>Weight
								<span>{data.weight}</span>
							</div>
						</div>
					</div>
				)
			}
		</>
	)
}

export default PokeInfo;