$(function() {
  // service section data
    const serviceData = [
    {
        id: 1,
        icon: "",
        heading: "Search Property",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.",
        learnMoreURL: "",
    },
    {
        id: 2,
        icon: "",
        heading: "Buy Property",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.",
        learnMoreURL: "",
    },
    {
        id: 3,
        icon: "",
        heading: "Investing",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.",
        learnMoreURL: "",
    }

    ];

    console.log("Ready");
    const menu_wrapper = $(".menu_wrapper");
    const hamburgerOpen = menu_wrapper.find("#hamburger-open");
    const hamburgerClose = menu_wrapper.find("#hamburger-close");
    const serviceCardWrapper = document.getElementById('service-card_wrapper');
    const serviceCardWrapperCont = document.getElementById('service-card_wrapper-content');

    const nav = menu_wrapper.find(".nav_wrapper");
    // const propertySlider = $(".slider_wrapper");
    const propertySlider = $(".slider");
    const propertyViewBtn = $(".view-all-btn");
    const slickConfig = {
       
      infinite: true,
      prevArrow: $(".pre"),
      nextArrow: $(".next"),
      slidesToShow: 3,
      slidesToScroll: 1,
      // mobileFirst: true,
      autoplaySpeed: 2000,
      autoplay: true,
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
             
            }
          },

          {
            breakpoint: 650,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              autoplaySpeed: 2000,
              autoplay: true,
              pauseOnHover: true,
            }
          },
         
        ],
      
    };
    let viewAll = true;



    //Initializing slick element with config
    propertySlider.slick(slickConfig);


    propertyViewBtn.click((e) => {
      if(viewAll) {
        propertySlider.slick("unslick");
        propertySlider.addClass("all");
        viewAll = false;
        propertyViewBtn.text("Less Propery Listings");
      }else {
        propertySlider.slick(slickConfig);
        propertySlider.removeClass("all");
        viewAll = true;
        propertyViewBtn.text("More Propery Listings");
      }
      // }if(viewAll == false) {
      //   propertySlider.slick(slickConfig);
      //   propertySlider.removeClass("all");
      //   viewAll = true;
      // }


  });


    

    //Menu open logic
    hamburgerOpen.click(() => {
         nav.css({
             right: "0",
         });

         
    });

  //close menu logic
    hamburgerClose.click(() => {
         nav.css({
             right: "-300px",
         });

        
    });

   // Logic close menu when any other element is click apart from the menu and menu open
    $(document).click((e) => {
         const target = e.target;
         const containsNavWrapper = target.closest(".nav_wrapper");

         if(!containsNavWrapper && !target.matches("#hamburger-open") && !target.matches(".logo")) {

            nav.css({
                right: "-100vh",
            })
               return false;
         } 
    });

 

 // Menu scroll logic
    $(document).scroll(() => {
     
        let scrollTop = $(document).scrollTop();
       
        if(scrollTop > 0) {
            menu_wrapper.css({
                background: "#fff",
                color: "#000",
                position: "fixed",
                boxShadow: "0px 0px 5px 0px black",  
            });

            menu_wrapper.find(".page").addClass("down");

        }
        if(scrollTop > 250) {
                menu_wrapper.css({
                height: "8vh",    
            }) 

           
        }
        if(scrollTop < 1 ){
            menu_wrapper.css({
                background: "transparent",
                color: "#fff",
                position: "static",
                height: "12vh",
                boxShadow: "none"
            });
             
            menu_wrapper.find(".page").removeClass("down")
         
        }        
    });

  
    window.onload = () => {
      // fireing the scroll logic onload of the document
        //vanilla way of triggering an event
        //  document.scroll();
         //jQuery way of triggering an event
           $(document).trigger("scroll");

      //Loading service section DOM
      
      serviceData.forEach(data => {
          const content = serviceCardWrapperCont.content.cloneNode(true);
             console.log(content)
             content.querySelector(".heading").append(data.heading);
             content.querySelector(".description").append(data.description);
             serviceCardWrapper.append(content);
      });
      

      




    };
 

    
})


