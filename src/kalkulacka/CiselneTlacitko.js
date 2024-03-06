function CiselneTlacitko(props) {

    let puvodniCislo = props.puvodniCislo;
    let cisloTlacitka = props.cislo;
    let vysledek = puvodniCislo.concat(cisloTlacitka);

    function nastavCislo() {
        if (props.cislo == "0") {
            props.klikfunkce(cisloTlacitka)
        } else (
            props.klikfunkce(vysledek)
        )
    }

    return(

    
    <button onClick={() => props.klikfunkce(vysledek)}>{props.cislo}</button>
)
}

export default CiselneTlacitko;