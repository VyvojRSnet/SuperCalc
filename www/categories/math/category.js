/**********************************************************************
 ** Module:      Category - Math
 ** Author/Date: Slavoj SANTA Hruska / 20170123
 ** Objective:   Main Class for All Math categories
 **********************************************************************
 ** Author/Date: Authors name, YYYYMMDD
 ** Changes:     Description of change (package interface changes only)
 **********************************************************************/

function TCatMath () {

    this.parent=null;
    this.name='Matematika';
    this.level=1;

    this.initialize = function(_parent) {
	this.parent=_parent;
        app.logDebug(this.name+': Registering');
        app.categories.register(this);
        app.logDebug(this.name+': Initialised');

	app.variables.loadVariables('math',this);

	app.categories.loadCategory('math/geometry','TCatMathGeometry',this);
	app.categories.loadCategory('math/trigonometry','TCatMathTrigonometry',this);
	app.categories.loadCategory('math/goniometry','TCatMathGoniometry',this);

	app.addCategoryToTopMenu(this);
    };

};
