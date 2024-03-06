import Button from '@mui/material/Button';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

export default function PolozkaUkolu({ ukol, poradi, fceSmazat, fceSpln }) {
    return(
        <>
        <span>{poradi}</span>
        {!ukol.splneno && <span className="text-ukolu">{ukol.text}</span>}
        {ukol.splneno && <span className="splneny-ukol">{ukol.text}</span>}
        <Button variant="contained" onClick={() => fceSmazat(poradi)}>X</Button>
        <Button variant="contained" onClick={() => fceSpln(poradi)}>✔</Button>
        <br></br>
        </>
    )
}