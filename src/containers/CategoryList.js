import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { setProducts } from '../redux/actions/productsActions'
import CategoryListElement from './CategoryListElement'

import '../styles/CategoryList.css'

const CategoryList = () => {
  const [data, setData] = useState(null)
  const dispatch = useDispatch()

  const fetchProductsByCategory = async (category) => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/category/${category}`)
      .catch((err) => {
        console.log('Err: ', err)
      })
    dispatch(setProducts(response.data))
  }

  let allCategories = () => {
    fetch('https://fakestoreapi.com/products/categories')
      .then((res) => res.json())
      .then((json) => {
        setData(json)
      })
  }

  useEffect(() => {
    allCategories()
  }, [])

  const handleSearch = (categoryArg) => {
    fetchProductsByCategory(categoryArg)
  }

  return (
    <div className="main-list">
      <ul>
        {data &&
          data.map((element) => (
            <CategoryListElement
              key={element.id}
              element={element}
              handleSearch={handleSearch}
            />
          ))}
      </ul>
    </div>
  )
}

export default CategoryList

{
  /* <li onClick={() => handleSearch(element)}>{element}</li> */
}
