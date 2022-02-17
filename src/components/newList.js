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
                <div class="relative">
                <div class="relative group">
                    <div class="flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full"></div>
                        <a href="/products/${product.id}">
                            <img class="w-full"  src="${product.img}" alt="" />
                        </a>
                    </div>
                    <p class="font-normal dark:text-black text-xl leading-5 text-stone-900 md:mt-6 mt-4"><a href="/products/${product.id}">${product.name}</a></p>
                    <p class="font-semibold dark:text-black text-xl leading-5 text-stone-900 mt-4">${product.price}</p>
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
                <div class="relative">
                <div class="relative group">
                    <div class="flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full"></div>
                        <a href="/products/${product.id}">
                            <img class="w-full"  src="${product.img}" alt="" />
                        </a>
                    </div>
                    <p class="font-normal dark:text-black text-xl leading-5 text-stone-900 md:mt-6 mt-4"><a href="/products/${product.id}">${product.name}</a></p>
                    <p class="font-semibold dark:text-black text-xl leading-5 text-stone-900 mt-4">${product.price}</p>
                </div>
            `).join("")}
            </div>
        </div>
        <br>
        `;
    },
};
export default NewList;