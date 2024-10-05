import React from 'react'
import "./App.css"
import QRCode from 'react-qr-code'
import { useState } from 'react'

const App = () => {

  const [inputValue, setInputValue] = useState("")
  const [showQr, setShowQr] = useState(false)

  const generateQRCode = () => {

    if (!inputValue) {
      setShowQr(false)
      return alert("Enter URL Address to generate QR Code..!")
    }
    setShowQr(true)
  }

  const removeQrCode = () => {
    setShowQr(false)
  }

  return (
    <div className="container">
      <h1>React JS QR Code Generator 🔥</h1>
      <input type='text' placeholder='Type URL...'
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)} />
      <button onClick={generateQRCode}>Generate QR Code</button>
      {showQr && <div className='qr-container'>
        <QRCode value={inputValue} size={180} title={`${inputValue} QR Code`}
          style={{ borderRadius: "10px" }} />
        <button onClick={removeQrCode}>Remove QR</button>
      </div>}
    </div>
  )
}

export default App
