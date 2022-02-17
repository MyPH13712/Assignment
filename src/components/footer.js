const Footer = {
    render() {
        return /* html */`<div class="2xl:container 2xl:mx-auto bg-zinc-100 mt-5 py-4 text-center text-white">
             
        <div class="mx-auto container xl:px-20 lg:px-12 sm:px-6 px-4 px-4 py-12">
        
        <div class="2xl:container 2xl:mx-auto md:py-12 py-3">
            
        <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-24 md:gap-10 gap-12 lg:px-20 md:py-12 md:px-6 py-9 px-4">
            <!-- Free Shipping Grid Card -->
            <div class="flex space-x-4">
                <img class="dark:hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/highlight-4-svg1.svg" alt="Free Shipping">
                <img class="hidden dark:block" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/highlight-4-svg1dark.svg" alt="Free Shipping">
                <div>
                    <p class="text-xl dark:text-black leading-5 font-semibold text-stone-800">Giao hàng</p>
                    <p class="text-base leading-6 dark:text-black font-normal text-gray-600 mt-3">Miễn phí giao hàng cho đơn trên 100.00đ</p>
                </div>
            </div>

            <!-- Support Grid Card -->

            <div class="flex space-x-4">
                <img class="dark:hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/highlight-4-svg2.svg" alt="Support 24/7">
                <img class="hidden dark:block" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/highlight-4-svg2dark.svg" alt="Support 24/7">
                <div>
                    <p class="text-xl dark:text-black leading-5 font-semibold text-gray-800">Hỗ trợ 24/7</p>
                    <p class="text-base leading-6 dark:text-black font-normal text-gray-600 mt-3">Liên hệ với chúng tôi 24 giờ một ngày tại mydt@gmail.com</p>
                </div>
            </div>

            <!-- MonyBack Guarantee card -->

            <div class="flex space-x-4">
                <img class="dark:hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/highlight-4-svg3.svg" alt="Money Back Guarantee">
                <img class="hidden dark:block" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/highlight-4-svg3dark.svg" alt="Money Back Guarantee">
                <div>
                    <p class="text-xl dark:text-black leading-5 font-semibold text-gray-800">Hoàn lại tiền</p>
                    <p class="text-base leading-6 dark:text-black font-normal text-gray-600 mt-3">Bạn có thể trả lại hàng trong 30 ngày</p>
                </div>
            </div>
        </div>

        </div>
    
        <div class="flex flex-col items-center justify-center">
            <div>
            <svg class="  hover:text-teal-500" width="111" height="19" viewBox="0 0 111 19" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            
            <h1 class="flex text-4xl font-bold antialiased text-black hover:text-teal-500"><i>Piece3D</i></h1>                     
        </svg>
            </div>
            <div class="flex flex-wrap sm:gap-10 gap-8 items-center justify-center mt-8">
                <a href="/about" class="focus:underline text-black focus:outline-none hover:text-teal-500 text-base cursor-pointer leading-4 ">Giới thiệu</a>
                <a href="/contact" class="focus:underline text-black focus:outline-none hover:text-teal-500 text-base cursor-pointer leading-4 ">Liên hệ</a>
                <a href="#" class="focus:underline text-black focus:outline-none hover:text-teal-500 text-base cursor-pointer leading-4 ">Điều khoản dịch vụ</a>
                <a href="#" class="focus:underline text-black focus:outline-none hover:text-teal-500 text-base cursor-pointer leading-4 ">Chính sách bảo mật</a>
            </div>
            <div class="flex items-center mt-6">
                <p class="text-base leading-4 text-black ">2021 <span class="font-semibold">Piece3D</span></p>
                <div class="border-l border-gray-800 pl-2 ml-2">
                    <p class="text-base leading-4 text-black ">Inc. All rights reserved</p>
                </div>
            </div>
        </div>
    </div>
        </div>`;
    },
};
export default Footer;