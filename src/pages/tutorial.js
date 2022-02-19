import Header from "../components/header";
import Footer from "../components/footer";

const TutorPage = {
    render() {
        return /* html */`
        ${Header.render()}
        
    <div class="max-w-5xl mx-auto bg-gray-500">
    <div class="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
      <div class="flex flex-col justify-start items-start  px-2 lg:px-0">
        <div class="">
          <p class="text-gray-800 dark:text-white lg:text-3xl text-2xl font-extrabold">Hướng dẫn cho người mới bắt đầu</p>
        </div>
      </div>
    </div>
    <div class="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-6 px-4 7">
      <div class="flex flex-col justify-start items-start ">
        <div class="mt-8">
          <p class="text-gray-800 dark:text-white lg:text-base text-sm leading-normal">
          Muốn có một mô hình lắp ghép 3D hoàn hảo và đẹp mắt. Bạn nên sử dụng dụng cụ hộ trợ để quá trình lắp ráp được nhanh và thuận tiện hơn.

          Các chi tiết có thể dễ dàng tháo ra khỏi tấm thép bằng cách sử dụng một cặp kìm cắt. 
          Một cặp nhíp hoặc kìm mũi nhọn rất được khuyến khích sử dụng trong quá trình lắp ráp.
          </p>
        </div>
        <div class="mt-8 w-full">
          <img class="w-full" src="https://cf.shopee.vn/file/133e2a62672d6d792e2d279b31cb88b8" alt="" />
        </div>
        <div class="mt-8 flex justify-start items-start flex-col">
          
          <div class="text-gray-800 dark:text-white mt-4 lg:text-base text-sm leading-normal">
          <p class="text-gray-800 dark:text-white lg:text-base text-sm leading-normal">
          Hãy chú ý đọc thật kĩ tờ hướng dẫn đi kèm trong mỗi sản phẩm trước khi bạn định lắp ráp các mô hình với nhau. Trong tờ hướng dẫn có đánh số thứ tự, bạn không nên tháo tất cả các mảnh ghép ra ngày lúc đàu vì như thế sẽ rất tìm kiếm các mảnh ghép nhỏ trong 1 mớ hỗn độn. Lắp theo thứ tự như đúng tờ giấy hướng dẫn là cách tốt nhất mà bạn nên thực hiện theo.
 
          </p>
          </div>
          <div class="mt-8 flex-col justify-start items-start">
          <p class="text-gray-800 dark:text-white lg:text-base text-sm leading-normal">
          Các bộ phận khóa lại với nhau bằng cách sử dụng các khớp nối và khe nối. Hãy chú ý đến các kí tự hình tròn và hình tam giác trên tờ hướng dẫn và tấm thép 
          . Các ký hiệu này có ý nghĩa như sau: 

          Hình tròn: Bạn sẽ phải bẻ khớp nối 90 độ để giữ cho chúng chặt lại với một miếng thép khác.
          Hình tam giác: Bạn sẽ xoay khớp nối 1 góc 90 độ để khoá các tấm thép cho chặt lại với nhau.
 
          </p>
            <div>
              <img class="w-full" src="https://i.ibb.co/S7LSZpk/Rectangle-45.png" alt="girl" />
            </div>
            <div class="mt-8">
              <p class="text-gray-800 dark:text-white lg:text-base text-sm leading-normal">
                Another writing challenge can be to take the individual sentences in the random paragraph and incorporate a single sentence from that into a new paragraph to create a short story. Unlike the random sentence generator, the sentences from the random paragraph will have some connection to one another so it will be a bit different. You also won't know exactly how many sentences will appear in the random paragraph.Another writing challenge can be to take the individual sentences in the random paragraph and incorporate a single sentence from that into a new paragraph to create a
                short story. Unlike the random sentence generator, the sentences from the random paragraph will have some connection to one another so it will be a bit different. You also won't know exactly how many sentences will appear in the random paragraph.
              </p>
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
export default TutorPage;