import { useState } from 'react';
import NovyUkol from './NovyUkol';
import PolozkaUkolu from './PolozkaUkolu';
import Style from './style.css';
import Button from '@mui/material/Button';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
 



export default function Ukolnicek() {

    const [barvaTlacitka, nastavBarvuTlacitka] = useState("blue");
    const [barvaTextu] = useState("white");




    const [seznamUkolu, nastavSeznamUkolu] = useState([
        { text: 'Novy ukol', splneno: false },
        { text: 'dalsi ukol', splneno: false },
        { text: 'splneny ukol', splneno: true }
    ])

    function randomColour() {
        let r = Math.floor(Math.random() * 300)
        let g = Math.floor(Math.random() * 300)
        let b = Math.floor(Math.random() * 300)
        let barva = "rgb(" + r + "," + g + "," + b + ")"
        nastavBarvuTlacitka(barva)
    }



    function pridejUkol(novyUkol) {
        let novyUkolObj = { text: novyUkol, splneno: false }
        nastavSeznamUkolu([...seznamUkolu, novyUkolObj])
        randomColour()

    }



    function smazatUkol(poradiUkolu) {
        let upravenySeznamUkolu = [...seznamUkolu];
        upravenySeznamUkolu.splice(poradiUkolu, 1);
        nastavSeznamUkolu(upravenySeznamUkolu);

    }

    function splnUkol(poradiUkolu) {
        let upravenySeznamUkolu = [...seznamUkolu];
        if (seznamUkolu[poradiUkolu].splneno == true) {
            upravenySeznamUkolu[poradiUkolu].splneno = false;

        } else {
            upravenySeznamUkolu[poradiUkolu].splneno = true;
        }
        nastavSeznamUkolu(upravenySeznamUkolu);
    }

    return (
        <>
            <NovyUkol pridejUkol={pridejUkol} />
            <br></br>
            {/*seznamUkolu.map((ukol) => (
            <>
            <span>{ukol}</span>
            <br/>
            </>
        ))
        */}
            <div id="ukoly">
                {seznamUkolu.map((ukol, poradi) => <PolozkaUkolu key={poradi} ukol={ukol} poradi={poradi} fceSmazat={smazatUkol} fceSpln={splnUkol}></PolozkaUkolu>)}
            </div>
            <div><b>Počet úkolů:{seznamUkolu.length}</b></div>
            <Button style={{ backgroundColor: barvaTlacitka, color: barvaTextu }} onClick={() => pridejUkol("novy ukol")}>Přidej náhodný úkol</Button>
        </>
    )
}