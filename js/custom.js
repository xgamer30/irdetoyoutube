$(document).ready(function() {
    var activeSlide = $('#slider div.item').hide().first().show();
    var transitionTime = 1000;
    var pauseTime = 10000;
    var timeout = setTimeout(function() { showNext(); }, pauseTime);

    function showNext() {
        var next = activeSlide.next();
        if (next.length == 0) next = $('#slider div.item').first();
        clearTimeout(timeout);

        next.css('position', 'absolute').css('z-index', 2).fadeIn(transitionTime);
        activeSlide.css('position', 'relative').css('z-index', 1).fadeOut(transitionTime, function() {
            activeSlide = next;
            activeSlide.css('position', 'relative');
            timeout = setTimeout(function() { showNext(); }, pauseTime);
        });
        return false;
    }

    function showPrev() {
        var next = activeSlide.prev();
        if (next.length == 0) next = $('#slider div.item').last();
        clearTimeout(timeout);

        next.css('position', 'absolute').css('z-index', 2).fadeIn(transitionTime);
        activeSlide.css('position', 'relative').css('z-index', 1).fadeOut(transitionTime, function() {
            activeSlide = next;
            activeSlide.css('position', 'relative');
            timeout = setTimeout(function() { showNext(); }, pauseTime);
        });
        return false;
    }

    $('#slider .right').on('click', showNext);
    $('#slider .left').on('click', showPrev);
});