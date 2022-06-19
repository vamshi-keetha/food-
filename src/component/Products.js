import react from "react";
import Product from "./product";

 function Products(){

    let ProductsList =[
        {
            Productname:'dry-fruits',
            ProductImage:"https://media.istockphoto.com/photos/picturesque-morning-in-plitvice-national-park-colorful-spring-scene-picture-id1093110112?k=20&m=1093110112&s=612x612&w=0&h=3OhKOpvzOSJgwThQmGhshfOnZTvMExZX2R91jNNStBY="
        },
        {
            Productname:'wet-fruits',
            ProductImage:"https://media.istockphoto.com/photos/picturesque-morning-in-plitvice-national-park-colorful-spring-scene-picture-id1093110112?k=20&m=1093110112&s=612x612&w=0&h=3OhKOpvzOSJgwThQmGhshfOnZTvMExZX2R91jNNStBY="
        }
    ]

    return(
  <div className="text-center">
      <p className="dispaly-6 text-info">Products</p>
      <hr />
      {
          ProductsList.map((Productobj,index)=><Product  key={index} Productobj={Productobj}/>)
      }
  </div>
    );
 }
 export default Products;