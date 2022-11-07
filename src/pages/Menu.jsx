import React from "react"
import { ItemDisplay, MainMenu } from "../components"
import { products } from "../utils/constant"

const Menu = () => {
  return (
    <>
      <div className="two-panes">
        <MainMenu />
        <ItemDisplay CurrentItem={products[0]} />
      </div>
    </>
  )
}




export default Menu
