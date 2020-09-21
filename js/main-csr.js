$(document).ready(function () {
    
    // Variables
    var tabWrapper = $(".tabs__content");

    if (location.hash === "#inspirasi-lingkungan") {
        $("[rel=inspirasi-lingkungan]").addClass("active");
        $("#inspirasi-lingkungan").addClass("d_active");
        $("#inspirasi-lingkungan").fadeIn(250);
        tabWrapper.animate({
            height: tabWrapper.find(".d_active").outerHeight() + 500,
        });
        $('html, body').animate({
            scrollTop: tabWrapper.offset().top
        }, 1500);
    } else if (location.hash === "#inspirasi-budaya") {
        $("[rel=inspirasi-budaya]").addClass("active");
        $("#inspirasi-budaya").addClass("d_active");
        $("#inspirasi-budaya").fadeIn(250);
        tabWrapper.animate({
            height: tabWrapper.find(".d_active").outerHeight() + 500,
        });
        $('html, body').animate({
            scrollTop: tabWrapper.offset().top
        }, 1500);
    } else if (location.hash === "#inspirasi-pendidikan")  {
        $("[rel=inspirasi-pendidikan]").addClass("active");
        $("#inspirasi-pendidikan").addClass("d_active");
        $("#inspirasi-pendidikan").fadeIn(250);
        tabWrapper.animate({
            height: tabWrapper.find(".d_active").outerHeight() + 500,
        });
        $('html, body').animate({
            scrollTop: tabWrapper.offset().top
        }, 1500);
    } else{
        $(".tabs__list").removeClass("active");
    }
    AOS.init({
        easing: 'ease-out-back',
        duration: 1000
      });
      onElementHeightChange(document.body, function(){
        AOS.refresh();
      });
      function onElementHeightChange(elm, callback) {
        var lastHeight = elm.clientHeight
        var newHeight;
        
        (function run() {
            newHeight = elm.clientHeight;      
            if (lastHeight !== newHeight) callback();
            lastHeight = newHeight;
    
            if (elm.onElementHeightChangeTimer) {
              clearTimeout(elm.onElementHeightChangeTimer); 
            }
    
            elm.onElementHeightChangeTimer = setTimeout(run, 200);
        })();
      }
});