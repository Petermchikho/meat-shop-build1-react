import './index.css';
import './flaticon.css';
import './bootstrap-icons.css'
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route} from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./pages/Home"
import About from "./pages/About"
import Blogs from "./pages/Blogs"
import Contact from "./pages/Contact"
import Pages from "./pages/Pages"
import Shop,{loader as shopLoader} from "./pages/Shop"
import ShopOne from "./pages/ShopOne"
import ShopDetail,{loader as shopDetailLoader} from "./pages/ShopDetail"
import ShopDescription from "./pages/Shop/ShopDescription"
import ShopReviews from "./pages/Shop/ShopReviews"
import NotFound from "./pages/NotFound"
import Error from "./pages/Error"
import Login,{loader as loginLoader,action as loginAction} from "./pages/Login"
import{ requireAuth} from "./utils"
import "./server"
localStorage.removeItem("loggedIn")
function App() {
  const router=createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Layout />}>
           <Route index element={<Home />} />
           <Route path="about" element={<About />} />
           <Route path="products" element={<Shop />} loader={shopLoader} errorElement={<Error />}>
              <Route index element={<ShopOne />} loader={async ({request})=> await requireAuth(request)}/>
              <Route path=":id" element={<ShopDetail />} loader={shopDetailLoader}>
                <Route index element={<ShopDescription />}  loader={async ({request})=> await requireAuth(request)}/>
                <Route path="review" element={<ShopReviews />} loader={async ({request})=> await requireAuth(request)} />
              </Route>
           </Route>
           <Route path="blogs" element={<Blogs />} />
           <Route path="pages" element={<Pages />} />
           <Route path="contact" element={<Contact />} />
           <Route path="login" 
           element={<Login />} 
           loader={loginLoader} 
           action={loginAction} 
           errorElement={<Error />}/>
           <Route path="*" element={<NotFound />} />
    </Route>

  ))
  return (
    <RouterProvider router={router}/> 
  );
}

export default App;
