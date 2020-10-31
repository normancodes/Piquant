$(document).ready(function() {
 // executes when HTML-Document is loaded and DOM is ready
console.log("document is ready");


//   $( ".feature-box" ).on("hover", function() {
//     $("img").hide();
// });
$( ".feature-box" ).hover(
  function() {
    $( this ).attr("class","feature-box-2 col-sm-3");
  }, function() {
    $( this ).attr("class","feature-box col-sm-3");
  }
);
// document ready

$('#recipeCarousel').carousel({
  interval: 10000
})

$('.carousel .carousel-item').each(function(){
    var minPerSlide = 3;
    var next = $(this).next();
    if (!next.length) {
    next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));

    for (var i=0;i<minPerSlide;i++) {
        next=next.next();
        if (!next.length) {
        	next = $(this).siblings(':first');
      	}

        next.children(':first-child').clone().appendTo($(this));
      }
});

});
