function TCatChemOrganic () {

    this.parent=null;
    this.name='Organická';
    this.level=2;

    this.initialize = function(_parent) {
        this.parent=_parent;
        app.logDebug(this.parent.name+'->'+this.name+': Registering');
        app.categories.register(this);
        app.logInfo(this.parent.name+'->'+this.name+': Initialised');
    };
};
