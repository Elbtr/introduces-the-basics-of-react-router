import {
  createBrowserRouter,
  RouterProvider,
  // createRoutesFromElements,
  // Route,
} from "react-router-dom";
import ErrorPage from "./component/Error";
import About from "./page/About";
import Home from "./page/Home";
import ProductList from "./page/ProductList";
import ProductPage from "./page/ProductPage";
import RootLayout from "./page/Root";

// const routeDefinitions = createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<Home />} />
//     <Route path="/about" element={<About />} />
//   </Route>
// );

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, path: "", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "products", element: <ProductPage /> },
      { path: "products/:productId", element: <ProductList /> },
    ],
  },
]);

// const router = createBrowserRouter(routeDefinitions);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
