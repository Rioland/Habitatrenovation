import Link from "next/link";

const ResentPost = (props:any) => {
      return ( 
            <div  className="col-12 col-md-6 col-lg-4">
              <div className="">
               <img className="card-img-top" src={props.data.image} alt="Card image cap"  />
               <div className="card-body">
               <p className="text-muted">{props.data.date}</p>
                 <h5 className="card-title">{props.data.title}</h5>
                 {/* <p className="card-text">{props.data.description}</p> */}
                 <p className="text-muted">{props.data.shortnote}</p>
                 <Link href={""} ><b className="text-black">read more</b> {">"} </Link>
                 {/* <a href="#" className="btn btn-outline-warning w-100">
                   Order Now
                 </a> */}
               </div>
             </div>
            </div>
        );
}
 
export default ResentPost;