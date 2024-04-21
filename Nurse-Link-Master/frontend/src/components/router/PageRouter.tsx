import routes from "./router"
import { Routes, Route } from "react-router-dom"
const PageRouter = () => {
    return (
        <>
            <Routes>
                {routes.map((route, index) => (
                    <Route path={route.path} element={route.element} key={index}/>
                ))}
            </Routes>
        </>
    )
}
// for prod
export default PageRouter
