import { useEffect, useState } from "react";
import Grid from '@mui/material/Grid';
import axios from "axios";
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';


function App() {

  const [produkt, nastavProdukt] = useState([])
  const [cenaKosiku, nastavVybranyProdukt] = useState("")



  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(odpoved => {
        nastavProdukt(odpoved.data)
      }

      )

  }, [])

  return (
    <>


      <Paper>
        <Typography variant="subtitle1">
          {cenaKosiku != "" && <span>cena košíku je:  {cenaKosiku}</span>}
        </Typography>
      </Paper>
      <Grid container spacing={2}>
      {produkt.map(produkt => (

        <>


          <Grid item xs={4} key={produkt.id} style={{ listStyle: "none" }}>
            <Paper onClick={() => nastavVybranyProdukt(parseFloat(cenaKosiku + produkt.price))} elevation={4} style={{ textAlign: "center" }}>
              <div className='product' key={produkt.id} style={{ listStyleType: "none" }}>
                <img src={produkt.image} style={{ width: "100px" }}></img>
                <Typography variant="subtitle2">{produkt.title}</Typography>
                </div>

            </Paper>

          </Grid>


        </>



      ))}
    </Grid >
    </>
  )
}

export default App;
