import React from 'react'

export function ToyFilter({ handleChange, filterBy, labels }) {
    
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
                    name="labels"
                    value={filterBy.labels}>
                    <option value="All"> None </option>
                    {labels.map((label) => (
                    <option key={label} value={label}>
                        {label}
                    </option>
                    ))}
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
                <span className='filter-label'>Sort By</span>
                <select
                    onChange={handleChange}
                    name="sortBy"
                    value={filterBy.sortBy}>
                    <option value="All">Choose</option>
                    <option value="name">Name</option>
                    <option value="created">New</option>
                    <option value="price">Price</option>
                </select>
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

