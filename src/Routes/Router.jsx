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
                path: '/create-event',
                element: <PrivateRouter>
                    <CreateEventPage></CreateEventPage>
                </PrivateRouter>
            },
            {
                path: '/joined-even',
                element: <JoinedEventPage></JoinedEventPage>
            },
            {
                path: '/manage-event',
                element: <ManageEventPage></ManageEventPage>
            },
            {
                path: '/update-event',
                element: <UpdateEventPage></UpdateEventPage>
            },
            {
                path: '/up-coming-event',
                element: <UpComingEventPage></UpComingEventPage>
            },
            {
                path: '/event-details',
                element: <EventDetailsPage></EventDetailsPage>
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
])

export default router;