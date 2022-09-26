import './App.css';
import Content from './Components/Content';
import Header from './Components/Header';
import InstContainer from './Components/InstContainer';

function App() {
  return (
    <div className="App">
      <Header />
      <Content />
      <InstContainer />
      <footer>
        <p>Andres Santiago Diez Tuberquia @2022 - devchallenges.io</p>
      </footer>
    </div>
  );
}

export default App;
