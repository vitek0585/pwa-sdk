var storage = window.sessionStorage;
var key = storage.getItem('key');
var server = storage.getItem('server')

var credoAppService = new credoappsdk.CredoAppService(server, key);
credoAppService.startEventTracking();

function collectData(){
    credoAppService.stopEventTracking();
    credoAppService.collectAsync("test-dataset-" + new Date().getTime()).then(function(res){
      console.log(res);
      getResult()
    }, function(e) {
    	console.log(e);
    });
}

