import './App.css';
// App.js or your main component file
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Auth from './components/Auth'; // Adjust the path as necessary
import MessageScreen from './components/MessageScreen';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/messages" element={<MessageScreen/>}></Route>
        
      </Routes>
    </Router>
  );
}

export default App;

