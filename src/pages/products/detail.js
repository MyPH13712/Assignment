import { get } from "../../api/product";
import { addToCart } from "../../utils/cart";

const ProductDetailPage = {
    async render(id) {
        const { data: product } = await get(id);
        return /* html */`
        <div class="md:flex items-start justify-center py-12 2xl:px-20 md:px-6 px-4">
            <div class="xl:w-2/6 lg:w-2/5 w-80 md:block hidden">
                <a href="" >
                <img class="w-full" alt="image of a girl posing" src="${product.img}" />
                <img class="mt-6 w-full" alt="image of a girl posing" src="${product.img}" />
                </a>
            </div> 
            <div class="xl:w-2/5 md:w-1/2 lg:ml-8 md:ml-6 md:mt-0 mt-6">
                <div class="border-b border-gray-200 pb-6">
                    <p class="text-sm leading-none text-gray-600 dark:text-gray-300 ">Balenciaga Fall Collection</p>
                    <h1 class="lg:text-2xl text-xl font-semibold lg:leading-6 leading-7 text-gray-800 dark:text-white mt-2">Balenciaga Signature Sweatshirt</h1>
                </div>
                <div>
                    <p class="xl:pr-48 text-base lg:leading-tight leading-normal text-gray-600 dark:text-gray-300 mt-7">${product.desc}</p>
                    <p class="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 mt-6 dark:text-white">${product.price}</p>
                    <p class="text-base leading-4 mt-7 text-gray-600 dark:text-gray-300">Product Code: 8BN321AF2IF0NYA</p>
                    <p class="text-base leading-4 mt-4 text-gray-600 dark:text-gray-300">Length: 13.2 inches</p>
                    <p class="text-base leading-4 mt-4 text-gray-600 dark:text-gray-300">Height: 10 inches</p>
                    <p class="text-base leading-4 mt-4 text-gray-600 dark:text-gray-300">Depth: 5.1 inches</p>
                    <p class="md:w-96 text-base leading-normal text-gray-600 dark:text-gray-300 mt-4">Composition: 100% calf leather, inside: 100% lamb leather</p>
                </div>
                <div class="lg:mt-11 mt-10">
                    <div class="flex flex-row justify-between">
                            <p class="font-medium text-base leading-4 text-gray-600 ">Select quantity</p>
                            <div class="flex">
                                <input id="inputValue" type="number" class="border dark:text-white border-gray-300 dark:bg-transparent h-full text-center w-14 pb-1" value="1" />
                            </div>
                        </div>
                    </div>
                    <hr class="bg-gray-200 w-full my-2" />
                    <button data-id="${product.id}" id="btnAddToCart" class="dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-base flex items-center justify-center leading-none text-white bg-gray-800 w-full py-4 hover:bg-gray-700 focus:outline-none">
                        Add to cart
                    </button>
                <div> 
            </div>
        </div>       
     </div>
        `;
    },

    afterRender() {
        const btnAddToCart = document.querySelector("#btnAddToCart");
        const { id } = btnAddToCart.dataset;
        const inputValue = document.querySelector("#inputValue");

        const elements = document.querySelectorAll("[data-menu]");
        // eslint-disable-next-line no-plusplus
        for (let i = 0; i < elements.length; i++) {
            const main = elements[i];
            main.addEventListener("click", () => {
                const element = main.parentElement.parentElement;
                const andicators = main.querySelectorAll("img");
                const child = element.querySelector("#sect");
                child.classList.toggle("hidden");
                andicators[0].classList.toggle("rotate-180");
            });
        }

        btnAddToCart.addEventListener("click", async () => {
            // console.log(inputValue.value)
            const { data } = await get(id);
            console.log(data);
            addToCart({ ...data, quantity: inputValue.value ? inputValue.value : 1 });
        });
    },
};

export default ProductDetailPage;