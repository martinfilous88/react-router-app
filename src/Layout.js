import { Outlet, Link } from "react-router-dom";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import MaterialUILink from '@mui/material/Link'
import Button from '@mui/material/Button'

export default function Layout() {
    return (
        <>
            <nav>
                <ul>
                    <Link style={{ margin: 8 }} href="#" underline="hover" to="/"><MaterialUILink component="button" underline="none" variant="h5"><Button variant="contained" style={{backgroundColor: "black"}}>Home</Button></MaterialUILink></Link>
                    <Link style={{ margin: 8 }} href="#" underline="hover" to="/pocitadlo"><MaterialUILink component="button" underline="none" variant="h5"><Button variant="contained" style={{backgroundColor: "black"}}>Počítadlo (použití Local Storage)</Button></MaterialUILink></Link>
                    <Link style={{ margin: 8 }} href="#" underline="hover" to="/kavy"><MaterialUILink component="button" underline="none" variant="h5"><Button variant="contained" style={{backgroundColor: "black"}}>Seznam káv (použití API)</Button></MaterialUILink></Link>
                    <Link style={{ margin: 8 }} href="#" underline="hover" to="/ukolnicek"><MaterialUILink component="button" underline="none" variant="h5"><Button variant="contained" style={{backgroundColor: "black"}}>Úkolníček (použití MaterialUI)</Button></MaterialUILink></Link>
                    <Link style={{ margin: 8 }} href="#" underline="hover" to="/kalkulacka"><MaterialUILink component="button" underline="none" variant="h5"><Button variant="contained" style={{backgroundColor: "black"}}>Kalkulačka (načtení vstupu)</Button></MaterialUILink></Link>
                    <Link style={{ margin: 8}} href="#" underline="hover" to="/Eshop"><MaterialUILink component="button" underline="none" variant="h5"><Button variant="contained"  style={{backgroundColor: "black"}}>E-Shop</Button></MaterialUILink></Link>
                </ul>
            </nav>
            <Outlet />
        </>
    )
};