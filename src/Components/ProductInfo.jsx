function ProductInfo(){
  const product={
    name:"Laptop",
    price: 1200,
    availability:"In stock"
  }
  return(
    <div>
      <p>product name: {product.name}</p>
      <p>product price: {product.price}</p>
      <p>availability: {product.availability}</p>
    </div>
  )
}
export default ProductInfo