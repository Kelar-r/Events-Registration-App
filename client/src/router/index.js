import Event from "../page/event";
import RegisterEvent from "../page/registerEvent";


const routes = [
    { path: "/", element: <Event />, exact: true },
    { path: "/event", element: <Event />, exact: true },
    { path: "/register", element: <RegisterEvent />, exact: true },

    { path: "*", element: <img src={`${process.env.PUBLIC_URL}/error-404.png`} alt="Error 404" />, exact: false }
];


export default routes