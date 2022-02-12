import Navigo from "navigo";
import HomePage from "./pages/home";
import AboutPage from "./pages/about";
import ProductPage from "./pages/product";
import ContactPage from "./pages/contact";
import Signup from "./pages/signup";
import Signin from "./pages/signin";
import DetailNewsPage from "./pages/detailNews";
import NotFoundPage from "./pages/notfound";
import DashBoardPage from "./pages/admin/dashboard";
import AdminPosts from "./pages/admin/posts";
import AdminAddPosts from "./pages/admin/posts/add";
import AdminEditPosts from "./pages/admin/posts/edit";
import AdminProductPage from "./pages/admin/products";

const router = new Navigo("/", { linksSelector: "a" });

const print = async (content, id) => {
    document.getElementById("app").innerHTML = await content.render(id);
    if (content.afterRender) await content.afterRender(id);
};

router.on({
    "/": () => {
        print(HomePage);
    },
    "/about": () => {
        print(AboutPage);
    },
    "/product": () => {
        print(ProductPage);
    },
    "/contact": () => {
        print(ContactPage);
    },
    "/signup": () => {
        print(Signup);
    },
    "/signin": () => {
        print(Signin);
    },
    "/news/:id": ({ data }) => {
        const { id } = data;
        print(DetailNewsPage.render(id));
    },
    "/admin/dashboard": () => {
        print(DashBoardPage);
    },
    "/admin/products": () => {
        print(AdminProductPage);
    },
    "/admin/posts": () => {
        print(AdminPosts);
    },
    "/admin/posts/add": () => {
        print(AdminAddPosts);
    },
    "/admin/posts/:id/edit": ({ data }) => {
        print(AdminEditPosts, data.id);
    },

});
router.notFound(() => print(NotFoundPage));
router.resolve();