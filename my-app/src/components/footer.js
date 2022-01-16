const Footer = {
    render() {
        return /* html */`<div class="2xl:container 2xl:mx-auto bg-zinc-100 mt-5 py-4 text-center text-white">
             
        <div class="mx-auto container xl:px-20 lg:px-12 sm:px-6 px-4 px-4 py-12">
        
        <div class="2xl:container 2xl:mx-auto md:py-12 py-3">
            <div class=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-8 md:gap-12 gap-14 lg:px-20 lg:py-5 md:px-12 px-4">
                <!-- Delivery grid Card -->
                <div class="">
                    <img class="" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/highlight-1-svg1.svg" alt="delivery">
                    <h3 class="text-xl leading-5 font-semibold text-black lg:mt-10 mt-8">Giao hàng</h3>
                    <p class="text-base leading-6 font-normal text-black mt-4 lg:w-full md:w-9/12 w-full">Giao hàng miễn phí cho các đơn đặt hàng trên 50.000 đ</p>
                </div>
                <!-- customer Grid Card -->
                <div class="">
                    <img class="" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/highlight-1-svg2.svg" alt="Customer Care">
                    <h3 class="text-xl leading-5 font-semibold text-black lg:mt-10 mt-8">Chăm sóc khách hàng</h3>
                    <p class="text-base leading-6 font-normal text-black mt-4 lg:w-full md:w-9/12 w-full">Dịch vụ chăm sóc khách hàng luôn 24/7 tại  <span class="font-semibold cursor-pointer">+495-589-509</span></p>
                </div>
                <!-- MonyBack Guarantee card -->
                <div class="">
                    <img class="" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/highlight-4-svg3.svg" alt="Money Back Guarantee">
                    <div>
                        <p class="text-xl leading-5 font-semibold text-black lg:mt-10 mt-8">Hoàn lại tiền</p>
                        <p class="text-base leading-6 font-normal text-black mt-4 lg:w-full md:w-9/12 w-full">Bạn có thể trả lại sản phẩm trong vòng 14 ngày</p>
                    </div>
                </div> 
            </div>
        </div>
    
        <div class="flex flex-col items-center justify-center">
            <div>
            <svg class="  hover:text-teal-500" width="111" height="19" viewBox="0 0 111 19" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            
            <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/header-3-svg5.svg" alt="circle"/>
        </svg>
            </div>
            <div class="flex flex-wrap sm:gap-10 gap-8 items-center justify-center mt-8">
                <a href="/about" class="focus:underline text-black focus:outline-none hover:text-teal-500 text-base cursor-pointer leading-4 ">Thông tin</a>
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