$(document).ready(function () {
    $("a").click(function () {
      /* para saber que id es que estoy capturando
      console.log("voy a buscar esto:" + this.hash) */
      if(this.hash !==""){
        event.preventDefault();
  
        var hash= this.hash;
  
        $("html, body").animate({
          scroolTop : $(hash).offset().top
        }, 300, function(){
          window.location.hash = hash;
        })
      }
       
    });
  });
