import { Container } from 'react-bootstrap';
import './App.css';
import Home from './pages/Home';
import NotFound from "./components/NotFound"
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './pages/Login';
import SesionAdmin from './pages/SesionAdmin';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />
  }, 
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <SesionAdmin />
  }
])

function App() {
  return (
      <Container fluid className='App'>
        <RouterProvider  router={router} />
      </Container>
  );
}

export default App;
