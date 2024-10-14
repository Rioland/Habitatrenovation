

const Mycard = (props:any) => {
     
      return ( 
           <div  className="col-12 col-md-6 col-lg-3">
             <div className="">
              <img className="card-img-top" src={props.data.image} alt="Card image cap" height={450} />
              <div className="card-body">
                <h5 className="card-title">{props.data.title}</h5>
                {/* <p className="card-text">{props.data.description}</p> */}
                <p className="card-muted">{props.data.price}</p>
                <a href="#" className="btn btn-outline-dark w-100">
                  Add to Cart
                </a>
              </div>
            </div>
           </div>
       );
}
 
export default Mycard;