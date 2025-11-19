import '../src/styles/App.scss'
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './router/AppRouter';
import { useEffect, useState } from 'react';
import { AuthContext } from './context';

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    // проверяем авторизацию, ждём
    if(localStorage.getItem('auth') === 'true') {
      setIsAuth(true);
    }
    // убираем лодер
    setLoading(false)
  })

  return (
    <div className='App'>
      <AuthContext.Provider value={{
        isAuth,
        setIsAuth,
        isLoading
      }}>
        <BrowserRouter>
          <AppRouter/>
        </BrowserRouter>
      </AuthContext.Provider>
    </div>
  )
}

export default App
