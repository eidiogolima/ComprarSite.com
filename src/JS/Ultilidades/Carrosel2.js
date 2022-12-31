import React from 'react'

const Carrosel = ({...props}) => {
  return (
    <div id="carouselExampleControlsNoTouching" class="carousel slide carousel-dark" data-bs-touch="false">
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src={props.img1} className="d-block w-100" alt="..."/>
      </div>
      <div className="carousel-item">
        <img src={props.img2} className="d-block w-100" alt="..."/>
      </div>
      <div className="carousel-item">
        <img src={props.img3} className="d-block w-100" alt="..."/>
      </div>
    </div>
    <button className="carousel-control-prev cor-b-6" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next cor-b-6" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
  )
}

export default Carrosel