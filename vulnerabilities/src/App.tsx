import HomePage from '@/pages/home-page/home-page';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import RefPage from '@/pages/ref-page/ref-page';
import InnerHTMLPage from '@/pages/inner-html-page/inner-html-page';
import DefaultEscapingPage from '@/pages/default-escaping-page/default-escaping-page';
import DangerouslySetInnerHTMLPage from '@/pages/dangerously-set-inner-html-page/dangerously-set-inner-html-page';

function App() {
  return (
    <div className="font-(family-name:--font-space-grotesk)">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/default-escaping" element={<DefaultEscapingPage />} />
          <Route path="/ref" element={<RefPage />} />
          <Route path="/inner-html" element={<InnerHTMLPage />} />
          <Route path="/dangerously-set-inner-html" element={<DangerouslySetInnerHTMLPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
