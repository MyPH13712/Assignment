import axios from "axios";
import NavAdmin from "../../../components/NavAdmin";
import { getAll } from "../../../api/product";

const AdminProductPage = {
    async render() {
        const response = await getAll();
        return /* html */`
        <div class="min-h-full">
            ${NavAdmin.render()}
            <header class="bg-white shadow">
                <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <div class="lg:flex lg:items-center lg:justify-between">
                        <div class="flex-1 min-w-0">
                        <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
                            Quản lý sản phẩm
                        </h2>
                        </div>
                        <div class="mt-5 flex lg:mt-0 lg:ml-4">
                        <a href="/admin/products/add" class="sm:ml-3">
                            <button type="button" class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                              <svg xmlns="http://www.w3.org/2000/svg" class="-ml-1 mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                              </svg>
                                Thêm mới
                            </button>
                          </a>
                        </div>
                    </div>
                </div>
            </header>
            <main>
                <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                    <div class="px-4 py-6 sm:px-0">
                    <div class="flex flex-col">
                    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                      <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                        <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                          <table class="min-w-full divide-y divide-gray-200">
                            <thead class="bg-gray-50">
                              <tr>
                                <th scope="col" class="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                  STT
                                </th>
                                <th scope="col" class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                  Tên SP
                                </th>
                                <th scope="col" class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                  Ảnh 
                                </th>
                                <th scope="col" class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                  Mã SP
                                </th>
                                <th scope="col" class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                  Kích thước TT
                                </th>
                                <th scope="col" class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                  Độ dày TT
                                </th>
                                <th scope="col" class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                  Kích thước 
                                </th>
                                <th scope="col" class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                  Số tấm 
                                </th>
                                <th scope="col" class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                  Độ khó
                                </th>
                                <th scope="col" class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                  Giá sản phẩm
                                </th>
                                <th scope="col" class="relative px-6 py-3">
                                  <span class="sr-only">Edit</span>
                                </th>
                              </tr>
                            </thead>
                            <tbody class="bg-white divide-y divide-gray-200">
                            ${response.data.map((product, index) => `
                              <tr>
                                <td class="px-3 py-4 whitespace-nowrap">
                                ${index + 1}
                                </td>
                                <td class="px-4 py-4 whitespace-nowrap">
                                <div class="text-sm text-gray-900">${product.name}</div>
                                </td>
                                <td class="px-4 py-4 whitespace-nowrap">
                                <img src="${product.img}" alt="" width="50"/>
                                </td>
                                <td class="px-4 py-4 whitespace-nowrap">
                                <div class="text-sm text-gray-900">${product.product_code}</div>
                                </td>
                                <td class="px-4 py-4 whitespace-nowrap">
                                  <div class="text-sm text-gray-900">${product.steel_size}</div>
                                </td>
                                <td class="px-4 py-4 whitespace-nowrap">
                                  <div class="text-sm text-gray-900">${product.thickness}</div>
                                </td>
                                <td class="px-4 py-4 whitespace-nowrap">
                                  <div class="text-sm text-gray-900">${product.product_size}</div>
                                </td>
                                <td class="px-4 py-4 whitespace-nowrap">
                                  <div class="text-sm text-gray-900">${product.number_plates}</div>
                                </td>
                                <td class="px-4 py-4 whitespace-nowrap">
                                  <div class="text-sm text-gray-900">${product.difficult}</div>
                                </td>
                                <td class="px-4 py-4 whitespace-nowrap">
                                ${product.price}
                                </td>
                                <td class="px-4 py-4 whitespace-nowrap text-right text-sm font-medium">
                                  <a href="/admin/products/${product.id}/edit" class="text-indigo-600 hover:text-indigo-900">Sửa</a>
                                  <button data-id="${product.id}" class="btn inline-block bg-indigo-500 hover:bg-indigo-800 text-white text-sm py-2 px-6 mx-4 rounded">Xóa</button>
                                </td>
                              </tr>
                              `).join("")}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                    </div>
                </div>
            </main>
        </div>
    
                    `;
    },
    afterRender() {
        // Lấy danh sách button
        const btns = document.querySelectorAll(".btn");
        // tạo vòng lặp và lấy ra từng button
        btns.forEach((btn) => {
            const { id } = btn.dataset;
            // Viết sự kiện khi click vào button call api và xóa sản phẩm
            btn.addEventListener("click", () => {
                const confirm = window.confirm("Bạn có chắc chắn muốn xóa không?");
                if (confirm) {
                    axios.delete(`https://5e79b4b817314d00161333da.mockapi.io/posts/${id}`);
                }
            });
        });
    },
};
export default AdminProductPage;