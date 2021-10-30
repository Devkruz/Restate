const slickConfig = {
       
    infinite: true,
    prevArrow: $(".pre"),
    nextArrow: $(".next"),
    slidesToShow: 3,
    slidesToScroll: 1,
    // mobileFirst: true,
    autoplaySpeed: 2000,
    autoplay: false,
    pauseOnHover: true,
    speed: 500,
    cssEase: 'ease-out',
    responsive: [
        {
          breakpoint: 1000,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            autoplay: false,
           
          }
        },

        {
          breakpoint: 650,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            autoplaySpeed: 2000,
            autoplay: false,
            pauseOnHover: true,
          }
        },
       
      ],
    
  };

  export default slickConfig;