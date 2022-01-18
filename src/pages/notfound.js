import Banner from "../components/banner";
import Header from "../components/header";
import Footer from "../components/footer";

const NotFoundPage = {
    render() {
        return /* html */`
        ${Header.render()}
            <div class="max-w-5xl mx-auto">
                <section>
                    ${Banner.render()}
                </section>
                <main>
                <div class="flex items-center justify-center py-12">
                    <div class="bg-white border rounded-md flex items-center justify-center mx-4 md:w-2/3">
                        <div class="flex flex-col items-center py-16">
                            <img class="px-4 hidden md:block" src="https://i.ibb.co/9Vs73RF/undraw-page-not-found-su7k-1-3.png" />
                            <img class="md:hidden" src="https://i.ibb.co/RgYQvV7/undraw-page-not-found-su7k-1.png" />
                            <h1 class="px-4 pt-8 pb-4 text-center text-5xl font-bold leading-10 text-gray-800">OOPS!</h1>
                            <p class="px-4 pb-10 text-base leading-none text-center text-gray-600">Không có tín hiệu ở đây! chúng tôi không tìm thấy trang bạn đang tìm kiếm</p>
                            <button class="mx-4 h-10 w-44 border rounded-md text-white text-base bg-indigo-700 hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-opacity-50 focus:ring-indigo-800">Quay lại</button>
                        </div>
                    </div>
                </div>
                </main>
            </div>
            ${Footer.render()}
        `;
    },
};
export default NotFoundPage;