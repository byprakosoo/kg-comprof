$(document).ready(function () {
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
})