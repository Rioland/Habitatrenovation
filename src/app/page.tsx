

import FutureCard from "@/components/futureCard";
import Mycard from "../components/cards";
import KetchenCard from "../components/kitkencard";
import ResentPost from "../components/resentpost";
import Carousel from "../components/slider";
import { doors, mrrr,features, recentpost, phoneNumber } from "@/function/reuseable";



export default function Home() {
  return (
    <div>
        <br /><br />
        <Carousel/>
        <br /><br />
        <p className="text-center display-5 ">New Products</p>
        <br /><br />

        <div className="container">
          <div className="row">
            {doors.map(product =>{
            return  <Mycard key={product.id} data={product} />
            })}
          </div>
        </div>
        <br /><br /><br /><br />
        <div className="container">
          <div className="row">
            {mrrr.map(product =>{
            return  <KetchenCard key={product.id} data={product} />
            })}
          </div>
        </div>
    <br /><br />
    <p className="text-center display-5 ">Featured Products</p>
    <br /><br />
    <div className="container">
          <div className="row">
            {features.map(product =>{
            return  <FutureCard key={product.id} data={product} />
            })}
          </div>
        </div>
    <br /><br />
    <p className="text-center display-5 ">Recent Posts</p>
    <br /><br />

    <div className="container">
          <div className="row">
            {recentpost.map(product =>{
            return  <ResentPost key={product.id} data={product} />
            })}
          </div>
        </div>
    <br /><br />
   <div className="container">
   <p className="display-5 text-center ">Home Remodeling Supplies </p>
  
  <p className="text-center text-muted pt-4">  If your goal is to remodel your home on a budget and with style in mind, you're in the right place. Welcome to Surplus Building Materials, the smartest choice for affordable and quality home remodeling supplies. We're a home improvement surplus store based in Texas, but we ship our products to customers across the continental US. You know what they say: In Texas, everything is bigger, and that goes for our warehouse too. From hardware, kitchen cabinets, and countertops to tile, marble, wood, and stone flooring, it houses everything you could ever need for your home. For home remodeling supplies to make your next remodel easy and successful, shop with us today! Or, if you have any questions, you can reach our team at {phoneNumber}.
  </p>
   </div>
    <br /><br />
    
    </div>
  );
}
