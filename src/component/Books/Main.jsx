import React, { useState } from 'react'
import './style.css'
import Card from './Card'
import axios from 'axios'

const Main = () => {
  const [search, setSearch] = useState("")
  const [bookData, setData] = useState([])

  const searchBook = (event) => {
    if (event.key === "Enter") {
      axios.get('https://www.googleapis.com/books/v1/volumes?q=' + search + '&key=AIzaSyAiihxBKTdX52FiRtPJPBGtQvtf4QoHUjg').then(res => console.log(res.data.items)).catch(err => console.log(err))
    }

  }
  return (
    <div>
      <div className="header">
        <div className="row1">
          <h1>A room without books is like<br /> a body without a soul.</h1>
        </div>
        <div className="row2">
          <h2>Find Your Book</h2>
          <div className="search">
            <input type="text" placeholder='Enter Your Book Name' value={search} onChange={e => setSearch(e.target.value)} onKeyPress={searchBook} />
            <button><i className="fa fa-search"></i></button>
          </div>
          <div className="img">
            <img src="../../images/bg2.jpg" alt="" />
          </div>
        </div>
      </div>
      <div className="container">
        {
          <Card book={bookData} />
        }
      </div>
    </div>
  )
}

export default Main
