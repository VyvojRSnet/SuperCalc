/**********************************************************************
 ** Module:      Category - Chemistry
 ** Author/Date: Slavoj SANTA Hruska / 20170123
 ** Objective:   Main Class for All Chemistry categories
 **********************************************************************
 ** Author/Date: Authors name, YYYYMMDD
 ** Changes:     Description of change (package interface changes only)
 **********************************************************************/

function TCatChem () {

    this.parent=null;
    this.name='Chémia';
    this.level=1;
    this.dir='';

    this.initialize = function(_parent,_dir) {
	this.parent=_parent;
        this.dir=_dir;
        app.logDebug(this.name+': Registering');
        app.categories.register(this);
        app.logDebug(this.name+': Initialised');

	app.categories.loadCategory('chem/general','TCatChemGeneral',this);
	app.categories.loadCategory('chem/organic','TCatChemOrganic',this);

	app.addCategoryToTopMenu(this);
    };

};
