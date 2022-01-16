import Header from "../components/header";
import Footer from "../components/footer";

const ContactPage = {
    render() {
        return /* html */`
        ${Header.render()}
        <div class="max-w-5xl mx-auto">
            <h1>Contact Page</h1>
        </div>
        ${Footer.render()}
        `;
    },
};
export default ContactPage;