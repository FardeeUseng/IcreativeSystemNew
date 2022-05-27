import ics from '../image/ics.webp'
import inform from '../image/inform.svg'
import user from '../image/user.png'
import '../css/Navbar.css'

function Navbar() {
   return (
      <nav className="d-flex">
         <div className="nav-left">
            <img src={ics} className="d-sm-none" alt='ics' />
         </div>
         <div className="nav-right d-flex mx-3 mx-sm-5">
            <div className="inform d-sm-flex d-none">
               <img src={inform} alt='inform' />
            </div>
            <div className="profile ml-3 ">
               <img src={user} alt=""/>
            </div>
            <div className="name ml-3 d-none d-sm-block">
               <h2 className="my-1">Fardee Tat</h2>
            </div>
         </div>
      </nav>
   )
}

export default Navbar