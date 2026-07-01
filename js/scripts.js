/*!
* Start Bootstrap - Freelancer v7.0.7 (https://startbootstrap.com/theme/freelancer)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // --- Stabilisasi mobile: fix "100vh" agar tidak loncat saat address bar
    // browser mobile muncul/hilang. Sets --vh yang bisa dipakai CSS bila perlu.
    const setViewportHeightVar = () => {
        document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
    };
    setViewportHeightVar();
    window.addEventListener('resize', setViewportHeightVar, { passive: true });
    window.addEventListener('orientationchange', setViewportHeightVar, { passive: true });

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled.
    // requestAnimationFrame throttling supaya scroll tetap mulus di HP
    // (mencegah efek blur navbar dipicu berkali-kali per frame).
    let navbarTicking = false;
    document.addEventListener('scroll', () => {
        if (!navbarTicking) {
            window.requestAnimationFrame(() => {
                navbarShrink();
                navbarTicking = false;
            });
            navbarTicking = true;
        }
    }, { passive: true });

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});