import Lights from "./Lights";
import { useFrame, useThree } from "@react-three/fiber";
import { useGLTF, OrbitControls } from "@react-three/drei";
import { useRef, useEffect, useState } from "react";

export default function Experience() {
	const { scene } = useGLTF("/assets/models/table.glb");
	const { camera } = useThree();
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

	useEffect(() => {
		const handleMouseMove = (event) => {
			const { innerWidth, innerHeight } = window;
			const x = (event.clientX / innerWidth - 0.5) * 2;
			const y = (event.clientY / innerHeight - 0.5) * 2;
			setMousePosition({ x, y });
		};

		window.addEventListener("mousemove", handleMouseMove);

		return () => {
			window.removeEventListener("mousemove", handleMouseMove);
		};
	}, []);

	useFrame(() => {
		const maxXRotation = Math.PI / 6; // Max up/down (30 degrees)
		const maxYRotation = Math.PI / 6; // Max left/right (45 degrees)

		camera.rotation.x = Math.max(
			-maxXRotation,
			Math.min(maxXRotation, -mousePosition.y * 0.3)
		);
		camera.rotation.y = Math.max(
			-maxYRotation,
			Math.min(maxYRotation, -mousePosition.x * 0.5)
		);
	});

	return (
		<>
			<primitive
				object={scene}
				rotation={[0, Math.PI + 1.5, 0]}
				position={[0, -2.5, 11]}
				scale={0.5}
			/>
			<Lights />
		</>
	);
}
