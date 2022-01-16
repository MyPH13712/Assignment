const Header = {
    render() {
        return /* html */`
        <div class="bg-blue-900 py-3 max-w-5xl mx-auto">
            <a href="">
                <img src="https://picsum.photos/180/75" class="mx-auto" alt="">
            </a>
        </div>
        <nav class="max-w-5xl mx-auto bg-orange-600 grid grid-cols-2">
            <ul class="flex">
                <li><a href="/" class="block px-3 py-3 hover:bg-blue-800 hover:text-white hover:underline">Trang chủ</a></li>
                <li><a href="/about" class="block px-3 py-3 hover:bg-blue-800 hover:text-white hover:underline">Thông tin</a></li>
                <li><a href="/product" class="block px-3 py-3 hover:bg-blue-800 hover:text-white hover:underline">Sản phẩm</a></li>
                <li><a href="/signup" class="block px-3 py-3 hover:bg-blue-800 hover:text-white hover:underline">Sign up</a></li>
                <li><a href="/signin" class="block px-3 py-3 hover:bg-blue-800 hover:text-white hover:underline">Sign in</a></li>
                <li><a href="/admin/dashboard" class="block px-3 py-3 hover:bg-blue-800 hover:text-white hover:underline">Admin</a></li>
            </ul>
            <div class="flex px-4 py-3 inline-block pl-5">
                <input type="text" class="= w-[225px] px-1">
                <button type="submit" class="border border-current px-4 text-white bg-blue-900 ml-[15px] hover:bg-blue-600">Tìm kiếm</button>
            </div>
        </div>
        </nav>`;
    },
};
export default Header;