import React, {useState, useEffect} from "react"
import { Link} from "react-router-dom"
import SearchRestaurant from "./SearchRestaurant"
import Restaurant from "./Restaurant"
import myJSON from '../json/example_data.json'
import '../css/ListPlace.css'

function ListPlace() {
   const [restData, setRestData] = useState([])
   const [searchRestData, setSearchRestData] = useState([])
   const [restName, setRestName] = useState('')
   const [categories, setCategories] = useState('')

   useEffect(() => {
      setRestData(myJSON)
      setSearchRestData(myJSON)
   },[])

   const restaurantSearch = restData.filter((item) => {
      if(restName == ""){
         return item
      }else if(item.name.toLowerCase().includes(restName.toLowerCase())){
         return item
      }
   }).filter((item) => {
      if(categories == ""){
         return item
      }else if(item.categories.includes(categories.toLowerCase())){
         return item
      }
   }).map((item = setSearchRestData(restaurantSearch),index) => {
      return (
         <Link key={index} to={`/restaurantdetail/${index}`}>
            <Restaurant key={index} data={item} />
         </Link>
      )
   })

   return (
      <div className="content">
         <SearchRestaurant onValueChange={setRestName} onSelectChange={setCategories} />
         <div className='restaurant row mx-1 d-flex justify-content-center'>
            {restaurantSearch}
         </div>
      </div>
   )
}

export default ListPlace