import React from 'react'

const Card = () => {
  return (
    <div className="card" style={{"width": "12rem"}}>
<img src="https://thumbs.dreamstime.com/z/golden-retriever-dog-21668976.jpg" className="card-img-top card-img" alt="..."/>

<div className="card-body">
<h5 className="card-title">Pupper</h5>
<p className="card-text">Look at this beautiful pup</p> 
<button>See more Pups</button>
</div>

</div>
    )
}

export default Card