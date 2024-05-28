import { Container } from 'react-bootstrap';
import './App.css';
import Home from './pages/Home';
import NotFound from "./components/NotFound"
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './pages/Login';
import SesionAdmin from './pages/SesionAdmin';
import Registro from './pages/Resgistro';
import UserList from './components/UserList'
import MedicosList from './components/MedicosList';

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
    element: <SesionAdmin />,
  },
  { 
    path: "/dashboard/usuarios",
    element: <UserList />
  },
  {
    path: "/dashboard/medicos",
    element: <MedicosList />
  },
  {
    path: "/registro",
    element: <Registro />
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
