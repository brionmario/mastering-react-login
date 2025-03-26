import Home from '@/pages/home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Chat from '@/pages/chat';

function App() {
  return (
    <div className="font-(family-name:--font-space-grotesk)">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
