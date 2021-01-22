
import navegacao from './navegacao';
import NavBar from './components/layout/NavBar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import  DashBoard from './components/layout/DashBoard';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="container">
        <DashBoard />
      </div>
    </div>

    
      
    
  );
}

export default App;
