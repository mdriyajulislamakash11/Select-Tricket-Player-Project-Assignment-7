
import { useState } from 'react'
import './App.css'
import Banner from './components/Banner'
import Header from './components/Header'
import Toggle from './components/Toggle'

function App() {
  const [isActive, setIsActive] = useState({
    cart: true,
    state: "cart"
  });

  const hanleStateButton = (state) => {
    if(state === "cart"){
      setIsActive({
        cart: true,
        state: "cart"
      })
    }else{
      setIsActive({
        cart: false,
        state: "about"
      })
    };
  }


  return (
    <>
    <section className='w-11/12 mx-auto'>
    <Header />
    <Banner />

    <Toggle hanleStateButton={hanleStateButton} isActive={isActive}/>

    </section>
    </>
  )
}

export default App
