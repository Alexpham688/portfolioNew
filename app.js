$(document.body).ready(function() {

  // page loads back to top on refresh
  window.onbeforeunload = function () {
  window.scrollTo(0, 0);
  }

  //fade in text about section
  var texts = $('.texts');
  var textIndex = - 1;

  function showText() {
    ++textIndex;
    texts.eq(textIndex % texts.length)
    .fadeIn(1200)
    .delay(1000)
    .fadeOut(1200, showText);
    }
    showText();

	// toggle navigation
	$('#left').click(function() {
    $(this).toggleClass('rotate');
		$('.inner').toggleClass('open');
	});

  $('#right').on('click', function() {
    $(this).toggleClass('rotate-more');
    $('.inner').toggleClass('open');
  })

	// smooth scrolling
	$(function() {
		$('a[href*="#"]:not([href="#"])').click(function() {
			if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
				if (target.length) {
					setTimeout(function() {
						$('html, body').animate({
						  scrollTop: target.offset().top
					  }, 1000);
					}, 600);
					return false;
				}
			}
		});
	});

	var hi = $('.titanic'),
		header = $('header'),
		underline = $('.underline'),
		portfolioBox = $('.portfolio-sec'),
		project = $('.project'),
		navLink = $('.nav-link'),
		skillsBox = $('.skills-sec'),
		skills = $('.skill'),
		arrow = $('#arrow'),
		w = $(window),
		fz;

	portfolioBox.css({
		'marginBottom': $('footer').height()
	})

	TweenMax.from(hi, 5, {
		y: 140,
		opacity: 0,
		ease: Elastic.easeOut
	})

	$('.nav-link').click(function() {
		$('.inner').toggleClass('open');
	});
  //scroll to top on click
   $('#arrow').click(function(e) {
     $(this).toggleClass('rotate-360');
    $('html,body').animate({
    scrollTop: 0
  }, 700);
    e.preventDefault();
  });

	$('nav li')
		.mouseenter(function(e) {
			var underline = $(this).find('div.underline'),
					width = $(this).find('span').width();
			TweenMax.to(underline, .1, {
				width: width
			});
		})
		.mouseleave(function(e) {
			var underline = $(this).find('div.underline');
			TweenMax.to(underline, .1, {
				width: 0
			});
		})

	w.scroll(function(e) {
		var wScroll = $(this).scrollTop(),
			wHeight = $(this).height();
		if (wScroll >= (header.height() - hi.height()) / 2) {

		}
		if (wScroll < (header.height() - hi.height()) / 2) {

		}
	})

	w.resize(function() {
		portfolioBox.css({
			'marginBottom': $('footer').height()
		})
	})

	$('#portfolio').waypoint(function() {
		$('footer').css({
			'display': 'block'
		})
		TweenMax.staggerTo(project, .25, {
			'opacity': 1,
			x: 0
		}, .25)
	}, {
		offset: 300
	})



	portfolioBox.waypoint(function() {

  })

	skillsBox.waypoint(function() {
		skills.filter('.toR').css({
			'opacity': 1,
			'transform': 'translateX(0)'
		});
		skills.filter('.toL').css({
			'opacity': 1,
			'transform': 'translateX(0)'
		});
		skills.eq(1).css({
			'opacity': 1,
			'transform': 'translateY(0)'
		});
		skills.eq(4).css({
			'opacity': 1
		});
		skills.eq(7).css({
			'opacity': 1,
			'transform': 'translateY(0)'
		});
  })
});
