'use strict';

const BROWSER = "FireFox";

switch(BROWSER){
    case 'IE' :
        console.log('go away!');
        break;
    
    case 'Chrome' :
    case 'FireFox' :
        console.log('love you');
        break;
    
    default:
        console.log('same all');
        break;
}