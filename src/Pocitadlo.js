import { useState, useEffect } from "react";

function Pocitadlo() {

    const [pocet, nastavPocet] = useState(() => {
        return parseInt(localStorage.getItem('pocet') || 20)
    });
    const [viditelnost, nastavViditelnost] = useState(true)
    const [viditelnostObrazku, nastavViditelnostObrazku] = useState(false)
    
    useEffect(() => {
        localStorage.setItem('pocet', pocet);
    }, [pocet]);

    return (
        <>
            { viditelnost && 
                <div>
                    <h2 style={{ color: "green", fontSize: pocet }}>Font size: {pocet}</h2>
                    <button onClick={() => nastavPocet(pocet + 1)}>Přidej</button>
                    <button onClick={() => nastavPocet(pocet - 1)}>Odeber</button>
                </div>
            }
           
            
        </>
    );
}

export default Pocitadlo;