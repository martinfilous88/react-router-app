import { Outlet, Link } from "react-router-dom";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

export default function Layout() {
    return (
        <>
        <nav>
            <ul>
                <li>
                    <Link href="#" underline="hover" to="/">{'Home'}</Link>
                </li>
                <li>
                    <Link href="#" underline="hover" to="/pocitadlo">{'Počítadlo (použití Local Storage)'}</Link>
                </li>
                <li>
                    <Link href="#" underline="hover" to="/kavy">{'Seznam káv (použití API)'}</Link>
                </li>
                <li>
                    <Link href="#" underline="hover" to="/ukolnicek">{'Úkolníček (použití MaterialUI)'} </Link>
                </li>
                <li>
                <Link href="#" underline="hover" to="/kalkulacka">{'Kalkulačka (načtení vstupu)'}</Link>
                </li>

            </ul>
        </nav>
        <Outlet />
        </>
    )
};