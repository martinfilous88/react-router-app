import { useEffect, useState } from "react";
import Grid from '@mui/material/Grid';
import axios from "axios";
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';


function App() {

  const [kavy, nastavKavy] = useState([])
  const [vybranaKava, nastavVybranouKavu] = useState("")



  useEffect(() => {
    axios.get('https://api.sampleapis.com/coffee/hot')
      .then(odpoved => {
        nastavKavy(odpoved.data)
      }

      )

  }, [])

  return (
    <>


      <Paper>
        <Typography variant="subtitle1">
          {vybranaKava != "" && <span>Vybraná kává je: {vybranaKava}</span>}
        </Typography>
      </Paper>
      <Grid container spacing={2}>
      {kavy.map(kava => (

        <>


          <Grid item xs={2} key={kava.id} style={{ listStyle: "none" }}>
            <Paper onClick={() => nastavVybranouKavu(kava.title)} elevation={8} style={{ textAlign: "center" }}>
              <div className='coffee' key={kava.id} style={{ listStyleType: "none" }}>
                <img src={kava.image} style={{ width: "50px" }}></img>
                <Typography variant="subtitle2">{kava.title}</Typography>
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
