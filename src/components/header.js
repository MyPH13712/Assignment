/* eslint-disable no-plusplus */
/* eslint-disable no-lone-blocks */
/* eslint-disable max-len */
import toastr from "toastr";
import { reRender } from "../utils";
import "toastr/build/toastr.min.css";

const Header = {
    render() {
        return /* html */`
        <div class=" bg-white ">
        <nav class="2xl:container 2xl:mx-auto sm:py-6 sm:px-7 mb-5 py-5 px-4 bg-zinc-100">
            <!-- For large and Medium-sized Screen -->
            <div class="flex justify-between "> 
                
                <div class=" flex space-x-3 items-center">
                <a href="/"><h1 class="flex text-4xl font-bold antialiased"><i>Piece3D</i></h1></a>                 
                </div>
                <ul class="flex float-right content-center">
                    <li><a href="/" class=" px-4 py-5 hover:text-teal-500">Trang chủ</a></li>
                    <li><a href="/products" class=" px-4 py-5 hover:text-teal-500">Sản phẩm</a></li>
                    <div class="relative">
                        <button class=" focus:outline-none dark:bg-zinc-100 flex justify-between  rounded w-40 cursor-pointer" data-menu>
                            <p class="px-4 py-1.5  hover:text-teal-500 leading-3 ">Danh mục</p>
                            <img class="dark:hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/simple_dropdown_with_icons-svg1.svg" alt="Dropdown">
                            <img class="hidden transform rotate-180 dark:hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/simple_dropdown_with_icons-svg1.svg" alt="Dropdown">
                        </button>
                        <ul class="visible transition duration-300 opacity-100 dark:bg-zinc-100  rounded mt-2 py-1 w-48 absolute">
                            <li tabindex="0" class="focus:outline-none cursor-pointer leading-3 py-3 hover:text-teal-500 hover:bg-gray-200 px-3 flex items-center">
                            <a href="#"><span class="ml-2 font-normal">Tàu chiến</span></a>
                            </li>
                            <li tabindex="0" class="focus:outline-none cursor-pointer leading-3 py-3 hover:text-teal-500 hover:bg-gray-200 px-3 flex items-center">
                                <a href="#"><span class="ml-2 font-normal">Xe tăng</span></a>
                            </li>
                            <li tabindex="0" class="focus:outline-none cursor-pointer leading-3 py-3 hover:text-teal-500 hover:bg-gray-200 px-3 flex items-center">
                                <a href="#"><span class="ml-2 font-normal">Động vật</span></a>
                            </li>
                        </ul>
                    </div>
            
                    
                    <li><a href="/tutorial" class=" px-4 py-5 hover:text-teal-500">Hướng dẫn lắp ráp</a></li>
                    <li><a href="/admin/dashboard" class=" px-4 py-5 hover:text-teal-500">Thống kê</a></li>
                    ${localStorage.getItem("user") ? `
                    <ul class="flex">
                      <li class="flex items-center"><a href="/" class=" px-2 py-1 hover:text-teal-500" id="email"></a></li>
                      <li class="flex items-center"><a class=" px-4 py-1 hover:text-teal-500" id="logout">Logout</a></li>
                    </ul>
                  ` : ""}
                </ul>
                <div class="hidden sm:flex flex-row space-x-4">
                    <div class="relative">
                            <button class=" focus:outline-none dark:bg-zinc-100 flex justify-between  rounded w-40 cursor-pointer" data-menu>
                                <p class="px-4 py-1.5  hover:text-teal-500 leading-3 ">Thông tin</p>
                                <img class="dark:hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/simple_dropdown_with_icons-svg1.svg" alt="Dropdown">
                                <img class="hidden transform rotate-180 dark:hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/simple_dropdown_with_icons-svg1.svg" alt="Dropdown">
                            </button>
                            <ul class="visible transition duration-300 opacity-100 dark:bg-zinc-100  rounded mt-2 py-1 w-48 absolute">
                                <li tabindex="0" class="focus:outline-none cursor-pointer leading-3 py-3 hover:text-teal-500 hover:bg-gray-200 px-3 flex items-center">
                                <a href="/cart"><span class="ml-2 font-normal">Giỏ hàng</span></a>
                                </li>
                                <li tabindex="0" class="focus:outline-none cursor-pointer leading-3 py-3 hover:text-teal-500 hover:bg-gray-200 px-3 flex items-center">
                                    <a href="/signin"><span class="ml-2 font-normal">Đăng nhập</span></a>
                                </li>
                                <li tabindex="0" class="focus:outline-none cursor-pointer leading-3 py-3 hover:text-teal-500 hover:bg-gray-200 px-3 flex items-center">
                                    <a href="/signup"><span class="ml-2 font-normal">Đăng kí</span></a>
                                </li>
                            </ul>
                        </div>
                </div>
        </nav>    
    </div>
        `;
    },
    afterRender() {
        const elements = document.querySelectorAll("[data-menu]");
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
export default Header;

{ /* <a><i class="fa-solid fa-user"></i></a> */ }