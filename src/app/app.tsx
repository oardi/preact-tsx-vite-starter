import { useState } from 'preact/hooks';
import type { JSXInternal } from 'preact/src/jsx';
import preactLogo from '../assets/preact.svg';
import viteLogo from '../assets/vite.svg';
import './app.css';

export function App(): JSXInternal.Element {
	const [count, setCount] = useState(0);

	return (
		<>
			<div>
				<a href="https://vitejs.dev" target="_blank">
					<img src={viteLogo} class="logo" alt="Vite logo" />
				</a>
				<a href="https://preactjs.com" target="_blank">
					<img src={preactLogo} class="logo preact" alt="Preact logo" />
				</a>
			</div>
			<h1>Vite + Preact</h1>
			<div class="card">
				<button onClick={(): void => setCount(count => count + 1)}>count is {count}</button>
			</div>
		</>
	);
}
