import { createBrowserRouter } from "react-router";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import Menu from "../pages/menu/menu/Menu";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    children:[
        {
            path:"/",
            element:<Home/>
        },{
          path:"/menu",
          element:<Menu/>
        }
    ]
  },
]);

export default router;
