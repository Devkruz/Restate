 // service section data
import serviceData from "./serviceData.js";
//slick config 
import slickConfig from "./slickConfig.js";
$(function() {
    const $menu_wrapper = $(".menu_wrapper");
    const $hamburgerOpen = $menu_wrapper.find("#hamburger-open");
    const $hamburgerClose = $menu_wrapper.find("#hamburger-close");
    const serviceCardWrapper = document.getElementById('service-card_wrapper');
    const serviceCardWrapperCont = document.getElementById('service-card_wrapper-content');
    const $nav = $menu_wrapper.find(".nav_wrapper");
    const $propertyWrapper = $(".property_wrapper");
    const $propertySlider = $propertyWrapper.find(".slider");
    const $sliderBtn = $propertyWrapper.find(".slider-btn");
    const $propertyViewBtn = $propertyWrapper.find(".view-all-btn");
    let viewAll = true;

    //Initializing slick element with config
    $propertySlider.slick(slickConfig);

    // property view all btn logic
    $propertyViewBtn.click((e) => {
      if(viewAll) {
        $propertySlider.slick("unslick");
        $propertySlider.addClass("all");
        $sliderBtn.css({
          display: "none",
        })
        viewAll = false;
        $propertyViewBtn.text("Less Propery Listings");
      }else {
        $propertySlider.removeClass("all");
        $propertySlider.slick(slickConfig);
        window.location.href = "#property";
        $sliderBtn.css({
          display: "block",
        })
        viewAll = true;
        $propertyViewBtn.text("More Propery Listings");
      }
  });


    

    //Menu open logic
    $hamburgerOpen.click(() => {
         $nav.css({
             right: "0",
             transition: "all 500ms ease",
         });
    });

  //close menu logic
    $hamburgerClose.click(() => {
         $nav.css({
             right: "-300px",
             transition: "all 500ms ease",
         });

        
    });

 
   // Logic close menu when any other element is click apart from the menu and menu open
    $(document).click((e) => {
         const target = e.target;
         const containsNavWrapper = target.closest(".nav_wrapper");

         if(!containsNavWrapper && !target.matches("#hamburger-open") && !target.matches(".logo")) {

            $nav.css({
                right: "-300px",
                transition: "all 500ms ease",
            })
               return false;
         } 
    });

 

 // Menu scroll logic
    $(document).scroll(() => {
     
        let scrollTop = $(document).scrollTop();
       
        if(scrollTop > 0) {
            $menu_wrapper.css({
                background: "#fff",
                color: "#000",
                position: "fixed",
                boxShadow: "0px 0px 5px 0px black", 
               
            });

            $menu_wrapper.find(".page").addClass("down");

        }
        if(scrollTop > 250) {
                $menu_wrapper.css({
                height: "8vh",    
            }) 

           
        }
        if(scrollTop < 1 ){
            $menu_wrapper.css({
                background: "transparent",
                color: "#fff",
                position: "fixed",
                height: "12vh",
                boxShadow: "none"
            });
             
            $menu_wrapper.find(".page").removeClass("down")
         
        }        
    });

  
    window.onload = () => {
      // fireing the scroll logic onload of the document
        //vanilla way of triggering an event
        //  document.scroll();
         //jQuery way of triggering an event
           $(document).trigger("scroll");

      //Loading service section DOM
      let tempCont = new DocumentFragment();
      serviceData.forEach(data => {
             const template = serviceCardWrapperCont.content.cloneNode(true);
             template.querySelector(".heading").append(data.heading);
             template.querySelector(".description").append(data.description);
             template.querySelector(".symbol").setAttribute("class", `symbol ${data.icon}`);
             tempCont.appendChild(template);
          
      });
      
      serviceCardWrapper.append(tempCont);
      
    };

    
})


