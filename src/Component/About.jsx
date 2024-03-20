import React from 'react'

const About = () => {
  return (
    <section className="about-section" style={{padding:'2rem'}}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <div className="wrapper">
              <div className="row no-gutters">
                <div className="col-md-6">
                  <div className="about-wrap w-100 p-lg-5 p-4">
                    <h3 className="mb-4">About Us</h3>
                    <p className="mb-4">
                     <p>We are a clothing website that offers a wide range of men's and women's clothing. Our collection includes the latest trends and styles, ensuring that you always look your best. We are committed to providing high-quality products at affordable prices.</p> 
                      <p>Welcome to our online fashion destination! Discover the latest trends, timeless classics, and everything in between with just a few clicks. </p>
                      <p>From sophisticated office attire to casual weekend wear and glamorous evening ensembles, our curated collections cater to every style and occasion. With high-quality products, personalized recommendations, and exceptional customer service, your perfect wardrobe awaits. Start exploring today!</p>
                    </p>
                  </div>
                </div>
                <div className="col-md-6 d-flex justify-content-center align-items-center">
                  <img src={"https://okcredit-blog-images-prod.storage.googleapis.com/2021/05/Clothing-Line1--1-.jpg"} alt="About Image" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About


