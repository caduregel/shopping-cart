import App from "./App";
import ErrorPage from "./notFound";
import Home from "./pages/Home";
import Shop from "./pages/Shop";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "home", element: <Home /> },
      { path: "shop", element: <Shop /> },
    ],
  },
  {

  }
];

export default routes;