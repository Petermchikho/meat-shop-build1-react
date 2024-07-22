import './index.css';
import './flaticon.css';
import './bootstrap-icons.css'
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route} from "react-router-dom"
import Layout,{loader as LayoutLoader} from "./components/Layout"
import Home from "./pages/Home"
import About from "./pages/About"
import Blogs from "./pages/Blogs"
import BlogDetails from "./pages/BlogDetails"
import Contact from "./pages/Contact"
import Pages from "./pages/Pages"
import ServicesDetails from "./pages/ServicesDetails"
import Shop from "./pages/Shop"
import TeamDetails from "./pages/TeamDetails"
import ShopOne from "./pages/ShopOne"
import ShopDetail,{loader as shopDetailLoader} from "./pages/ShopDetail"
import ShopDescription from "./pages/Shop/ShopDescription"
import ShopReviews from "./pages/Shop/ShopReviews"
import NotFound from "./pages/NotFound"
import Error from "./pages/Error"
import SearchResults from "./pages/SearchResults"
import Login,{loader as loginLoader,action as loginAction} from "./pages/Login"
import{ requireAuth} from "./utils"

//localStorage.removeItem("loggedIn")

function App() {
  const router=createBrowserRouter(createRoutesFromElements(
    <>
    <Route path="/" element={<Layout />} loader={LayoutLoader}>
           <Route index element={<Home />} />
           <Route path="about" element={<About />} />
           <Route path="products" element={<Shop />} loader={async ({request})=> await requireAuth(request)} errorElement={<Error />}>
              <Route index element={<ShopOne />} loader={async ({request})=> await requireAuth(request)}/>
              <Route path="view/:id" element={<ShopDetail />} loader={async ({request})=> await requireAuth(request)}>
                <Route index element={<ShopDescription />}  loader={async ({request})=> await requireAuth(request)}/>
                <Route path="review" element={<ShopReviews />} loader={async ({request})=> await requireAuth(request)} />
              </Route>
           </Route>
           <Route path="blogs" element={<Blogs />} />
           <Route path="blogs/:id" element={<BlogDetails />}  />
           <Route path="pages" element={<Pages />} />
           <Route path='pages/details' element={<ServicesDetails />} />
           <Route path='pages/team' element={<TeamDetails />} />
           <Route path="contact" element={<Contact />} />
           <Route path="products/search" element={<SearchResults />} />
           
           <Route path="*" element={<NotFound />} />
    </Route>
    <Route path="/login" 
           element={<Login />} 
           loader={loginLoader} 
           action={loginAction} 
           errorElement={<Error />}
    />
    </>

  ))
  return (
    <RouterProvider router={router}/> 
  );
}

export default App;
