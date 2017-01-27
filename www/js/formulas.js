/**********************************************************************
 ** Module:      Global Formulas registry
 ** Author/Date: Slavoj SANTA Hruska / 20170125
 ** Objective:   
 **********************************************************************
 ** Author/Date: Authors name, YYYYMMDD
 ** Changes:     Description of change (package interface changes only)
 **********************************************************************/

function TFormula (s,d,l,f,u) {
    this.Symbol = s;		// ω
    this.Description = d;	// Uhlová rýchlosť
    this.LongDescription = l;	// Uhlová rýchlosť je fyzikálna veličina opisujúca otáčavý pohyb telesa. Jednotkou uhlovej rýchlosti je radián za sekundu (radián je pritom bezrozmerná jednotka, uhlová rýchlosť má teda vlastne rovnaký rozmer ako napríklad frekvencia). 
    this.FieldClass = f;	// TCatMath
    this.ClassName = f.name;	// "TCatMath"
    this.Units =u;		// rad*s^-1
}

function TFormulas () {
    var FormulaList = new Array();

    this.initialize = function() {
        app.logInfo('Formulas: '+'loaded');
    };

    this.use = function (Formula){
	var result = Formulas.filter(function( obj ) {
	    return ((obj.Symbol == Formula.Symbol)&&(obj.Descrioption == Formula.Description)&&(obj.Field == Formula.Description));
	});
	if (result.length==0) {
    	    alert('Premenna '+Formula.Symbol+' z odboru '+Formula.Field+' nie je ešte registrovaná');
	}
    },

    this.register = function (Formula){
//	var v = app.Formulas.getFormulaList();
	var result = app.Formulas.getFormulaList().filter(function( obj ) {
	    return ((obj.Symbol == Formula.Symbol)&&(obj.Descrioption == Formula.Description)&&(obj.Field == Formula.Description));
	});
	if (result.length==0) {
    	    app.logDebug('Premenna '+Formula.Symbol+' z kategorie '+Formula.ClassName+' bola registrovaná');
    	    FormulaList.push(Formula);
	}
    };


    this.loadFormulas = function (modulePath,moduleClass){
        app.loadJs(
            'categories/'+modulePath+'/Formulas.js',
            function (){
                app.logInfo('Loaded Formulas for module "'+modulePath+'" with Class '+moduleClass.constructor.name);
            }
        );
    };

    this.getFormulaList = function () {
        return FormulaList;
    };

};
