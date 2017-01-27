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
               .find('span')
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


function TCategoryMenu () {
    this.whereWeAre=null;
    this.pocet=0;
    this.pocitadlo=0;

    this.initialize = function() {
    };

    this.addChoice = function(category) {
	var add=false;
	if ((category.parent==null)&&(whereWeAre==null)){
	    add=true;
	}
	if ((category.parent!=null)&&(whereWeAre!=null)){
	    if ((category.parent.constructor.name)==(whereWeAre.constructor.name)){
		add=true;
	    }
	}
	if (add)
	{
	    pocitadlo++;
 	    $('#zoznam_kategorii').append("<li><input id='c"+pocitadlo+"' type='checkbox'><span id='sC_"+pocitadlo+"' onclick='app.categoryMenu.onCategoryClick(\""+category.constructor.name+"\")'>"+category.name+"</span></li>");
	}
    };

    this.renderCategorySelector = function (parent,addChoices){
	whereWeAre=parent;
	pocitadlo=0;
	name='Vyberte si kategóriu';
	if (parent!=null){
	    name=parent.name;
	}
	$('#app_content').append("<div class='menu_selector' id='category_menu_selector'><ul id='zoznam_kategorii'></ul><button id='category_menu_btn'>"+name+"</button></div>");
	if (parent!=null){
	    name='Kategórie';
	    target='null';
	    if(parent.parent!=null){
		name=parent.parent.name;
		target=parent.parent.constructor.name;
	    }
	    $('#app_content').append("<div class=\"menu_selector_bottomleft\" onclick=\"app.categoryMenu.onCategoryClick('"+target+
	    "')\"><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class='glyphicon glyphicon-arrow-left'></span>"+
	    "<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+name+"</div>");
	}
	$('#category_menu_btn').click(function(e) {
	    toggleOptions($('#category_menu_selector'));
	});
	if (addChoices){
/*
	    var candidates = app.categories.getCategoryList().filter(function( obj ) {
        	return (jQuery.type(obj.parent)===jQuery.type(whereWeAre));
    	    });
*/
	    var candidates = app.categories.getCategoryList();
	    for (var i in candidates) {
		this.addChoice(candidates[i]);
	    }
	    setTimeout(function() 
	    {
		toggleOptions($('#category_menu_selector'));
	    },300);
	}
    };

    this.onCategoryClick = function (cat){
	app.logInfo('Selected category: '+cat);
	var candidates = app.categories.getCategoryList();
	var category=candidates[cat];
/*
	if (category==null){
	    app.logError('Nenasla sa kategoria!');
	    return;
	}
*/
	$('#app_content').fadeOut(500,function() {
            $('#myNavbar').collapse("hide");
            $('#app_content').empty();
	    app.categoryMenu.renderCategorySelector(category,true);
	    $('#app_content').fadeIn(500,function() 
	    {
//		toggleOptions($('#category_menu_selector'));
	    });
	});
    }
};


