import listaProducts from './assets/products.js'

const Filtrado = () =>{
    const handleOnKeyPress = (event) => {
      useEffect(() => {
        setProducts(
          listaProducts.filter((productFl) =>
            productFl.title.toLocaleLowerCase().includes(event.target.value)
          )
        );
        setPage(1);
      }, [products]);
    };
}

export default Filtrado