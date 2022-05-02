import logo from '../img/logos/logo-color-h.svg';
import '../App.css';
import { LogOut } from './Logout';

export function Notes()
{
    return (
        <div className="Notes">
            <section className="Notes-header">
                <img src={logo} className="logo-notes" alt="logo" />
                <aside><LogOut /></aside>
                <section className="Notes-container">
                    <p>
                    Este es el container
                    </p>
                </section>
            </section>
        </div>
    );
}
export default Notes;