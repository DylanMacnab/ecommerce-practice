// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());


// Plugins and Library Quick Code
// ---------------------------------------------------
// ---------------------------------------------------

window.sr = ScrollReveal({
  reset: true,
  duration: 600,
  delay: 200
});


sr.reveal('.tout-container .tout');
sr.reveal('.js-scrollReveal');
sr.reveal('.js-sr-delay', { reset: true, origin: "bottom", duration: 600, delay: 600, useDelay: "onload", distance: "100px", easing: "ease-in-out" });
