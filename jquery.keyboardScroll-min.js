(function(a){a.fn.keyboardScroll=function(b){function d(b,c){a("html,body").animate({scrollTop:b},c)}function e(b,c){var e=a(window).height()/2-b.height()/2;var f=b.offset().top-e;d(f,c)}function f(){var b=a(window).scrollTop();var c=b+a(window).height();var d=a(this).offset().top;var e=d+a(this).height();var f=Math.floor((b+c)/2-a(this).height()/2);var g=Math.ceil((b+c)/2+a(this).height()/2);if(e>=f&&d<g)return true;else return false}var c={downKeyCode:74,upKeyCode:75,scrollDuration:100};a.extend(c,b);a(document).keydown(function(b){var d=c.downKeyCode;var g=c.upKeyCode;var h=this;var i=h.filter(f).first();if((b.keyCode===d||b.keyCode===g)&&i.length){var j=a(window).scrollTop();var k=j+a(window).height();var l=i.offset().top;var m=Math.floor((j+k)/2-i.height()/2);var n;var o=5;if(b.keyCode===d){if(l>m+o){n=i;e(n,c.scrollDuration)}else if(!i.is(h.last())){n=i.next(h);e(n,c.scrollDuration)}}else if(b.keyCode===g){if(l<m-o){n=i;e(n,c.scrollDuration)}else if(!i.is(h.first())){n=i.prev(h);e(n,c.scrollDuration)}}}else if(b.keyCode===d&&h.first().length){e(h.first(),c.scrollDuration)}else if(b.keyCode===g&&h.last().length){e(h.last(),c.scrollDuration)}})}})(jQuery)
