/**********************************************************************
 ** Module:      Formulas Core
 ** Author/Date: Slavoj SANTA Hruska / 20170123
 ** Objective:   Main Class for Formulas management
 **********************************************************************
 ** Author/Date: Authors name, YYYYMMDD
 ** Changes:     Description of change (package interface changes only)
 **********************************************************************/

function TFormulas () {
    var FormulaList = new Array();

    this.initialize = function() {
	app.logInfo('Formulas: '+'loaded');

// Load known Formulas
//	this.loadFormula('math','TCatMath',null);
//	this.loadFormula('chem','TCatChem',null);

    };

    this.loadFormula = function (dir, className,_parent){
	app.loadJs(
	    'formulas/'+dir+'/formula.js',
	    function (){
		app.logDebug('Loaded script '+dir+' with Class '+className);
		eval('var _tmp_formula=new '+className+'();');
		_tmp_formula.initialize(_parent);
		FormulaList[className]=_tmp_formula;
	    }
	);
    };


    this.getFormulaList = function () {
	return FormulaList;
    };

    this.register = function(formula) {
    };
};
