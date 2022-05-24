const checkSystemKeys = (key) => {
    if (key == 20 /* Caps lock */
    || key == 16 /* Shift */
    || key == 13 /* Enter */
    || key == 9 /* Tab */
    || key == 17 /* Control Key */
    || key == 91 /* Windows Command Key */
    || key == 19 /* Pause Break */
    || key == 18 /* Alt Key */
    || key == 93 /* Right Click Point Key */
    || ( key >= 35 && key <= 40 ) /* Home, End, Arrow Keys */
    || key == 45 /* Insert Key */
    || ( key >= 33 && key <= 34 ) /*Page Down, Page Up */
    || (key >= 112 && key <= 123) /* F1 - F12 */
    || (key >= 144 && key <= 145 )) { /* Num Lock, Scroll Lock */
       return false;
   }
   return true;
}

export default checkSystemKeys;