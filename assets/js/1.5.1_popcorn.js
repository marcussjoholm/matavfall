function getOffset( el ) {
    var _x = 0;
    var _y = 0;
    while( el && !isNaN( el.offsetLeft ) && !isNaN( el.offsetTop ) ) {
        _x += el.offsetLeft - el.scrollLeft;
        _y += el.offsetTop - el.scrollTop;
        el = el.offsetParent;
    }
    return { top: _y, left: _x };
}


$(document).ready(function() {

	var controller = $.superscrollorama();
	var avslut_controller = $.superscrollorama();

	var scrollDuration = 100; 
	var widthOffset = $(window).width() / 2 + 100;
	var windowHeight = $(window).height();
	var windowHeightSplit = $(window).height() / 2;

	/*
	var matkasse_1 = TweenMax.to($('#matkasse-1'), 1, {css:{left:  '+=' + (widthOffset + 350)}, ease:Expo.easeOut}, scrollDuration);
	var matkasse_2 = TweenMax.to($('#matkasse-2'), 1, {css:{left:  '+=' + (widthOffset + 200)}, ease:Expo.easeOut}, scrollDuration);
	var matkasse_3 = TweenMax.to($('#matkasse-3'), 1, {css:{left:  '+=' + widthOffset}, ease:Expo.easeOut}, scrollDuration);
	var matkasse_4 = TweenMax.to($('#matkasse-4'), 1, {css:{left:  '+=' + (widthOffset - 150)}, ease:Expo.easeOut}, scrollDuration);
	var matkasse_5 = TweenMax.to($('#matkasse-5'), 1, {css:{left:  '+=' + (widthOffset - 300)}, ease:Expo.easeOut}, scrollDuration);
	*/

	//var del_1 = TweenMax.fromTo($('.del-1'), 1, {css:{opacity: 0,left: (widthOffset)}, immediateRender:true, ease:Expo.easeIn}, {css:{opacity: 1 }, ease:Expo.easeOut} , scrollDuration);
	
	var matkasse_6 = TweenMax.to($('#matkasse-1, #matkasse-2, #matkasse-3, #matkasse-4, #matkasse-5, .del-1'), 1, {css:{opacity: 0}, ease:Expo.easeIn}, scrollDuration);
	
	//var explotion = TweenMax.fromTo( $('#explotion'), .25, {css:{transform: 'scale(0)'}, immediateRender:true, ease:Quad.easeInOut}, {}, ease:Quad.easeInOut}, scrollDuration);
	var explotion_1 = TweenMax.to($('#explotion'), 1, {css:{transform: 'scale(4)', opacity: 1}, ease:Expo.easeIn}, scrollDuration);
	var explotion_2 = TweenMax.to($('#explotion'), 1.5, {css:{opacity: 0}, ease:Expo.easeIn}, scrollDuration);

	var money = TweenMax.fromTo($('#money-2'), .1, {css:{transform: 'scale(0)',left: 300}, immediateRender:true, ease:Expo.easeIn}, {css:{transform: 'scale(1) rotate(-20deg)', left: '+=400' ,top: '+=100' }, ease:Expo.easeOut});
	var money_1 = TweenMax.fromTo($('#money-1'), .1, {css:{transform: 'scale(0)',left: 300}, immediateRender:true, ease:Expo.easeIn}, {css:{transform: 'scale(1) rotate(-30deg)', left:'-=300',top: '-=300' }, ease:Expo.easeOut});
	var money_2 = TweenMax.fromTo($('#money'), .1, {css:{transform: 'scale(0)',left: 300}, immediateRender:true, ease:Expo.easeIn}, {css:{transform: 'scale(1) rotate(30deg)', left: '-=500',top: '+=100' }, ease:Expo.easeOut});
	var money_3 = TweenMax.fromTo($('#money-3'), .1, {css:{transform: 'scale(0)',left: 300}, immediateRender:true, ease:Expo.easeIn}, {css:{transform: 'scale(1) rotate(-80deg)', left: '+=500',top: '+=100' }, ease:Expo.easeOut});
	var money_4 = TweenMax.fromTo($('#money-4'), .1, {css:{transform: 'scale(0)',left: 300}, immediateRender:true, ease:Expo.easeIn}, {css:{transform: 'scale(1) rotate(10deg)', left: '+=50',top: '+=300' }, ease:Expo.easeOut});
	var money_5 = TweenMax.fromTo($('#money-5'), .1, {css:{transform: 'scale(0)',left: 300}, immediateRender:true, ease:Expo.easeIn}, {css:{transform: 'scale(1) rotate(10deg)', left: '-=450',top: '+=240' }, ease:Expo.easeOut});
	var money_6 = TweenMax.fromTo($('#money-6'), .1, {css:{transform: 'scale(0)',left: 300}, immediateRender:true, ease:Expo.easeIn}, {css:{transform: 'scale(1) rotate(-10deg)', left: '-=500',top: '+=100' }, ease:Expo.easeOut});
	
	var del_2 = TweenMax.fromTo($('.del-2'), .1, {css:{transform: 'scale(0)',left: 300}, immediateRender:true, ease:Expo.easeIn}, {css:{transform: 'scale(1)',top: '+=10' }, ease:Expo.easeOut});

	controller.pin($('#matkassar'), 4000, {
		anim: (new TimelineLite())
		//.add([del_1])
		.add([explotion_1])
		.add([explotion_2, matkasse_6])
		.add([money, money_1, money_2, money_3, money_4, money_5, money_6, del_2] , '-=0.4'),
		onPin: function() {
			$('#matkassar').css('height','100%');
		}, 
		onUnpin: function() {
			$('#matkassar').css('height', windowHeight);
		}
	});


	var money_popcorn_3 = getOffset( document.getElementById('money-popcorn-3')).top - windowHeightSplit;
	var popcorn_3 = getOffset( document.getElementById('popcorn-3')).top - windowHeightSplit;
	var money_popcorn_4 = getOffset( document.getElementById('money-popcorn-3')).top - windowHeightSplit;
	var popcorn_4 = getOffset( document.getElementById('popcorn-3')).top - windowHeightSplit;
	var money_popcorn_5 = getOffset( document.getElementById('money-popcorn-3')).top - windowHeightSplit;
	var popcorn_5 = getOffset( document.getElementById('popcorn-3')).top - windowHeightSplit;
	var money_popcorn_6 = $('#money-popcorn-6').offset().top - windowHeightSplit;
	var popcorn_6 = $('#popcorn-6').offset().top - windowHeightSplit;

	var money_popcorn_7 = $('#money-popcorn-7').offset().top - windowHeightSplit;
	var popcorn_7 = $('#popcorn-7').offset().top - windowHeightSplit;

	var money_popcorn_8 = $('#money-popcorn-9').offset().top - windowHeightSplit;
	var popcorn_8 = $('#popcorn-8').offset().top - windowHeightSplit;

	var money_popcorn_9 = $('#money-popcorn-9').offset().top - windowHeightSplit;
	var popcorn_9 = $('#popcorn-9').offset().top - windowHeightSplit;

	var money_popcorn_10 = $('#money-popcorn-10').offset().top - windowHeightSplit;
	//var popcorn_10 = $('#popcorn-10').offset().top - windowHeightSplit;

	var money_popcorn_11 = $('#money-popcorn-11').offset().top - windowHeightSplit;
	var popcorn_11 = $('#popcorn-11').offset().top - windowHeightSplit;

	controller.addTween('#popcorn-1', TweenMax.fromTo($('#popcorn-1'), .6, {css:{transform: 'scale(0)'}}, {css:{transform: 'scale(1)'}, ease:Expo.easeOut}), scrollDuration, 100);
	controller.addTween('#money-popcorn-1', TweenMax.fromTo($('#money-popcorn-1'), .6, {css:{opacity: 1}}, {css:{opacity: 0}, ease:Expo.easeOut}), scrollDuration, 100);
	
	controller.addTween('#popcorn-2', TweenMax.fromTo($('#popcorn-2'), .6, {css:{transform: 'scale(0)'}}, {css:{transform: 'scale(2) rotate(45deg)'}, ease:Expo.easeOut}), scrollDuration, 100);
	controller.addTween('#money-popcorn-2', TweenMax.fromTo($('#money-popcorn-2'), .6, {css:{opacity: 1}}, {css:{opacity: 0}, ease:Expo.easeOut}), scrollDuration, 100);

	controller.addTween('#popcorn-3', TweenMax.fromTo($('#popcorn-3'), .6, {css:{transform: 'scale(0)'}}, {css:{transform: 'scale(2) rotate(10deg)'}, ease:Expo.easeOut}), scrollDuration);
	controller.addTween('#money-popcorn-3', TweenMax.fromTo($('#money-popcorn-3'), .6, {css:{opacity: 1}}, {css:{opacity: 0}, ease:Expo.easeOut}), scrollDuration);

	controller.addTween('#popcorn-4', TweenMax.fromTo($('#popcorn-4'), .6, {css:{transform: 'scale(0)'}}, {css:{transform: 'scale(1)'}, ease:Expo.easeOut}), scrollDuration);
	controller.addTween('#money-popcorn-4', TweenMax.fromTo($('#money-popcorn-4'), .6, {css:{opacity: 1}}, {css:{opacity: 0}, ease:Expo.easeOut}), scrollDuration);

	controller.addTween('#popcorn-5', TweenMax.fromTo($('#popcorn-5'), .6, {css:{transform: 'scale(0)'}}, {css:{transform: 'scale(2)'}, ease:Expo.easeOut}), 200, -150);
	controller.addTween('#money-popcorn-5', TweenMax.fromTo($('#money-popcorn-5'), .6, {css:{opacity: 1}}, {css:{opacity: 0}, ease:Expo.easeOut}), 200, -150);

	controller.addTween('#popcorn-6', TweenMax.fromTo($('#popcorn-6'), .6, {css:{transform: 'scale(0)'}}, {css:{transform: 'scale(2)'}, ease:Expo.easeOut}), scrollDuration, -50);
	controller.addTween('#money_popcorn-6', TweenMax.fromTo($('#money-popcorn-6'), .6, {css:{opacity: 1}}, {css:{opacity: 0}, ease:Expo.easeOut}), scrollDuration, -50);

	controller.addTween('#popcorn-7', TweenMax.fromTo($('#popcorn-7'), .6, {css:{transform: 'scale(0)'}}, {css:{transform: 'scale(1)'}, ease:Expo.easeOut}), scrollDuration, 0);
	controller.addTween('#money-popcorn-7', TweenMax.fromTo($('#money-popcorn-7'), .6, {css:{opacity: 1}}, {css:{opacity: 0}, ease:Expo.easeOut}), scrollDuration, 0);

	

	controller.addTween('#money-popcorn-8', TweenMax.fromTo($('#money-popcorn-8'), .6, {css:{opacity: 1}}, {css:{opacity: 0}, ease:Expo.easeOut}), scrollDuration, 0);
	controller.addTween('#popcorn-8', TweenMax.fromTo($('#popcorn-8'), .6, {css:{transform: 'scale(0)'}}, {css:{transform: 'scale(1)'}, ease:Expo.easeOut}), scrollDuration, 0);

	controller.addTween('#money-popcorn-9', TweenMax.fromTo($('#money-popcorn-9'), .6, {css:{opacity: 1}}, {css:{opacity: 0}, ease:Expo.easeOut}), scrollDuration, 0);
	controller.addTween('#popcorn-9', TweenMax.fromTo($('#popcorn-9'), .6, {css:{transform: 'scale(0)'}}, {css:{transform: 'scale(2) rotate(10deg)'}, ease:Expo.easeOut}), scrollDuration, 0);

	controller.addTween('#money-popcorn-10', TweenMax.fromTo($('#money-popcorn-10'), .6, {css:{opacity: 1}}, {css:{opacity: 0}, ease:Expo.easeOut}), scrollDuration, 0);

	controller.addTween('#money-popcorn-11', TweenMax.fromTo($('#money-popcorn-11'), .6, {css:{opacity: 1}}, {css:{opacity: 0}, ease:Expo.easeOut}), scrollDuration, 0);
	controller.addTween('#popcorn-11', TweenMax.fromTo($('#popcorn-11'), .6, {css:{transform: 'scale(0)'}}, {css:{transform: 'scale(1)'}, ease:Expo.easeOut}), scrollDuration, 0);
	

	var avslut_biljett = TweenMax.fromTo( $('#avslut-biljett'), 1, {css:{transform: 'scale(0)'}, immediateRender:true, ease:Quad.easeInOut}, {css:{ transform: 'scale(10) rotate(-110deg) translateX(100px)' }, ease:Quad.easeInOut}, scrollDuration);
	

	avslut_controller.pin($('#stor-biljett'), 4000, {
		anim: (new TimelineLite())
			.add(avslut_biljett)
	});


});
