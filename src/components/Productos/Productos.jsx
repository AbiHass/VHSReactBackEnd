import React, { useState } from "react";
import { Button, ButtonContainer, ProductosContainerStyled } from "./ProductosStyles";
import Producto from "./Producto";

import { useSelector } from "react-redux";

const Productos = () => {
  const [limit, setLimit] = useState(8);

  let products = useSelector((state) => state.products.products);
  let totalProducts = useSelector(state => state.products.totalProducts);

  const selectedCategory = useSelector(
    (state) => state.categories.selectedCategory
  );

  if (selectedCategory) {
    products = products.filter(
      (producto) => producto.category === selectedCategory
    );
  }
  return (
    <>
      <ProductosContainerStyled>
        {products.map((producto, i) =>
          limit > i ? <Producto key={producto.id} {...producto} /> : null
        )}
      </ProductosContainerStyled>
    
    
      { !selectedCategory && (<ButtonContainer>
    <Button
          onClick={ () => setLimit(limit - 8) }
          secondary='true'
          disabled={ 8 === limit }
        >
          <span>Ver menos</span>
        </Button>
        <Button 
          onClick={() => setLimit(limit + 8)}
          disabled={ totalProducts <= limit }
        >
          Ver más
        </Button>
    </ButtonContainer>)}
    </>
  );
};

export default Productos;
