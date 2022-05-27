function SearchRestaurant(props) {
   const {onValueChange, onSelectChange} = props
   return (
      <div className="placeList">
         <div className="serachRestaurant row">
            <div className="searchRestaurant-left col-xl-5">
               <h3>Place List</h3>
            </div>
            <div className="searchRestaurant-right col-xl-7 d-md-flex">

               {/*=========== Start Select catagories ==========*/}

               <div className="selectRestaurant">
                  <select className="selectRestaurant-item py-0" onChange={(event) => onSelectChange(event.target.value)}>
                     <option value="">All</option>
                     <option value="restaurant">Restaurant</option>
                     <option value="bakery">Bakery</option>
                     <option value="cafe">Cafe</option>
                  </select>
               </div>
               {/*=========== End Select catagories ==========*/}
               <span className="d-none d-md-block"></span>

               {/*=========== Start Search Restaurant Name ==========*/}

               <div className="searchName">
                  <input type="text" placeholder="Search Name.." onChange={(event) => onValueChange(event.target.value)} /> 
               </div>
               {/*=========== End Search Restaurant Name ==========*/}

            </div>
         </div>
      </div>
   )
}

export default SearchRestaurant