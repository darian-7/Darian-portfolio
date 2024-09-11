
(function($) {

    // Variables for various page elements
    var $window = $(window),
        $body = $('body'),
        $wrapper = $('#wrapper'),
        $header = $('#header'),
        $nav = $('#nav'),
        $main = $('#main'),
        $navPanelToggle, $navPanel, $navPanelInner;

    // Breakpoints.
    breakpoints({
        default:   ['1681px',   null       ],
        xlarge:    ['1281px',   '1680px'   ],
        large:     ['981px',    '1280px'   ],
        medium:    ['737px',    '980px'    ],
        small:     ['481px',    '736px'    ],
        xsmall:    ['361px',    '480px'    ],
        xxsmall:   [null,       '360px'    ]
    });

    // ... (rest of the existing code) ...

    // Play initial animations on page load.
    $window.on('load', function() {
        window.setTimeout(function() {
            $body.removeClass('is-preload');
        }, 100);
    });

    // ... (rest of the existing code) ...

    // Intro.
    var $intro = $('#intro');

    if ($intro.length > 0) {

        // Hack: Fix flex min-height on IE.
        if (browser.name == 'ie') {
            $window.on('resize.ie-intro-fix', function() {

                var h = $intro.height();

                if (h > $window.height())
                    $intro.css('height', 'auto');
                else
                    $intro.css('height', h);

            }).trigger('resize.ie-intro-fix');
        }

        // Hide intro on scroll (> small).
        breakpoints.on('>small', function() {

            $main.unscrollex();

            $main.scrollex({
                mode: 'bottom',
                top: '25vh',
                bottom: '-50vh',
                enter: function() {
                    $intro.addClass('hidden');
                },
                leave: function() {
                    $intro.removeClass('hidden');
                }
            });

        });

        // Hide intro on scroll (<= small).
        breakpoints.on('<=small', function() {

            $main.unscrollex();

            $main.scrollex({
                mode: 'middle',
                top: '15vh',
                bottom: '-15vh',
                enter: function() {
                    $intro.addClass('hidden');
                },
                leave: function() {
                    $intro.removeClass('hidden');
                }
            });

        });

    }

    // Document ready.
    $(function() {

		// Tab functionality.
		var tabs = $('#nav .links a');
		var projects = $('#main article');
	
		tabs.on('click', function(e) {
			var category = $(this).attr('href').replace('#', '');
	
			// Check if the 'ALL' tab is clicked, if so show all projects.
			if (category === 'all') {
				// If you want to force a full page reload from the server, uncomment the following line:
				// window.location.href = window.location.pathname + '?upd=' + new Date().getTime();
				// return; // Exit the function early after forcing a full page reload
	
				// Manually show all projects
				projects.show();
	
				// Update active tab styling
				tabs.parent().removeClass('active');
				$(this).parent().addClass('active');
	
				e.preventDefault();
				return; // Exit the function early after showing all projects
			}
	
			// Continue with existing code to filter projects for other categories
			// ... (rest of the existing filtering code) ...
	
			// Filter projects for other categories
			projects.each(function() {
				if ($(this).data('category') === category) {
					$(this).show();
				} else {
					$(this).hide();
				}
			});
	
			// Update active tab styling
			tabs.parent().removeClass('active');
			$(this).parent().addClass('active');
		});
	});

})(jQuery);
