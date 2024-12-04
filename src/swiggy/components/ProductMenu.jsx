import React, { useState, useEffect } from 'react';
import { API_URL } from '../api';
import { useParams } from 'react-router-dom';
import TopBar from '../components/TopBar';  // Ensure the path is correct

const ProductMenu = () => {
  const [product, setProduct] = useState([]);
  const { firmId,firmName} = useParams();

  const productHangle = async () => {
    try {
      const response = await fetch(`${API_URL}/product/${firmId}/products`);
      const subresponse = await response.json();
      setProduct(subresponse.products);
      console.log(subresponse, "ewjfkhewjfhew");
    } catch (error) {
      console.log("Product not fetched", error);
    }
  };

  useEffect(() => {
    productHangle();
  }, []);

  return (
    <>
      <TopBar /> {/* Make sure TopBar is defined */}
      <section className="productSection">
        <h3>{firmName}</h3>
        {product.map((item) => {
          return (
            <div className="main" key={item.id}> 
              <div className=''>
              <div> <strong>{item.productName}</strong></div> 
              <div>£{ item.price}</div>
              <div>{ item.description}</div>
              </div>
              
              <div className="firm-multiple">
                <img src={`${API_URL}/uploads/${item.image}`} alt={item.productName} />
                <div className='add-text'>
                  ADD
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default ProductMenu;
