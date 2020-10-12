# Mobile Menu Boilerplate

1. Add mobile-nav.php to template-parts, import it in header.php
2. Add _mobileMenu.ts to scripts, and import it in common.js
3. Add mobileMenu.scss to styles, and import it in main.scss
4. Edit mobileMenu.scss, change color variables as needed

```sh
<?php get_template_part('template-parts/mobile-nav'); ?>
import handleMobileMenu from "./../_mobileMenu";
@import "./mobileMenu.scss";
```

