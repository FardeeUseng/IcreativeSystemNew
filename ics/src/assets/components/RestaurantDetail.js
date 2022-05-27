import React, {useState} from 'react'
import { Link, useParams} from 'react-router-dom'
import '../css/RestaurantDetail.css'
import myJSON from '../json/example_data.json'
function RestaurantDetail() {
   const [display, setDisplay] = useState('')

   const {restId} = useParams()
   const data = myJSON[restId]

   return (

      <div className='content'>
         <div className="restaurant-nav row mt-4 mx-3 d-flex align-items-center">

            {/*=========== Start Back to for Home page ==========*/}

            <div className="restaurant-nav-left col">
               <Link to='/' onClick={(e) => e.location.reload}>
                  <button > Back </button>
               </Link>
            </div>
            {/*=========== End Buttom for change display ==========*/}

            {/*=========== Start Buttom for change display ==========*/}

            <div className="restaurant-nav-right d-md-none d-flex col mb-4">
               <button className={display === 'Information'? 'restaurant-nav-active':null} onClick={() => setDisplay('Information')} >INFORMATION</button>
               <button className={display === 'Image'? 'restaurant-nav-active':null} onClick={() => setDisplay('Image')}>IMAGE</button>
            </div>
            {/*=========== End Buttom for change display ==========*/}

         </div>

         {/*=========== Start Restaurant detail top ==========*/}

         <div className='restaurant-detail row mx-3 mt-md-4'>
            <div className={(display === 'Information' || display === '')? "restaurant-items col-md-7 d-md-flex my-3":"restaurant-items col-md-7 d-none d-md-flex my-3"}>
               <div className="shadow bg-white rounded card">
                  <div className='restaurant-items-img '>
                     <img className="card-img-top" src={data.profile_image_url} />
                  </div>
                  
                  <div className="rest-left card-body">
                     <div className="rest-content ml-1 row">
                        <div className="rest-title-detail col-10 d-flex align-items-center">
                           <h5>{data.name}</h5>
                        </div>
                        <div className="rest-star col-2">
                           <p className="mt-2">4.5</p>
                        </div>
                        <div className="rest-detail mt-3">
                           <div className="rest-address">
                              <h5>Address:</h5>
                              <p>{data.address}</p>
                           </div>
                           <div className="rest-opening">
                              <h5>Opening Hour:</h5>
                              {data.operation_time.map((item,index) => {
                                 return(
                                    <div key={index}>
                                       <p>{`${item.day} : ${item.time_open} - ${item.time_close}`}</p>
                                    </div>
                                 )
                              })}
                           </div>
                        </div>                     
                     </div>
                  </div>
               </div>
            </div>
            {/*=========== End Restaurant top ==========*/}

            {/*=========== Start Image Restaurant bottom ==========*/}

            <div className={(display === 'Image')? "restaurant-img col-md-5 d-md-flex my-3 ": "restaurant-img col-md-5 d-none d-md-flex my-3 "}>
               <div className="rest-right shadow bg-white rounded card">
                  <div className="card-header">
                     <h3>Image</h3>
                  </div>
                  <div className='restaurant-img-item'>
                     <img className="card-img rounded-0" src={data.images[0]} />
                  </div>
                  <div className='restaurant-img-item'>
                     <img className="card-img rounded-0" src={data.images[1]} />
                  </div>
                  <div className='restaurant-img-item'>
                     <img className="card-img rounded-0" src={data.images[2]} />
                  </div>
               </div>
            </div>
            {/*=========== End Image Restaurant bottom ==========*/}
            
         </div>
      </div>
      
   )
}

export default RestaurantDetail