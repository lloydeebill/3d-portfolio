export default function Lights() {
	return (
		<>
			<ambientLight intensity={0.5} />
			<directionalLight position={[5, 5, 5]} />
		</>
	);
}
