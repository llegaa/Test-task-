import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Layout} from "./layout/Layout.jsx";
import {Provider} from "react-redux";
import {store} from "./store/store.js"
import {List} from "./pages/List/List.jsx";
import {Citizen} from "./pages/Citizen/Citizen.jsx";
import {Analytics} from "./pages/Analytics/Analytics.jsx";
import {AnalyticsCountry} from "./pages/AnalyticsCountry/AnalyticsCountry.jsx";
import {AnalyticsGender} from "./pages/AnalyticsGender/AnalyticsGender.jsx";
import {AnaliticsAge} from "./pages/AnaliticsAge/AnaliticsAge.jsx";
import {DashBoard} from "./pages/DashBoard/DashBoard.jsx";
import {Error} from "./pages/Error/Error.jsx";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                path: 'analytics',
                element: <Analytics/>,
                children: [
                    {
                        path: 'dashboard',
                        element: <DashBoard/>
                    },
                    {
                        path: 'country',
                        element: <AnalyticsCountry/>
                    },
                    {
                        path: 'gender',
                        element: <AnalyticsGender/>
                    },
                    {
                        path: 'age',
                        element: <AnaliticsAge/>
                    }
                ]
            },
            {
                path: 'list',
                element: <List/>
            },
            {
                path: '/citizen/:id',
                element: <Citizen/>
            },
        ]
    },
    {
        path: '*',
        element: <Error/>
    }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <RouterProvider router={router}/>
    </Provider>
)
