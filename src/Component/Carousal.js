import React from 'react'
import Products from './Products'

const Carousal = () => {
  return (
    <>
    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active ">
      <img src="https://t4.ftcdn.net/jpg/02/92/36/69/360_F_292366989_6aUPestttHBB6wyZ1s34ClBEXqeb95I6.jpg" style={{  objectFit:'contain' }} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://qph.cf2.quoracdn.net/main-qimg-df80d0337846eed446e07fda2815ddf3-lq" style={{objectFit:'contain' }} class="d-block w-100" alt="..."/>
    </div>
   
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
  <Products/>
</div>
    </>
  )
}

export default Carousal