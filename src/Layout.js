import { Outlet, Link } from "react-router-dom";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Button from '@mui/material/Button';

export default function Layout(props) {
    return (
        <>
            <nav>
                <ul>
                    <Button style={{color: props.barva}} href="/react-router-app/#" variant="h5">Home</Button>
                    <Button style={{color: props.barva}} href="/react-router-app/#/kavy" variant="h5">Seznam animovaných filmů<span>&#128196;</span></Button>
                </ul>

            </nav>
            
        </>
    )
};