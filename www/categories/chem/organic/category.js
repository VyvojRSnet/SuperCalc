function TCatChemOrganic () {

    this.parent=null;
    this.name='Organická';
    this.level=2;
    this.dir='';

    this.initialize = function(_parent,_dir) {
        this.parent=_parent;
        this.dir=_dir;
        app.logDebug(this.parent.name+'->'+this.name+': Registering');
        app.categories.register(this);
        app.logInfo(this.parent.name+'->'+this.name+': Initialised');
    };
};
