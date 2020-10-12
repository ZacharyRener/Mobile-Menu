const handleMobileMenu = () => {

    var icon = document.querySelector('button.hamburger');
    var mobileMenu = document.querySelector('.menu.mobile');

    icon?.addEventListener('click', function () {


        if (mobileMenu?.classList.contains('hidden')) {
            console.log('mobile menu contains hidden. showing menu');
            icon?.classList.add('is-active');
            mobileMenu?.classList.remove('hidden');
            mobileMenu?.classList.add('showing');
        } else if (mobileMenu?.classList.contains('showing')) {
            console.log('mobile menu contains showing. hiding menu');
            icon?.classList.remove('is-active');
            mobileMenu?.classList.remove('showing');
            mobileMenu?.classList.add('hidden');
        } else {
            console.log('mobile menu cotains neither. class list: ', mobileMenu?.classList);
        }


    });

    var menuItems = document.querySelectorAll('.menu.mobile .menu-item');
    for (var i = 0; i < menuItems.length; i++) {

        var menuItem = menuItems[i];
        menuItem.addEventListener('click', function () {
            console.log('mobile menu contains showing. hiding menu');
            icon?.classList.remove('is-active');
            mobileMenu?.classList.remove('showing');
            mobileMenu?.classList.add('hidden');
        })

    }

}

export default handleMobileMenu;