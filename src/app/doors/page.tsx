import "./doors.css"

const Doors = () => {
      return ( 
      
      <div className="doors">
            <h1>DOORS</h1>
            <br />
            <br />
            <div className="DOOR-IMAGE">
              <img src="/images/doors image 1.jpg" />
            </div>
            <h4 className="h3me">
              Shop Interior and Exterior Doors. Installation available. Book your free
              consultation here
            </h4>
            <br />
            <h4 className="me">SUBCATEGORIES:</h4>
            <div className="container">
              <img src="/images/me and you.png" alt="Front Door" />
              <img src="/images/french reealaaa.png" alt="French and Patio Door" />
              <img src="/images/interior.jpg" alt="Interior Door" />
              <img src="/images/Doors with sidelights.jpg" alt="Doors With Sidelights" />
            </div>
            <h4 className="so">
              SHOWING FOR 1 - 30 of 212 results
              <br />
              <input type="text" id="Middle name" placeholder="Sort by: Bestselling" />
            </h4>
            <main>
              <aside>
                <div className="call">
                  <div className="container-fluid">
                    <div className="row">
                      {/* Sidebar for filters */}
                      <div className="col-md-3">
                        <h5>Material</h5>
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" id="wood" />
                          <label className="form-check-label" htmlFor="wood">
                            Wood (137)
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="wrought-iron"
                          />
                          <label className="form-check-label" htmlFor="wrought-iron">
                            Wrought Iron (46)
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="fiberglass"
                          />
                          <label className="form-check-label" htmlFor="fiberglass">
                            Fiberglass (2)
                          </label>
                        </div>
                        <h5>Price</h5>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="price-500-999"
                          />
                          <label className="form-check-label" htmlFor="price-500-999">
                            $500-$999 (31)
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="price-1,000-1,499"
                          />
                          <label className="form-check-label" htmlFor="wood">
                            $1,000-$1,499 (7)
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="price-1,500-1,999"
                          />
                          <label className="form-check-label" htmlFor="wood">
                            $1,500-$1,999 (20)
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="price-2,000-2,499"
                          />
                          <label className="form-check-label" htmlFor="wood">
                            $2,000-$2,499 (14)
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="price-2,500-2,999"
                          />
                          <label className="form-check-label" htmlFor="wood">
                            $2,500-$2,999 (4)
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="price-3,000-3,499"
                          />
                          <label className="form-check-label" htmlFor="wood">
                            $3,000-$3,499 (5)
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="price-3,500-3,999"
                          />
                          <label className="form-check-label" htmlFor="wood">
                            $3,500-$3,999 (4)
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="price-4,000-4,499"
                          />
                          <label className="form-check-label" htmlFor="wood">
                            $4,000-$4,499 (3)
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="price-0-500"
                          />
                          <label className="form-check-label" htmlFor="price-500-999">
                            $0-$500 (3)
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="price-1,500-1,999"
                          />
                          <label className="form-check-label" htmlFor="wood">
                            $1,000-$1,999 (2)
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="price-1,500-1,999"
                          />
                          <label className="form-check-label" htmlFor="wood">
                            $1,500-$2,000 (1)
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="price-2,000-2,499"
                          />
                          <label className="form-check-label" htmlFor="wood">
                            $2,000-$2,500 (1)
                          </label>
                        </div>
                        {/* Sidebar for filters */}
                        <div className="col-md-3">
                          <p>WOOD TYPE</p>
                          <input className="form-check-input" type="checkbox" id="MDF" />
                          <label className="form-check-label" htmlFor="wood">
                            MDF
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="Mahogany"
                          />
                          <label className="form-check-label" htmlFor="wood">
                            Mahogany
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="Mahogany"
                          />
                          <label className="form-check-label" htmlFor="wood">
                            Mahogany
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="pine(6)"
                          />
                          <label className="form-check-label" htmlFor="wood">
                            pine (6)
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="walnut (2)"
                          />
                          <label className="form-check-label" htmlFor="wood">
                            Walnut (2)
                          </label>
                        </div>
                        {/* Sidebar for filters */}
                        <div className="col-md-3">
                          <p>Finish</p>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="primmed"
                            />
                            <label className="form-check-label" htmlFor="wood">
                              primmed(77)
                            </label>
                          </div>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="unfinished (62)"
                          />
                          <label className="form-check-label" htmlFor="wood">
                            unfinished (62)
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="Mahogany"
                          />
                          <label className="form-check-label" htmlFor="wood">
                            Finished (46)
                          </label>
                        </div>
                        <div className="col-md-3">
                          <p>Height</p>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="primmed"
                            />
                            <label className="form-check-label" htmlFor="wood">
                              80 (103)
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="unfinished (62)"
                            />
                            <label className="form-check-label" htmlFor="wood">
                              {" "}
                              84 (62)
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="unfinished (62)"
                            />
                            <label className="form-check-label" htmlFor="wood">
                              96 (74)
                            </label>
                          </div>
                          <div className="col-md-3">
                            <p>width</p>
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="unfinished (62)"
                              />
                              <label className="form-check-label" htmlFor="wood">
                                14(4)
                              </label>
                            </div>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="unfinished (62)"
                            />
                            <label className="form-check-label" htmlFor="wood">
                              18 (10)
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="unfinished (62)"
                            />
                            <label className="form-check-label" htmlFor="wood">
                              96 (74)
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="primmed"
                            />
                            <label className="form-check-label" htmlFor="14 (4)">
                              80 (103)
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="primmed"
                            />
                            <label className="form-check-label" htmlFor="14 (4)">
                              80 (103)
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="primmed"
                            />
                            <label className="form-check-label" htmlFor="14 (4)">
                              80 (103)
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="primmed"
                            />
                            <label className="form-check-label" htmlFor="14 (4)">
                              80 (103)
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="primmed"
                            />
                            <label className="form-check-label" htmlFor="14 (4)">
                              80 (103)
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="primmed"
                            />
                            <label className="form-check-label" htmlFor="14 (4)">
                              80 (3)
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="primmed"
                            />
                            <label className="form-check-label" htmlFor="14 (4)">
                              54 (5)
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="primmed"
                            />
                            <label className="form-check-label" htmlFor="14 (4)">
                              64 (5)
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="primmed"
                            />
                            <label className="form-check-label" htmlFor="14 (4)">
                              64 (3)
                            </label>
                          </div>
                          {/* Sidebar for filters */}
                          <div className="col-md-3">
                            <p>Placement</p>
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="interior (62)"
                              />
                              <label className="form-check-label" htmlFor="wood">
                                interior (4)
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="interior (62)"
                          />
                          <label className="form-check-label" htmlFor="wood">
                            Exterior (104)
                          </label>
                        </div>
                        {/* Sidebar for filters */}
                        <div className="col-md-3">
                          <p>color</p>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="Bronze (62)"
                            />
                            <label className="form-check-label" htmlFor="wood">
                              Bronze (4)
                            </label>
                          </div>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="Bronze (62)"
                          />
                          <label className="form-check-label" htmlFor="wood">
                            Brown (4)
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="Bronze (62)"
                          />
                          <label className="form-check-label" htmlFor="wood">
                            Black (4)
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="Bronze (62)"
                          />
                          <label className="form-check-label" htmlFor="wood">
                            Preminium white (4)
                          </label>
                        </div>
                        <div className="col-md-3">
                          <p>DOOR TYPE</p>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="Bronze (62)"
                            />
                            <label className="form-check-label" htmlFor="wood">
                              single (4)
                            </label>
                          </div>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="Bronze (62)"
                          />
                          <label className="form-check-label" htmlFor="wood">
                            slab (4)
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="Bronze (62)"
                          />
                          <label className="form-check-label" htmlFor="wood">
                            double (4)
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="Bronze (62)"
                          />
                          <label className="form-check-label" htmlFor="wood">
                            French (4)
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="Bronze (62)"
                          />
                          <label className="form-check-label" htmlFor="wood">
                            sideites (4)
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="Bronze (62)"
                          />
                          <label className="form-check-label" htmlFor="wood">
                            Sidelights (4)
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="Bronze (62)"
                          />
                          <label className="form-check-label" htmlFor="wood">
                            Sidelite (4)
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </aside>
              <section className="product-list">
                <div className="product">
                  <img src="/images/ii.png" alt="Product 1" />
                  <p>24 in x 80 in White 2-Panel Shaker Solid Core Prehung Door</p>
                  <p>$209.60</p>
                </div>
                <div className="product">
                  <img src="/images/ii.png" alt="Product 2" />
                  <p>32 in x 80 in White 2-Panel Shaker Solid Core Prehung Door</p>
                  <p>$233.88</p>
                </div>
                <div className="product">
                  <img src="/images/ii.png" alt="Product 3" />
                  <p>30 in x 80 in White 2-Panel Shaker Solid Core Prehung Door</p>
                  <p>$227.05</p>
                </div>
                <div className="product">
                  <img src="/images/reeeeeal.jfif" alt="Product 1" />
                  <p>24 in x 80 in White 2-Panel Shaker Solid Core Prehung Door</p>
                  <p>$209.60</p>
                </div>
                <div className="product">
                  <img src="/images/ii.png" alt="Product 2" />
                  <p>32 in x 80 in White 2-Panel Shaker Solid Core Prehung Door</p>
                  <p>$233.88</p>
                </div>
                <div className="product">
                  <img src="/images/ii.png" alt="Product 3" />
                  <p>30 in x 80 in White 2-Panel Shaker Solid Core Prehung Door</p>
                  <p>$227.05</p>
                </div>
                <div className="product">
                  <img src="/images/ii.png" alt="Product 3" />
                  <p>30 in x 80 in White 2-Panel Shaker Solid Core Prehung Door</p>
                  <p>$227.05</p>
                </div>
                <div className="product">
                  <img src="/images/ii.png" alt="Product 3" />
                  <p>30 in x 80 in White 2-Panel Shaker Solid Core Prehung Door</p>
                  <p>$227.05</p>
                </div>
                <div className="product">
                  <img src="/images/ii.png" alt="Product 3" />
                  <p>30 in x 80 in White 2-Panel Shaker Solid Core Prehung Door</p>
                  <p>$227.05</p>
                </div>
                <div className="product">
                  <img src="/images/ii.png" alt="Product 3" />
                  <p>30 in x 80 in White 2-Panel Shaker Solid Core Prehung Door</p>
                  <p>$227.05</p>
                </div>
                <div className="product">
                  <img src="/images/ii.png" alt="Product 3" />
                  <p>30 in x 80 in White 2-Panel Shaker Solid Core Prehung Door</p>
                  <p>$227.05</p>
                </div>
                <div className="product">
                  <img src="/images/ii.png" alt="Product 3" />
                  <p>30 in x 80 in White 2-Panel Shaker Solid Core Prehung Door</p>
                  <p>$227.05</p>
                </div>
                <div className="product">
                  <img src="/images/reeeeeal.jfif" alt="Product 3" />
                  <p>30 in x 80 in White 2-Panel Shaker Solid Core Prehung Door</p>
                  <p>$227.05</p>
                </div>
                <div className="product">
                  <img src="/images/ii.png" alt="Product 3" />
                  <p>30 in x 80 in White 2-Panel Shaker Solid Core Prehung Door</p>
                  <p>$227.05</p>
                </div>
                <div className="product">
                  <img src="/images/ii.png" alt="Product 3" />
                  <p>30 in x 80 in White 2-Panel Shaker Solid Core Prehung Door</p>
                  <p>$227.05</p>
                </div>
                <div className="product">
                  <img src="/images/ii.png" alt="Product 3" />
                  <p>30 in x 80 in White 2-Panel Shaker Solid Core Prehung Door</p>
                  <p>$227.05</p>
                </div>
                <div className="product">
                  <img src="/images/reeeeeal.jfif" alt="Product 3" />
                  <p>30 in x 80 in White 2-Panel Shaker Solid Core Prehung Door</p>
                  <p>$227.05</p>
                </div>
                <div className="product">
                  <img src="/images/ii.png" alt="Product 3" />
                  <p>30 in x 80 in White 2-Panel Shaker Solid Core Prehung Door</p>
                  <p>$227.05</p>
                </div>
                <div className="product">
                  <img src="/images/ii.png" alt="Product 3" />
                  <p>30 in x 80 in White 2-Panel Shaker Solid Core Prehung Door</p>
                  <p>$227.05</p>
                </div>
                <div className="product">
                  <img src="/images/ii.png" alt="Product 3" />
                  <p>30 in x 80 in White 2-Panel Shaker Solid Core Prehung Door</p>
                  <p>$227.05</p>
                </div>
                <div className="product">
                  <img src="/images/ii.png" alt="Product 3" />
                  <p>30 in x 80 in White 2-Panel Shaker Solid Core Prehung Door</p>
                  <p>$227.05</p>
                </div>
              </section>
            </main>
            <div className="mis pb-5 pt-5">
              <h1 className="for"> SURPLUS INTERIOR AND DOORS</h1>
              The front door is a business card for your home. It's the first thing that
              you notice about your future home, and it’s certainly. something your guests
              observe. Surplus Building Materials Superstore has hundreds of surplus doors
              for sale. We carry a wide variety of surplus interior and exterior doors.
              Whether you are looking for French patio doors or an 8' wrought iron front
              door, we have it in stock. Our door selection is hard to top. <br />
              <br />
              We also offer various customization options for our doors. We stock French
              and patio doors with mini-blind inserts, interior and exterior fiberglass,
              and a nice mobile home door selection. Prehung metal French doors,
              unfinished interior knotty pine doors, exterior metal 6 panel doors, wrought
              iron doors are all in stock and ready for use on your next project. Our
              website offers only a glimpse of all our surplus interior and exterior
              doors. Come visit our store to browse our wide selection and let our
              experienced sales team help with the decision-making. We also stock door
              hardware like handles, deadbolts and doorbells in various finishes and
              configurations.
            </div>
            <br /><br />
          </div>
          );
}
 
export default Doors;