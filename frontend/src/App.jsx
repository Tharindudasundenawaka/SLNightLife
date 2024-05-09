
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SharedLayout from "./components/SharedLayout/SharedLayout";
import Home from "./pages/Home/Home";
import SignUp from "./pages/SignUp/SignUp";
import Login from "./pages/Login/Login";
import UserDashBord from "./pages/UserDashbord/UserDashbord";
import SelerDashBord from "./pages/SellerDashbord/SellerDashbord";
import AdminDashBord from "./pages/AdminDashbord/AdminDashbord";
import Services from "./pages/NightServices/NightServices";
import Scroll from "./components/ScrollToTopButton/ScrollToTopButton";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />

          <Route path="signup" element={<SignUp />} />

          <Route path="login" element={<Login />} />
          
          <Route path="user-dashboard" element={<UserDashBord />} />
          <Route path="seller-dashboard" element={<SelerDashBord />} />
          <Route path="admin-dashboard" element={<AdminDashBord />} />
          <Route path="services" element={<Services />} />
          

          {/* <Route path="registation" element={<Register />} />

          <Route path="products" element={<SharedProductLayout />}>
            <Route index element={<Products />} />
            <Route path=":productId" element={<SingleProduct />} />
          </Route>

          
          <Route path="categoryAutoPaint" element={<SharedCategoryLayout />}>
            <Route path=":category" element={<AutoPaint />} />
          </Route>

          <Route
            path="autoPaintProductsCatergory"
            element={<SharedCategoryLayout />}
          >
            <Route path=":category" element={<AutoPaintProductsCatergory />} />
          </Route>

          <Route path="categoryWoodPaint" element={<SharedCategoryLayout />}>
            <Route path=":category" element={<WoodPaint />} />
          </Route>

          <Route path="categoryWax" element={<SharedCategoryLayout />}>
            <Route path=":category" element={<Wax />} />
          </Route>
          
          <Route path="categoryOthers" element={<SharedCategoryLayout />}>
            <Route path=":category" element={<Others/>} />
          </Route>

          <Route path="*" element={<Error />} /> */}
        </Route>
      </Routes>
      <Scroll />
    </BrowserRouter>
  );
}

export default App;