import React from "react";
import PokeCard from "../PokeCard/PokeCard";
import PokeInfo from "../PokeInfo/PokeInfo";
import axios from "axios";
import s from "./Main.module.css"
import { useState } from "react";
import { useEffect } from "react";


const Main = () => {
	const [pokeData, setPokeData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon?offset=0&limit=9")
	const [nextUrl, setNextUrl] = useState();
	const [prevUrl, setPrevUrl] = useState();
	const [pokeDex, setPokeDex] = useState();



	const getPokemonsFun = async () => {
		setLoading(true)
		const res = await axios.get(url);
		setNextUrl(res.data.next);
		setPrevUrl(res.data.previous);
		getPokemon(res.data.results);
		setLoading(false)
	}


	const getPokemon = async (res) => {
		res.map(async (item) => {
			const result = await axios.get(item.url)
			setPokeData(state => {
				state = [...state, result.data]
				state.sort((a, b) => a.id > b.id ? 1 : -1)
				return state
			})
		})
	}

	useEffect(() => {
		getPokemonsFun();
	}, [url])

	return (
		<div>
			<div className={s.container}>
				<div className={s.leftContent}>
					<div className={s.items}>
						<PokeCard pokemon={pokeData} loading={loading} infoPokemon={poke => setPokeDex(poke)} />
					</div>
					<div className={s.btn}>
						{prevUrl && <button onClick={() => {
							setPokeData([])
							setUrl(prevUrl)
							setPokeDex()
						}}>Previous</button>}

						{nextUrl && <button onClick={() => {
							setPokeData([])
							setUrl(nextUrl)
							setPokeDex()
						}}>Next</button>}
					</div>
				</div>
				<div className={s.rightContent}>
					<PokeInfo data={pokeDex} />
				</div>
			</div>
		</div>

	)
}

export default Main;