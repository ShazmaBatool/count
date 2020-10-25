import React, { useState } from 'react'

function App() {

  const [count, setCount] = useState(0)

  const handleUpdate = () => {
    setCount(count + 1)
  }

  return (
    <>
      <span className='badge badge-warning m-2'>{count === 0 ? 'Zero' : count}</span>
      <button className='btn btn-secondary m-2' onClick={handleUpdate}>+</button>
    </>
  )
}

export default App

