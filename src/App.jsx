import { useState } from 'react'
import Card from './Card'

function App() {
  const [count, setCount] = useState(0)
  const Desc = ["first","second","third","fourth","fifth","sixth"]

  return (
    <>
    <Card adNr={count + 1} adDesc={Desc[count]} adContact="***" />
    <Card adNr={count + 2} adDesc={Desc[count + 1]} adContact="***" />
    <Card adNr={count + 3} adDesc={Desc[count + 2]} adContact="***" />
    <Card adNr={count + 4} adDesc={Desc[count + 3]} adContact="***" />
    <Card adNr={count + 5} adDesc={Desc[count + 4]} adContact="***" />
    <Card adNr={count + 6} adDesc={Desc[count + 5]} adContact="***" />
    </>
  )
}

export default App
