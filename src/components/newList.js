import { getAll } from "../api/product";

const NewList = {
    async render() {
        const response = await getAll();
        return /* html */`
        <div class="fle flex-col justify-center items-center">
            <div class="flex justify-center items-center space-y-4 px-4">
                <p class="text-3xl lg:text-4xl font-semibold leading-9 text-stone-900 dark:text-stone-500 border border-slate-300 px-3 py-2">Sản phẩm mới</p>
            </div>
            <div class="grid md:grid-cols-2 lg:grid-cols-4 justify-items-between mt-8 gap-y-8 lg:gap-y-0 gap-x-8">
            ${response.data.map((product) => `
                <div class="flex items-start flex-col">
                    <div class="relative flex justify-center items-center bg-gray-100 dark:bg-gray-800 py-12 px-16">
                        <a href="/products/${product.id}">
                            <img src="${product.img}" alt="" />
                        </a>
                    </div>
                    <div class="flex flex-col items-start jusitfy-start mt-3 space-y-3">
                        <div>
                            <p class="text-lg font-medium leading-4 text-stone-800 dark:text-stone-500"><a href="/products/${product.id}">${product.name}</a></p>
                        </div>
                        <div>
                            <p class="text-lg leading-4 text-stone-600 dark:text-stone-500">${product.price}</p>
                        </div>
                    </div>
                </div>
                `).join("")}
            </div>
        </div>
        <hr class="w-full bg-gray-700 my-6" />
        <div class="fle flex-col justify-center items-center">
            <div class="flex justify-center items-center space-y-4 px-4">
                <p class="text-3xl lg:text-4xl font-semibold leading-9 text-stone-900 dark:text-stone-500 border border-slate-300 px-3 py-2">Sản phẩm bán chạy</p>
            </div>
            <div class="grid md:grid-cols-2 lg:grid-cols-4 justify-items-between mt-8 gap-y-8 lg:gap-y-0 gap-x-8">
            ${response.data.map((product) => `
                <div class="flex items-start flex-col">
                    <div class="relative flex justify-center items-center bg-gray-100 dark:bg-gray-800 py-12 px-16">
                        <a href="/products/${product.id}">
                            <img src="${product.img}" alt="" />
                        </a>
                    </div>
                    <div class="flex flex-col items-start jusitfy-start mt-3 space-y-3">
                        <div>
                            <p class="text-lg font-medium leading-4 text-stone-800 dark:text-stone-500"><a href="/products/${product.id}">${product.name}</a></p>
                        </div>
                        <div>
                            <p class="text-lg leading-4 text-stone-600 dark:text-stone-500">${product.price}</p>
                        </div>
                    </div>
                </div>
                `).join("")}
            </div>
        </div>
        <br>
        `;
    },
};
export default NewList;