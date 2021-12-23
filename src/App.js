import './App.css';
import Home from './Pages/Home/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import AddProducts from './Pages/Dashboard/AddProducts/AddProducts';
import ManageAllOrders from './Pages/Dashboard/ManageAllOrders/ManageAllOrders';
import MakeAdmin from './Pages/Dashboard/MakeAdmin/MakeAdmin';
import ProductsContainer from './Pages/Products/ProductsContainer/ProductsContainer';
import Navigation from './Pages/Shared/Navigation/Navigation';
import Login from './Pages/Login/Login/Login';
import AuthProvider from './Context/AuthProvider';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route
              path="/login"
              element={
                <>
                  <Navigation />
                  <Login />
                </>
              }
            />
            <Route path="/products" element={<ProductsContainer />} />
            <Route path="/dashboard" element={<Dashboard />}>
              <Route path="/dashboard" element={<ManageAllOrders />} />
              <Route path="/dashboard/addProducts" element={<AddProducts />} />
              <Route path="/dashboard/makeAdmin" element={<MakeAdmin />} />
            </Route>
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
