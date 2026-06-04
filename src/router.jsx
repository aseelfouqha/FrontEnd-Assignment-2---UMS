import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./Pages/home/Home";
import Customers from "./hooks/users";



const router = createBrowserRouter([
{
  path: '/',
  element: <MainLayout/>,
  children: [
    {
      index:true,
      element: <Home />
    },
    {
      path:'customers',
      element: <Customers/>,

    }
  ]
}

]);

export default router;