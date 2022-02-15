import toastr from "toastr";
import Header from "../components/header";
import Footer from "../components/footer";
import { signup } from "../api/user";
import "toastr/build/toastr.min.css";

const Signup = {
    render() {
        return /* html */`
        ${Header.render()}
            <div class="max-w-5xl mx-auto">
            <div class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div class="max-w-md w-full space-y-8">
              <div>
                <h3 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
                  Đăng kí
                </h3>
              </div>
              <form class="mt-8 space-y-6" id="formSignup">
                <div class="rounded-md shadow-sm -space-y-px">
                  <div>
                    <label for="email" class="sr-only">Email</label>
                    <input id="email" type="email" class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address">
                  </div>
                  <br>
                  <div>
                    <label for="password" class="sr-only">Mật khẩu</label>
                    <input id="password" type="password" class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password">
                  </div>       
                </div>
                <div>
                  <button  class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Đăng kí
                  </button>
                </div>
              </form>
            </div>
          </div>
            </div>
            ${Footer.render()}
            `;
    },
    afterRender() {
        const formSignup = document.querySelector("#formSignup");
        formSignup.addEventListener("submit", async (e) => {
            e.preventDefault();
            try {
                const { data } = await signup({
                    email: document.querySelector("#email").value,
                    password: document.querySelector("#password").value,
                });
                if (data) {
                    toastr.success("Đăng ký thành công, chuyển trang sau 2s");
                    setTimeout(() => {
                        document.location.href = "/signin";
                    }, 2000);
                }
            } catch (error) {
                toastr.error(error.response.data);
            }
        });
    },
};
export default Signup;