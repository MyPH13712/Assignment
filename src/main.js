import Navigo from "navigo";
import HomePage from "./pages/home";
import AboutPage from "./pages/about";
import ProductPage from "./pages/product";
import ContactPage from "./pages/contact";
import SignUp from "./pages/signup";
import SignIn from "./pages/signin";
import DetailNewsPage from "./pages/detailNews";
import NotFoundPage from "./pages/notfound";
import DashBoardPage from "./pages/admin/dashboard";
import AddNewsPage from "./pages/admin/news/add";
import AdminNewsPage from "./pages/admin/news";
import EditNewsPage from "./pages/admin/news/edit";

const router = new Navigo("/", { linksSelector: "a" });

const print = (content) => {
    document.getElementById("app").innerHTML = content;
};

router.on({
    "/": () => {
        print(HomePage.render());
    },
    "/about": () => {
        print(AboutPage.render());
    },
    "/product": () => {
        print(ProductPage.render());
    },
    "/contact": () => {
        print(ContactPage.render());
    },
    "/signup": () => {
        print(SignUp.render());
    },
    "/signin": () => {
        print(SignIn.render());
    },
    "/news/:id": ({ data }) => {
        const { id } = data;
        print(DetailNewsPage.render(id));
    },
    "/admin/dashboard": () => {
        print(DashBoardPage.render());
    },
    "/admin/news": () => {
        print(AdminNewsPage.render());
    },
    "/admin/news/add": () => {
        print(AddNewsPage.render());
    },
    "/admin/news/edit:id": ({ data }) => {
        const { id } = data;
        print(EditNewsPage.render(id));
    },

});
router.notFound(() => print(NotFoundPage));
router.resolve();