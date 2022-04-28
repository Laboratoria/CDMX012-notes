import logo from '../img/logos/logo-white-h.svg';
import '../App.css';

export function SignUp() {
  return (
    <div className="Signup">
      <section className="Signup-header">
        <img src={logo} className="logo-vertical" alt="logo-vertical" />
        <h2>
        Sign up to create your first notes!
        </h2>
        <form>
            <input type="text" id="fname" name="fname" placeholder="Enter your first name"></input>
            <input type="text" id="email" name="lname" placeholder="Email"></input>
            <input type="text" id="password" name="lname" placeholder="Password"></input>
            <input type="submit"></input>
        </form>
      </section>
    </div>
  );
}

export default SignUp;
