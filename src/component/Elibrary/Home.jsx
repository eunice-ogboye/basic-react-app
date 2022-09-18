import React from 'react'
import './main.css'

const Home=()=> {
    return (
        <div>
          <div className="content">
            <h1>How do we do?</h1>
            <p className='rep'>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offerings</p>
            <div className="rate">
                <div className="rank">1</div>
                <div className="rank">2</div>
                <div className="rank">3</div>
                <div className="rank">4</div>
                <div className="rank">5</div>
            </div>
            <button className='btn'>SUBMIT</button> 
         </div> 
         
        </div>
    )
}

export default Home
