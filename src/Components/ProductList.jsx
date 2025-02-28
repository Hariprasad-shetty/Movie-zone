function ProductList(){
  const products=[
    {id:1,name:"phone",price:699},
    {id:2,name:"laptop",price:1200},
    {id:3,name:"headphones",price:199}
  ]
  return(
    <div>
      {products.map((product)=>(
        <ul key={product.id}>
          <li>Product name: {product.name}</li>
          <li>Product price: {product.price}</li>
          </ul>
      ))}
    </div>
  )
}
export default ProductList