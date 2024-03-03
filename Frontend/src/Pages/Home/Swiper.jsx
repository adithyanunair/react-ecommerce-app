import { Navigation, Pagination, Scrollbar, A11y, EffectCreative, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function SwiperSComp() {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y, EffectCreative, Autoplay]}
      slidesPerView={1}
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      grabCursor={true}
      effect={'creative'}
      creativeEffect={{
        prev: {
          shadow: true,
          translate: [0, 0, -400],
        },
        next: {
          translate: ['100%', 0, 0],
        },
      }}
      className="mySwiper"
    >
      <SwiperSlide>
        <img className='h-56 mt-4 lg:mt-0 md:h-80 lg:h-[448px] w-full object-cover' src="https://img.freepik.com/free-vector/modern-black-friday-sale-banner-template-with-3d-background-red-splash_1361-1877.jpg?t=st=1709464016~exp=1709467616~hmac=5da7801207fd0eb8992b633b6a06648d0d330bdb7125cdb05ca192482aa760f7&w=1380" alt="banner" />
      </SwiperSlide>
      <SwiperSlide>
        <img className='h-56 mt-4 lg:mt-0 md:h-80 lg:h-[448px] w-full object-cover' src="https://img.freepik.com/free-vector/realistic-beauty-sale-ad-template_52683-20023.jpg?t=st=1709464137~exp=1709467737~hmac=7f253f2cbeff68fcd2ca062082fa6572e330e326ef2ed4bb597326a7cef8d914&w=996" alt="banner" />
      </SwiperSlide>

      <SwiperSlide>
        <img className='h-56 mt-4 lg:mt-0 md:h-80 lg:h-[448px] w-full object-cover' src="https://img.freepik.com/free-vector/student-discount-sale-banner_52683-122376.jpg?t=st=1709464438~exp=1709468038~hmac=904dde96eb1aea844f59af91dba66003ad85def2c2e9f273c9f2f6e8597d71c0&w=1380" alt="banner" />
      </SwiperSlide>
    </Swiper>
  )
}

export default SwiperSComp
