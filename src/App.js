import logo from "./logo.svg";
import "./App.css";
import SignUpForm from "./SignUpForm";

function App() {
  return (
    <div className='App'>
      <div>
        <h1>Learn to code by watching others</h1>
        <p>
          See how experienced developers solve problems in real-time. Watching
          scripted tutorials is great, but understanding how developers think is
          invaluable.
        </p>
      </div>
      <div>
        <button>Try it free 7 days then $20/mo. thereafter</button>
        <SignUpForm />
      </div>
    </div>
  );
}

export default App;
