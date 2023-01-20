import logo from './logo.svg';
import './App.css';
import LoginForm from './components/LogInForm'
import SignUpForm from './components/SignUpForm'

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <hr/>
        <SignUpForm></SignUpForm>
        <LoginForm></LoginForm>
      </header>
    </div>
  );
}

export default App;
