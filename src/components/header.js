const Header = {
    render() {
        return /* html */`
        <div class=" bg-white ">
        <nav class="2xl:container 2xl:mx-auto sm:py-6 sm:px-7 mb-5 py-5 px-4 bg-zinc-100">
            <!-- For large and Medium-sized Screen -->
            <div class="flex justify-between "> 
                
                <div class=" flex space-x-3 items-center">
                    <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/header-3-svg5.svg" alt="circle" />                     
                </div>
                <ul class="flex float-right content-center">
                <li><a href="/" class=" px-4 py-5 hover:text-teal-500">Trang chủ</a></li>
                <li><a href="/about" class=" px-4 py-5 hover:text-teal-500">Giới thiệu</a></li>
                <li><a href="/product" class=" px-4 py-5 hover:text-teal-500">Sản phẩm</a></li>
                <li><a href="/admin/dashboard" class=" px-4 py-5 hover:text-teal-500">Thống kê</a></li>
            </ul>
                <div class="hidden sm:flex flex-row space-x-4">
                    <a href="/signup"><button class="rounded-md flex space-x-2 w-24 h-10 font-normal text-sm leading-3 text-indigo-700 bg-white border border-indigo-700 focus:outline-none focus:bg-gray-200 hover:bg-gray-200 duration-150 justify-center items-center" >Đăng kí</button></a>
                    <a href="/signin"><button class="rounded-md flex space-x-2 w-24 h-10 font-normal text-sm leading-3 text-white bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:bg-indigo-600 hover:bg-indigo-600 duration-150 justify-center items-center" >Đăng nhập</button></a>
                </div>
        </nav>    
    </div>
            
        `;
    },
};
export default Header;