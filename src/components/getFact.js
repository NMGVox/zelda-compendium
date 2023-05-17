import { setPicture } from "./set-portrait";
import { setDescription } from "./set-description";

async function loadFact() {
    let rando = 1 + Math.floor(Math.random() * 384);
    try {
        let response = await fetch(`https://botw-compendium.herokuapp.com/api/v2/entry/${rando}`, {'mode': 'cors'});
        let data = await response.json()
        setPicture(data.data.image);
        setDescription(data.data.description);
    }
    catch(error) {
        console.log(error);
    }
    return;
}

export { loadFact };