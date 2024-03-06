import { useState } from "react";

function PocitadloABarva() {

    const [pocet, nastavPocet] = useState(0)
    const [barva, nastavBarvu] = useState("black")
    const [zobrazeni, nastavZobrazeni] = useState(true)

    function zpracujForm(e) {
        e.preventDefault();
        console.log(e)
        let formData = new FormData(e.target)
        console.log(formData)
    }

    return(
        <>
            {zobrazeni && 
            <div id="pocitadlo_blok">
                <h2 style={{color: barva, fontSize: 50 }}>{pocet}</h2>
                <button onClick={() => nastavPocet(pocet + 1)}>Klikni</button>
                <form onSubmit={zpracujForm}>
                    <input type="color"/>
                    <button type="submit">Nastav barvu</button>
                </form>
            </div>
            }
            <br/>
            <button onClick={() => nastavZobrazeni(!zobrazeni)}>Zobrazit / skrýt</button>
        </>
    );
}

export default PocitadloABarva;