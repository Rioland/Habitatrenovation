const Carousel = () => {
      return ( 
            
            <div
  id="carouselExampleSlidesOnly carouselExampleAutoplaying"
  className="carousel slide"
  data-bs-ride="carousel"
>

      
  <div className="carousel-inner">
    <div className="carousel-item active">
   
      <img src="/images/slider.jpg" className="d-block w-100" alt="..." />
    </div>
    {/* <div className="carousel-item ">
      <img src="https://cdn11.bigcommerce.com/s-sryqni/images/stencil/original/carousel/449/BuyMore-2000x538.jpg?c=2" className="d-block w-100" alt="..." />
    </div> */}
    {/* <div className="carousel-item ">
      <img src="https://cdn11.bigcommerce.com/s-sryqni/images/stencil/original/carousel/463/Home-Page-Banner-2000X538.jpg?c=2" className="d-block w-100" alt="..." />
    </div> */}
    {/* <div className="carousel-item active">
      <img src="https://cdn11.bigcommerce.com/s-sryqni/images/stencil/original/carousel/460/getyourdoors-2000x538__87999.jpg?c=2" className="d-block w-100" alt="..." />
    </div> */}
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

       );
}
 
export default Carousel;