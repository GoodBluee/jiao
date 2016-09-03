$(document).ready(function(){
	//前端知识出现的动画效果
	$("#aa").hover(
		function(){
			$("#aa1").slideDown(800)
		},
		function(){
			$("#aa1").hide(800)
		}	
	)
	
	$("#bb").hover(
		function(){
			$("#bb1").slideDown(800)
		},
		function(){
			$("#bb1").hide(800)
		}	
	)
	
	$("#cc").hover(
		function(){
			$("#cc1").slideDown(800)
		},
		function(){
			$("#cc1").hide(800)
		}	
	)
	
	//第一页动画效果
	$("#pic1").click(function(){
		$("#name1").fadeIn(1800);
	})
	$("#pic1").trigger("click");
	
	
	
	$("#name1").click(function(){
		$("#pic1").slideDown(1500);
	})
	$("#name1").trigger("click");
	

	//点击按钮进行滑动翻页
	$("#button1").click(function(){
		$("#allcontent").animate({bottom:"680px"},1200);
	})

	$("#button2").click(function(){
		$("#allcontent").animate({bottom:"1360px"},1200);
	})
	$("#button3").click(function(){
		$("#allcontent").animate({bottom:"2720px"},1200);
	})
	$("#button4").click(function(){
		$("#allcontent").animate({bottom:"2040px"},1200);
	})
	$("#button5").click(function(){
		$("#allcontent").animate({bottom:"3450px"},1200);
	})
	$("#button6").click(function(){
		$("#allcontent").animate({bottom:"0px"},1000);
	})
	//点击右侧小条进行滑动翻页
	$("#right2").click(function(){
		$("#allcontent").animate({bottom:"680px"},1500);
	})

	$("#right4").click(function(){
		$("#allcontent").animate({bottom:"1360px"},1500);
	})
	$("#right5").click(function(){
		$("#allcontent").animate({bottom:"2720px"},1500);
	})
	$("#right3").click(function(){
		$("#allcontent").animate({bottom:"2040px"},1500);
	})
	$("#right6").click(function(){
		$("#allcontent").animate({bottom:"3450px"},1500);
	})
	$("#right1").click(function(){
		$("#allcontent").animate({bottom:"0px"},1500);
	})
	
	//显示页面5时，点击按钮就会出现渐显
	//中间按钮效果
	$("#button3").click(function(){
		if($("#b1").is(":visible")){
			$("#b1").css("display","none");
		}
		$("#b1").fadeIn(2500);
	})
	
	$("#button3").click(function(){
		if($("#b2").is(":visible")){
			$("#b2").css("display","none");
		}
		$("#b2").fadeIn(3800);
	})
	$("#button3").click(function(){
		if($("#b3").is(":visible")){
			$("#b3").css("display","none");
		}
		$("#b3").fadeIn(5100);
	})
	//右侧按钮效果
	$("#right5").click(function(){
		if($("#b1").is(":visible")){
			$("#b1").css("display","none");
		}
		$("#b1").fadeIn(2500);
	})
	
	$("#right5").click(function(){
		if($("#b2").is(":visible")){
			$("#b2").css("display","none");
		}
		$("#b2").fadeIn(3800);
	})
	$("#right5").click(function(){
		if($("#b3").is(":visible")){
			$("#b3").css("display","none");
		}
		$("#b3").fadeIn(5100);
	})
	
	//显示页面2时，点击按钮就会出现渐显
	//中间按钮效果
	$("#button1").click(function(){
		if($("#page3-div1").is(":visible")){
			$("#page3-div1").css("display","none");
		}
		$("#page3-div1").slideDown(2800);
	})
	
	$("#button1").click(function(){
		if($("#page3-div2").is(":visible")){
			$("#page3-div2").css("display","none");
		}
		$("#page3-div2").slideDown(2800);
	})
	
	//右侧按钮效果
	$("#right2").click(function(){
		if($("#page3-div1").is(":visible")){
			$("#page3-div1").css("display","none");
		}
		$("#page3-div1").slideDown(2800);
	})
	
	$("#right2").click(function(){
		if($("#page3-div2").is(":visible")){
			$("#page3-div2").css("display","none");
		}
		$("#page3-div2").slideDown(2800);
	})
		//显示页面前端知识条那一页时，点击按钮就会出现渐显
	//中间按钮效果
	$("#button4").click(function(){
		if($("#aa").is(":visible")){
			$("#aa").css("display","none");
		}
		$("#aa").show(2500);
	})
	
	$("#button4").click(function(){
		if($("#bb").is(":visible")){
			$("#bb").css("display","none");
		}
		$("#bb").show(3000);
	})
	$("#button4").click(function(){
		if($("#cc").is(":visible")){
			$("#cc").css("display","none");
		}
		$("#cc").show(3300);
	})
	//右侧按钮效果
	$("#right3").click(function(){
		if($("#aa").is(":visible")){
			$("#aa").css("display","none");
		}
		$("#aa").show(2500);
	})
	
	$("#right3").click(function(){
		if($("#bb").is(":visible")){
			$("#bb").css("display","none");
		}
		$("#bb").show(3000);
	})
	$("#right3").click(function(){
		if($("#cc").is(":visible")){
			$("#cc").css("display","none");
		}
		$("#cc").show(3300);
	})
	//联系方式动画
	$("#tel").click(function(){
		$("#tel-num").slideToggle();
	
	})		
		
		

	$("#email").click(function(){
		$("#email-num").slideToggle();
		
	}
	)
	
	$("#qq").click(function(){
		$("#qq-num").slideToggle();
		
	}
	)
		
	//显示最后一张页面时，点击按钮就会出现渐显
	//中间按钮效果
	$("#button5").click(function(){
		if($("#lastone-p").is(":visible")){
			$("#lastone-p").css("display","none");
		}
			$("#lastone-p").slideDown(2800);
		
		
	})
	
	
	//右侧按钮效果
	$("#right6").click(function(){
		if($("#lastone-p").is(":visible")){
			$("#lastone-p").css("display","none");
		}
		$("#lastone-p").slideDown(2800);
	})
	
//技能那一页的效果
    $("#button3").click(function(){
	$(".page4p").show(2000);
    })
	
})
//禁用键盘的上下方向键
$(document).keydown(function(event){  
          //判断当event.keyCode 为38时（即向上方向键），执行函数to_left();  
          //判断当event.keyCode 为40时（即向下方向键），执行函数to_right();  
  
          if(event.keyCode == 38){  
             event.preventDefault();   
          }else if (event.keyCode == 40){   
             event.preventDefault();  
          }   
      }); 