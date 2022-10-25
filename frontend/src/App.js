import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
      ],
    },

    // {
    //   path: "/register",
    //   element: <Register />,
    // },
  ]);

  return (
    <div className="app">
      <div className="pages">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
