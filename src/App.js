import './App.css';
import Layout from './Components/MainPage/Layout';
import NavBar from './Components/NavBar/NavBar';
const bgimage = new URL('./Images/Background.jpg', import.meta.url)

function App() {
  return (
    <div className="App">
        <img className="background" src={ bgimage } alt="bg" />
        <NavBar />
        <Layout />
    </div>
  );
}

export default App;