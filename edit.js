import axios from "axios";
import NavAdmin from "../../../components/NavAdmin";
import { update, get } from "../../../api/posts";

const AdminEditposts = {
    async render(id) {
        const { data } = await get(id);
        return `
        <div class="min-h-full">
        ${NavAdmin.render()}
        <header class="bg-white shadow">
            <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <h1 class="text-3xl font-bold text-gray-900">
                    Sửa tin tức
                </h1>
            </div>
        </header>
        <main>
        <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div class="md:grid md:grid-cols-3 md:gap-6">
        <div class="mt-5 md:mt-0 md:col-span-2">
          <form id="formEditPro">
            <div class="shadow sm:rounded-md sm:overflow-hidden">
              <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
              <div class="mt-1">
                  <label  class="block text-sm font-medium text-gray-700">Tên sản phẩm</label>
                  <input type="text" id="title-post" placeholder="Title Post" value="${data.title}" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 px-3 py-3 block w-full shadow-sm sm:text-sm border-gray-300">
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700"> Ảnh </label>
                  <input type="file" id="img-post"  class="mt-1 focus:ring-indigo-500 px-3 py-3 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 ">
                  <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                    <div class="space-y-1 text-center">
                      <div class="mt-1">
                        <img src="${data.img}" id="img-preview">
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                <div class="mt-1">
                  <label class="block text-sm font-medium text-gray-700">Mã Sp</label>
                  <textarea id="desc-post" cols="30" rows="10" class="mt-1 focus:ring-indigo-500 px-3 py-3 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 ">${data.desc}</textarea>
                </div>
            </div>
                </div>
              </div>
              <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                <button class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Save</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>

        `;
    },
    afterRender(id) {
        const formEditPost = document.querySelector("#formEditPost");
        const imgPreview = document.querySelector("#img-preview");
        const imgPost = document.querySelector("#img-post");
        let imgLink = "";

        const CLOUDINARY_PRESET = "jkbdphzy";
        const CLOUDINARY_API_URL = "https://api.cloudinary.com/v1_1/ecommercer2021/image/upload";

        // preview
        imgPost.addEventListener("change", (e) => {
            imgPreview.src = URL.createObjectURL(e.target.files[0]);
        });

        formEditPost.addEventListener("submit", async (e) => {
            e.preventDefault();

            // Lấy giá trị của input file
            const file = document.querySelector("#img-post").files[0];
            if (file) {
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
                imgLink = data.url;
            }

            // call API thêm bài viết
            update({
                id,
                title: document.querySelector("#title-post").value, // iphone x plus 10
                img: imgLink || imgPreview.src,
                desc: document.querySelector("#desc-post").value,
            });
        });
    },
};
export default AdminEditposts;