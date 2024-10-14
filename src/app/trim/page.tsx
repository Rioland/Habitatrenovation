import  './trim.css'

const Trim = () => {
      return ( <div className="trim">

  <br />
  <div className="container">
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <a style={{ textDecoration: "underline", color: "blue" }} href="#">
            Home
          </a>
        </li>
        <li className="breadcrumb-item active" aria-current="page">
          Library
        </li>
      </ol>
    </nav>
  </div>
  <div className="container">
    <p className="h1 fw-1" style={{ fontWeight: 700 }}>
      TRIM
    </p>
  </div>
  <br />
  <div className="container">
    <div className="row">
      <div className="col-12 col-md-4">
        <div className="card">
          <div className="head">
            <p className="refine">REFINE BY:</p>
            <button>
              <a className="but" href="http://">
                Primed
              </a>
            </button>
            <br />
            <a href="http://">Clear All</a>
          </div>
          <div>
            <p className="it">MATERIAL</p>
            <ul className="list-group">
              <li className="list-group-item">
                <input
                  className="form-check-input me-1"
                  type="checkbox"
                  defaultValue=""
                  id="firstCheckbox"
                />
                <label className="form-check-label" htmlFor="firstCheckbox">
                  <a href="http://">Pine</a>(12)
                </label>
              </li>
              <li className="list-group-item">
                <input
                  className="form-check-input me-1"
                  type="checkbox"
                  defaultValue=""
                  id="secondCheckbox"
                />
                <label className="form-check-label" htmlFor="secondCheckbox">
                  <a href="http://">MDF </a>(10)
                </label>
              </li>
              <li className="list-group-item">
                <input
                  className="form-check-input me-1"
                  type="checkbox"
                  defaultValue=""
                  id="secondCheckbox"
                />
                <label className="form-check-label" htmlFor="secondCheckbox">
                  <a href="http://">Flexible</a>(1)
                </label>
              </li>
            </ul>
          </div>
          <div>
            <p className="it">TYPE</p>
            <ul className="list-group">
              <li className="list-group-item">
                <input
                  className="form-check-input me-1"
                  type="checkbox"
                  defaultValue=""
                  id="firstCheckbox"
                />
                <label className="form-check-label" htmlFor="firstCheckbox">
                  <a href="http://">Base Board</a>(6)
                </label>
              </li>
              <li className="list-group-item">
                <input
                  className="form-check-input me-1"
                  type="checkbox"
                  defaultValue=""
                  id="secondCheckbox"
                />
                <label className="form-check-label" htmlFor="secondCheckbox">
                  <a href="http://">Crown </a>(9)
                </label>
              </li>
              <li className="list-group-item">
                <input
                  className="form-check-input me-1"
                  type="checkbox"
                  defaultValue=""
                  id="secondCheckbox"
                />
                <label className="form-check-label" htmlFor="secondCheckbox">
                  <a href="http://">Casing </a>(2)
                </label>
              </li>
            </ul>
          </div>
          <div>
            <p className="it">FINISH</p>
            <ul className="list-group">
              <li className="list-group-item">
                <input
                  className="form-check-input me-1"
                  type="checkbox"
                  defaultValue=""
                  id="firstCheckbox"
                />
                <label className="form-check-label" htmlFor="firstCheckbox">
                  <a href="http://">Primed</a>(15)
                </label>
              </li>
              <li className="list-group-item">
                <input
                  className="form-check-input me-1"
                  type="checkbox"
                  defaultValue=""
                  id="secondCheckbox"
                />
                <label className="form-check-label" htmlFor="secondCheckbox">
                  <a href="http://">Unfinished </a>(1)
                </label>
              </li>
            </ul>
          </div>
          <div>
            <p className="it">FREE SHIPPING</p>
            <ul className="list-group">
              <li className="list-group-item">
                <input
                  className="form-check-input me-1"
                  type="checkbox"
                  defaultValue=""
                  id="firstCheckbox"
                />
                <label className="form-check-label" htmlFor="firstCheckbox">
                  <a href="http://">Free</a>(12)
                </label>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-12 col-md-8">
        <p>SHOWING 15 RESULTS</p>
        <div className="dropdown">
          <a
            className="btn btn-secondary btn-sm dropdown-toggle"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Bestselling
          </a>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="#">
                featured items
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Newest items
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Alphabetical: A-Z
              </a>
            </li>
          </ul>
        </div>{" "}
        <br />
        <div className="container">
          <div className="row">
            <div className="col-8 col-md-4">
              <div className="card shadow">
                <img
                  src="./image/flextrim-base-322-flexible-moulding__66340.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="col-8 col-md-4">
              <div className="card shadow">
                <img
                  className="we"
                  src="./image/woodgrain-millwork-primed-pine-base-620-board-or-4-14-dollar1.69-lf__47734.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="col-8 col-md-4">
              <div className="card shadow">
                <img
                  src="./image/woodgrain-millwork-primed-pine-shoe-moulding-16__25147.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-8 col-md-4">
              <div className="card shadow">
                <img
                  src="./image/flextrim-base-322-flexible-moulding__66340.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="col-8 col-md-4">
              <div className="card shadow">
                <img
                  className="we"
                  src="./image/woodgrain-millwork-primed-pine-base-620-board-or-4-14-dollar1.69-lf__47734.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="col-8 col-md-4">
              <div className="card shadow">
                <img
                  src="./image/woodgrain-millwork-primed-pine-shoe-moulding-16__25147.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-8 col-md-4">
              <div className="card shadow">
                <img
                  src="./image/flextrim-base-322-flexible-moulding__66340.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="col-8 col-md-4">
              <div className="card shadow">
                <img
                  className="we"
                  src="./image/woodgrain-millwork-primed-pine-base-620-board-or-4-14-dollar1.69-lf__47734.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="col-8 col-md-4">
              <div className="card shadow">
                <img
                  src="./image/woodgrain-millwork-primed-pine-shoe-moulding-16__25147.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-8 col-md-4">
              <div className="card shadow">
                <img
                  src="./image/flextrim-base-322-flexible-moulding__66340.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="col-8 col-md-4">
              <div className="card shadow">
                <img
                  className="we"
                  src="./image/flextrim-base-322-flexible-moulding__66340.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="col-8 col-md-4">
              <div className="card shadow">
                <img
                  src="./image/woodgrain-millwork-primed-pine-shoe-moulding-16__25147.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-8 col-md-4">
              <div className="card shadow">
                <img
                  src="./image/flextrim-base-322-flexible-moulding__66340.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="col-8 col-md-4">
              <div className="card shadow">
                <img
                  className="we"
                  src="./image/woodgrain-millwork-primed-pine-base-620-board-or-4-14-dollar1.69-lf__47734.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="col-8 col-md-4">
              <div className="card shadow">
                <img
                  src="./image/woodgrain-millwork-primed-pine-shoe-moulding-16__25147.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-8 col-md-4">
              <div className="card shadow">
                <img
                  src="./image/flextrim-base-322-flexible-moulding__66340.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="col-8 col-md-4">
              <div className="card shadow">
                <img
                  className="we"
                  src="./image/woodgrain-millwork-primed-pine-base-620-board-or-4-14-dollar1.69-lf__47734.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="col-8 col-md-4">
              <div className="card shadow">
                <img
                  src="./image/woodgrain-millwork-primed-pine-shoe-moulding-16__25147.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-8 col-md-4">
              <div className="card shadow">
                <img
                  src="./image/flextrim-base-322-flexible-moulding__66340.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="col-8 col-md-4">
              <div className="card shadow">
                <img
                  className="we"
                  src="./image/woodgrain-millwork-primed-pine-base-620-board-or-4-14-dollar1.69-lf__47734.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="col-8 col-md-4">
              <div className="card shadow">
                <img
                  src="./image/woodgrain-millwork-primed-pine-shoe-moulding-16__25147.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-8 col-md-4">
              <div className="card shadow">
                <img
                  src="./image/flextrim-base-322-flexible-moulding__66340.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="col-8 col-md-4">
              <div className="card shadow">
                <img
                  className="we"
                  src="./image/woodgrain-millwork-primed-pine-base-620-board-or-4-14-dollar1.69-lf__47734.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <p className="pat">
            We have really excellent prices and a nice selection of trim and
            molding including Pine, Red Oak, and MDF in-stock, and can order
            what you need to trim your house in base boards, crown molding, and
            chair rails.Moulding can be used to update and upgrade the look of
            any room. Moulding can add a formality and architectural detail to
            rooms by encasing columns, adding details to ceilings, concealing
            gaps between drywall and the door.Stain, paint, or clear coat your
            moulding to your taste. Use multiple profiles to add drama to your
            entertainment areas. Transition from stone and tile to laminate,
            room to room, with ease.Floor moldings need to be glued or screwed
            down for safety.Surplus Building Materials stocks moulding in
            popular profiles in Primed Pine, Unfinished Pine, Primed MDF,
            Unfinished Oak and Laminated MDF. Save time and money by shopping at
            our Surplus Superstore.
          </p>
        </div>
      </div>
    </div>
  </div>
  <br />

  <br />
  <br />
</div>

     );
}
 
export default Trim;