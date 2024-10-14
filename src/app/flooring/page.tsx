import "./flooring.css"

const Flooring = () => {
  return (
    <div className="flooring">
      <div className="container justify-content-center align-items-center ">
        <div className="container my-4">
          <p>
            Home / <span>Flooring</span>
          </p>
          <br />
          <h1>FLOORING</h1>
          <br />
          <h3>SHOP TILE, STONE, LAMINATE, HARDWOOD, AND VINYL FLOORING</h3>
        </div>
        <br />
        <br />
        <div className="container my-4">
          <h5>SUBCATEGORIES:</h5>
          <br />
          <div className="row">
            <div className="col-md-12 d-flex justify-content-start">
              <div className="flex-container">
                <div className="mb-3">
                  <img src="images/1.jpg" className="card-img-top" alt="Image 1" />
                  <h6>Tile</h6>
                </div>
                <div className="mb-3">
                  <img src="images/2.jpg" className="card-img-top" alt="Image 2" />
                  <h6>Vinyl Plank Flooring</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container mt-4 bg-light">
          <div className="row">
            {/* Left Column */}
            <div className="col-md-4 bg-white">
              <h5>Material</h5>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="checkbox1"
                />
                <label className="form-check-label" htmlFor="checkbox1">
                  Porcelain (21)
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="checkbox2"
                />
                <label className="form-check-label" htmlFor="checkbox2">
                  Ceramic (7)
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="checkbox3"
                />
                <label className="form-check-label" htmlFor="checkbox3">
                  Stone (1)
                </label>
                <hr />
              </div>
              <h5>Price Per Sq. Ft.</h5>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="checkbox2"
                />
                <label className="form-check-label" htmlFor="checkbox2">
                  $0.00-$0.25 (1)
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="checkbox2"
                />
                <label className="form-check-label" htmlFor="checkbox2">
                  $0.00-$0.99 (12)
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="checkbox2"
                />
                <label className="form-check-label" htmlFor="checkbox2">
                  $1.00-$1.99 (4)
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="checkbox2"
                />
                <label className="form-check-label" htmlFor="checkbox2">
                  $2.00-$2.99 (1)
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="checkbox2"
                />
                <label className="form-check-label" htmlFor="checkbox2">
                  $3.00-$3.99 (10)
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="checkbox2"
                />
                <label className="form-check-label" htmlFor="checkbox2">
                  $9.00-$9.99 (1)
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="checkbox2"
                />
                <label className="form-check-label" htmlFor="checkbox2">
                  $12.00-$12.99 (1)
                </label>
                <hr />
              </div>
              <h5>Type</h5>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="checkbox2"
                />
                <label className="form-check-label" htmlFor="checkbox2">
                  Tile (6)
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="checkbox2"
                />
                <label className="form-check-label" htmlFor="checkbox2">
                  Vinyl (5)
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="checkbox2"
                />
                <label className="form-check-label" htmlFor="checkbox2">
                  Pebble (1)
                </label>
                <hr />
              </div>
              <h5>Size</h5>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="checkbox2"
                />
                <label className="form-check-label" htmlFor="checkbox2">
                  12x12 (3)
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="checkbox2"
                />
                <label className="form-check-label" htmlFor="checkbox2">
                  12x24 (5)
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="checkbox2"
                />
                <label className="form-check-label" htmlFor="checkbox2">
                  24x24 (5)
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="checkbox2"
                />
                <label className="form-check-label" htmlFor="checkbox2">
                  24X48 (4)
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="checkbox2"
                />
                <label className="form-check-label" htmlFor="checkbox2">
                  8X48 (4)
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="checkbox2"
                />
                <label className="form-check-label" htmlFor="checkbox2">
                  3x6 (2)
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="checkbox2"
                />
                <label className="form-check-label" htmlFor="checkbox2">
                  4x12 (2)
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="checkbox2"
                />
                <label className="form-check-label" htmlFor="checkbox2">
                  24X24 (1)
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="checkbox2"
                />
                <label className="form-check-label" htmlFor="checkbox2">
                  24x48 (1)
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="checkbox2"
                />
                <label className="form-check-label" htmlFor="checkbox2">
                  4x8 (1)
                </label>
                <hr />
              </div>
              <h5>FINISH</h5>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="checkbox2"
                />
                <label className="form-check-label" htmlFor="checkbox2">
                  Matte (10)
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="checkbox2"
                />
                <label className="form-check-label" htmlFor="checkbox2">
                  Polished (10)
                </label>
                <hr />
              </div>
              <h5>Free Shipping</h5>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="checkbox2"
                />
                <label className="form-check-label" htmlFor="checkbox2">
                  Free (3)
                </label>
                <hr />
              </div>
              <h5>Color</h5>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="checkbox2"
                />
                <label className="form-check-label" htmlFor="checkbox2">
                  Brown (16)
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="checkbox2"
                />
                <label className="form-check-label" htmlFor="checkbox2">
                  Beige (11)
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="checkbox2"
                />
                <label className="form-check-label" htmlFor="checkbox2">
                  Grey (4)
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="checkbox2"
                />
                <label className="form-check-label" htmlFor="checkbox2">
                  White (4)
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="checkbox2"
                />
                <label className="form-check-label" htmlFor="checkbox2">
                  Black (2)
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="checkbox2"
                />
                <label className="form-check-label" htmlFor="checkbox2">
                  Gold (2)
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="checkbox2"
                />
                <label className="form-check-label" htmlFor="checkbox2">
                  Gray (2)
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="checkbox2"
                />
                <label className="form-check-label" htmlFor="checkbox2">
                  Grey Size (1)
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="checkbox2"
                />
                <label className="form-check-label" htmlFor="checkbox2">
                  Taupe (1)
                </label>
                <hr />
              </div>
              <h5>STYLE</h5>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="checkbox2"
                />
                <label className="form-check-label" htmlFor="checkbox2">
                  Marble-look tile (4)
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="checkbox2"
                />
                <label className="form-check-label" htmlFor="checkbox2">
                  Wood-look (4)
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="checkbox2"
                />
                <label className="form-check-label" htmlFor="checkbox2">
                  Marble Look tile (1)
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="checkbox2"
                />
                <label className="form-check-label" htmlFor="checkbox2">
                  Stone-look tile (1)
                </label>
                <hr />
              </div>
              <h5>INVENTORY</h5>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="checkbox2"
                />
                <label className="form-check-label" htmlFor="checkbox2">
                  In Stock (39)
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="checkbox2"
                />
                <label className="form-check-label" htmlFor="checkbox2">
                  Out of Stock (1)
                </label>
              </div>
            </div>
            {/* Right Column */}
            <div className="col-md-8">
              <div className="results-info">
                <p className="text-muted">Showing 1 - 30 of 40 results</p>
              </div>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Sort By: <span>Bestselling</span>
                </a>
              </li>
              <div className="row">
                <div className="col-md-4 mb-4">
                  <div className="card">
                    <img
                      src="./images/1.webp"
                      className="card-img-top"
                      alt="Image 1"
                    />
                    <div className="card-body">
                      <button
                        type="button"
                        className="btn btn-outline-secondary"
                      >
                        Quick View
                      </button>
                      <button type="button" className="btn btn-dark">
                        Add To Cart
                      </button>
                    </div>
                  </div>
                  <p>
                    Structured Effects 3 in. x 6 in. Glazed <br />
                    Ceramic Crackled Pearl Subway Tile <br />
                    $1.50
                  </p>
                </div>
                <div className="col-md-4 mb-4">
                  <div className="card">
                    <img
                      src="./images/2.jpg"
                      className="card-img-top"
                      alt="Image 2"
                    />
                    <div className="card-body">
                      <button
                        type="button"
                        className="btn btn-outline-secondary"
                      >
                        Quick View
                      </button>
                      <button type="button" className="btn btn-dark">
                        Add To Cart
                      </button>
                    </div>
                  </div>
                  <p>
                    Messina Beige Polished Porcelain Tile <br />
                    24 in x 48 in | $1.59 Sq. ft. <br />
                    $25.44
                  </p>
                </div>
                <div className="col-md-4 mb-4">
                  <div className="card">
                    <img
                      src="./images/3.jpg"
                      className="card-img-top"
                      alt="Image 3"
                    />
                    <div className="card-body">
                      <button
                        type="button"
                        className="btn btn-outline-secondary"
                      >
                        Quick View
                      </button>
                      <button type="button" className="btn btn-dark">
                        Add To Cart
                      </button>
                    </div>
                  </div>
                  <p>
                    Daltile Marble Attache Hexagon <br />
                    Ceramic Mosaic Floor and Wall Tile <br />
                    $6.99 <br />
                    $17.50
                  </p>
                </div>
                <div className="col-md-4 mb-4">
                  <div className="card">
                    <img
                      src="./images/4.jpg"
                      className="card-img-top"
                      alt="Image 4"
                    />
                    <div className="card-body">
                      <button
                        type="button"
                        className="btn btn-outline-secondary"
                      >
                        Quick View
                      </button>
                      <button type="button" className="btn btn-dark">
                        Add To Cart
                      </button>
                    </div>
                  </div>
                  <p>
                    Panda Oak SPC Vinyl Plank with <br />
                    Underlayment | $2.39 s.f. <br />
                    $50.33 <br />
                    $91.48
                  </p>
                </div>
                <div className="col-md-4 mb-4">
                  <div className="card">
                    <img
                      src="./images/5.jpg"
                      className="card-img-top"
                      alt="Image 5"
                    />
                    <div className="card-body">
                      <button
                        type="button"
                        className="btn btn-outline-secondary"
                      >
                        Quick View
                      </button>
                      <button type="button" className="btn btn-dark">
                        Add To Cart
                      </button>
                    </div>
                  </div>
                  <p>
                    Titan Sepia Polished Porcelain Tile <br />
                    12x24 | $0.79 per sq. ft. <br />
                    $12.64 <br />
                    $57.28
                  </p>
                </div>
                <div className="col-md-4 mb-4">
                  <div className="card">
                    <img
                      src="./images/6.jpg"
                      className="card-img-top"
                      alt="Image 6"
                    />
                    <div className="card-body">
                      <button
                        type="button"
                        className="btn btn-outline-secondary"
                      >
                        Quick View
                      </button>
                      <button type="button" className="btn btn-dark">
                        Add To Cart
                      </button>
                    </div>
                  </div>
                  <p>
                    Titan Sepia Polished Porcelain Tile <br />
                    24x24 | $0.55 per sq. ft. <br />
                    $11.00 <br />
                    $57.28
                  </p>
                </div>
                <div className="col-md-4 mb-4">
                  <div className="card">
                    <img
                      src="./images/7.png"
                      className="card-img-top"
                      alt="Image 7"
                    />
                    <div className="card-body">
                      <button
                        type="button"
                        className="btn btn-outline-secondary"
                      >
                        Quick View
                      </button>
                      <button type="button" className="btn btn-dark">
                        Add To Cart
                      </button>
                    </div>
                  </div>
                  <p>
                    FLOORING SAMPLE <br />
                    $10.00
                  </p>
                </div>
                <div className="col-md-4 mb-4">
                  <div className="card">
                    <img
                      src="./images/8.jpg"
                      className="card-img-top"
                      alt="Image 8"
                    />
                    <div className="card-body">
                      <button
                        type="button"
                        className="btn btn-outline-secondary"
                      >
                        Quick View
                      </button>
                      <button type="button" className="btn btn-dark">
                        Add To Cart
                      </button>
                    </div>
                  </div>
                  <p>
                    Bronze Oak SPC Vinyl Plank with <br />
                    Underlayment | $2.39 s.f. <br />
                    $50.33 <br />
                    $91.48
                  </p>
                </div>
                <div className="col-md-4 mb-4">
                  <div className="card">
                    <img
                      src="./images/9.jpg"
                      className="card-img-top"
                      alt="Image 9"
                    />
                    <div className="card-body">
                      <button
                        type="button"
                        className="btn btn-outline-secondary"
                      >
                        Quick View
                      </button>
                      <button type="button" className="btn btn-dark">
                        Add To Cart
                      </button>
                    </div>
                  </div>
                  <p>
                    A029 Porcelain Tile 12 in x 24 in | $1.29 <br />
                    s.f. <br />
                    $20.12 <br />
                    $26.92
                  </p>
                </div>
                <div className="col-md-4 mb-4">
                  <div className="card">
                    <img
                      src="./images/10.jpg"
                      className="card-img-top"
                      alt="Image 10"
                    />
                    <div className="card-body">
                      <button
                        type="button"
                        className="btn btn-outline-secondary"
                      >
                        Quick View
                      </button>
                      <button type="button" className="btn btn-dark">
                        Add To Cart
                      </button>
                    </div>
                  </div>
                  <p>
                    Eleganza Reactions Brown Matte <br />
                    Porcelain Tile 12x24 | $0.99 s.f. <br />
                    $15.34
                  </p>
                </div>
                <div className="col-md-4 mb-4">
                  <div className="card">
                    <img
                      src="./images/11.jpg"
                      className="card-img-top"
                      alt="Image 11"
                    />
                    <div className="card-body">
                      <button
                        type="button"
                        className="btn btn-outline-secondary"
                      >
                        Quick View
                      </button>
                      <button type="button" className="btn btn-dark">
                        Add To Cart
                      </button>
                    </div>
                  </div>
                  <p>
                    Iris Sable 24x24 Honed Porcelain Tile - <br />
                    $0.49 s.f. <br />
                    $7.84 <br />
                    $41.28
                  </p>
                </div>
                <div className="col-md-4 mb-4">
                  <div className="card">
                    <img
                      src="./images/12.jpg"
                      className="card-img-top"
                      alt="Image 12"
                    />
                    <div className="card-body">
                      <button
                        type="button"
                        className="btn btn-outline-secondary"
                      >
                        Quick View
                      </button>
                      <button type="button" className="btn btn-dark">
                        Add To Cart
                      </button>
                    </div>
                  </div>
                  <p>
                    MSI White Polished Pebble Mesh- <br />
                    Mounted Mosaic Tile 12 in x 12 in <br />
                    $7.99 <br />
                    $10.89
                  </p>
                </div>
                <div className="col-md-4 mb-4">
                  <div className="card">
                    <img
                      src="./images/13.jpg"
                      className="card-img-top"
                      alt="Image 13"
                    />
                    <div className="card-body">
                      <button
                        type="button"
                        className="btn btn-outline-secondary"
                      >
                        Quick View
                      </button>
                      <button type="button" className="btn btn-dark">
                        Add To Cart
                      </button>
                    </div>
                  </div>
                  <p>
                    Titan Umber Porcelain Tile Matte 12x24 <br />
                    | $0.55 per sq. ft. <br />
                    $8.76 <br />
                    $50.88
                  </p>
                </div>
                <div className="col-md-4 mb-4">
                  <div className="card">
                    <img
                      src="./images/14.jpg"
                      className="card-img-top"
                      alt="Image 14"
                    />
                    <div className="card-body">
                      <button
                        type="button"
                        className="btn btn-outline-secondary"
                      >
                        Quick View
                      </button>
                      <button type="button" className="btn btn-dark">
                        Add To Cart
                      </button>
                    </div>
                  </div>
                  <p>
                    Black 4x12 Subway Ceramic Tile <br />
                    $29.99
                  </p>
                </div>
                <div className="col-md-4 mb-4">
                  <div className="card">
                    <img
                      src="./images/15.jpg"
                      className="card-img-top"
                      alt="Image 15"
                    />
                    <div className="card-body">
                      <button
                        type="button"
                        className="btn btn-outline-secondary"
                      >
                        Quick View
                      </button>
                      <button type="button" className="btn btn-dark">
                        Add To Cart
                      </button>
                    </div>
                  </div>
                  <p>
                    Grey 4x8 Beveled Subway Ceramic Tile <br />
                    $25.99
                  </p>
                </div>
                <div className="col-md-4 mb-4">
                  <div className="card">
                    <img
                      src="./images/16.webp"
                      className="card-img-top"
                      alt="Image 16"
                    />
                    <div className="card-body">
                      <button
                        type="button"
                        className="btn btn-outline-secondary"
                      >
                        Quick View
                      </button>
                      <button type="button" className="btn btn-dark">
                        Add To Cart
                      </button>
                    </div>
                  </div>
                  <p>
                    Structured Effects 3 in. x 6 in. Glazed <br />
                    Ceramic Crackled Pebble Subway Tile <br />
                    $1.50
                  </p>
                </div>
                <div className="col-md-4 mb-4">
                  <div className="card">
                    <img
                      src="./images/17.webp"
                      className="card-img-top"
                      alt="Image 17"
                    />
                    <div className="card-body">
                      <button
                        type="button"
                        className="btn btn-outline-secondary"
                      >
                        Quick View
                      </button>
                      <button type="button" className="btn btn-dark">
                        Add To Cart
                      </button>
                    </div>
                  </div>
                  <p>
                    Structured Effects 3 in. x 6 in. Glazed <br />
                    Ceramic Balanced Taupe Subway Tile <br />
                    $1.50
                  </p>
                </div>
                <div className="col-md-4 mb-4">
                  <div className="card">
                    <img
                      src="./images/18.jpg"
                      className="card-img-top"
                      alt="Image 18"
                    />
                    <div className="card-body">
                      <button
                        type="button"
                        className="btn btn-outline-secondary"
                      >
                        Quick View
                      </button>
                      <button type="button" className="btn btn-dark">
                        Add To Cart
                      </button>
                    </div>
                  </div>
                  <p>
                    MS International Sande Grey 24x48 <br />
                    Polished Rectified Porcelain Floor and <br />
                    Wall Tile | $3.29 sq. ft. <br />
                    $52.64
                  </p>
                </div>
                <div className="col-md-4 mb-4">
                  <div className="card">
                    <img
                      src="./images/19.jpg"
                      className="card-img-top"
                      alt="Image 19"
                    />
                    <div className="card-body">
                      <button
                        type="button"
                        className="btn btn-outline-secondary"
                      >
                        Quick View
                      </button>
                      <button type="button" className="btn btn-dark">
                        Add To Cart
                      </button>
                    </div>
                  </div>
                  <p>
                    MS International Sande Ivory 24x48 <br />
                    Polished Rectified Porcelain Floor and <br />
                    Wall Tile | $3.29 sq. ft. <br />
                    $52.64
                  </p>
                </div>
                <div className="col-md-4 mb-4">
                  <div className="card">
                    <img
                      src="./images/20.jpg"
                      className="card-img-top"
                      alt="Image 20"
                    />
                    <div className="card-body">
                      <button
                        type="button"
                        className="btn btn-outline-secondary"
                      >
                        Quick View
                      </button>
                      <button type="button" className="btn btn-dark">
                        Add To Cart
                      </button>
                    </div>
                  </div>
                  <p>
                    MS International Aria Bianco 24x48 <br />
                    Polished Rectified Porcelain Floor and <br />
                    Wall Tile | $2.99 sq. ft. <br />
                    $47.84
                  </p>
                </div>
                <div className="col-md-4 mb-4">
                  <div className="card">
                    <img
                      src="./images/21.webp"
                      className="card-img-top"
                      alt="Image 21"
                    />
                    <div className="card-body">
                      <button
                        type="button"
                        className="btn btn-outline-secondary"
                      >
                        Quick View
                      </button>
                      <button type="button" className="btn btn-dark">
                        Add To Cart
                      </button>
                    </div>
                  </div>
                  <p>
                    La Belle Purity Penny Ceramic Mosaic <br />
                    $3.99 <br />
                    $6.99
                  </p>
                </div>
                <div className="col-md-4 mb-4">
                  <div className="card">
                    <img
                      src="./images/22.webp"
                      className="card-img-top"
                      alt="Image 22"
                    />
                    <div className="card-body">
                      <button
                        type="button"
                        className="btn btn-outline-secondary"
                      >
                        Quick View
                      </button>
                      <button type="button" className="btn btn-dark">
                        Add To Cart
                      </button>
                    </div>
                  </div>
                  <p>
                    I579 Famed White Polished Porcelain <br />
                    Tile 24X24 | $1.29 per sq. ft. <br />
                    $19.61
                  </p>
                </div>
                <div className="col-md-4 mb-4">
                  <div className="card">
                    <img
                      src="./images/23.jpg"
                      className="card-img-top"
                      alt="Image 23"
                    />
                    <div className="card-body">
                      <button
                        type="button"
                        className="btn btn-outline-secondary"
                      >
                        Quick View
                      </button>
                      <button type="button" className="btn btn-dark">
                        Add To Cart
                      </button>
                    </div>
                  </div>
                  <p>
                    I616 Marble Obsession Gray Tile 12x24| <br />
                    $1.29 per sq. ft. <br />
                    $21.72
                  </p>
                </div>
                <div className="col-md-4 mb-4">
                  <div className="card">
                    <img
                      src="./images/24.webp"
                      className="card-img-top"
                      alt="Image 24"
                    />
                    <div className="card-body">
                      <button
                        type="button"
                        className="btn btn-outline-secondary"
                      >
                        Quick View
                      </button>
                      <button type="button" className="btn btn-dark">
                        Add To Cart
                      </button>
                    </div>
                  </div>
                  <p>
                    I594 Tile 24x24 | $1.29 per sq. ft. <br />
                    $19.61
                  </p>
                </div>
                <div className="col-md-4 mb-4">
                  <div className="card">
                    <img
                      src="./images/25.webp"
                      className="card-img-top"
                      alt="Image 25"
                    />
                    <div className="card-body">
                      <button
                        type="button"
                        className="btn btn-outline-secondary"
                      >
                        Quick View
                      </button>
                      <button type="button" className="btn btn-dark">
                        Add To Cart
                      </button>
                    </div>
                  </div>
                  <p>
                    San Pedro Wood Look Beige Tile 8x48 <br />
                    Rectified Porcelain Floor and Wall for <br />
                    Interior or Exterior - $3.29 sq. ft. <br />
                    $41.09
                  </p>
                </div>
                <div className="col-md-4 mb-4">
                  <div className="card">
                    <img
                      src="./images/26.webp"
                      className="card-img-top"
                      alt="Image 26"
                    />
                    <div className="card-body">
                      <button
                        type="button"
                        className="btn btn-outline-secondary"
                      >
                        Quick View
                      </button>
                      <button type="button" className="btn btn-dark">
                        Add To Cart
                      </button>
                    </div>
                  </div>
                  <p>
                    San Pedro Wood Look Brown Tile 8x48 <br />
                    Rectified Porcelain Floor and Wall for <br />
                    Interior or Exterior - $3.29 sq. ft. <br />
                    $41.09
                  </p>
                </div>
                <div className="col-md-4 mb-4">
                  <div className="card">
                    <img
                      src="./images/27.jpg"
                      className="card-img-top"
                      alt="Image 27"
                    />
                    <div className="card-body">
                      <button
                        type="button"
                        className="btn btn-outline-secondary"
                      >
                        Quick View
                      </button>
                      <button type="button" className="btn btn-dark">
                        Add To Cart
                      </button>
                    </div>
                  </div>
                  <p>
                    San Pedro Wood Look Honey Tile 8x48 <br />
                    Rectified Porcelain Floor and Wall for <br />
                    Interior or Exterior - $3.29 sq. ft. <br />
                    $41.09
                  </p>
                </div>
                <div className="col-md-4 mb-4">
                  <div className="card">
                    <img
                      src="./images/28.jpg"
                      className="card-img-top"
                      alt="Image 28"
                    />
                    <div className="card-body">
                      <button
                        type="button"
                        className="btn btn-outline-secondary"
                      >
                        Quick View
                      </button>
                      <button type="button" className="btn btn-dark">
                        Add To Cart
                      </button>
                    </div>
                  </div>
                  <p>
                    San Pedro Wood Look Light Beige Tile <br />
                    8x48 Rectified Porcelain Floor and <br />
                    Wall for Interior or Exterior - $3.29 sq. ft. <br />
                    $41.09
                  </p>
                </div>
                <div className="col-md-4 mb-4">
                  <div className="card">
                    <img
                      src="./images/29.jpg"
                      className="card-img-top"
                      alt="Image 29"
                    />
                    <div className="card-body">
                      <button
                        type="button"
                        className="btn btn-outline-secondary"
                      >
                        Quick View
                      </button>
                      <button type="button" className="btn btn-dark">
                        Add To Cart
                      </button>
                    </div>
                  </div>
                  <p>
                    Milan Light Grey Tile 24x48 Matte <br />
                    Rectified Porcelain Floor and Wall for <br />
                    Interior or Exterior - $3.29 sq. ft. <br />
                    $50.63
                  </p>
                </div>
                <div className="col-md-4 mb-4">
                  <div className="card">
                    <img
                      src="./images/30.jpg"
                      className="card-img-top"
                      alt="Image 30"
                    />
                    <div className="card-body">
                      <button
                        type="button"
                        className="btn btn-outline-secondary"
                      >
                        Quick View
                      </button>
                      <button type="button" className="btn btn-dark">
                        Add To Cart
                      </button>
                    </div>
                  </div>
                  <p>
                    Arosa Oak SPC Vinyl Plank with <br />
                    Underlayment | $2.39 s.f. <br />
                    $50.33 <br />
                    $91.48
                  </p>
                </div>
                <br />
                <br />
                <div className="below">
                  <p>
                    We offer a wide variety of natural stone, laminate, tile,
                    and wood flooring materials. Your home's interior is
                    designed from the floor up,
                    <br />
                    and our selection will ensure this important component will
                    be attractive, use-appropriate, and long-lasting. New stock
                    arrives weekly, <br />
                    so make sure to check out our store for new arrivals and
                    closeout deals. <br />
                    Explore travertine, marble, granite, and onyx flooring
                    options available at low, factory-direct pricing. We've got
                    pallets and pallets of <br />
                    value-priced travertine natural stone tile, and affordable
                    marble and granite tile in various colors. Be sure to mix
                    tiles or planks from <br />
                    different boxes to create an overall blended look.In the
                    market for hand-scraped laminate flooring? You've found the
                    place! We stock <br />
                    thousands of square feet of 12.3 mm hand-scraped laminate,
                    glossy finish laminate, as well as value priced laminate
                    flooring in <br />
                    various colors. We also offer various underlayment options
                    to fit any budget. Get it Free: One roll of 2 in 1 Super
                    Blue underlayment <br />
                    with any purchase of 100 s.f. or more.Looking to make the
                    switch to a hardwood and wood-look tile combo? We have you
                    covered, <br />
                    with a large selection of porcelain faux woodgrain tile at
                    amazing discount prices for kitchen and bath, and a vast
                    array of <br />
                    complimentary hardwood colors to make a seamless, durable
                    floor.T-molding, reducers, quarter rounds, and stair nose
                    trim are <br />
                    offered in various laminated colors as well as unfinished so
                    you can achieve a finished look to your remodeling or new
                    construction <br />
                    project.Need help? Let our sales staff know what you are in
                    the market for, if you have pets, if the area you are
                    remodeling will have <br />
                    heavy foot traffic, and we will give our professional
                    opinion.Don't forget to get the appropriate sealer and
                    cleaner to protect your new <br />
                    flooring. Enhance your natural stone with sealer and
                    enhancer.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flooring;
