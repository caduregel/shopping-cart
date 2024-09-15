import App from "./App";
import Test from "./pages/test"
import ErrorPage from "./notFound";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/test",
    element: <Test />,
    errorElement: <ErrorPage />,
  }
];

export default routes;