import axios from "axios";
import NavAdmin from "../../../components/NavAdmin";
import { add } from "../../../api/product";

const AdminAddProduct = {
    async render() {
        const { data } = await axios.get("https://5e79b4b817314d00161333da.mockapi.io/posts/");
        return /* html */`
        
        <div class="min-h-full">
            ${NavAdmin.render()}
            <header class="bg-white shadow">
                <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <h1 class="text-3xl font-bold text-gray-900">
                        Thêm mới sản phẩm
                    </h1>
                </div>
            </header>
            <main>
                <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                    <div class="px-4 py-6 sm:px-0">
                    <div class="mt-10 sm:mt-0">
                    <div class="md:grid md:grid-cols-3 md:gap-6">
                      <div class="mt-5 md:mt-0 md:col-span-2">
                        <form action="#" method="POST">
                          <div class="shadow overflow-hidden sm:rounded-md">
                          <div class="grid grid-cols-6 gap-6">
                          <div class="col-span-6 sm:col-span-3 ">
                            <label class="block text-sm font-medium text-gray-700">Tiêu đề</label>
                            <input type="text" name="title_product" id="title_product" value="${data.name}" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                          </div>
                          <div class="col-span-6 sm:col-span-3 ">
                            <label class="block text-sm font-medium text-gray-700">Ảnh</label>
                            <input type="file" name="img_product" id="img_product" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                          </div> 
                          <div class="col-span-6 sm:col-span-3">
                          <img src="${data.img}">
                          </div>
                          <div class="col-span-6 sm:col-span-3 ">
                            <label class="block text-sm font-medium text-gray-700">Mô tả</label>
                          </div>
                          </div>
                      </div>
                            <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                              <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                Save
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  
                  <div class="hidden sm:block" aria-hidden="true">
                    <div class="py-5">
                      <div class="border-t border-gray-200"></div>
                    </div>
                  </div>
                    </div>
                </div>
            </main>
        </div>
    
                    `;
    },
    afterRender() {
        const formAddPost = document.querySelector("#formAddPost");
        const CLOUDINARY_PRESET = "jkbdphzy";
        const CLOUDINARY_API_URL = "https://api.cloudinary.com/v1_1/ecommercer2021/image/upload";

        formAddPost.addEventListener("submit", async (e) => {
            e.preventDefault();

            // Lấy giá trị của input file
            const file = document.querySelector("#img-post").files[0];
            // Gắn vào đối tượng formData
            const formData = new FormData();
            formData.append("file", file);
            formData.append("upload_preset", CLOUDINARY_PRESET);

            // call api cloudinary, để upload ảnh lên
            const { data } = await axios.post(CLOUDINARY_API_URL, formData, {
                headers: {
                    "Content-Type": "application/form-data",
                },
            });
            // call API thêm bài viết
            add({
                title: document.querySelector("#title-post").value,
                img: data.url,
                desc: document.querySelector("#desc-post").value,
            });
        });
    },
};
export default AdminAddProduct;