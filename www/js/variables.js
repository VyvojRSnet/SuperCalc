/**********************************************************************
 ** Module:      Global variables registry
 ** Author/Date: Slavoj SANTA Hruska / 20170125
 ** Objective:   
 **********************************************************************
 ** Author/Date: Authors name, YYYYMMDD
 ** Changes:     Description of change (package interface changes only)
 **********************************************************************/

function TVariable (s,d,l,f,u) {
    this.Symbol = s;		// ω
    this.Description = d;	// Uhlová rýchlosť
    this.LongDescription = l;	// Uhlová rýchlosť je fyzikálna veličina opisujúca otáčavý pohyb telesa. Jednotkou uhlovej rýchlosti je radián za sekundu (radián je pritom bezrozmerná jednotka, uhlová rýchlosť má teda vlastne rovnaký rozmer ako napríklad frekvencia). 
    this.FieldClass = f;	// TCatMath
    this.ClassName = f.name;	// "TCatMath"
    this.Units =u;		// rad*s^-1
}

function TVariables () {
    var VariableList = new Array();

    this.initialize = function() {
        app.logInfo('Variables: '+'loaded');
    };

    this.use = function (Variable){
	var result = Variables.filter(function( obj ) {
	    return ((obj.Symbol == Variable.Symbol)&&(obj.Descrioption == Variable.Description)&&(obj.Field == Variable.Description));
	});
	if (result.length==0) {
    	    alert('Premenna '+Variable.Symbol+' z odboru '+Variable.Field+' nie je ešte registrovaná');
	}
    },

    this.register = function (Variable){
//	var v = app.variables.getVariableList();
	var result = app.variables.getVariableList().filter(function( obj ) {
	    return ((obj.Symbol == Variable.Symbol)&&(obj.Descrioption == Variable.Description)&&(obj.Field == Variable.Description));
	});
	if (result.length==0) {
    	    app.logDebug('Premenna '+Variable.Symbol+' z kategorie '+Variable.ClassName+' bola registrovaná');
    	    VariableList.push(Variable);
	}
    };


    this.loadVariables = function (modulePath,moduleClass){
        app.loadJs(
            'categories/'+modulePath+'/variables.js',
            function (){
                app.logInfo('Loaded variables for module "'+modulePath+'" with Class '+moduleClass.constructor.name);
            }
        );
    };

    this.getVariableList = function () {
        return VariableList;
    };

};
