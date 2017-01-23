/**********************************************************************
 ** Module:      Application Core
 ** Author/Date: Slavoj SANTA Hruska / 20170123
 ** Objective:   Main Application Class
 **********************************************************************
 ** Author/Date: Authors name, YYYYMMDD
 ** Changes:     Description of change (package interface changes only)
 **********************************************************************/


var app = {
    // Application Constructor
    categories :  null,
    formulas : null,
    _debug : false,

    initialize: function() {
        this.logInfo('Boot: APP booted');

        this.logInfo( "Categories: INIT!" );
        this.categories = new TCategories();
	this.categories.initialize();
	this.logInfo( "Categories: DONE!" );

        this.logInfo( "Formulas: INIT!" );
        this.formulas = new TFormulas();
	this.formulas.initialize();
	this.logInfo( "Formulas: DONE!" );

	this.mainMenu = new TMainMenu();

        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('load', this.onLoad, false);
        document.addEventListener('deviceready', this.onDeviceReady, false);
        document.addEventListener('offline', this.onOffline, false);
        document.addEventListener('online', this.onOnline, false);
    },

    onLoad: function() {
        app.receivedEvent('app loaded');
    },
    onDeviceReady: function() {
        app.receivedEvent('device ready');
    },
    onOffline: function() {
        app.receivedEvent('Offline');
    },
    onOnline: function() {
        app.receivedEvent('Online');
    },

    receivedEvent: function(id) {
        console.log('Received Event: ' + id);
    },


    logErr: function(msg) {
        console.log('Err: ' + msg);
    },
    logWarn: function(msg) {
        console.log('Warn: ' + msg);
    },
    logInfo: function(msg) {
        console.log('Info: ' + msg);
    },
    logDebug: function(msg) {
	if (this._debug){
    	    console.log('Debug: ' + msg);
	}
    },


    loadJs: function(script, fn) {
// 	$("head").append('<script type="text/javascript" src="' + script + '"></script>');
	$.getScript( script, fn );
    },

    addCategoryToTopMenu: function (whom){
    }
};


$( document ).ready(function() {
    app.initialize();
});
