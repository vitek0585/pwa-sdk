function getRange(){
    var input = document.querySelector('#range');
    var value = document.querySelector('#value');
    value.innerHTML = input.value + '<span style="font-size: 15px;">$</span>';
}
function getRange2(){
    var input = document.querySelector('#range2');
    var value = document.querySelector('#value2');
    if(input.value > 1){
      value.innerHTML = input.value + ' ' + '<span style="font-size: 15px;">days</span>';
    }else{
      value.innerHTML = input.value + ' ' +'<span style="font-size: 15px;">day</span>';
    }
    
}
var expired = document.querySelector('#expired')
var tel = document.querySelector('#tel');
var card = document.querySelector('#creditcard');
if(tel != undefined){
  tel.addEventListener('focus', function(){
  if (typeof tel.selectionStart == "number") {
      tel.selectionStart = tel.selectionEnd = tel.value.length;
  } else if (typeof tel.createTextRange != "undefined") {           
      var range = tel.createTextRange();
      range.collapse(false);
      range.select();
  }
})
}
if(card != null){
  card.addEventListener('focus', function(){
  if (typeof card.selectionStart == "number") {
      card.selectionStart = card.selectionEnd = card.value.length;
  } else if (typeof card.createTextRange != "undefined") {           
      var range = card.createTextRange();
      range.collapse(false);
      range.select();
  }
})
}
if(expired != null){
  expired.addEventListener('focus', function(){
  if (typeof expired.selectionStart == "number") {
      expired.selectionStart = expired.selectionEnd = expired.value.length;
  } else if (typeof expired.createTextRange != "undefined") {           
      var range = expired.createTextRange();
      range.collapse(false);
      range.select();
  }
})
}

    var storage = window.localStorage;
    storage.setItem('open', 'none');
function cl(){
    window.location.href = 'form.html'
}
function playGame(){
  window.location.href = 'dragAndDrop/game.html'
}
function getVideo(){
  window.location.href = 'video/video.html'
}

 var form = document.querySelector('#form');
 if(form != null){
    form.addEventListener('submit', function (e) {
    // e.preventDefault()
  
    var inps = form.querySelectorAll("input, select")
    
    for (var q=0; q<inps.length; ++q) {
      if (inps[q].name && inps[q].form === this) {
      }
    }
  });
 }

function handleEvent(e) {
    console.log(e.type+':'+ e.loaded + 'bytes transferred--') ;
}
var xhrButtonSuccess = document.querySelector('.xhr.success');
 function addListeners(xhr) {
    xhr.addEventListener('loadstart', handleEvent);
    xhr.addEventListener('load', handleEvent);
    xhr.addEventListener('loadend', handleEvent);
    xhr.addEventListener('progress', handleEvent);
    xhr.addEventListener('error', handleEvent);
    xhr.addEventListener('abort', handleEvent);
}

function runXHR(url) {

    var xhr = new XMLHttpRequest();
    addListeners(xhr);
    xhr.open("GET", url);
    xhr.send();
    return xhr;  ы
}
if(xhrButtonSuccess != null){
  xhrButtonSuccess.addEventListener('click', function(){
    runXHR('https://media-exp1.licdn.com/dms/image/C560BAQFjct_FGXlhdQ/company-logo_200_200/0?e=2159024400&v=beta&t=UeRQo2eS_epcGTOrvuRIJPC1A_x3pj-VQu-K12fxfe4');
});
}


function alerrt(){
  window.alert("Hi")
}
var context =  document.querySelector('#alert');
if(context != null){
  context.addEventListener('contextmenu', function(e){
  e.preventDefault();
})
}

function confiirm(){
  window.confirm('Are you already 18 years old?')
}

function logIn(){
  var server = document.querySelector('#link').value;
  var key = document.querySelector('#key').value;
  console.log(key)
  var storage = window.sessionStorage;
  console.log(storage)
  storage.setItem('key', key.toString())
  storage.setItem('server', server.toString())
  window.location.href = 'prevform.html'
  // detectIEEdge();
}
// var brow = detectIEEdge();
// function detectIEEdge() {
//   var browser = null;
//     var ua = window.navigator.userAgent;
//     var msie = ua.indexOf('MSIE ');
//     if (msie > 0) {
//         // IE 10 or older => return version number
//         return browser = 'ie';
//     }
//     var trident = ua.indexOf('Trident/');
//     if (trident > 0) {
//         // IE 11 => return version number
//         var rv = ua.indexOf('rv:');
//         return browser = 'ie';
//     }
//     var edge = ua.indexOf('Edge/');
//     if (edge > 0) {
//         console.log( parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10)+'Edge')

//        // Edge => return version number
//        return browser = 'edge';
//     }
//     // other browser
//     return false;
// };



// Register service worker to control making site work offline

if('serviceWorker' in navigator) {
  navigator.serviceWorker
           .register('sw.js')
           .then(function() { console.log('Service Worker Registered'); });
}


// Code to handle install prompt on desktop

// let deferredPrompt;
// const addBtn = document.querySelector('.add-button');
// addBtn.style.display = 'none';

window.addEventListener('beforeinstallprompt', (e) => {
  // Prevent Chrome 67 and earlier from automatically showing the prompt
  e.preventDefault();
  // Stash the event so it can be triggered later.
  deferredPrompt = e;
  // Update UI to notify the user they can add to home screen
  addBtn.style.display = 'block';

  addBtn.addEventListener('click', (e) => {
    // hide our user interface that shows our A2HS button
    addBtn.style.display = 'none';
    // Show the prompt
    deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the A2HS prompt');
        } else {
          console.log('User dismissed the A2HS prompt');
        }
        deferredPrompt = null;
      });
  });
});