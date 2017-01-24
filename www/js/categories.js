/**********************************************************************
 ** Module:      Category Core
 ** Author/Date: Slavoj SANTA Hruska / 20170123
 ** Objective:   Main Class for Categories management
 **********************************************************************
 ** Author/Date: Authors name, YYYYMMDD
 ** Changes:     Description of change (package interface changes only)
 **********************************************************************/

function TCategories () {
    var CategoryList = new Array();

    this.initialize = function() {
	app.logInfo('Categories: '+'loaded');

// Load known categories
	this.loadCategory('math','TCatMath',null);
	this.loadCategory('chem','TCatChem',null);
	this.loadCategory('ele','TCatElectronic',null);

    };

    this.loadCategory = function (dir, className,_parent){
	app.loadJs(
	    'categories/'+dir+'/category.js',
	    function (){
		app.logDebug('Loaded script '+dir+' with Class '+className);
		eval('var _tmp_cat=new '+className+'();');
		_tmp_cat.initialize(_parent);
		CategoryList[className]=_tmp_cat;
	    }
	);
    };


    this.getCategoryList = function () {
	return CategoryList;
    };

    this.register = function(category) {
	app.categoryMenu.addChoice(category);
    };
};
