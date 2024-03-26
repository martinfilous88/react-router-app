import { useState, useEffect } from "react";
import { Paper } from "@mui/material";

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
        <Paper variant="elevation" elevation={4} square={false} style={{ textAlign: "center" }}>
            { viditelnost && 
                <div>
                    <h2 style={{ color: "black", fontFamily: "Arial Black", fontSize: pocet }}>Font size: {pocet}</h2>
                    <button onClick={() => nastavPocet(pocet + 1)}>Přidej</button>
                    <button onClick={() => nastavPocet(pocet - 1)}>Odeber</button>
                </div>
            }
           
           </Paper>
        </>
    );
}

export default Pocitadlo;