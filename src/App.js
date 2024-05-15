import { useEffect, useState } from "react";
import axios from "axios";
import Paper from "@mui/material/Paper";
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";



const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});


function App() {

  const [filmy, nastavFilmy] = useState([])
  const [vybranyFilm, nastavVybranyFilm] = useState("")

  



  useEffect(() => {
    axios.get('https://api.sampleapis.com/cartoons/cartoons2D')
      .then(odpoved => {
        nastavFilmy(odpoved.data)
      }

      )

  }, [])

  return (
    <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Box sx={{ p: 3 }}>
            <Typography variant="h3" >Výběr filmu</Typography> <br />
            {vybranyFilm !== "" && (
                <>
                    <Typography variant="h6">Vybraný film je: {vybranyFilm}</Typography> <br />
                    <br /><br />
                </>
            )}
            <Grid container spacing={2}>
                {filmy.map(filmy => (
                    <Grid item xs={12} sm={5} md={4} lg={3} key={filmy.id} style={{ listStyle: "none" }}>
                        <Paper elevation={4} onClick={() => {
                            nastavVybranyFilm(filmy.title);
                        }} style={{ textAlign: "center", cursor: "pointer", padding: 10 }}>
                            <img src={filmy.image} alt={filmy.title} style={{ width: "100px" }} /> <br />
                            <Typography variant="overline">{filmy.title}</Typography> <br />
                            <Typography variant="overline">{filmy.year}</Typography>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </Box>
    </ThemeProvider>
);
}

export default App;
