import ics from '../image/ics.webp'
import sidebarMenu from '../image/sidebarMenu-item.svg'
import '../css/Sidebar.css'

function Sidebar() {
   return (
      <ul className="sidebarMenu d-none d-md-block">
         <li><img src={ics} alt='ics' /></li>
         <li><div className="sidebarMenu-item d-flex">
            <img src={sidebarMenu} alt='Sidebar Menu' />
         </div></li>
      </ul>
   )
}

export default Sidebar