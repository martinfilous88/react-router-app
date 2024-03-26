import { Outlet, Link } from "react-router-dom";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import MuiLink from '@mui/material/Link'
import Button from '@mui/material/Button'

export default function Layout() {
    return (
        <>
            <nav>
                <ul>
                    <Button href="/react-portfolio/#/" variant="h5">Home</Button>
                    <Button href="/react-portfolio/#/pocitadlo" variant="h5">Počítadlo</Button>
                    <Button href="/react-portfolio/#/kavy" variant="h5">Seznam káv (použití API)</Button>
                    <Button href="/react-portfolio/#/ukolnicek" variant="h5">Úkolníček (použití MaterialUI)</Button>
                    <Button href="/react-portfolio/#/kalkulacka" variant="h5">Kalkulačka</Button>
                    <Button href="/react-portfolio/#/eshop" variant="h5">E-shop</Button>
                    <Button href="/react-portfolio/#/barva" variant="h5">Barva</Button>
                </ul>

            </nav>
            <Outlet />
        </>
    )
};