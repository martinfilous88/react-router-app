import { useEffect, useState } from "react";
import Grid from '@mui/material/Grid';
import axios from "axios";
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { Button } from "@mui/material";


function App() {

  const [produkt, nastavProdukt] = useState([])
  const [cenaKosiku, nastavVybranyProdukt] = useState("")
  const [kosik, nastavKosik] = useState([])



  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(odpoved => {
        nastavProdukt(odpoved.data)
      }

      )

  }, [])

  function odebratProdukt(odebraneZbozi) {
    let kosik2 = [...kosik];
    let odebratProdukt = false;
    for (let zbozi of kosik2) {
        if (zbozi.produkt == odebraneZbozi.produkt) {
            if (zbozi.mnozstvi > 1) {
                zbozi.mnozstvi--;
            } else {
                odebratProdukt = true;
            }
        }
    }
    if (odebratProdukt) {
        kosik2 = kosik2.filter(zbozi => zbozi.produkt !== odebraneZbozi.produkt);
    }
    nastavKosik(kosik2);
}

function pridatProdukt(pridanyProdukt) {
    let novyKosik = [...kosik];  // duplikace kosiku
    let obsahujeProdukt = false; // uchovani informace, zda mam v kosiku polozku, kterou pridavam
    for (let zbozi of novyKosik) {
        if (zbozi.produkt == pridanyProdukt) {
            obsahujeProdukt = true;
            zbozi.mnozstvi++; // polozka tam je, jenom zvysim mnozstvi
        }
    }
    if (!obsahujeProdukt) { // polozka tam neni, musim vlozit novou s mnozstvim 1
        novyKosik.push({produkt: pridanyProdukt, mnozstvi: 1});
    }
    nastavKosik(novyKosik);
}

  return (
    <>


      <Paper>
        <Typography variant="subtitle1">
          {cenaKosiku != "" && <span style={{fontFamily:"Arial Black"}} >cena košíku: {produkt.price} KČ, množství: {produkt.mnozstvi}</span>}
          {kosik.price != "" && <span style={{fontFamily:"Arial Black"}} >cena košíku je:  {kosik.price} KČ</span>}
        </Typography>
      </Paper>

      {kosik.map(zbozi => (
          <>
          <span>{zbozi.produkt.title}</span>
          <span>počet: {zbozi.mnozstvi}</span>
          </>
        )
        )}

      <Grid container spacing={2}>
        {produkt.map(produkt => (

          <>

            
              <Grid item xs={4} key={produkt.id} style={{ listStyle: "none" }}>
              <Paper variant="elevation" elevation={4} square={false} style={{ textAlign: "center" }}>
                
                <div className='product' key={produkt.id} style={{ listStyleType: "none" }}>
                  <img src={produkt.image} style={{ width: "150px", backgroundColor: "black" }}></img>
                  <Typography variant="subtitle2">{produkt.title}</Typography>
                  <Typography style={{fontFamily: "Arial Black"}}variant="subtitle2">Cena: {produkt.price} KČ</Typography><br></br>
                  <Button variant="contained" style={{backgroundColor: "black", textAlign: "center", margin: 8,  style: "vertical-align:middle" }} onClick={() => pridatProdukt(produkt)} elevation={4}>Přidat produkt</Button>
                  <Button variant="contained" style={{backgroundColor: "black", textAlign: "center", margin: 8,  style: "vertical-align:middle" }} onClick={() => odebratProdukt(cenaKosiku - produkt.price)} elevation={4}>Odebrat produkt</Button>
                </div>


            </Paper>

          </Grid >


        </>



      ))}
    </Grid >
    </>
  )
}

export default App;
