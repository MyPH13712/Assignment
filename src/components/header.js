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
                    <h1 class="flex text-4xl font-bold antialiased"><i>Piece3D</i></h1>                     
                </div>
                <ul class="flex float-right content-center">
                    <li><a href="/" class=" px-4 py-5 hover:text-teal-500">Trang chủ</a></li>
                    
                    <div class="relative">
                    <button class="focus:outline-none    bg-white  flex items-center justify-between border rounded  bg-zinc-100 w-40 cursor-pointer" data-menu>
                        <p class="pl-3 px-4 py-3 hover:text-teal-500 text-sm leading-3 tracking-normal font-normal">Basic Options</p>
                        <div class="cursor-pointer hover:text-teal-500 mr-3">
                           <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/simple_with_account_indigo-svg1.svg" alt="Dropdown" class="dark:hidden">
                           <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/simple_with_account_indigo-svg1.svg" alt="Dropdown" class="hidden transform rotate-180 dark:hidden">
                           <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/simple_with_account_indigo-svg1darks.svg" alt="Dropdown" class="dark:vlock hidden">
                           <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/simple_with_account_indigo-svg1darks.svg" alt="Dropdown" class="transform rotate-180 dark:block hidden">
                        </div>
                    </button>
                    <ul id="optionlist" class="visible transition duration-300 opacity-100 bg-white dark:bg-gray-800 shadow rounded mt-2 pb-1 w-48 absolute">
                        <li class="focus:outline-none focus:underline focus:text-gray-400">
                        
                        </li>
                       
                    </ul>
                  
                  
                </div>
            
                    <li><a href="/tutorial" class=" px-4 py-5 hover:text-teal-500">Hướng dẫn lắp ráp</a></li>
                    <li><a href="/admin/dashboard" class=" px-4 py-5 hover:text-teal-500">Thống kê</a></li>
                </ul>
                <div class="hidden sm:flex flex-row space-x-4">
                <div class="relative">
                <button class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 focus:bg-gray-200 hover:bg-gray-200 bg-white dark:bg-gray-800 flex items-center justify-between border rounded border-gray-300 dark:border-gray-700 w-40 cursor-pointer" data-menu>
                    <p class="pl-3 py-3 text-gray-600 dark:text-gray-400 text-sm leading-3 tracking-normal font-normal">Basic Options</p>
                    <div class="cursor-pointer text-gray-600 dark:text-gray-400 mr-3">
                       <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/simple_with_account_indigo-svg1.svg" alt="Dropdown" class="dark:hidden">
                       <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/simple_with_account_indigo-svg1.svg" alt="Dropdown" class="hidden transform rotate-180 dark:hidden">
                       <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/simple_with_account_indigo-svg1darks.svg" alt="Dropdown" class="dark:vlock hidden">
                       <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/simple_with_account_indigo-svg1darks.svg" alt="Dropdown" class="transform rotate-180 dark:block hidden">
                    </div>
                </button>
                <ul id="optionlist" class="visible transition duration-300 opacity-100 bg-white dark:bg-gray-800 shadow rounded mt-2 pb-1 w-48 absolute">
                    <li class="focus:outline-none focus:underline focus:text-gray-400">
                    ${localStorage.getItem("user") ? `
                        <div  class="cursor-pointer rounded-t text-sm flex flex-col font-bold leading-3 tracking-normal pt-4 pb-3 mb-1 bg-indigo-700 text-white px-3">
                            <span class="font-medium"><a href="/" class="px-4 py-5 hover:text-teal-500" id="email"></a></span>
                            <span class="font-medium mt-2"><a class="px-4 py-5 hover:text-teal-500" id="logout">Đăng xuất</a></span>
                        </div>
                        ` : ""}
                    </li>
                    <li>
                        <ul>
                           <li> <a href="/signin" class="hover:bg-gray-100 focus:outline-none focus:underline focus:text-gray-400"><div class="cursor-pointer text-gray-600 dark:text-gray-400 text-sm dark:hover:bg-gray-600 dark:hover:text-white leading-3 tracking-normal py-3  hover:bg-gray-100 px-3 font-normal">Đăng nhập</div></a></li>
                           <li> <a href="/signup" class="hover:bg-gray-100 focus:outline-none focus:underline focus:text-gray-400"><div class="cursor-pointer text-gray-600 dark:text-gray-400 text-sm dark:hover:bg-gray-600 dark:hover:text-white leading-3 tracking-normal py-3 hover:bg-gray-100 px-3 font-normal">Đăng kí</div></a></li>
                           <li> <a href="/cart" class="hover:bg-gray-100 focus:outline-none focus:underline focus:text-gray-400"><div class="cursor-pointer text-gray-600 dark:text-gray-400 text-sm dark:hover:bg-gray-600 dark:hover:text-white leading-3 tracking-normal py-3 hover:bg-gray-100  px-3 font-normal">Giỏ hàng</div></a></li>
                        </ul>
                    </li>
                </ul>
              
              
            </div>
                </div>
        </nav>    
    </div>
        `;
    },
    afterRender() {
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
    },
};
export default Header;

{ /* <a><i class="fa-solid fa-user"></i></a> */ }