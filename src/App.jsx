import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css'
import PageLayout from "./Components/PageLayout";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";


const router = createBrowserRouter([
  {
    path: "/",
    element: <PageLayout/>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "about",
        element: <About />,
      },
    ]
  },
]);

function App() {
  

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
