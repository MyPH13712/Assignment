import Navigo from "navigo";
import HomePage from "./pages/home";
import AboutPage from "./pages/about";
import ProductPage from "./pages/products";
import ProductDetailPage from "./pages/products/detail";
import ContactPage from "./pages/contact";
import CartPage from "./pages/cart";
import Signup from "./pages/signup";
import Signin from "./pages/signin";
import DetailNewsPage from "./pages/detailNews";
import NotFoundPage from "./pages/notfound";
import DashBoardPage from "./pages/admin/dashboard";
import AdminPosts from "./pages/admin/posts";
import AdminAddPosts from "./pages/admin/posts/add";
import AdminAddProduct from "./pages/admin/products/add";
import AdminEditPosts from "./pages/admin/posts/edit";
import AdminEditProduct from "./pages/admin/products/edit";
import AdminProductPage from "./pages/admin/products";

const router = new Navigo("/", { linksSelector: "a" });

const print = async (content, id) => {
    document.getElementById("app").innerHTML = await content.render(id);
    if (content.afterRender) await content.afterRender(id);
};
router.on("/admin/*", () => {}, {
    before: (done) => {
        if (localStorage.getItem("user")) {
            const userId = JSON.parse(localStorage.getItem("user")).id;
            if (userId === 1) {
                done();
            } else {
                document.location.href = "/";
            }
        } else {
            document.location.href = "/signin";
        }
    },
});

router.on({
    "/": () => {
        print(HomePage);
    },
    "/about": () => {
        print(AboutPage);
    },
    "/products": () => {
        print(ProductPage);
    },
    "/products/:id": ({ data }) => {
        print(ProductDetailPage, data.id);
    },
    "/cart": () => {
        print(CartPage);
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
    "/admin/products/add": () => {
        print(AdminAddProduct);
    },
    "/admin/products/:id/edit": ({ data }) => {
        print(AdminEditProduct, data.id);
    },
    "/admin/posts/:id/edit": ({ data }) => {
        print(AdminEditPosts, data.id);
    },

});
router.notFound(() => print(NotFoundPage));
router.resolve();