import Banner from "../components/banner";
import Header from "../components/header";
import Footer from "../components/footer";
import NewList from "../components/newList";

const HomePage = {
    render() {
        return /* html */`
        ${Header.render()}
            <div class="max-w-5xl mx-auto">
                <div class="banner">
                   ${Banner.render()}
                </div>
                <div class="news">
                    ${NewList.render()}
                </div>
            </div>
            ${Footer.render()}
        `;
    },
};
export default HomePage;