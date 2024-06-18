import './index.css';
import './flaticon.css';
import './bootstrap-icons.css'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./pages/Home"
import About from "./pages/About"
import Blogs from "./pages/Blogs"
import Contact from "./pages/Contact"
import Pages from "./pages/Pages"
import Products from "./pages/Products"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
           <Route index element={<Home />} />
           <Route path="about" element={<About />} />
           <Route path="products" element={<Products />} />
           <Route path="blogs" element={<Blogs />} />
           <Route path="pages" element={<Pages />} />
           <Route path="contact" element={<Contact />} />
        </Route> 
      </Routes>
    </BrowserRouter>
      
  );
}

export default App;
