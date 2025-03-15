import "./style.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import Experience from "./Experience.jsx";

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(
	<Canvas
		camera={{
			fov: 50,
			near: 0.1,
			far: 100,
			position: [0, 0, 10],
		}}
	>
		<Experience />
	</Canvas>
);
