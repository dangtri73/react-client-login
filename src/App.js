// import logo from './logo.svg';
import './App.css';
import {signInWithGoogle} from "./Firebase"

function App() {
  return (
    <div className="App">
      <h1> Hello from gentech!!! </h1>
      <button onClick={signInWithGoogle}>Sign in with google</button>
      <h3>isSignup: {localStorage.getItem('isSignup')}</h3>
      <h3>token: {localStorage.getItem('token')}</h3>
      <h3>user: {localStorage.getItem('user')}</h3>
    </div>
  );
}

export default App;
