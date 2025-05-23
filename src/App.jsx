import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./components/AboutPage";
import WaitlistPage from "./pages/WaitlistPage/WaitlistPage";
import ConfirmationPage from "./pages/WaitlistPage/ConfirmationPage";
import Speaker from "./components/Speaker";
import SuccessPage from "./components/success";
import Policies from "./components/policies";
import Sponsors from "./components/sponsors";
import Team from "./components/teams";
import ThankYou from './components/ThankYou';
import AttendeeTracker from './components/AttendeeTracker';

function App() {
  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <Layout />,
        children: [
          { path: "/", element: <HomePage /> },
          { path: "/form", element: <WaitlistPage /> },
          { path: "/confirmation/:userId", element: <ConfirmationPage /> },
          { path: "/about", element: <AboutPage /> },
          { path: "/speakers", element: <Speaker /> },
          { path: "/success", element: <SuccessPage /> },
          { path: "/policies", element: <Policies /> },
          { path: "/Sponsors", element: <Sponsors /> },
          { path: "/Team", element: <Team /> },
          { path: "/thank-you", element: <ThankYou /> },
          { path: "/track-attendees", element: <AttendeeTracker /> },

          // Add catch-all route
          { path: "*", element: <Navigate to="/" replace /> },
        ],
      },
    ],
    {
      
    }
  );

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
