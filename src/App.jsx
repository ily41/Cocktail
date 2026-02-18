import React from 'react'
import gsap from 'gsap'
import {ScrollTrigger, SplitTextPlugin} from 'gsap/all'

gsap.registerPlugin(ScrollTrigger, SplitTextPlugin)

const App = () => {
  return (
    <div>App</div>
  )
}

export default App