// app.js

import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {
  const [letters, setLetters] = useState([])
  useEffect(() => {
    axios.get('/api/letters').then((response) => {
      setLetters(response.data)
    }).catch((error) => {
      console.error('Error fetching letters:', error)
    })
  })
  return (
    <div>
      <p>letter  number = {letters.length}</p>
      {
        letters.map((letter) => (
          <div key={letter}>{letter}</div>
        ))
      }
    </div>
  )
}

export default App

// 1:49:20