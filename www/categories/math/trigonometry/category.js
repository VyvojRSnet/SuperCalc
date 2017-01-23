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

    this.initialize = function(_parent) {
        this.parent=_parent;
        app.logDebug(this.parent.name+'->'+this.name+': Registering');
        app.categories.register(this);
        app.logInfo(this.parent.name+'->'+this.name+': Initialised');
    };
};
