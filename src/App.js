// import logo from './logo.svg';
import './App.css';
import {signInWithGoogle} from "./Firebase"

function App() {
  return (
    <div className="App">
      <button onClick={signInWithGoogle}>Sign in with google</button>
    </div>
  );
}

export default App;
