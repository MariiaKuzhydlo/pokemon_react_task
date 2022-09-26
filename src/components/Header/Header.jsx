import React from "react";
import s from "./Header.module.css"
import logo from "../../img/Pokedex.png"


const Header = () => {
	return (
		<header className={s.header}>
			<div className={s.headerLogo}>
				<img src={logo} alt="images" />
			</div>
		</header>
	)
}

export default Header;