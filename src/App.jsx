import React , {useState} from 'react'
import {
  Home,
  Sidebar,
  Footer
} from "./index.js"

const App = () => {

    const[showModal , setShowModal] = useState(false)

    const handleToggleModal = () => {
      setShowModal(!showModal)
    }

    return (
      <div className='flex min-h-screen relative'>
        <Home/>
        {showModal && (<Sidebar handleToggleModal={handleToggleModal} />)}
        <Footer handleToggleModal={handleToggleModal} />
    </div>
  )
}

export default App
