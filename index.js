let navOpen = false;

function changeNavDisplay() {
    console.log('object')
    if (navOpen) {
        $('.maindiv').css("width" , "0%")
        $('ul').css("display", "none")
        $('.button_open').css("display", "inline-block")
        $('.button_close').css("display", "none")
        navOpen = false;
        
    } else {
        $('.maindiv').css("width", "100%")
        $('ul').css("display", "grid")
        $('li').css("display", "block")

        $('.button_close').css("display", "inline-block")
        $('.button_open').css("display", "none")
        navOpen = true;
    }
}