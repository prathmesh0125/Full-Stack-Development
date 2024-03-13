import { useState, useEffect } from "react";

function App() {
  const [exchangeData, setExchangeData] = useState({});
  const [bankData, setBankData] = useState({});

  useEffect(() => {
    setTimeout(() => {
      setBankData({ income: 100 });
    }, 3000);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setExchangeData({
        returns: 100,
      });
    }, 1000);
  }, []);

  const incometax = (bankData.income + exchangeData.returns) * 0.3;

  return (
    <>
      <div>hi there, your income tax returns are {incometax}</div>
    </>
  );
}

export default App;
