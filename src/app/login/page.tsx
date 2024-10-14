const Login = () => {
  return (
    <div className="container pb-5">
      <p className="display-2">Sign in</p>
      <br />
      <br />
      <div className="d-flex justify-content-center">
        <div className="w-50">
          <div className="row ">
            <div className="col-12 col-md-6">
                  <br />
              <div className="pb-3">
                <label htmlFor="email">Email Address:</label><br />
            
                <input className="w-100 p-2" type="email" name="" id="email" />
              </div>
              <br />
              <div className="pb-3">
                <label htmlFor="pass">Password:</label>
                <br />
                <input className="w-100 p-2" type="password" name="" id="pass" />
              </div>
              <div className="d-flex">
                  <button className="btn btn-dark ps-4 pe-4"><b>Sign in</b></button>
                  <p className="ps-2">Forgot your password?</p>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="card bg-secondary p-3">
              <p className="h2 text-white">New Customer?</p>
              <dl>
                <dt className="text-white">Create an account with us and you'll be able to:</dt>
                <dd  className="text-white">
                  <li>Check out faster</li>
                  <li>Save multiple shipping addresses</li>
                  <li>Save multiple shipping addresses</li>
                  <li>Access your order history</li>
                  <li>Track new orders</li>
                  <li>Save items to your Wish List </li>
                </dd>
               
              
              </dl>
     
            <a href="/register" className="btn btn-dark ps-4 pe-4"><b>Create Account</b></a>
          
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
