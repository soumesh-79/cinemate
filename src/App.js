import { AllRoutes } from './routes/AllRoutes';
import './App.css';
import { Header } from './components/Header';
import { Footer } from './components';

function App() {
  return (
    <div className="App">
    <Header/>
    <AllRoutes/>
    <Footer/>
    </div>
  );
}

export default App;
