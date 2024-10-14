const Register = () => {
  return (
    <div className="container pb-5">
      <p className="display-2">New Account </p>
      <br />
      <br />
      <div className="d-flex justify-content-center">
        <div className="w-50">
          <div className="row">
            <div className="col-12 col-md-6 mb-3">
              <div className="d-flex justify-content-between">
                <p>Email Address</p>
                <p className="text-muted">Required</p>
              </div>
              <input type="text" className="w-100 p-2" />
            </div>

            <div className="col-12 col-md-6  mb-3">
              <div className="d-flex justify-content-between">
                <p>Password</p>
                <p className="text-muted">Required</p>
              </div>
              <input type="text" className="w-100 p-2" />
            </div>

            <div className="col-12 col-md-6  mb-3">
              <div className="d-flex justify-content-between">
                <p>Confirm Password</p>
                <p className="text-muted">Required</p>
              </div>
              <input type="text" className="w-100 p-2" />
            </div>

            <div className="col-12 col-md-6  mb-3">
              <div className="d-flex justify-content-between">
                <p>First Name</p>
                <p className="text-muted">Required</p>
              </div>
              <input type="text" className="w-100 p-2" />
            </div>

            <div className="col-12 col-md-6  mb-3">
              <div className="d-flex justify-content-between">
                <p>Last Name</p>
                <p className="text-muted">Required</p>
              </div>
              <input type="text" className="w-100 p-2" />
            </div>

            <div className="col-12 col-md-6  mb-3">
              <div className="d-flex justify-content-between">
                <p>Company Name</p>
                <p className="text-muted">Required</p>
              </div>
              <input type="text" className="w-100 p-2" />
            </div>

            <div className="col-12 col-md-6  mb-3">
              <div className="d-flex justify-content-between">
                <p>Phone Number</p>
                <p className="text-muted">Required</p>
              </div>
              <input type="text" className="w-100 p-2" />
            </div>

            <div className="col-12 col-md-6  mb-3">
              <div className="d-flex justify-content-between">
                <p>Address Line 1</p>
                <p className="text-muted">Required</p>
              </div>
              <input type="text" className="w-100 p-2" />
            </div>

            <div className="col-12 col-md-6  mb-3">
              <div className="d-flex justify-content-between">
                <p>Address Line 2</p>
                <p className="text-muted">Required</p>
              </div>
              <input type="text" className="w-100 p-2" />
            </div>

            <div className="col-12 col-md-6  mb-3">
              <div className="d-flex justify-content-between">
                <p>Zip/postercode</p>
                <p className="text-muted">Required</p>
              </div>
              <input type="text" className="w-100 p-2" />
            </div>

            <div className="col-12 col-md-6  mb-3">
              <div className="d-flex justify-content-between">
                <p>Zip/postercode</p>
                <p className="text-muted">Required</p>
              </div>
              <input type="text" className="w-100 p-2" />
            </div>
            <div className="col-12 col-md-6  mb-3">
              <div className="d-flex justify-content-between">
                <p>City</p>
                <p className="text-muted">Required</p>
              </div>
              <input type="text" className="w-100 p-2" />
            </div>

            <div className="col-12 col-md-6  mb-3">
              <div className="d-flex justify-content-between">
                <p>Country</p>
                <p className="text-muted">Required</p>
              </div>
              <input type="text" className="w-100 p-2" />
            </div>

            <div className="col-12 col-md-6  mb-3">
              <div className="d-flex justify-content-between">
                <p>State/Province</p>
                <p className="text-muted">Required</p>
              </div>
              <input type="text" className="w-100 p-2" />
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <center>
        <a href="" className="btn btn-dark ps-4 pe-4">
          <b>Create Account</b>
        </a>
      </center>
    </div>
  );
};

export default Register;
