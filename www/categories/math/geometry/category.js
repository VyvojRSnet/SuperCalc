/**********************************************************************
 ** Module:      Category - Geomerty
 ** Author/Date: Slavoj SANTA Hruska / 20170123
 ** Objective:   Main Class for Geometry category
 **********************************************************************
 ** Author/Date: Authors name, YYYYMMDD
 ** Changes:     Description of change (package interface changes only)
 **********************************************************************/

function TCatMathGeometry () {

    this.parent=null;
    this.name='Geometria';
    this.level=2;

    this.initialize = function(_parent) {
        this.parent=_parent;
        app.logDebug(this.parent.name+'->'+this.name+': Registering');
        app.categories.register(this);
        app.logDebug(this.parent.name+'->'+this.name+': Initialised');
    };
};
