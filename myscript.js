var item2 = document.querySelector('.item2')
var item3 = document.querySelector('.item3')
var area = document.querySelector('.area')
var animation = gsap.timeline();
var countBottle = 4;
Draggable.create('.item3', {
    bounds: area,
    type: 'x,y' , 
    intertia: true,
    onDragStart: function(){
        StartX = this.x;  StartY = this.y;
        var angle = [0, 90, 180, 270];
        for(var i=0; i<angle; i++ ){
            console.log("lll")
        }
        animation.to(".item2", {duration: 1, rotation:90})
    //     var count = 4;
    //     for(var i =0; i<count; i++){
    //     if(angle[0] == 0){
    //         animation.to(".item2", {duration: 1, rotation:90})
    //     }
    //     if(angle[1] == 90){
    //         animation.to(".item2", {duration: 1, rotation:90})
    //     }
    //     if(angle[2] == 2){
    //         animation.to(".item2", {duration: 1, rotation:180})
    //     }
    //     if(angle[3] == 3){
    //         animation.to(".item2", {duration: 1, rotation:270})
    //     }
    // }
       
    },
    onDragEnd: function(){
        TweenLite.to( this.target , 1 , { x:StartX , y:StartY})
    }
    
    })

// window.addEventListener('load', function(){
//     var item2 = document.querySelector('.item2')
//     var item3 = document.querySelector('.item3')
//     var angle = [0, 90, 180, 270];


//     function onStart(){
//         TweenMax.to ('item2', {
//             duration: 1, rotation: 90
//         });
//     }

//     function onEnd(){
//         TweenMax.to(this.target , 1 , { x:StartX , y:StartY})
//     }
// })

// Draggable.create('item2', {
//     type: 'rotation',
//     bounds: {

//     }
// })
