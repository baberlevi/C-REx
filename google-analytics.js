(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
 (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();
 a=s.createElement(o), m=s.getElementsByTagName(o)[0];
 a.async=1;
 a.src=g;m.parentNode.insertBefore(a,m)
 })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-121036685-1', 'auto');
ga('send', 'pageview');

$(document).on('click', 'button', function() {
	    ga('send', 'event', 'button', 'submitexam1');
	      });
$(document).on('click', 'button', function() {
	            ga('send', 'event', 'button', 'submitexam2');
		                  })
$(document).on('click', 'button', function() {
	            ga('send', 'event', 'button', 'submit1');
		                  });
$(document).on('click', 'button', function() {
	                    ga('send', 'event', 'button', 'submit2');
			                                      })
