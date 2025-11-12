import Portfolio from './pages/portfolio';
import { PortfolioDataProvider } from './services/PortfolioDataService';


function App() {
  return (
    <PortfolioDataProvider>
      <Portfolio></Portfolio>
    </PortfolioDataProvider>
  );
}

export default App;
