/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
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
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
        $( "button" ).click(function() {
          alert( "Handler for .click() called." );
        });
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
    // ContinuarEvent: function(next) {
    //     var content = document.getElementById("Content");
    //    $( "#result" ).load( "./" +  next);
    // }
};
      //  function Load(url)
      //  {
      //    var parent = document.getElementById('Content');
      //     var xhr = new XMLHttpRequest();
      //     xhr.onreadystatechange = function() {
      //       if (xhr.readyState == 4 && xhr.status == 200) {
      //         parent.innerHTML = xhr.responseText;
      //         if(url=='./bienbenida.html'){
      //              $( "div" ).delay( 800 ).show( "easeInOutCubic", 2000, function() {           
      //                 $( "img" ).delay( 800 ).show( "fold", 1000, function() {
      //                       $( "button" ).show( "fade", 1000 );
      //                 });

      //             });
      //         }

      //         if(url=='./acuerdos.html' || url=='./accesotirerra.html' || url=='./pilares.html'){
      //             $( "img" ).delay( 800 ).show( "fold", 1000, function() {
      //                       $( "button" ).show( "fade", 1000 );
      //             });
      //             $( "h1" ).delay( 800 ).show("fold", 1000);
      //         }
      //         if(url=='./rutaAprendizaje.html'){
      //              $( "h1" ).delay( 200 ).slideDown( "fast", function() {           
      //                  $( "img" ).show( "drop", 1000);
      //                  $( "h2" ).show( "drop", 1000, function() {
      //                       $( ".speech-bocadillo" ).show( "blind", 1000 ,function() {
      //                           $( "button" ).show( "fade", 1000)
      //                       });
      //                   });
      //              });
      //         }
      //         if(url=='./politica.html' || url=='./accesotirerra.html'){
      //              $( "h1" ).delay( 200 ).slideDown( "fast", function() {           
      //                  $( "img" ).show( "drop", 1000);
      //                  $( "h2" ).show( "drop", 1000, function() {
      //                       $( ".circle-main" ).show( "fold", 1000);
      //                   });
      //              });
      //         }


      //         if(url=='./introducion.html' || url=='./vision.html' || url=='./vision1.html'){
      //           $( "img" ).delay( 200 ).slideDown( "fast", function() {           
      //              $( ".circle-main" ).show( "drop", 1000);
      //                  $( ".speech-bubble" ).show( "fold", 1000);
      //           });
      //         }
      //       }
      //     }
      //     xhr.open("GET", url, true);
      //     xhr.setRequestHeader('Content-Type', 'text/html');
      //     xhr.send();
      // }
      // $( document ).ready(function() {
      //         $( "img" ).show( "fold", 2000, function() {
      //               $( "button" ).show( "fade", 1000 );
      //         });
      // });
