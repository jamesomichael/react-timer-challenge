import { useState, useRef } from 'react';

const Player = () => {
	const playerNameRef = useRef();
	const [playerName, setPlayerName] = useState(null);

	return (
		<section id="player">
			<h2>Welcome {playerName ?? 'unknown entity'}</h2>
			<p>
				<input ref={playerNameRef} type="text" />
				<button
					onClick={() => setPlayerName(playerNameRef.current.value)}
				>
					Set Name
				</button>
			</p>
		</section>
	);
};

export default Player;
