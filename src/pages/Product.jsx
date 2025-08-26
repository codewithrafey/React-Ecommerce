import React, { useContext } from 'react'
import { Context } from '../context/Context'
import { useParams } from 'react-router-dom'
import BreadCrum from '../components/breadcrum/BreadCrum'
import ProductDisplay from '../components/productdisplay/ProductDisplay'
import Tabs from '../components/tabs/Tabs'
import RelatedProduct from '../components/relatedProducts/RelatedProduct'

function Product() {
  const { all_product } = useContext(Context)
  // const productId = props.match.params.productId;
  const { productId } = useParams()

const product = all_product.find((e) => e.id === Number(productId))
  return (
    <div>

    {product ? (
      <>
      <BreadCrum product={product}/>
      <ProductDisplay product={product} />
      <Tabs />
      <RelatedProduct />

      </>
    ) : (
      <p>product not found</p>
    )
  }
  </div>
  )
}

export default Product