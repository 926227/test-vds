import React, { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { domain, strapi } from './constants'
import { parseHomePageData } from './helper'

const homePageDataUrl = `${domain}${strapi}/api/home-page?populate=*`

function App() {
  const [state, setState] = useState<Record<string, string>>({})

  useEffect(() => {
    fetch(homePageDataUrl)
      .then((res) => res.json())
      .then((res) => {
        const data = parseHomePageData(res)
        console.log(data)
        setState(data)
      })
      .catch((e) => console.log(e))
  }, [])

  return (
    <div className='App'>
      <header className='App-header'>
        <img
          src={state.img}
          className='App-logo'
          alt='logo'
        />
        <p>Привет друг!</p>
        <p>Название сайта: {state.name}</p>
        <a
          className='App-link'
          href='/strapi/admin'
          target='_blank'
          rel='noopener noreferrer'
        >
          Админка
        </a>
      </header>
    </div>
  )
}

export default App
