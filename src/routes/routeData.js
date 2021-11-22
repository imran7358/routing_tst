
import About from '../pages/about'
import Home from '../pages/home'
import Contact from '../pages/contact'
const routes = [
    {
    path: "/",
    exact: true,
    component: Home
},

{
    path: "/about",
    exact: true,
    component: About
},

{
    path: "/",
    exact: true,
    component: Contact
},



]

export default routes