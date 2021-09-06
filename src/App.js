import React from 'react'
import axios from 'axios'

function App() {
  React.useEffect(() => {
    const getData = async () => {
      const res = await axios.get('/api/shoes')
      console.log(res.data)
    }
    getData()
  })

  return <h1>Hello World</h1>
}

export default App
