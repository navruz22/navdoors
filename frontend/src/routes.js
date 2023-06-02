import Client from "./pages/Client";
import Depth from "./pages/details/Depth";
import Dobor from "./pages/details/Dobor";
import DoorType from "./pages/details/DoorType";
import FramogFigure from "./pages/details/FramogFigure";
import FramogType from "./pages/details/FramogType";
import Jambs from "./pages/details/Jamb";
import Layer from "./pages/details/Layer";
import Lock from "./pages/details/Lock";
import OrnamentFigure from "./pages/details/OrnamentFigure";
import Sale from "./pages/sellerPages/Sale";
import GlassCount from "./pages/details/GlassCount";


export const detailRoutes = [
    {
        path: "/doortype",
        element: <DoorType/>
    },
    {
        path: "/depth",
        element: <Depth/>
    },
    {
        path: "/dobor",
        element: <Dobor/>
    },
    {
        path: "/framog_figure",
        element: <FramogFigure/>
    },
    {
        path: "/framog_type",
        element: <FramogType/>
    },
    {
        path: "/jambs",
        element: <Jambs/>
    },
    {
        path: "/layer",
        element: <Layer/>
    },
    {
        path: "/lock",
        element: <Lock/>
    },
    {
        path: "/ornament_type",
        element: <OrnamentFigure/>
    },
    {
        path: "/glass_count",
        element: <GlassCount/>
    }
]

export const detailLinks = [
    {
        path: "/doortype",
        title: "Eshik turi"
    },
    {
        path: "/depth",
        title: "Karobka qalinligi"
    },
    {
        path: "/dobor",
        title: "Dobor"
    },
    {
        path: "/framog_figure",
        title: "Framog shakli"
    },
    {
        path: "/framog_type",
        title: "Framog turi"
    },
    {
        path: "/jambs",
        title: "Nalichnik"
    },
    {
        path: "/layer",
        title: "Tabaqaligi"
    },
    {
        path: "/lock",
        title: "Zamok"
    },
    {
        path: "/ornament_type",
        title: "Naqsh shakli"
    },
    {
        path: "/glass_count",
        title: "Deraza soni"
    }
]


export const sellerRoutes = [
    {
        path: "/",
        element: <Sale/>,
    },
    ...detailRoutes,
    {
        path: "/clients",
        element: <Client/>
    }
] 

export const sellerLinks = [
    {
        title: "Sotuv",
        path: "/"
    },
    {
        title: "Parametrlar",
        isDropdown: true,
        dropdowns: [...detailLinks]
    },
    {
        title: "Mijozlar",
        path: "/clients"
    }
]