import React, {useState} from "react"
import { productCategories, products } from "../../../utils/constant"

const MenuItems = () => {
  let [category, setCategory] = useState(productCategories[0])

  const handleCategoryChange = (categoryData) => {
    setCategory(categoryData)
  }

  return (
    <>
    <div className={"category-togglers "}>
      {
        productCategories.map( categoryData => {
          return (
              <div className={"--toggler "+(category.id === categoryData.id ? "active": "")} onClick={() => handleCategoryChange(categoryData)} key={categoryData.id}>
                
                <span className="icon">
                  {categoryData.icon}
                </span>

                <p className="text">{categoryData.label}</p>

              </div>
          )
        })
      }
    </div>

    <div className="menu-items">
      <div className="--title">
        <h3>
          Choose {category.label}
        </h3>
      </div>
      <div className="--items">
        {
          products
          .filter(product => product.category === category.id)
          .map(filteredProduct => (
            <div className="--item" key={filteredProduct.id}>
              <div className="art" perfect-square="">
                <img src={filteredProduct.image} alt="" width="100%" />
              </div>
              <div className="content">
                <h5 className="title">{filteredProduct.title}</h5>
                <p className="price">${filteredProduct.price}</p>
                <span className="quantity">
                  <b>{filteredProduct?.quantity} pan</b> 
                  <i>Available</i>
                </span>

                <div className="actions">
                  <button className="--order">Order Now</button>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
    </>
  )
}

export default MenuItems
