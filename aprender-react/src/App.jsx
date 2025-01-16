import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Message from './message'


function App() {
  const [message, setMessage] = useState('Esse é meu primeiro projeto prático de React');

  const handleChangeMessage = () => {
    setMessage('Estou aprendendo React!');
  };

  return (
    <div>
      <h1>{message}</h1>
      <Message />
      <button onClick={handleChangeMessage}>Clique para mudar a mensagem</button>
    </div>
  );
}

export default App;