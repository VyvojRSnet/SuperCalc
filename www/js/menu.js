/**********************************************************************
 ** Module:      Menu
 ** Author/Date: Slavoj SANTA Hruska / 20170123
 ** Objective:   Main Class for Category and Formula Menu management
 **********************************************************************
 ** Author/Date: Authors name, YYYYMMDD
 ** Changes:     Description of change (package interface changes only)
 **********************************************************************/


var angleStart = -360;

// jquery rotate animation
function rotate(li,d) {
    $({d:angleStart}).animate({d:d}, {
        step: function(now) {
            $(li)
               .css({ transform: 'rotate('+now+'deg)' })
               .find('label')
                  .css({ transform: 'rotate('+(-now)+'deg)' });
        }, duration: 0
    });
}

// show / hide the options
function toggleOptions(s) {
    $(s).toggleClass('open');
    var li = $(s).find('li');
    var deg = $(s).hasClass('half') ? 180/(li.length-1) : 360/li.length;
    for(var i=0; i<li.length; i++) {
        var d = $(s).hasClass('half') ? (i*deg)-90 : i*deg;
        $(s).hasClass('open') ? rotate(li[i],d) : rotate(li[i],angleStart);
    }
}

$('.menu_selector button').click(function(e) {
    toggleOptions($(this).parent());
});


function TMainMenu () {
    this.initialize = function() {
    };

    this.show = function() {
    };

    this.hide = function() {
	$("#app_content").html('');
    };
};


