// Components
import Home from "./Views/Home/Home";

// Libraries
import { ThemeProvider } from "@hybris-software/ui-kit";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
//Style
import Theme from "./assets/Theme.module.css";
import "./App.css";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
  ]);
  return (
    <ThemeProvider
      theme={{
        inputField: {
          baseClassName: Theme.inputFieldStyle,
          errorClassName: Theme.inputFieldErrorStyle,
          successClassName: Theme.inputFieldSuccessStyle,
          labelClassName: Theme.inputFieldLabelStyle,
        },
        select: {
          selectClassName: Theme.selectClass,
          selectPlaceholderClassName: Theme.selectPlaceholderClass,
          selectOpenedClassName: Theme.selectOpenedClass,
          selectOptionClassName: Theme.selectOptionClass,
        },
      }}
    >
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
