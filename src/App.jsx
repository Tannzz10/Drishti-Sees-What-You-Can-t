import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { Applayout } from "./componnets/Applayout";
import { Home } from "./pages/Home";
import { Aboutpage } from "./pages/Aboutpage";
import { Pagemediate } from "./pages/Pagemediate";
import { Pageservice } from "./pages/Pageservice";
import { Errorpage } from "./pages/Errorpage";

const router = createBrowserRouter([
  {
    path:"/",
    element:<Applayout/>,
    errorElement:<Errorpage/>,
    children:[
       {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Aboutpage",
    element: <Aboutpage />,
  },
  {
    path: "/Pagemediate",
    element: <Pagemediate />,
  },
  {
    path: "/Pageservice",
    element: <Pageservice />,
  },
  
    ]
}
  
]);

const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};
export default App;
