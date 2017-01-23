function TCatTemplate () {

    this.parent=null;
    this.name='_Template';
    this.level=1;

    this.initialize = function(_parent) {
	this.parent=_parent;
        app.logDebug(this.name+': Registering');
        app.categories.register(this);
        app.logDebug(this.name+': Initialised');

//	app.categories.loadCategory('_template/tmp','TCatTemplateTmp',this);

	app.addCategoryToTopMenu(this);
    };

};
