

document.onmousemove = function(e)
{
	if (!e) e = window.event;
	document.getElementById('some').innerHTML = '<p>X: '+e.clientX+'</p>';
	document.getElementById('some').innerHTML += '<p>Y: '+e.clientY+'</p>';
}
var color=["green","orange","red","blue","pink","brown","yellow","darkgreen","black","grey"];
var len=["10px","150px","400px","600px","800px"]
var k=1;

$('#some2').click(function(){
     var x=Math.round(Math.random()*10);
    var y=Math.round(Math.random()*5);
    if(k==1){
           $('#some2').animate({
  
        top:len[y],
        left:'250px'
},{
    duration:2000,//час
    queue:false , //черга
    specialEasing:{
        height:'easeInOutElastic', //http://easings.net/ru
        width:'easeInQuint',
        top:'easeInOutBack'
    }
}).animate({
      height:'10px',
},3000)
    $('#some2').css({
        background:color[x]
    })
    k++;
    }else if(k==2){
         $('#some2').animate({
  
        top:len[y],
        left:'100px'
},{
    duration:2000,//час
    queue:false , //черга
    specialEasing:{
        height:'easeInOutElastic', //http://easings.net/ru
        width:'easeInQuint',
        top:'easeInOutBack'
    }
}).animate({
      height:'100px',
             width:'250px'
},3000)
    $('#some2').css({
        background:color[x]
    })
    k++;
    }
         else if(k==3){
         $('#some2').animate({
  
        top:len[y],
        left:'250px'
},{
    duration:2000,//час
    queue:false , //черга
    specialEasing:{
        height:'easeInOutElastic', //http://easings.net/ru
        width:'easeInQuint',
        top:'easeInElastic'
    }
}).animate({
      height:'10px',
             width:'250px'
},3000)
    $('#some2').css({
        background:color[x]
    })
    k++;
    }
 else{
        $('#some2').animate({
  
        top:len[y],
        left:'250px'
},{
    duration:2000,//час
    queue:false , //черга
    specialEasing:{
        height:'easeInOutElastic', //http://easings.net/ru
        width:'easeInQuint',
        top:'easeOutBounce'
    }
}).animate({
      height:'50px',
             width:'50px'
},3000)
    $('#some2').css({
        background:color[x]
    })
    k=1;
 }

})























//var i=0;
//$('div').animate({
//    height:'300px',
//    width:'300px'
//},{
//    duration:5000,//час
//    queue:false , //черга
//    specialEasing:{
//        height:'easeInQuint', //http://easings.net/ru
//        width:'easeInOutBounce',
//    },
//    complete:function(){ //виконується по завуршуванню
//        console.log('hello')
//    },
//    step:function(){
//        i++;
//        console.log(i++)
//        if(i==300){
//            $('div').stop()
//        }
//    }
//}).animate({
//    opacity:0.4,
//},5000)




//$('div').each(function(index,elem){
//    if(index%2==0){
//        $(elem).css({
//            background:'green'
//        })
//    }
//})


//$('div').each(function(index,elem){
// $(elem).click(function(){
//     $('p').eq(index).css({//доступаємося до індексу
//         background:'green'
//     })   
//     
// })
//})


//$('div').animate({
//    marginLeft:'600px',
//    marginTop:'600px',
//    
//    
//},{
//    duration:5000,//час
//    queue:false , //черга
//    specialEasing:{
//        height:'easeInQuint', //http://easings.net/ru
//        width:'easeInOutBounce',
//    },
//    complete:function(){ //виконується по завуршуванню
//        $('div').text("dsvdfbdfv"),
//        $('div').css({
//          transform:'rotate(60deg)'  
//        })
//            
//    }
//   
//},5000)

//
//var st=setInterval(function(){
//   $('div').animate({
//    height:'200px',
//    width:'200px'
//    
//    
//},{
//    duration:2000,//час
//    queue:true, //черга
//    specialEasing:{
////        height:'easeInQuint', //http://easings.net/ru
////        width:'easeInOutBounce',
//    }
//   
//},2000).animate({
//      height:'100px',
//    width:'100px'
//},2000)
// 
//},4000)

//$('div').animate({
//    height:'200px',
//    width:'200px'
//    
//    
//},{
//    duration:2000,//час
//    queue:true, //черга
//    specialEasing:{
////        height:'easeInQuint', //http://easings.net/ru
////        width:'easeInOutBounce',
//    }
//   
//},2000).animate({
//      height:'100px',
//    width:'100px'
//},2000)
//
//
