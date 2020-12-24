function changeLabel() {
    document.getElementById("list_index").style.opacity = 0;
    document.getElementById("list_index").textContent = "Vote for";
    document.getElementById("list_index").style.opacity = 1;
}

// let list_indices = document.getElementsByClassName("list_index");

// for (let index = 0; index < list_indices.length; index++) {
//     const element = list_indices[index];
//     let original = null;
//     element.addEventListener("mouseover", function () {
//         original = element.textContent;
//         element.textContent = "Vote for";
//     });
//     element.addEventListener("mouseout",  function (original){
//         element.textContent = original;
//     });
// }

// let orignal = "A"
// document.getElementById("list_index").addEventListener("mouseover", function => () {
//     original = document.getElementById("list_index").textContent;
//     document.getElementById("list_index").textContent = "Vote for";
// })
// .
// document.getElementById("list_index").addEventListener("mouseout",  function => (original){
//     document.getElementById("list_index").textContent = original;
// })

// $('.candidiate').hover(
//     $('.vote_text').removeClass('hidden');
//     $('index').addClass('hidden')
// )


// $('.index').hover(
//     function(){ $(this).addClass('hidden')},
//     function(){ $(this).removeClass('hidden') });

$(document).ready(function() {
    console.log("ready!");
    $('#candidiate').hover(function(){ 
        $('#index').addClass('hidden');
        $('#vote_text').removeClass('hidden');  
    },     
    function(){    
        $('#index').removeClass('hidden'); 
        $('#vote_text').addClass('hidden');  
    });
});