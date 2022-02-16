import Header from "../../components/header";
import Footer from "../../components/footer";
import { getAll } from "../../api/product";

const ProductPage = {
    async render() {
        const response = await getAll();
        return /* html */`
        ${Header.render()}
            
        <div class="max-w-5xl mx-auto">
        <div class="flex flex-col"> 

            <div class="flex flex-col justify-center">
                <div class="relative">
                    <img class="hidden sm:block w-full" src="https://i.ibb.co/HxXSY0j/jason-wang-Nx-Awry-Abt-Iw-unsplash-1-1.png" alt="sofa" />
                    <img class="sm:hidden w-full" src="https://i.ibb.co/B6qwqPT/jason-wang-Nx-Awry-Abt-Iw-unsplash-1.png" alt="sofa" />
                    <div class="absolute sm:bottom-8 bottom-4 pr-10 sm:pr-0 left-4 sm:left-8 flex justify-start items-start">
                        <p class="text-3xl sm:text-4xl font-semibold leading-9 text-white">Range Comfort Sofas</p>
                    </div>
                </div>
            </div>
            ${response.data.map((product) => `
            <div class="mt-10 grid lg:grid-cols-2 gap-x-8 gap-y-8 items-center">
                <div class="group group-hover:bg-opacity-60 transition duration-500 relative bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 sm:p-28 py-36 px-10 flex justify-center items-center">
                    <a href="/products/${product.id}">
                        <img class="group-hover:opacity-60 transition duration-500" src="${product.img}" alt="" />
                    </a>
                    <div class="absolute sm:top-8 top-4 left-4 sm:left-8 flex justify-start items-start flex-col space-y-2">
                        <div>
                            <h3 class="group-hover:opacity-60 transition duration-500 text-xl leading-5 text-gray-600 dark:text-white"><a href="/products/${product.id}">${product.name}</a></h3>
                        </div>
                        <div>
                            <p class="group-hover:opacity-60 transition duration-500 text-xl font-semibold leading-5 text-gray-800 dark:text-white">${product.price}</p>
                        </div>
                    </div>
                    
                    <div class="flex flex-col bottom-8 left-8 space-y-4 absolute opacity-0 group-hover:opacity-100 transition duration-500">
                        <button>
                            <img class="dark:hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/product-grid-2-svg1.svg" alt="add">
                            <img class="hidden dark:block" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/product-grid-2-svg1dark.svg" alt="add">
                        </button>
                        <button>
                            <img class="dark:hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/product-grid-2-svg2.svg" alt="view">
                            <img class="hidden dark:block" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/product-grid-2-svg2dark.svg" alt="view">
                        </button>
                    </div>
                </div>
            </div>
            `).join("")}
            <div class="flex justify-end items-end mt-12">
                <div class="flex flex-row items-center justify-center space-x-8">
                    <button class="text-base leading-none text-gray-800  border-b-2 border-transparent hover:underline ">
                        <p>1</p>
                    </button>
                    <button class="text-base leading-none text-gray-800  border-b-2 border-transparent hover:underline ">
                        <p>2</p>
                    </button>
                    <button class="text-base leading-none text-gray-800  border-b-2 border-transparent hover:underline ">
                        <p>3</p>
                    </button>
                    <button class="flex justify-center items-center">
                        <img  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/product-grid-2-svg4.svg" alt="next">
                        <img  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/product-grid-2-svg4dark.svg" alt="next">
                    </button>
                </div>
            </div>
        </div>
    </div>

            ${Footer.render()}
        `;
    },
};
export default ProductPage;