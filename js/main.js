"use strict";$(document).ready(function(){let t=$("#scroll"),a=$("#header-js"),e=$("#feedback-js"),s=$(".mobile-btn"),o=$(".help-cont__question-item");var i;const r=new Promise(function(){var t=document.body.clientWidth,e=window.innerHeight;let a;return a=e<t,i=t<=1023||(1024==t&&!a||!(501<=e&&a)&&!!(e<500&&a))});s.on("click",function(t){t.preventDefault(),a.hasClass("mob-active")?(a.removeClass("mob-active"),$(".mob-menu").remove(),$("body").css("overflow","")):(a.addClass("mob-active"),$("body").append('<div class="mob-menu"></div>').css("overflow","hidden"),$(".mob-menu").append($(".header-nav").clone()),$("html, body").animate({scrollTop:0},300),$(".mob-menu .primary-menu a").on("click",function(t){t.preventDefault(),a.removeClass("mob-active"),$(".mob-menu").remove(),$("body").css("overflow","");let e=$("div[data-anchor="+$(this).attr("data-anchor")+"]");$("html, body").animate({scrollTop:e.offset().top-n},1e3)}))}),/firefox/.test(navigator.userAgent.toLowerCase())&&a.css("background","radial-gradient(108.54% 107.43% at 0 0,rgba(255,255,255,.8) 0,rgba(255,255,255,1) 100%)"),$.each({face:'<svg style="width:0;height:0;position:absolute;" aria-hidden="true" focusable="false"><linearGradient id="grad-face" x2="1" y2="1"><stop offset="0%" stop-color="#F5F5F5" /><stop offset="50%" stop-color="#224488" /><stop offset="100%" stop-color="#112266" /></linearGradient></svg>',inst:'<svg style="width:0;height:0;position:absolute;" aria-hidden="true" focusable="false"><linearGradient id="grad-inst" x2="1" y2="1"><stop offset="0%" stop-color="#5756CB" /><stop offset="60%" stop-color="#FE3DA0" /><stop offset="100%" stop-color="#FDEC57" /></linearGradient></svg>',mail:'<svg style="width:0;height:0;position:absolute;" aria-hidden="true" focusable="false"><linearGradient id="grad-mail" x2="1" y2="1"><stop offset="0%" stop-color="#F5F5F5" /><stop offset="50%" stop-color="#D30300" /><stop offset="100%" stop-color="#D20201" /></linearGradient></svg>'},function(t,e){$("body").append(e)});$(".primary-menu li a");let n=$("#header-js").innerHeight();$(".primary-menu li a,.footer-nav li a").on("click",function(t){t.preventDefault();let e=$("div[data-anchor="+$(this).attr("data-anchor")+"]");$("html, body").animate({scrollTop:e.offset().top-n},1e3)}),$(window).scroll(function(){300<$(window).scrollTop()?(a.addClass("sticky"),t.fadeIn(100),$(window).scrollTop()>$("#shares").offset().top-$(window).innerHeight()&&($("#shares").addClass("active"),$(window).scrollTop()>$("#spot").offset().top-$(window).innerHeight()&&($("#spot").addClass("active"),$(window).scrollTop()+ +$(window).height()>=$(document).height()?e.addClass("active"):e.removeClass("active")))):(a.removeClass("sticky"),t.fadeOut(100))}),t.on("click",function(t){t.preventDefault(),$("html, body").animate({scrollTop:0},700)}),o.on("click",function(t){t.preventDefault(),$(o).removeClass("active"),$(this).addClass("active")}),$(".img-svg").each(function(){var e=$(this),a=e.attr("class"),t=e.attr("src");$.get(t,function(t){t=$(t).find("svg");!(t=(t=void 0!==a?t.attr("class",a+" replaced-svg"):t).removeAttr("xmlns:a")).attr("viewBox")&&t.attr("height")&&t.attr("width")&&t.attr("viewBox","0 0 "+t.attr("height")+" "+t.attr("width")),e.replaceWith(t)},"xml")}),function(){let e=$("#img-add"),a=$(e).find("img");for(let t=0;t<3;t++)e.append(a.clone())}(),setTimeout(()=>$(".banner-wrapper").addClass("animated"),1e3);let c=new Swiper(".reviews-container",{direction:"vertical",spaceBetween:30,mousewheelControl:!1,slidesPerView:1,effect:"coverflow",loop:!0,navigation:{nextEl:".reviews-next",prevEl:".reviews-prev"},coverflowEffect:{rotate:0,slideShadows:!1}});c.on("slideChange",function(){this.activeIndex;$(".reviews-item").removeClass("active").eq(this.activeIndex).addClass("active")}),r.then(new Promise(function(){if(i){$(".flip-card-front").click(function(){$(".back-card").remove(),$(this).parent().find(".flip-card-back").append('<span class="back-card"><svg id="Capa_1" enable-background="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="256" x2="256" y1="481.01" y2="30.99"><stop offset="0" stop-color="#82BB58"/><stop offset="1" stop-color="#53A580"/></linearGradient><g><g><g><path d="m505.73 183.801-212-150c-4.6-3.296-10.606-3.721-15.586-1.128-5.01 2.563-8.145 7.705-8.145 13.33v75.396c-150.204 7.822-269.999 132.495-269.999 284.604v60c0 7.485 5.508 13.813 12.92 14.854 7.233 1.055 14.424-3.428 16.494-10.723l2.314-8.101c30.762-107.636 127.471-184.218 238.272-190.605v74.575c0 5.625 3.135 10.767 8.145 13.33 4.98 2.593 10.986 2.139 15.586-1.128l212-150c3.926-2.813 6.27-7.354 6.27-12.202s-2.345-9.39-6.271-12.202z" fill="url(#SVGID_1_)"/></g></g></g></svg></span>'),$(".back-card").click(function(){$(this).parent().parent().find(".flip-card-front").click(),$(this).remove()})});new Swiper(".cont-price",{slidesPerView:1,spaceBetween:0,loop:!0,initialSlide:1,centeredSlides:!0,autoplay:{delay:2e3,disableOnInteraction:!1},breakpoints:{480:{centeredSlides:!1,loop:!1,autoplay:!1,slidesPerView:3,spaceBetween:30}}}),new Swiper(".gallery-slider",{effect:"flip",loop:!0,grabCursor:!0,autoplay:{delay:3e3,disableOnInteraction:!1}});let e=$(".product-cat__btn"),a={slidesPerView:1.3,spaceBetween:40};new Swiper("#slider-music",a);e.click(function(t){$(this).parent().innerWidth()/2<$(this).parent().innerWidth()-$(this).position().left?$(".product-cat").stop().animate({scrollLeft:"+="+($(this).position().left-$(this).parent().innerWidth())/2},800):$(".product-cat").stop().animate({scrollLeft:"+="+($(this).position().left-$(this).parent().position().left)},800),e.removeClass("active"),$(this).addClass("active"),$(".product-slider__wrapper.active").slideUp(150),$("#slider-"+$(this).attr("data-cat")).addClass("active").slideDown(150);new Swiper("#slider-"+$(this).attr("data-cat"),a)})}else{let e=$(".product-cat__btn");e.click(function(t){e.removeClass("active"),$(this).addClass("active"),$(".product-slider__wrapper.active").slideUp(150),$("#slider-"+$(this).attr("data-cat")).addClass("active").slideDown(150)})}}))}),$(document).ready(function(){var t=$(".product-create"),e=$(".popupWrapper .modal__title_button"),a=$(".popupWrapper");$(t).on("click",()=>{$(a).css("display","flex"),$("body").css("overflow","hidden")}),$(e).on("click",()=>{$(a).hide(),$("body").css("overflow","")}),$(".custom-select").each(function(){var t=$(this).attr("class"),e=($(this).attr("id"),$(this).attr("name"),'<div class="'+t+'">');e+='<span class="custom-select-trigger">'+$(this).attr("placeholder")+"</span>",e+='<div class="custom-options">',$(this).find("option").each(function(){e+='<span class="custom-option '+$(this).attr("class")+'" data-value="'+$(this).attr("value")+'">'+$(this).html()+"</span>"}),e+="</div></div>",$(this).wrap('<div class="custom-select-wrapper"></div>'),$(this).hide(),$(this).after(e)}),$(".custom-option:first-of-type").hover(function(){$(this).parents(".custom-options").addClass("option-hover")},function(){$(this).parents(".custom-options").removeClass("option-hover")}),$(".custom-select-trigger").on("click",function(){$("html").one("click",function(){$(".custom-select").removeClass("opened")}),$(this).parents(".custom-select").toggleClass("opened"),event.stopPropagation()}),$(".custom-option").on("click",function(){$(this).parents(".custom-select-wrapper").find("select").val($(this).data("value")),$(this).parents(".custom-options").find(".custom-option").removeClass("selection"),$(this).addClass("selection"),$(this).parents(".custom-select").removeClass("opened"),$(this).parents(".custom-select").find(".custom-select-trigger").text($(this).text())}),$(".popupWrapper label").off("click").on("click",function(t){$(this).closest(".checkboxWrapp__choice").find("label").removeClass("active"),$(this).addClass("active"),$(this).closest(".checkboxWrapp__choice").find("input").prop("checked",!1),$(this).find("input").prop("checked",!0),setTimeout(function(){t.stopPropagation(),t.preventDefault()},50)});t=$(".checkboxWrapp__text span");$(t).hover(function(){$(this).closest(".checkboxWrapp__text").find(".checkboxWrapp__text_detail").addClass("hover")},function(){$(this).closest(".checkboxWrapp__text").find(".checkboxWrapp__text_detail").removeClass("hover")});var e=$(".popUpBtnPrev"),t=$(".popUpBtnNext"),s=$("[data-step]"),o=$(".popupWrapper");$(t).on("click",()=>{var t=+$(s).attr("data-step");t<2?$(s).attr("data-step",1+t):2==t&&($("body").addClass("openCart"),$(o).hide())}),$(e).on("click",()=>{var t=+$(s).attr("data-step");1!=t&&$(s).attr("data-step",t-1)});var t=$(".cartBtnPrev"),e=$(".cartBtnNext"),i=$("[data-cartstate]");$(e).on("click",()=>{var t=+$(i).attr("data-cartstate");1==t?($(".shoppingCartWrapper__steps_step1").addClass("complite"),$(".shoppingCartWrapper__steps_step2").addClass("active"),$(i).attr("data-cartstate",1+t)):2==t?($(".shoppingCartWrapper__steps_step2").addClass("complite"),$(".shoppingCartWrapper__steps_step3").addClass("active"),$(i).attr("data-cartstate",1+t)):3==t?($(".shoppingCartWrapper__steps_step3").addClass("complite"),$(i).attr("data-cartstate",1+t)):4==t&&$(i).attr("data-cartstate",1+t)}),$(t).on("click",()=>{var t=+$(i).attr("data-cartstate");3==t||2==t?($(".shoppingCartWrapper__steps_step3").removeClass("complite"),$(".shoppingCartWrapper__steps_step3").removeClass("active"),$(i).attr("data-cartstate",t-1)):1==t?$(".shoppingCartWrapper__steps_step3").removeClass("complite"):4==t&&$(i).attr("data-cartstate",t-1)})});