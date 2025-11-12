import React, { createContext, useContext, useState, useEffect } from 'react';

const PortfolioDataContext = createContext();

export const PortfolioDataProvider = ({ children }) => {
  const [portfolioData, setPortfolioData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchPortfolioData = async () => {
    try {
      setLoading(true);
      const userId = '487217a5-0f64-4ea2-a733-ddd20307de37';
      const response = await fetch(
        `https://ntrfmbqoficxpmgkgpau.supabase.co/functions/v1/portfolio-api?user_id=${userId}`
      );
      const data = await response.json();
      setPortfolioData(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPortfolioData();
  }, []);

  return (
    <PortfolioDataContext.Provider value={{ 
      portfolioData, 
      loading, 
      error, 
      refetch: fetchPortfolioData 
    }}>
      {children}
    </PortfolioDataContext.Provider>
  );
};

export const usePortfolioData = () => {
  const context = useContext(PortfolioDataContext);
  if (!context) {
    throw new Error('usePortfolioData must be used within PortfolioDataProvider');
  }
  return context;
};

// For class components
export { PortfolioDataContext };
