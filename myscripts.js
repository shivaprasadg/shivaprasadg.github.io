
$(document).ready(function () {
    $('body').scrollspy({ target: ".navbar", offset: 20 });
});


// When the user scrolls down 100px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function () { scrollFunction() };
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("navbar").style.backgroundColor = "white";
        $('#navbar .nav-item, #navbar .navbar-brand').css('color', 'black', 'important');
        $('#navbar').css('box-shadow', '0 1px 6px 0 rgb(32 33 36 / 28%)', 'important');

    } else {
        document.getElementById("navbar").style.backgroundColor = "transparent";
        $('#navbar .nav-item, #navbar .navbar-brand').css('color', 'white', 'important');
        $('#navbar').css('box-shadow', 'none', 'important');

    }
}

// Particle .js

var count_particles, stats, update;
stats = new Stats;
stats.setMode(0);
stats.domElement.style.position = 'absolute';
stats.domElement.style.left = '0px';
stats.domElement.style.top = '0px';
document.body.appendChild(stats.domElement);
count_particles = document.querySelector('.js-count-particles');
update = function() {
    stats.begin();
    stats.end();
    if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
    count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
    }
    requestAnimationFrame(update);
};
requestAnimationFrame(update);
