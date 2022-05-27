import { Link } from 'react-router-dom'
import '../css/Error.css'
function Error404() {
   return (
      <div className="error my-5">
         <div className="alert alert-danger alert-dismissible fade show" role="alert">
            <strong>ERROR 404</strong> ขออภัยไม่พบหน้าเว็บที่คุณร้องขอ !! 
            <Link to="/" className='text-primary' > กลับสู่หน้าหลัก</Link>
         </div>
      </div>
   )
}

export default Error404