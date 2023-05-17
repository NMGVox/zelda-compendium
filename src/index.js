import './style.css';
import { loadFact } from './components/getFact';


window.addEventListener('load', loadFact);

document.querySelector('#another').addEventListener('click', loadFact);