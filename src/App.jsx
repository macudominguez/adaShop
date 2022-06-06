//import { useState } from 'react'
import { Flex } from "@chakra-ui/react";
import { useState } from "react";

import Card from "./components/Card"
import Navbar from "./components/Navbar"
import Section from "./components/Section"
import Paginated from './components/Paginated';

import listaProducts from './assets/products'


function App() {

  const [cart,setCart] = useState([])
  const [products, setProducts] = useState(listaProducts);
  

  //carrito
  const addProduct = (product) => {
    const existeProducto = cart.some(product2 => product.id === product2.id)
    if(existeProducto){
      setCart(cart.map(pr => {
        if (pr.id === product.id){
          pr.cantidad ++
        }
        return pr
      }))
    } else {
      const productoCantidad = {...product, cantidad:1}
      setCart([...cart,productoCantidad])} 
  }
  
  const emptyCart = () => setCart([])

  const deleteProduct = (id) =>{ setCart(cart.filter(product => id !== product.id))}

  // Paginado
  const elementForPage = 5
  const [page, setPage] = useState(1)
  const lastPage = Math.ceil(products.length/elementForPage)
  const offPage = elementForPage*(page-1)

  // Filtrado
 
  const handleOnKeyPress = (event) =>{
    setProducts(
      listaProducts.filter((productFl) => 
        productFl.title.toLocaleLowerCase().includes(event.target.value))
    )
    setPage(1)
  }
  const toggleFavProduct = (id) =>{
    setProducts(
      listaProducts.map((product) => {
        if (id === product.id) {
          return {...product,favoritos:!product.favoritos}
        }
        return product
      })
    )
  }
  return (
    <>
    <Navbar cart={cart} emptyCart={emptyCart} deleteProduct={deleteProduct} />
    <Section handleOnKeyPress={handleOnKeyPress} />
    <Flex direction="row" wrap="wrap" gap="30px" justify="center" m="50px">
      {[...products].splice(offPage, elementForPage).map(product =>
        <Card data={product} key={product.id} addProduct={addProduct} toggleFavProduct={toggleFavProduct}/>)}
    </Flex>
    <Paginated lastPage={lastPage} setPage={setPage} page={page} />
    </>
  )
}

export default App
