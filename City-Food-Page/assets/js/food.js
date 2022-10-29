// $(document).ready(function () {
//     $("#close").click(function () { 
        
//     //    $("#sideMenu").width("-200px");
//     $("#sideMenu").css({transform:"translateX(100%)"});
//     });
// });


// $("#menu-btn").on('click', function () {
//     console.log('Sam');
// });
// $("#menu-btn").click(function(){
//     alert("lol");
// })
// $("#menu").on('click' fun () { 
//     console.log('sam');
        
//     // $("#sideMenu").width("200px");
//     // $("#sideMenu").css({transform:"translateX(100%)"});
    
//  });

// $("#open-menu").on('click', function () {
//     $('#sideMenu').css({transform: 'translate(0)'})
//    });

// $("#closed-menu").on('click', function () {
//     // console.log('Sam');

//     $('#sideMenu').css({transform: 'translate(100%)'})
//    });

$(document).ready(function () {
    $("#closed").click(function () { 
        
    //    $("#sideMenu").width("-200px");
    $("#sideMenu").css({transform:"translateX(100%)"});
    });
});


$("#menu-btn").click(function () { 
        
    // $("#sideMenu").width("200px");
    $("#sideMenu").css({transform:"translateX(0px)"});
    
   
 });