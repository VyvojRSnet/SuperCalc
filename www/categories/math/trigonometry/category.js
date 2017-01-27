/**********************************************************************
 ** Module:      Category - Trigonometry
 ** Author/Date: Slavoj SANTA Hruska / 20170123
 ** Objective:   Main Class for Trigonometry category
 **********************************************************************
 ** Author/Date: Authors name, YYYYMMDD
 ** Changes:     Description of change (package interface changes only)
 **********************************************************************/

function TCatMathTrigonometry () {

    this.parent=null;
    this.name='Trigonometria';
    this.level=2;
    this.dir='';

    this.initialize = function(_parent,_dir) {
        this.parent=_parent;
        this.dir=_dir;
        app.logDebug(this.parent.name+'->'+this.name+': Registering');
        app.categories.register(this);
        app.logDebug(this.parent.name+'->'+this.name+': Initialised');
    };
};
