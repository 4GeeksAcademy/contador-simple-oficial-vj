import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import Home from './components/Home';
import SecondsCounter from './components/SecondsCounter';



let time = 0

function contador(){
ReactDOM.createRoot(document.getElementById('root')).render(
<SecondsCounter seconds={time}/>
)
time++
}

setInterval(contador, 1000)
