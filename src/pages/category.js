import toastr from "toastr";
import Header from "../components/header";
import Footer from "../components/footer";
import { getAll } from "../api/product";
import { reRender } from "../utils";
import "toastr/build/toastr.min.css";

const CategoryPage = {
    async render() {
        const response = await getAll();
        return /* html */`
        ${Header.render()}
            
        <div class="max-w-5xl mx-auto">
            
            <div class="py-6 lg:px-20 md:px-6 px-4">
               <p class="font-normal text-sm leading-3 text-stone-900 dark:text-black">Trang chủ / Sản phẩm</p>
                <hr class="w-full bg-gray-700 my-6" />
    
                <div class="flex justify-between items-center">
                    <div class="flex space-x-3 justify-center items-center text-gray-800 dark:text-black">
                      <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/product-grid-5-svg1.svg" alt="toggler">
                      <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/product-grid-5-svg1dark.svg" alt="toggler">
                        <p class="font-normal text-base leading-4 text-gray-800 dark:text-black"><a href="#">Lọc</a></p>
                    </div>
                </div>
    
                <div class="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-y-12 lg:gap-x-8 sm:gap-y-10 sm:gap-x-6 gap-y-6 lg:mt-12 mt-10">
                ${response.data.map((product) => `
                    <div class="relative">
                        <div class="relative group">
                            <div class="flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full"></div>
                            <a href="/products/${product.id}">
                                <img class="w-full" src="${product.img}"/>
                            </a>
                        </div>
                        <p class="font-normal dark:text-black text-xl leading-5 text-stone-900 md:mt-6 mt-4"><a href="/products/${product.id}">${product.name}</a></p>
                        <p class="font-semibold dark:text-black text-xl leading-5 text-stone-900 mt-4">${product.price}</p>
                    </div>
                    `).join("")}    
                </div>
    
                
            <div class="max-w-8xl mx-auto container py-10">
            <ul class="flex justify-center items-center">
                <li>
                    <span tabindex="0" aria-label="backward" role="button" class="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none p-1 flex rounded transition duration-150 ease-in-out text-base leading-tight font-bold text-gray-500 hover:text-indigo-700 focus:outline-none mr-1 sm:mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <polyline points="15 6 9 12 15 18" />
                        </svg>
                    </span>
                </li>
                <li>
                    <span tabindex="0" class="focus:outline-none focus:bg-indigo-700 focus:text-white flex text-indigo-700 bg-white hover:bg-indigo-600 hover:text-white text-base leading-tight font-bold cursor-pointer shadow transition duration-150 ease-in-out mx-2 sm:mx-4 rounded px-3 py-2 focus:outline-none">1</span>
                </li>
                <li>
                    <span tabindex="0" class="focus:outline-none focus:bg-indigo-700 focus:text-white flex text-indigo-700 bg-white hover:bg-indigo-600 hover:text-white text-base leading-tight font-bold cursor-pointer shadow transition duration-150 ease-in-out mx-2 sm:mx-4 rounded px-3 py-2 focus:outline-none">2</span>
                </li>
                <li>
                    <span tabindex="0" class="focus:outline-none focus:bg-indigo-700 focus:text-white flex text-indigo-700 bg-white hover:bg-indigo-600 hover:text-white text-base leading-tight font-bold cursor-pointer transition shadow duration-150 ease-in-out mx-2 sm:mx-4 rounded px-3 py-2 focus:outline-none">3</span>
                </li>
                <li>
                    <span tabindex="0" class="focus:outline-none focus:bg-indigo-700 focus:text-white flex text-indigo-700 bg-white hover:bg-indigo-600 hover:text-white text-base leading-tight font-bold cursor-pointer transition shadow duration-150 ease-in-out mx-2 sm:mx-4 rounded px-3 py-2 focus:outline-none">4</span>
                </li>
                <li>
                    <span tabindex="0" aria-label="forward" role="button" class="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none flex rounded transition duration-150 ease-in-out text-base leading-tight font-bold text-gray-500 hover:text-indigo-700 p-1 focus:outline-none ml-1 sm:ml-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <polyline points="9 6 15 12 9 18" />
                        </svg>
                    </span>
                </li>
            </ul>
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
export default CategoryPage;