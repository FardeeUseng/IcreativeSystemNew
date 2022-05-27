import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './assets/components/Navbar'
import Sidebar from './assets/components/Sidebar';
import ListPlace from './assets/components/ListPlace';
import RestaurantDetail from './assets/components/RestaurantDetail'; 
import Error404 from './assets/components/Error404';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <div className="container-fluid p-0">
      <Router>
        <Navbar/>
        <Sidebar/>
        <Routes>
          <Route path="/" element={<ListPlace />} />
          <Route path="/home" element={<ListPlace />} />
          <Route path="/restaurantdetail" element={<RestaurantDetail />} />
          <Route path="/restaurantdetail/:restId" element={<RestaurantDetail />} />
          <Route path="/*" element={<Error404 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
