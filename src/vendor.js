/* This file contains regeerences to the vendor libraries
we're using in this project. This is used bu webpack in the prod
build only. A seperate bundle of vendor code is useful since it's
unlikely to change. So basically this avoids customers having to 
download a huge JS file anytime a line of code is changed. They only 
have to download vendor.js when the vendor changes the library which should be 
less frequent.
Any files that are not referenced here will be bundled into main.js for the Prod
build.
*/

/* eslint-disable no-unused-vars */

import fetch from 'whatwg-fetch';