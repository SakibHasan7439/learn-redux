
import { useEffect, useRef } from 'react';
import {message} from 'antd';
import './App.css'

function App() {
  const divRef = useRef(null);

  useEffect(()=>{
    divRef.current.addEventListener('click', ()=>{
      message.success("Hey! don't pock me.");
    })
  }, []);
  

  return (
    <div ref={divRef}>Click me to hide me</div>

  )
}

export default App
