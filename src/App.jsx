import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './assets/components/Card'
import Header from './assets/components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='p-4'>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&family=Roboto&display=swap" rel="stylesheet"></link>
    <Header/>
     <Card/>
    </div>
  )
}

export default App
