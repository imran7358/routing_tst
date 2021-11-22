
import {BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import Footer from './component/footer';
import Header from './component/header';
import MyRoutes from './routes';
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <MyRoutes />
        <Footer />
      </Router>

    </div>
  );
}

export default App;
