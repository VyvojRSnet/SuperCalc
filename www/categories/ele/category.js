function TCatChem () {

    this.parent=null;
    this.name='Elektronika';
    this.level=1;

    this.initialize = function(_parent) {
	this.parent=_parent;
        app.logDebug(this.name+': Registering');
        app.categories.register(this);
        app.logDebug(this.name+': Initialised');

//	app.categories.loadCategory('chem/general','TCatChemGeneral',this);

	app.addCategoryToTopMenu(this);
    };

};
