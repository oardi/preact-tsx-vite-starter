import { render } from 'preact';
import { App } from './app/app';
import './styles/index.css';

render(<App />, document.getElementById('app') as HTMLElement);
