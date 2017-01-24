/**********************************************************************
 ** Module:      Category - Electronic
 ** Author/Date: Slavoj SANTA Hruska / 20170123
 ** Objective:   Main Class for All Electronic categories
 **********************************************************************
 ** Author/Date: Authors name, YYYYMMDD
 ** Changes:     Description of change (package interface changes only)
 **********************************************************************/

function TCatElectronic () {

    this.parent=null;
    this.name='Elektronika';
    this.level=1;

    this.initialize = function(_parent) {
	this.parent=_parent;
        app.logDebug(this.name+': Registering');
        app.categories.register(this);
        app.logDebug(this.name+': Initialised');

        app.variables.loadVariables('ele',this);

//	app.categories.loadCategory('ele/general','TCatEleGeneral',this);

	app.addCategoryToTopMenu(this);
    };

};
