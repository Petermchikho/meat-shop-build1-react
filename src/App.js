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
import Blogs,{loader as BlogsLoader} from "./pages/Blogs"
import BlogDetails,{loader as BlogsDetailsLoader} from "./pages/BlogDetails"
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
    <Route path="/" element={<Layout />} loader={LayoutLoader} >
           <Route index element={<Home />}  errorElement={<Error />}/>
           <Route path="about" element={<About />}  errorElement={<Error />}/>
           <Route path="products" element={<Shop />} loader={async ({request})=> await requireAuth(request)} errorElement={<Error />}>
              <Route index element={<ShopOne />} loader={async ({request})=> await requireAuth(request)}/>
              <Route path="view/:id" element={<ShopDetail />} loader={async ({request})=> await requireAuth(request)}>
                <Route index element={<ShopDescription />}  loader={async ({request})=> await requireAuth(request)}/>
                <Route path="review" element={<ShopReviews />} loader={async ({request})=> await requireAuth(request)} />
              </Route>
           </Route>
           <Route path="blogs" element={<Blogs />} loader={BlogsLoader} errorElement={<Error />}/>
           <Route path="blogs/:id" element={<BlogDetails />} loader={BlogsDetailsLoader}  errorElement={<Error />}/>
           <Route path="pages" element={<Pages />}  errorElement={<Error />}/>
           <Route path='pages/details' element={<ServicesDetails />} errorElement={<Error />}/>
           <Route path='pages/team' element={<TeamDetails />} errorElement={<Error />}/>
           <Route path="contact" element={<Contact />} errorElement={<Error />}/>
           <Route path="products/search" element={<SearchResults />} errorElement={<Error />}/>
           
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
