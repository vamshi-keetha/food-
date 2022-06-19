function Product(props){
    return(
        <div className="card card-body">
      <img src="{props.Productobj.ProductImage}" alt=""></img>
      <h2>{props.Productobj.ProductName}</h2>
        </div>
    );
}

export default Product;