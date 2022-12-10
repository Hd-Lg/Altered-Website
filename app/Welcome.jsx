"use client";
import React from "react";
import { Typewriter } from "react-simple-typewriter";

const Welcome = () => {
	return (
		<div>
			<Typewriter
				words={[
					"Bienvenue !",
					"欢迎你!",
					"¡Bienvenido!",
					"Добро пожаловать!",
					"ようこそ!",
					"Welcome!",
				]}
				loop={1}
				typeSpeed={70}
				deleteSpeed={80}
			/>
		</div>
	);
};

export default Welcome;
