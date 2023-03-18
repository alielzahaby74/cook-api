let contentWidth = $("#aside .content").width();
let barClosed = true;

let pages = ["home", "about", "contact", "search"];

// $("#aside").css("left", `${-1 * contentWidth}px`); //close the bar on page load

$("#bar-btn").click(function() {
    if (barClosed) {
        $("#aside").animate({left: 0}, 500);
        barClosed = false;
    } else {
        $("#aside").animate({left: `-${contentWidth}`}, 500);
        barClosed = true;


    }
});
$("#contact-btn").click(function() {
    $(".contact-us").show(500);
});



        // $("#aside").animate({left: 0}, 500, ()=>{
        //     $("#search-btn").slideUp(500, ()=>{
        //         $("#category-btn").slideUp(500, ()=>{
        //             $("#area-btn").slideUp(500, ()=>{
        //                 $("#ingredient-btn").slideUp(500, ()=>{
        //                     $("#contact-btn").slideUp(500);   
        //                 });
        //             });
        //         });
        //     });

        // });