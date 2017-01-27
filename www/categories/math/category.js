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
    this.dir='';
    this.base='math';

    this.initialize = function(_parent,_dir) {
	this.parent=_parent;
	this.dir=_dir;
        app.logDebug(this.name+': Registering');
        app.categories.register(this);
        app.logDebug(this.name+': Initialised');

	app.variables.loadVariables(this.base,this);

	app.categories.loadCategory(this.base+'/geometry','TCatMathGeometry',this);
	app.categories.loadCategory(this.base+'/trigonometry','TCatMathTrigonometry',this);
	app.categories.loadCategory(this.base+'/goniometry','TCatMathGoniometry',this);

	app.addCategoryToTopMenu(this);
    };

};
