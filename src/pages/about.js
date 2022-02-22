import toastr from "toastr";
import Header from "../components/header";
import Footer from "../components/footer";
import { reRender } from "../utils";
import "toastr/build/toastr.min.css";

const AboutPage = {

    render() {
        return /* html */`
            ${Header.render()}
        <div class="max-w-5xl mx-auto">                            
        <div class="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
            <div class="flex flex-col lg:flex-row justify-between gap-8">
                <div class="w-full flex flex-col justify-center">
                    <h1 class="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">Về chúng tôi</h1>
                    <p class="font-normal text-base leading-6 text-gray-600"> Chuyên bán Mô Hình Kim Loại 3D bằng thép từ hàng bình dân vài chục nghìn cho tới nhiều sản phẩm cao cấp được nhiều người yêu thích mô hình kim loại 3d hà nội tin tưởng. Với nhiều tỷ lệ, nhiều dòng sản phẩm của các hãng như Piececool, MU Model, Metal Mosaic, Metal Word… rất nhiều chủ đề đa dạng như: Tàu chiến, máy bay, xe tăng, ô tô thể thao, xe meto, kiếm sĩ, robot… Đội ngũ tư vấn giàu kinh nghiệm và kiến thức  chuyên môn về mô hình 3D kim loại ắt hẳn sẽ mang lại sự tiện lợi và các kiến thức bổ ích nhằm thỏa mãn thú sưu tầm một cách tuyệt vời nhất khi chọn mua các sản phẩm </p>
                </div>
                
            </div>
        </div>

        </div>
        ${Footer.render()}
        `;
    },
    afterRender() {
        const elements = document.querySelectorAll("[data-menu]");
        // eslint-disable-next-line no-plusplus
        for (let i = 0; i < elements.length; i++) {
            const main = elements[i];
            main.addEventListener("click", () => {
                const element = main.parentElement.parentElement;
                const andicators = main.querySelectorAll("img");
                const child = element.querySelector("ul");
                if (child.classList.contains("opacity-0")) {
                    child.classList.toggle("invisible");
                    child.classList.toggle("visible");
                    andicators[0].style.display = "block";
                    andicators[1].style.display = "none";
                } else {
                    setTimeout(() => {
                        child.classList.toggle("invisible");
                        child.classList.toggle("visible");
                    }, 300);
                    andicators[0].style.display = "none";
                    andicators[1].style.display = "block";
                }
                child.classList.toggle("opacity-0");
                child.classList.toggle("opacity-100");
            });
        }

        // Lấy thông tin từ localStorage
        // Sử dụng JSON.parse để chuyển đổi chuỗi sang object
        const email = document.querySelector("#email");
        const logout = document.querySelector("#logout");
        if (email) {
            email.innerHTML = JSON.parse(localStorage.getItem("user")).email;
        }
        if (logout) {
            logout.addEventListener("click", () => {
                localStorage.removeItem("user");
                reRender(Header, "#header");
                toastr.success("Logout thành công");
            });
        }
    },
};
export default AboutPage;