import Header from "../components/header";
import Footer from "../components/footer";

const ContactPage = {
    render() {
        return /* html */`
        ${Header.render()}
        <div class="max-w-5xl mx-auto">
                                       
        <div class="py-4 lg:py-8 relative">
        <img src="https://cdn.tuk.dev/assets/templates/radian/Back_Image.png" class="h-2/5 lg:h-full w-full lg:w-1/2 absolute inset-0 object-cover object-center xl:block hidden" alt="map" />
        <div class="xl:mx-auto xl:container relative">
            <div class="flex flex-wrap xl:mx-auto xl:container">
                <div class="w-full relative lg:w-1/2 xl:mt-10 mb-10 2xl:pr-24 2xl:pl-0 xl:pl-12 pl-0">
                    <img src="https://cdn.tuk.dev/assets/templates/radian/Back_Image.png" class="h-full w-full xl:w-1/2 absolute inset-0 bg-cover bg-center xl:hidden" alt="map" />
                    <div class="w-full flex flex-col items-start xl:justify-start relative z-20 xl:px-0 px-4 xl:py-0 py-4">
                        <div class="w-full 2xl:pl-48 xl:pt-1">
                            <h1 class="text-4xl md:text-5xl lg:text-7xl font-bold tracking-wider text-gray-800">Chúng tôi ở đây!</h1>
                            <div class="w-full md:w-10/12 mt-3">
                                <div class="mt-4 md:mt-8">
                                    <h2 class="text-sm md:text-base text-indigo-700 font-semibold">Địa chỉ</h2>
                                    <h2 class="text-gray-800 text-base md:text-lg leading-8 tracking-wider mt-2">Office #13, NSTP, NUST University H-12 Sector, Islamabad</h2>
                                </div>
                                <div class="mt-4 md:mt-8">
                                    <h2 class="text-sm md:text-base text-indigo-700 font-semibold">Số điện thoại</h2>
                                    <h2 class="text-gray-800 text-base md:text-lg leading-8 tracking-wider mt-2">+92 051 4567890</h2>
                                </div>
                                <div class="mt-4 md:mt-8">
                                    <h2 class="text-sm md:text-base text-indigo-700 font-semibold">Email</h2>
                                    <h2 class="text-gray-800 text-base md:text-lg leading-8 tracking-wider mt-2">mydt@gmail.com</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="w-full lg:w-1/2 xl:pt-10 lg:pl-24">
                    <div class="flex flex-col items-start xl:justify-start 2xl:justify-end xl:px-0 px-4">
                        <div class="w-full 2xl:w-8/12 mt-3" role="form">
                            <h2 class="text-gray-800 text-base md:text-lg leading-8 tracking-wider">Nếu có thắc mắc, vui lòng gửi email cho chúng tôi qua mẫu dưới đây</h2>
                            <div class="mt-4 md:mt-8">
                                <p class="text-gray-800 text-base font-medium">Tên</p>
                                <input class="mt-3 text-base border-2 w-11/12 lg:w-full xl:w-10/12 hover:border-indigo-600 focus:border-indigo-600 focus:outline-none border-black py-5 pl-4 text-gray-800" type="text" placeholder="Nguyễn Văn A" aria-label="hãy nhập tên của bạn" />
                            </div>
                            <div class="mt-4 md:mt-8">
                                <p class="text-gray-800 text-base font-medium">Email</p>
                                <input class="mt-3 text-base border-2 w-11/12 lg:w-full xl:w-10/12 hover:border-indigo-600 focus:border-indigo-600 focus:outline-none border-black py-5 pl-4 text-gray-800" type="email" placeholder="abc@gmail.com" aria-label="hãy nhập email của bạn" />
                            </div>
                            <div class="mt-4 md:mt-8">
                                <p class="text-gray-800 text-base font-medium">Lời nhắn</p>
                                <textarea class="mt-3 text-base border-2 w-11/12 lg:w-full xl:w-10/12 resize-none hover:border-indigo-600 focus:border-indigo-600 focus:outline-none border-black xl:h-40 py-5 pl-4 text-gray-800" type="text" placeholder="Bạn muốn nói với chúng tôi ..." aria-label="hãy nhập lời nhắn của bạn"></textarea>
                            </div>
                            <div class="py-5">
                                <button class="py-3 md:py-5 px-5 md:px-10 bg-gray-900 text-white hover:opacity-90 ease-in duration-150 text-sm md:text-lg tracking-wider font-semibold focus:border-4 focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">Gửi</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    

        </div>
        ${Footer.render()}
        `;
    },
};
export default ContactPage;