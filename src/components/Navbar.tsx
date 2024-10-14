import Image from "next/image";

import { myaddress, suportMail } from "@/function/reuseable";

const Navbar = () => {
  return (
    <header>
      <div className="container p-4">
        <div className="row">
          <div className="col-12 col-md-1">
            <a className="navbar-brand" href="/">
              {/* <img src="/images/WhatsApp Image 2024-09-07 at 3.37.26 AM.jpeg" alt="" width={100} height={50} /> */}
              <Image src="/images/log.jpeg" alt="log" width={100} height={50} />
            </a>
          </div>

          <div className="col-12 col-md-2">
            <address>
              <b>{myaddress}</b>
              {/* <br />{suportMail} */}
            </address>
          </div>

          <div className=" col-12 col-md-6">
            <div className="p-2 border-1 d-flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="gray"
                className="bi bi-search mt-1"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
              </svg>
              <input
                type="search"
                name=""
                style={{ border: "none" }}
                id=""
                className="w-100"
                placeholder="what are you looking for"
              />
            </div>
          </div>

          <div className="col-12 col-md-3">
            <div className="d-flex">
              <div className="mm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-person "
                  viewBox="0 0 16 16"
                >
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
                </svg>
                <a href="/login">
                  <b className="text-black me-1 ms-1">Sign in</b>
                </a>{" "}
                <span className="text-muted me-1">or</span>{" "}
                <a
                  href="/register"
                  style={{ textDecoration: "none" }}
                  className="text-black"
                >
                  {" "}
                  <b color="text-black ">Register</b>
                </a>{" "}
                <span className="pe-3 ps-3"> | </span>
              </div>

              <li className="nav-item dropdown">
                <a
                  className="nav-link "
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-basket3"
                    viewBox="0 0 16 16"
                  >
                    <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6h1.717L5.07 1.243a.5.5 0 0 1 .686-.172zM3.394 15l-1.48-6h-.97l1.525 6.426a.75.75 0 0 0 .729.574h9.606a.75.75 0 0 0 .73-.574L15.056 9h-.972l-1.479 6z" />
                  </svg>{" "}
                  <span>(0)</span>
                </a>
                <ul className="dropdown-menu"></ul>
              </li>
            </div>
          </div>
        </div>
      </div>
      {/* nav */}

      <nav className="navbar navbar-expand-lg ">
        <div className="container">
          {/* <a className="navbar-brand" href="#">
      Navbar
    </a> */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {/* floor */}
              <li className="nav-item">
                <a
                  className="nav-link fw-1 "
                  aria-current="page"
                  href="/flooring"
                >
                  Flooring
                </a>
              </li>

              {/* doors */}
              <li className="nav-item">
                <a className="nav-link fw-1 " aria-current="page" href="/doors">
                  Doors
                </a>
              </li>
              {/* bath */}
              <li className="nav-item">
                <a className="nav-link fw-1 " aria-current="page" href="/bath">
                  Bath
                </a>
              </li>
              {/* wall tile */}
              <li className="nav-item">
                <a className="nav-link fw-1 " aria-current="page" href="/walltile">
                  Wall Tile
                </a>
              </li>
              {/* wall tile */}
              <li className="nav-item">
                <a className="nav-link fw-1 " aria-current="page" href="/kitchen">
                  Kitchen
                </a>
              </li>
              {/* Hardware */}
              {/* <li className="nav-item">
                <a
                  className="nav-link fw-1 "
                  aria-current="page"
                  href="/hardware"
                >
                  HardWare
                </a>
              </li> */}
              {/* trim */}
              <li className="nav-item">
                <a className="nav-link fw-1 " aria-current="page" href="trim">
                  Trim
                </a>
              </li>
              {/* installation */}
              <li className="nav-item">
                <a
                  className="nav-link fw-1 "
                  aria-current="page"
                  href="/installation"
                >
                  Installation
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <a
                href="/kitchen"
                className="btn btn-danger p-2 me-2"
                style={{ borderRadius: 0 }}
                type="submit"
              >
                FREE 3D KITCHEN DESIGN
              </a>
              <a
                href="mailto:habitatrenovations2023@gmail.com"
                className="btn btn-danger p-2"
                style={{ borderRadius: 0 }}
                type="submit"
              >
                BOOK AN APPOINTMENT
              </a>
            </form>
          </div>
        </div>
      </nav>
      <hr />
    </header>
  );
};

export default Navbar;
