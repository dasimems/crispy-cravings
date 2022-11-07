import React from "react"
import {AiOutlineSearch} from "react-icons/ai"

const SearchBox = () => {
  return (
    <div className="search-box">
      <div className="main-component">
        <input
          type="text"
          name=""
          id=""
          placeholder="search category or menu"
        />
        <button>
          <AiOutlineSearch/>
        </button>
      </div>
    </div>
  )
}

export default SearchBox
