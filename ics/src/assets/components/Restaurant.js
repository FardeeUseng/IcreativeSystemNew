function Restaurant(props) {
   const {data} = props
   return (
      <div  className="restaurant-items col my-3">
         <div className="restaurantList shadow bg-white rounded card">

            {/*=========== Start Restaurant Top detail ==========*/}

            <div className="card-body">
               <div className="restaurant-top d-flex">
                  <div className="rest-img shadow">
                     <img src={data.profile_image_url} alt={data.profile_image_url} />
                  </div>
                  <div className="rest-content">
                     <div className="rest-title">
                        <h5 style={{textDecoration:'none'}}>{data.name}</h5>
                     </div>
                  <div className="rest-open d-block d-sm-flex">
                     <div className="rest-open-left d-flex align-items-center">
                        <i className="ri-calendar-2-line"></i>
                        <p className="mt-3 ml-2">10.00 AM - 6.00 PM</p>
                     </div>
                     <div className="rest-open-right d-flex ml-5">
                        <span className="mt-3 ml-5 d-none d-sm-block"></span>
                        <p className="mt-2 ml-1 ">{data.rating}</p>
                     </div>
                  </div>                        
               </div>                     
            </div>
            {/*=========== End Restaurant Top detail ==========*/}

            {/*=========== Start Restaurant bottom image ==========*/}

               <ul className="rest-image d-flex shadow ">
                  <li><img src={data.images[0]} alt="" /></li>
                  <li><img src={data.images[1]} alt={data.images[1]} /></li>
                  <li><img src={data.images[2]} alt={data.images[2]} /></li>
               </ul>
            {/*=========== End Restaurant bottom image ==========*/}

            </div>
         </div>
      </div>                  
   )
}

export default Restaurant