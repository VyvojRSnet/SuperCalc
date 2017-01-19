var app = {
    // Application Constructor
    initialize: function() {
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
    }
};

app.initialize();