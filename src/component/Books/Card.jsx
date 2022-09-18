import React from 'react'

const Card = ({ book }) => {
  console.log(book)
  // return (
  //   <>
  //     {
  //       book.map((item) => {
  //         return (
  //           <>
  //           <div className="card">
  //             <img src="./images/cover.jpg" alt="" />
  //             <div className="bottom">
  //               <h3 className="title">React JS</h3>
  //               <p className="amount">&#8377;3290</p>
  //             </div>
  //           </div>
  //           </>
  //         ) 
  //       })
  //     }
  //   </>
  // )

  return (
    <>
    <div className="card">
      <img src="./images/cover.jpg" alt="" />
      <div className="bottom">
        <h3 className="title">React JS</h3>
        <p className="amount">&#8377;3290</p>
      </div>
    </div>
    </>
  ) 
}

export default Card