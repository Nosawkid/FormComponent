import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductInquiryForm, {
  formAction,
} from "./components/ProductInquiryForm";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <ProductInquiryForm />,
      action: formAction,
    },
  ],
  {
    basename: "/FormComponent/",
  }
);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
