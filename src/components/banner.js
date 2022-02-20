/* eslint-disable import/no-unresolved */
import Swiper from "swiper/bundle";
// eslint-disable-next-line import/no-unresolved
import "swiper/css/bundle";

const Banner = {
    render() {
        return `
            <div class="swiper">
                <!-- Additional required wrapper -->
                <div class="swiper-wrapper">
                    <!-- Slides -->
                    <div class="swiper-slide">
                        <img src="https://picsum.photos/1024/400" />
                    </div>
                    <div class="swiper-slide">
                        <img src="https://picsum.photos/1024/400" />    
                    </div>
                    <div class="swiper-slide">
                        <img src="https://picsum.photos/1024/400" />    
                    </div>
                </div>
                <div class="swiper-button-next"></div>
                <div class="swiper-button-prev"></div>
                <div class="swiper-pagination"></div>
            </div>
        `;
    },
    afterRender() {
        const swiper = new Swiper(".swiper", {
            pagination: {
                el: ".swiper-pagination",
                type: "progressbar",
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });
    },
};
export default Banner;