import { reRender } from "../utils";
import { decreaseQuantity, increaseQuantity, removeItemInCart } from "../utils/cart";

const CartPage = {
    render() {
        let cart = [];
        if (localStorage.getItem("cart")) {
            cart = JSON.parse(localStorage.getItem("cart"));
        }
        return /* html */`
        <div class="flex items-center justify-center py-8">
    </div>
    <div class="w-full h-full bg-black dark:bg-gray-900 bg-opacity-90 top-0 overflow-y-auto overflow-x-hidden fixed sticky-0" id="chec-div">
        <div class="w-full absolute z-10 right-0 h-full overflow-x-hidden transform translate-x-0 transition ease-in-out duration-700" id="checkout">
            <div class="flex items-end lg:flex-row flex-col justify-end" id="cart">
                <div class="lg:w-1/2 md:w-8/12 w-full lg:px-8 lg:py-14 md:px-6 px-4 md:py-8 py-4 bg-white dark:bg-gray-500 overflow-y-hidden overflow-x-hidden lg:h-screen h-auto" id="scroll">
                    <div class="flex items-center text-gray-500 hover:text-gray-600 dark:text-white cursor-pointer" onclick="checkoutHandler(false)">
                        <img class="dark:hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/shopping-cart-1-svg1.svg" alt="previous"/>
                         <img class="dark:block hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/shopping-cart-1-svg1dark.svg" alt="previous"/>
                        <p class="text-sm pl-2 leading-none dark:hover:text-gray-200"><a href="/products">Quay lại</a></p>
                    </div>
                    <p class="lg:text-4xl text-2xl font-black  text-gray-800 dark:text-white pt-3">Giỏ hàng</p>
                    ${cart.map((item) => /* html */`
                    <div class="md:flex items-strech py-8 md:py-10 lg:py-8 border-t border-gray-50">
                        <div class="md:w-4/12 2xl:w-1/4 w-full">
                            <img src="${item.img}" alt="" class="h-full object-center object-cover md:block hidden" />
                        </div>
                        <div class="md:pl-3 md:w-8/12 2xl:w-3/4 flex flex-col justify-center">
                            <p class="text-xs leading-3 text-gray-800 dark:text-white md:pt-0 pt-4">${item.product_code}</p>
                            <div class="flex items-center justify-between w-full pt-1">
                                <p class="text-base font-black leading-none text-gray-800 dark:text-white">${item.name}</p>
                                
            <div class="max-w-8xl mx-auto container py-8">
            <div class="flex justify-center items-center">
                <ul class="flex">
                    <li class="flex flex-col justify-center">
                        <button role="button" data-id="${item.id}" class="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700  focus:text-indigo-800 hover:bg-gray-200 hover:text-indigo-700 cursor-pointer flex rounded text-base leading-tight font-bold text-gray-500 p-1 shadow focus:outline-none">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <line x1="5" y1="12" x2="19" y2="12" />
                            </svg>
                        </button>
                    </li>
                    <li>
                        <input tabindex="-1" id="page_number" class="w-8 h-8 pl-2 rounded text-indigo-700 text-base mx-2 shadow focus:outline-none placeholder-white"/>
                    </li>
                    <li class="flex flex-col justify-center">
                        <button role="button" data-id="${item.id}" class="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700  focus:text-indigo-800 hover:bg-gray-200 hover:text-indigo-700 cursor-pointer flex rounded text-base leading-tight font-bold text-gray-500 p-1 shadow focus:outline-none">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <line x1="12" y1="5" x2="12" y2="19" />
                                <line x1="5" y1="12" x2="19" y2="12" />
                            </svg>
                        </button>
                    </li>
                </ul>
            </div>
          
          
        </div>
    
                                <button data-id="${item.id}" class="btn btn-increase text-white">+</button>
                            
                                <button data-id="${item.id}" class="btn btn-decrease text-white">-</button>
                            </div>
                            <p class="text-xs leading-3 text-gray-600 dark:text-white pt-2">Số tấm thép: ${item.number_plates}</p>
                            <p class="text-xs leading-3 text-gray-600 dark:text-white pt-2">Kích thước hoàn thành: ${item.product_size}</p>
                            <p class="text-xs leading-3 text-gray-600 dark:text-white py-4">Độ khó: ${item.difficult}</p>
                            <div class="flex items-center justify-between pt-5">
                                <div class="flex itemms-center">
                                   <button data-id="${item.id}" class="btn btn-remove"><p class="text-xl leading-3 hover:underline text-red-500 pl-5 cursor-pointer">Remove</p></button>
                                </div>
                                <p class="text-base font-black leading-none text-gray-800 dark:text-white">${item.price}</p>
                            </div>
                        </div>
                    </div>
                    `).join("")}
                </div>
            </div>
        </div>
        <style>
            /* width */
            #scroll::-webkit-scrollbar {
                width: 1px;
            }
  
            /* Track */
            #scroll::-webkit-scrollbar-track {
                background: #f1f1f1;
            }
  
            /* Handle */
            #scroll::-webkit-scrollbar-thumb {
                background: rgb(133, 132, 132);
            }
        </style>
        
    </div>
        `;
    },
    afterRender() {
        const btns = document.querySelectorAll(".btn");
        btns.forEach((button) => {
            button.addEventListener("click", () => {
                const { id } = button.dataset;
                if (button.classList.contains("btn-increase")) {
                    increaseQuantity(id);
                } else if (button.classList.contains("btn-decrease")) {
                    decreaseQuantity(id, () => {
                        reRender(CartPage, "#app");
                    });
                } else {
                    removeItemInCart(id, () => {
                        reRender(CartPage, "#app");
                    });
                }
            });
        });
    },
};
export default CartPage;