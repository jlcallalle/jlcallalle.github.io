// Main

var MyApp = {

    onlyNumbers : function() {
        $('.only-numbers').on('keypress', function(event) {
            var numbers = /[0-9]/g;
            var key = String.fromCharCode(event.which);
            if ($.inArray(event.keyCode) >= 0 || numbers.test(key)) {
                return true;
            }
            return false;
        });
    },
    onlyLetters : function () {
        $('.only-letters').on('keypress', function(event) {
            var englishAlphabetAndWhiteSpace = /[A-Za-z- ]/g;
            var arr_latin_character = [8,37,39,193,225,200,232,205,237,211,243,218,250,209,241];
            var key = String.fromCharCode(event.which);
            if ($.inArray(event.keyCode, arr_latin_character) >= 0 || englishAlphabetAndWhiteSpace.test(key)) {
                return true;
            }
            return false;
        });
    },
}

$(function () {
    console.log('helo world');

    if ($('.only-numbers').length) {
        MyApp.onlyNumbers();
    }

    if ($('.only-letters').length) {
        MyApp.onlyLetters();
    }

});



(function() {
  $('.skills-prog li').find('.skills-bar').each(function(i) {
    $(this).find('.bar').delay(i * 150).animate({
      width: $(this).parents().attr('data-percent') + '%'
    }, 1000, 'linear', function() {
      return $(this).css({
        'transition-duration': '.5s'
      });
    });
  });

  $('.skills-soft li').find('svg').each(function(i) {
    var c, cbar, circle, percent, r;
    circle = $(this).children('.cbar');
    r = circle.attr('r');
    c = Math.PI * (r * 2);
    percent = $(this).parent().data('percent');
    cbar = ((100 - percent) / 100) * c;
    circle.css({
      'stroke-dashoffset': c,
      'stroke-dasharray': c
    });
    circle.delay(i * 150).animate({
      strokeDashoffset: cbar
    }, 1000, 'linear', function() {
      return circle.css({
        'transition-duration': '.3s'
      });
    });
    $(this).siblings('small').prop('Counter', 0).delay(i * 150).animate({
      Counter: percent
    }, {
      duration: 1000,
      step: function(now) {
        return $(this).text(Math.ceil(now) + '%');
      }
    });
  });

}).call(this);



