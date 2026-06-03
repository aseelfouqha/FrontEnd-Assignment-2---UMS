import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./Pages/home/Home";
import Users from "./Pages/Users/Users";



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
      path:'users',
      element: <Users/>,

    }
  ]
}

]);

export default router;