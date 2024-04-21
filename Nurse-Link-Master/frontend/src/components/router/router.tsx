import { RouteType } from "../../types/routeTypes/routeType"
import Landing from "../../pages/landing/Landing"
import Homepage from "../../pages/homepage/Homepage"
import RegisterPage from "../../pages/register/RegisterPage"
import LoginPage from "../../pages/login/LoginPage"
import RegisterNurse from "../../pages/registerNurse/RegisterNurse"
import RegisterInstitute from "../../pages/registerInstitute/RegisterInstitute"
import Nurse from "../../pages/nurse/Nurse"
import Institute from "../../pages/institute/Institute"
import NurseEditPage from "../../pages/nurseEdit/NurseEditPage"
import NurseEditDocumentPage from "../../pages/nurseEdit/NurseEditDocumentPage.tsx"
import NurseEditBackgroundPage from "../../pages/nurseEdit/NurseEditBackgroundPage.tsx"
import NurseEditContactPage from "../../pages/nurseEdit/NurseEditContactPage.tsx"
import Connection from "../../pages/connection/Connection.tsx"
import ConnectionRequestReceived from "../../pages/connection/ConnectionRequestReceived.tsx"
import ConnectionRequestSent from "../../pages/connection/ConnectionRequestSent.tsx"
import NurseRecoRecievePage from "../../pages/recommendations/NurseRecoReceivePage.tsx"
import NurseRecoGivePage from "../../pages/recommendations/NurseRecoGivePage.tsx"


const routes: Array<RouteType> = [
    { path: "/", element: <Landing /> },
    { path: "/homepage", element: <Homepage />, name: "NurseLink" },
    { path: "/register", element: <RegisterPage /> },
    { path: "/login", element: <LoginPage /> },
    { path: "/register-nurse", element: <RegisterNurse /> },
    { path: "/register-institute", element: <RegisterInstitute /> },
    { path: "/nurse/:userId", element: <Nurse /> },
    { path: "/nurse/edit/:userId", element: <NurseEditPage /> },
    { path: "/institute/:userId", element: <Institute /> },
    { path: "/nurse/edit/documents/:userId", element: <NurseEditDocumentPage />},
    { path: "/nurse/edit/background/:userId", element: <NurseEditBackgroundPage />},
    { path: "/nurse/edit/contact/:userId", element: <NurseEditContactPage />},
    { path: "/connection/:userId", element: <Connection /> },
    { path: "/connection-request-received/:userId", element: <ConnectionRequestReceived />},
    { path: "/connection-request-sent/:userId", element: <ConnectionRequestSent />},  
    { path: "/nurse/edit/documents/:userId", element: <NurseEditDocumentPage /> },
    { path: "/nurse/edit/background/:userId", element: <NurseEditBackgroundPage /> },
    { path: "/nurse/edit/contact/:userId", element: <NurseEditContactPage /> },
    { path: "/nurse/recommendations/receive/:userId", element: <NurseRecoRecievePage /> },
    { path: "/nurse/recommendations/give/:userId", element: <NurseRecoGivePage /> }

]

export default routes
