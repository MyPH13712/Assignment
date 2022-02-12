import Header from "../components/header";
import Footer from "../components/footer";
import data from "../data";

const ProductPage = {
    render() {
        return /* html */`
        ${Header.render()}
            <div class="max-w-5xl mx-auto">
            <div class="grid grid-cols-3 gap-8">
            ${data.map((post) => `
                    <div class="border p-3">
                        <a href="/news/${post.id}">
                            <img src="${post.img}" alt="" />
                        </a>
                        <h3 class="my-3"><a href="/news/${post.id}" class="font-semibold text-lg text-orange-500 ">${post.title}</a></h3>
                        <p>${post.desc}</p>
                    </div>
            `).join("")}
        </div>
            </div>
            ${Footer.render()}
        `;
    },
};
export default ProductPage;