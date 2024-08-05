import { createBrowserRouter, RouterProvider } from "react-router-dom"
import RegistrationForm from "./pages/auth/registerForm";
import LoginForm from "./pages/auth/loginForm";
import RecoverPasswordForm from "./pages/auth/recoverPasswordForm";


const router = createBrowserRouter([
{path: "/register", element: <RegistrationForm />},
{path: "/login", element: <LoginForm />},
{path: "/recover-password", element: <RecoverPasswordForm /> },
]);

function App() {
  return (<RouterProvider router={router} /> );
}

export default App
