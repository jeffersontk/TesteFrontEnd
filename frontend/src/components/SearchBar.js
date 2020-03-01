import React from 'react'

export default function SearchBar(props) {
    return (
        <div>
            <form className="formSearch" onSubmit={props.handleFormSubmit}>
                <input className="imputSearch" placeholder="pesquisar" onChange={props.handleFormChange} value={props.value}></input>
                <button type="submit" className="btnSearch">search</button>
            </form>
        </div>
    )
}