import { useState } from 'react'
import Videoplayer from './Components/Videoplayer';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<Videoplayer/>
      </>
  )
}

export default App
