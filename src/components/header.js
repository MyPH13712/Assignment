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
                <li><a href="/products" class=" px-4 py-5 hover:text-teal-500">Sản phẩm</a></li>
                <li><a href="/tutorial" class=" px-4 py-5 hover:text-teal-500">Hướng dẫn lắp ráp</a></li>
                <li><a href="/admin/dashboard" class=" px-4 py-5 hover:text-teal-500">Thống kê</a></li>
                ${localStorage.getItem("user") ? `
                    <ul class="flex float-right content-center">
                        <li><a href="/" class="px-6 py-5 hover:text-teal-500" id="email"></a></li>
                        <li><a class="px-4 py-5 hover:text-teal-500" id="logout">Đăng xuất</a></li>
                    </ul>
                ` : ""}
            </ul>
                <div class="hidden sm:flex flex-row space-x-4">
                <a href="/cart"><button class="rounded-md flex space-x-2 w-24 h-10 font-normal text-sm leading-3 text-indigo-700 bg-white border border-indigo-700 focus:outline-none focus:bg-gray-200 hover:bg-gray-200 duration-150 justify-center items-center">Giỏ hàng</button></a>
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
    },

};
export default Header;

{ /* <a><i class="fa-solid fa-user"></i></a> */ }
// <a href="/signup"><button class="rounded-md flex space-x-2 w-24 h-10 font-normal text-sm leading-3 text-indigo-700 bg-white border border-indigo-700 focus:outline-none focus:bg-gray-200 hover:bg-gray-200 duration-150 justify-center items-center" >Đăng kí</button></a>
// <a href="/signin"><button class="rounded-md flex space-x-2 w-24 h-10 font-normal text-sm leading-3 text-white bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:bg-indigo-600 hover:bg-indigo-600 duration-150 justify-center items-center" >Đăng nhập</button></a>