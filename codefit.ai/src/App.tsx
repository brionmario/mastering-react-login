import Home from '@/pages/home';
import {BrowserRouter, Routes, Route} from 'react-router';
import Chat from '@/pages/chat';
import {ProtectedRoute} from './components/protected-route';

function App() {
  return (
    <div className="font-(family-name:--font-space-grotesk)">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/chat"
            element={
              <ProtectedRoute redirectTo="/">
                <Chat />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
