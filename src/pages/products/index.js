import Header from "../../components/header";
import Footer from "../../components/footer";
import { getAll } from "../../api/product";

const ProductPage = {
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
                            <img class="w-full"  src="${product.img}" alt="" />
                            </a>
                            <div class="absolute bottom-0 p-8 w-full opacity-0 group-hover:opacity-100">
                                <button class="bg-transparent font-medium text-base leading-4 border-2 border-white py-3 w-full mt-2 text-white"><a href="/products/${product.id}">Xem nhanh</a></button>
                            </div>
                        </div>
                        <p class="font-normal dark:text-black text-xl leading-5 text-stone-900 md:mt-6 mt-4"><a href="/products/${product.id}">${product.name}</a></p>
                        <p class="font-semibold dark:text-black text-xl leading-5 text-stone-900 mt-4">${product.price}</p>
                    </div>
                
                    `).join("")}    
                </div>
    
                <div class="flex justify-center items-center">
                    <button class="hover:bg-gray-700 dark:text-gray-300 focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 bg-gray-800 py-5 md:px-16 md:w-auto w-full lg:mt-28 md:mt-12 mt-10 text-white font-medium text-base leading-4">Xem thêm</button>
                </div>
            </div>
        </div>
    </div>

            ${Footer.render()}
        `;
    },
};
export default ProductPage;