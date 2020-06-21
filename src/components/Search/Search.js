import React from 'react'
import './style.css'

function Search(props) {
    return (
        <form className="m-3">
        <div className="input-group">
          <input
            onChange={props.handleChange}
            value={props.search}
            name="search"
            type="text"
            className="form-control"
            placeholder="Search for An Employee"
            id="search"
          />
          <div className="input-group-append">
          <button className="btn btn-dark">
            Search
          </button>
          </div>
        </div>
      </form>
    )
}


export default Search;