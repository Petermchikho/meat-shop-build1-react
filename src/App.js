import './index.css';
import './flaticon.css';
import './bootstrap-icons.css'
import {HashRouter,Routes,Route} from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./pages/Home"
import About from "./pages/About"
import Blogs from "./pages/Blogs"
import Contact from "./pages/Contact"
import Pages from "./pages/Pages"
import ShopOne from "./pages/ShopOne"
import ShopDetail from "./pages/ShopDetail"
function App() {
  return (
    <HashRouter >
      <Routes>
        <Route path="/" element={<Layout />}>
           <Route index element={<Home />} />
           <Route path="about" element={<About />} />
           <Route path="products" element={<ShopOne />} />
           <Route path="products/:id" element={<ShopDetail />} />
           <Route path="blogs" element={<Blogs />} />
           <Route path="pages" element={<Pages />} />
           <Route path="contact" element={<Contact />} />
        </Route> 
      </Routes>
    </HashRouter >
      
  );
}

export default App;
