import { useEffect, useState } from 'react'

import Header from '../components/header'


export default function Root() {
  const [products, setProducts] = useState<any[]>([])

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(response => response.json())
      .then(res => {
        console.log(res)
        setProducts(res.products)
      })
  }, [])

  return(
    <>
      <Header />
      <h2>PAGINA DE INICIO</h2>
      {products.map(product => (
        <li key={product.id}>
          <div>
            {product.title}
            <img src={product.thumbnail}/>
          </div>
        </li>
      ))}
    </>
  )
}