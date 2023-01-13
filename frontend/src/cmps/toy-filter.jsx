import React from 'react'

export function ToyFilter({ handleChange, filterBy }) {
    

  
// const CustomTextField = (props) => {
//   return <TextField id="outlined-basic" label="Outlined" variant="outlined" {...props}  />

// }
    return <div className="filter-container main-layout full">
        <form className={'form-filter'}>
            <label className='filter-label'>
                <span className='filter-label'>Search</span>
                <input
                    value={filterBy.search}
                    onChange={handleChange}
                    type="search"
                    className="search-input"
                    name="search" />
            </label>
            <label className='filter-label'>
                <span className='filter-label'>Filter By</span>
                <select
                    onChange={handleChange}
                    name="type"
                    value={filterBy.type}>
                    <option value="All"> None </option>
                    <option value="Kids">Kids</option>
                    <option value="Ball">Ball</option>
                    <option value="Party">Party</option>
                </select>
            </label>
            <label className='filter-label'>
                <span className='filter-label'>In stock</span>
                <input
                    type="checkbox"
                    onChange={handleChange}
                    name="inStock"
                    className="check-box"
                />
            </label>
            <label className='filter-label'>
                <span className='filter-label'>Min-price</span>
                <input
                    onChange={handleChange}
                    type="number"
                    className="min-price"
                    name="minPrice" />
            </label>
            <label className='filter-label'>
                <span className='filter-label'>Max-price</span>
                <input
                    onChange={handleChange}
                    type="number"
                    className="max-price"
                    name="maxPrice" />
            </label>
          
        </form>
    </div>
}

