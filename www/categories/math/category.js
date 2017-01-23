function TCatMath () {

    this.parent=null;
    this.name='Matematika';
    this.level=1;

    this.initialize = function(_parent) {
	this.parent=_parent;
        app.logDebug(this.name+': Registering');
        app.categories.register(this);
        app.logDebug(this.name+': Initialised');

	app.categories.loadCategory('math/geometry','TCatMathGeometry',this);
	app.categories.loadCategory('math/trigonometry','TCatMathTrigonometry',this);
	app.categories.loadCategory('math/goniometry','TCatMathGoniometry',this);

	app.addCategoryToTopMenu(this);
    };

};
