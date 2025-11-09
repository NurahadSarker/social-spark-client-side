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

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout></RootLayout>,
        children: [
            {
                index: true,
                element:<HomePage></HomePage>
            },
            {
                path: '/login',
                element: <LoginPage></LoginPage>
            },
            {
                path: '/registration',
                element: <RegistrationPage></RegistrationPage>
            },
            {
                path: '/create-event',
                element: <CreateEventPage></CreateEventPage>
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
                path: '/up-coming-event',
                element: <UpComingEventPage></UpComingEventPage>
            },
            {
                path: '*',
                element: <ErrorPage></ErrorPage>
            }
        ]
    }
])

export default router;