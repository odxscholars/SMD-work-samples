import Footer from "../../components/footer/Footer"
import Navbar from "../../components/navbar/Navbar"
import PageRouter from "../../components/router/PageRouter"
const MainLayout = () => {
    return (
        <>
            <Navbar />
            <PageRouter />
            <Footer />
        </>
    )
}

export default MainLayout
