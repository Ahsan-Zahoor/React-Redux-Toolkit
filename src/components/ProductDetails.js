import React from 'react'
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux'

function ProductDetails() {
    const { id } = useParams();
    const product = useSelector(state => state.products).find((i) => i.id === parseInt(id))

  return (
    <div>
        ProductDetails - {id}
        <div className="card product" key={product.id}>
            <img className="card-img-top" src={product.image} alt="Card cap" />
            <div className="card-body">
                <h1>Category: {product.category}</h1>
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{product.description}</p>
                <p>Price: {product.price}</p>
                <p>Rating: {product.rating.rate} </p>
            </div>
        </div> 
    </div>
  )
}

export default ProductDetails