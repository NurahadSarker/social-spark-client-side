import { createBrowserRouter } from "react-router";
import RootLayout from "../Layout/RootLayout";
import HomePage from "../Components/HomePage";
import LoginPage from "../Pages/LoginPage";
import RegistrationPage from "../Pages/RegistrationPage";
import CreateEventPage from "../Pages/CreateEventPage";
import JoinedEventPage from "../Pages/JoinedEventPage";
import ManageEventPage from "../Pages/ManageEventPage";
import UpComingEventPage from "../Pages/UpComingEventPage";
import ErrorPage from "../Components/ErrorPage";
import EventDetailsPage from "../Pages/EventDetailsPage";
import UpdateEventPage from "../Pages/UpdateEventPage";
import AuthLayout from "../Layout/AuthLayout";
import PrivateRouter from "../Provider/PrivateRouter";
import ForgotPasswordPage from "../Pages/ForgotPasswordPage";
import AboutUsPage from "../Pages/AboutUsPage";
import Dashboard from "../Components/Dashboard";
import DashboardHomePage from "../Pages/DashboardHomePage";
import Profile from "../Pages/Profile";

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout></RootLayout>,
        children: [
            {
                index: true,
                element: <HomePage></HomePage>
            },
            {
                path: '/up-coming-event',
                element: <UpComingEventPage></UpComingEventPage>
            },
            {
                path: "/about-us",
                element: <AboutUsPage></AboutUsPage>
            },
            {
                path: '/event-details/:id',
                loader: ({ params }) => fetch(`https://social-spark-server-side.vercel.app/events/${params.id}`),
                element: <EventDetailsPage></EventDetailsPage>
            },
            {
                path: '/forgot-password',
                element: <ForgotPasswordPage></ForgotPasswordPage>
            },
            {
                path: '*',
                element: <ErrorPage></ErrorPage>
            }
        ]
    },
    {
        path: '/auth',
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path: '/auth/login',
                element: <LoginPage></LoginPage>
            },
            {
                path: '/auth/registration',
                element: <RegistrationPage></RegistrationPage>
            }
        ]
    },
    {
        path: 'dashboard',
        element: <PrivateRouter>
            <Dashboard></Dashboard>
        </PrivateRouter>,
        children: [
            {
                index: true,
                element: <PrivateRouter>
                    <DashboardHomePage></DashboardHomePage>
                </PrivateRouter>
            },
            {
                path: 'create-event',
                element: <PrivateRouter>
                    <CreateEventPage></CreateEventPage>
                </PrivateRouter>
            },
            {
                path: 'joined-event',
                element: <PrivateRouter>
                    <JoinedEventPage></JoinedEventPage>
                </PrivateRouter>
            },
            {
                path: 'manage-event',
                element: <PrivateRouter>
                    <ManageEventPage></ManageEventPage>
                </PrivateRouter>
            },
            {
                path: '/dashboard/update-event/:id',
                element: <PrivateRouter>
                    <UpdateEventPage></UpdateEventPage>
                </PrivateRouter>
            },
            {
                path: 'profile',
                element: <Profile></Profile>
            }
        ]
        
    }
])

export default router;