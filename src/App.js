import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Layout from './components/Layout';
import Market from './pages/Market';
import Index from './pages/Index';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path='market/:currencyPair' element={<Layout><Market/></Layout>} />
        <Route exact path='/' element={<Layout><Index/></Layout>} />
      </Routes>
    </Router>
  );
}

export default App;
