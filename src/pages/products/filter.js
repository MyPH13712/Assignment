import toastr from "toastr";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { getAll } from "../../api/product";
import { reRender } from "../../utils";
import "toastr/build/toastr.min.css";

const FilterPage = {
    async render() {
        const response = await getAll();
        return /* html */`
        ${Header.render()}
            
        <div class="max-w-5xl mx-auto">
            
        <div class="md:py-12 lg:px-20 md:px-6 py-9 px-4">
        <p class="text-sm dark:text-gray-400 leading-3 text-gray-600 font-normal mb-2">Home - Men - Products - Filters</p>
        <div class="flex justify-between items-center mb-4">
            <h2 class="lg:text-4xl dark:text-white text-3xl lg:leading-9 leading-7 text-gray-800 font-semibold">Watches</h2>

            <!-- filters Button (md and plus Screen) -->
            <button onclick="showFilters()" class="cursor-pointer dark:bg-white dark:text-gray-800 text-white dark:hover:bg-gray-100 sm:flex hidden hover:bg-gray-700 focus:ring focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 py-4 px-6 bg-gray-800 flex text-base leading-4 font-normal text-white justify-center items-center">
                <img class="dark:hidden"src="https://tuk-cdn.s3.amazonaws.com/can-uploader/filter1-svg1.svg"/>
                <img class="hidden dark:block"src="https://tuk-cdn.s3.amazonaws.com/can-uploader/filter1-svg1dark.svg"/>   
                Filters
            </button>
        </div>
        <p class="text-xl dark:text-gray-400 leading-5 text-gray-600 font-medium">09 Products</p>

        <!-- Filters Button (Small Screen) -->

        <button onclick="showFilters()" class="cursor-pointer mt-6 block sm:hidden hover:bg-gray-700 focus:ring focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 py-2 w-full bg-gray-800 flex text-base leading-4 font-normal text-white dark:text-gray-800 dark:bg-white dark:hover:bg-gray-100 justify-center items-center">
            <img class="dark:hidden"src="https://tuk-cdn.s3.amazonaws.com/can-uploader/filter1-svg1.svg" alt="filter" />
            <img class="hidden dark:block"src="https://tuk-cdn.s3.amazonaws.com/can-uploader/filter1-svg1dark.svg" alt="filter" />  
            Filters
        </button>
    </div>

    <div id="filterSection" class="block relative md:py-10 lg:px-20 md:px-6 py-9 px-4 bg-gray-50 dark:bg-gray-800 w-full">
        <!-- Cross button Code -->
        <div onclick="closeFilterSection()" class="cursor-pointer absolute right-0 top-0 md:py-10 lg:px-20 md:px-6 py-9 px-4">
            <img class="dark:hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/filter1-svg2.svg" alt="cross" />
            <img class="hidden dark:block" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/filter1-svg2dark.svg" alt="cross" />
        </div>

        <!-- Colors Section -->
        <div>
            <div class="flex space-x-2 text-gray-800 dark:text-white">
                <img class="dark:hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/filter1-svg3.svg" alt="colors"/>
                <img class="hidden dark:block" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/filter1-svg3dark.svg" alt="colors"/>
                <p class="lg:text-2xl text-xl lg:leading-6 leading-5 font-medium">Colors</p>
            </div>
            <div class="md:flex md:space-x-6 mt-8 grid grid-cols-3 gap-y-8 flex-wrap">
                <div class="flex space-x-2 md:justify-center md:items-center items-center justify-start">
                    <div class="w-4 h-4 rounded-full bg-white shadow"></div>
                    <p class="text-base leading-4 dark:text-gray-300 text-gray-600 font-normal">White</p>
                </div>
                <div class="flex space-x-2 justify-center items-center">
                    <div class="w-4 h-4 rounded-full bg-blue-600 shadow"></div>
                    <p class="text-base leading-4 dark:text-gray-300 text-gray-600 font-normal">Blue</p>
                </div>
                <div class="flex space-x-2 md:justify-center md:items-center items-center justify-end">
                    <div class="w-4 h-4 rounded-full bg-red-600 shadow"></div>
                    <p class="text-base leading-4 dark:text-gray-300 text-gray-600 font-normal">Red</p>
                </div>
                <div class="flex space-x-2 md:justify-center md:items-center items-center justify-start">
                    <div class="w-4 h-4 rounded-full bg-indigo-600 shadow"></div>
                    <p class="text-base leading-4 dark:text-gray-300 text-gray-600 font-normal">Indigo</p>
                </div>
                <div class="flex space-x-2 justify-center items-center">
                    <div class="w-4 h-4 rounded-full bg-black shadow"></div>
                    <p class="text-base leading-4 dark:text-gray-300 text-gray-600 font-normal">Black</p>
                </div>
                <div class="flex space-x-2 md:justify-center md:items-center items-center justify-end">
                    <div class="w-4 h-4 rounded-full bg-purple-600 shadow"></div>
                    <p class="text-base leading-4 dark:text-gray-300 text-gray-600 font-normal">Purple</p>
                </div>
                <div class="flex space-x-2 md:justify-center md:items-center items-center justify-start">
                    <div class="w-4 h-4 rounded-full bg-gray-600 shadow"></div>
                    <p class="text-base leading-4 dark:text-gray-300 text-gray-600 font-normal">Grey</p>
                </div>
            </div>
        </div>

        <hr class="bg-gray-200 lg:w-6/12 w-full md:my-10 my-8" />

        <!-- Material Section -->
        <div>
            <div class="flex space-x-2 text-gray-800 dark:text-white">
                <img class="dark:hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/filter1-svg4.svg" alt="materials"/>
                <img class="hidden dark:block" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/filter1-svg4dark.svg" alt="materials"/>
                <p class="lg:text-2xl text-xl lg:leading-6 leading-5 font-medium ">Material</p>
            </div>
            <div class="md:flex md:space-x-6 mt-8 grid grid-cols-3 gap-y-8 flex-wrap">
                <div class="flex space-x-2 md:justify-center md:items-center items-center justify-start">
                    <input class="w-4 h-4 mr-2" type="checkbox" id="Leather" name="Leather" value="Leather" />
                    <div class="inline-block">
                        <div class="flex space-x-6 justify-center items-center">
                            <label class="mr-2 text-sm leading-3 dark:text-gray-300 font-normal text-gray-600" for="Leather">Leather</label>
                        </div>
                    </div>
                </div>
                <div class="flex justify-center items-center">
                    <input class="w-4 h-4 mr-2" type="checkbox" id="Cotton" name="Cotton" value="Cotton" />
                    <div class="inline-block">
                        <div class="flex space-x-6 justify-center items-center">
                            <label class="mr-2 text-sm leading-3 dark:text-gray-300 font-normal text-gray-600" for="Cotton">Cotton</label>
                        </div>
                    </div>
                </div>
                <div class="flex space-x-2 md:justify-center md:items-center items-center justify-end">
                    <input class="w-4 h-4 mr-2" type="checkbox" id="Fabric" name="Fabric" value="Fabric" />
                    <div class="inline-block">
                        <div class="flex space-x-6 justify-center items-center">
                            <label class="mr-2 text-sm leading-3 dark:text-gray-300 font-normal text-gray-600" for="Fabric">Fabric</label>
                        </div>
                    </div>
                </div>
                <div class="flex space-x-2 md:justify-center md:items-center items-center justify-start">
                    <input class="w-4 h-4 mr-2" type="checkbox" id="Crocodile" name="Crocodile" value="Crocodile" />
                    <div class="inline-block">
                        <div class="flex space-x-6 justify-center items-center">
                            <label class="mr-2 text-sm leading-3 dark:text-gray-300 font-normal text-gray-600" for="Crocodile">Crocodile</label>
                        </div>
                    </div>
                </div>
                <div class="flex justify-center items-center">
                    <input class="w-4 h-4 mr-2" type="checkbox" id="Wool" name="Wool" value="Wool" />
                    <div class="inline-block">
                        <div class="flex space-x-6 justify-center items-center">
                            <label class="mr-2 text-sm leading-3 dark:text-gray-300 font-normal text-gray-600" for="Wool">Wool</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <hr class="bg-gray-200 lg:w-6/12 w-full md:my-10 my-8" />

        <!-- Size Section -->
        <div>
            <div class="flex space-x-2 text-gray-800 dark:text-white">
                <img class="dark:hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/filter1-svg5.svg" alt="size"/>
                <img class="hidden dark:block" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/filter1-svg5dark.svg" alt="size"/>
                <p class="lg:text-2xl text-xl lg:leading-6 leading-5 font-medium ">Size</p>
            </div>
            <div class="md:flex md:space-x-6 mt-8 grid grid-cols-3 gap-y-8 flex-wrap">
                <div class="flex md:justify-center md:items-center items-center justify-start">
                    <input class="w-4 h-4 mr-2" type="checkbox" id="Large" name="Large" value="Large" />
                    <div class="inline-block">
                        <div class="flex space-x-6 justify-center items-center">
                            <label class="mr-2 text-sm leading-3 font-normal text-gray-600 dark:text-gray-300" for="Large">Large</label>
                        </div>
                    </div>
                </div>
                <div class="flex justify-center items-center">
                    <input class="w-4 h-4 mr-2" type="checkbox" id="Medium" name="Medium" value="Medium" />
                    <div class="inline-block">
                        <div class="flex space-x-6 justify-center items-center">
                            <label class="mr-2 text-sm leading-3 font-normal text-gray-600 dark:text-gray-300" for="Medium">Medium</label>
                        </div>
                    </div>
                </div>
                <div class="flex md:justify-center md:items-center items-center justify-end">
                    <input class="w-4 h-4 mr-2" type="checkbox" id="Small" name="Small" value="Small" />
                    <div class="inline-block">
                        <div class="flex space-x-6 justify-center items-center">
                            <label class="mr-2 text-sm leading-3 font-normal text-gray-600 dark:text-gray-300" for="Small">Small</label>
                        </div>
                    </div>
                </div>
                <div class="flex md:justify-center md:items-center items-center justify-start">
                    <input class="w-4 h-4 mr-2" type="checkbox" id="Mini" name="Mini" value="Mini" />
                    <div class="inline-block">
                        <div class="flex space-x-6 justify-center items-center">
                            <label class="mr-2 text-sm leading-3 font-normal text-gray-600 dark:text-gray-300" for="Mini">Mini</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <hr class="bg-gray-200 lg:w-6/12 w-full md:my-10 my-8" />

        <!-- Collection Section -->
        <div>
            <div class="flex space-x-2 text-gray-800 dark:text-white ">
                <img class="dark:hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/filter1-svg6.svg" alt="collection"/>
                <img class="hidden dark:block" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/filter1-svg6dark.svg" alt="collection"/>
                <p class="lg:text-2xl text-xl lg:leading-6 leading-5 font-medium ">Collection</p>
            </div>
            <div class="flex mt-8 space-x-8">
                <div class="flex justify-center items-center">
                    <input class="w-4 h-4 mr-2" type="checkbox" id="LS" name="LS" value="LS" />
                    <div class="inline-block">
                        <div class="flex space-x-6 justify-center items-center">
                            <label class="mr-2 text-sm leading-3 font-normal dark:text-gray-300 text-gray-600" for="LS">Luxe signature</label>
                        </div>
                    </div>
                </div>
                <div class="flex justify-center items-center">
                    <input class="w-4 h-4 mr-2" type="checkbox" id="LxL" name="LxL" value="LxL" />
                    <div class="inline-block">
                        <div class="flex space-x-6 justify-center items-center">
                            <label class="mr-2 text-sm leading-3 font-normal dark:text-gray-300 text-gray-600" for="LxL">Luxe x London</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Apply Filter Button (Large Screen) -->

        <div class="hidden md:block absolute right-0 bottom-0 md:py-10 lg:px-20 md:px-6 py-9 px-4">
            <button onclick="applyFilters()" class="hover:bg-gray-700 dark:bg-white dark:text-gray-800 dark:hover:bg-gray-100 focus:ring focus:ring-offset-2 focus:ring-gray-800 text-base leading-4 font-medium py-4 px-10 text-white bg-gray-800">Apply Filter</button>
        </div>

        <!-- Apply Filter Button (Table or lower Screen) -->

        <div class="block md:hidden w-full mt-10">
            <button onclick="applyFilters()" class="w-full hover:bg-gray-700 dark:bg-white dark:text-gray-800 dark:hover:bg-gray-100 focus:ring focus:ring-offset-2 focus:ring-gray-800 text-base leading-4 font-medium py-4 px-10 text-white bg-gray-800">Apply Filter</button>
        </div>
    </div>
</div>

<style>
    .checkbox:checked + .check-icon {
        display: flex;
    }
</style>

    
                <div class="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-y-12 lg:gap-x-8 sm:gap-y-10 sm:gap-x-6 gap-y-6 lg:mt-12 mt-10">
                ${response.data.map((product) => `
                    <div class="relative">
                        <div class="relative group">
                            <div class="flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full"></div>
                            <a href="/products/${product.id}">
                                <img class="w-full" src="${product.img}"/>
                            </a>
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
export default FilterPage;