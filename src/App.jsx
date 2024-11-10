import React , {useEffect, useState} from 'react'
import {
  Home,
  Sidebar,
  Footer
} from "./index.js"

const App = () => {

    const [data , setData] = useState(null)
    const [loading , setLoading] = useState(false)

    const[showModal , setShowModal] = useState(false)

    const handleToggleModal = () => {
      setShowModal(!showModal)
    }
    
    useEffect(() => {
      async function fetchAPIData() {

        const NASA_KEY = import.meta.env.VITE_NASA_API_KEY

        const url =`https://api.nasa.gov/planetary/apod` + `?api_key=${NASA_KEY}`

        const today = (new Date()).toDateString()
        const localKey = `NASA-${today}`
        if (localStorage.getItem(localKey)) {
          const apiData = JSON.parse(localStorage.getItem(localKey))
          setData(apiData)
          console.log('Fetched from cache today')
          return
        }
        localStorage.clear()

        try{
          const res = await fetch(url)
          const apiData = await res.json()
          localStorage.setItem(localKey, JSON.stringify(apiData))
          setData(apiData)
          console.log('Fetched from API today')
        } catch(err){
          console.log(err.message);
        }
      }
      fetchAPIData()
    }, [])

    return (
      <div className='flex min-h-screen relative'>
        {data ? (<Home data={data}/>) : (
          <div className='h-screen w-full flex justify-center items-center'>
            Loading.....
          </div>
        )}
        {showModal && (<Sidebar data={data} handleToggleModal={handleToggleModal} />)}
        {data && (<Footer data={data} handleToggleModal={handleToggleModal} />)}
    </div>
  )
}

export default App
