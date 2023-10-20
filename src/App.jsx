import React, { useState, useEffect } from 'react';
import TaskApp from './Components/Main/TaskApp';
import LoadingScreen from './Components/Loading/LoadingScreen'; // Importe o componente de tela de carregamento
import Header from './Components/Header/Header'

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simule um tempo de carregamento (3 segundos neste exemplo)
    setTimeout(() => {
      setIsLoading(false);
    }, 2500);
  }, []);

  return (
    <>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <div>
        <Header />
        <TaskApp />
      </div>
      )}
    </>
  );
}

export default App;
