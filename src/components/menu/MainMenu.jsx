import React from "react"
import SearchBox from "./MainMenu/SearchBox"
import MenuItems from "./MainMenu/MenuItems"

const MainMenu = () => {
    return (
        <div className="main-menu" custom-scroll>
            <SearchBox/>
            <MenuItems/>
        </div>
    )
}

export default MainMenu