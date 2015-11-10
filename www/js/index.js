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
/*var app = {
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
};*/
       function Load(url)
       {
         var parent = document.getElementById('Content');
          var xhr = new XMLHttpRequest();
          xhr.onreadystatechange = function() {
            if (xhr.readyState == 4 && xhr.status == 200) {
              parent.innerHTML = xhr.responseText;
              if(url=='./bienbenida.html'){
                   $( ".circle-main" ).delay( 800 ).show( "fade", 500, function() {           
                         $("img")
                            .delay( 200 )
                            .animate({"left": 0 },1000,"easeOutBounce")
                         $(".speech-bubble")
                            .delay( 1200 )
                            .animate({"top": "23vh" },1000,"easeOutBounce");
                        $("button")
                            .delay( 200 )
                            .animate({"top": "78vh"},1000); 
                  });
              }

              if(url=='./acuerdos.html' || url=='./accesotirerra.html' || url=='./pilares.html'){
                  $( "img" ).delay( 800 ).animate({"top": 0 },1000,"easeOutBounce", function() {
                            $( "button" ).delay( 2200 ).animate({"top": 0 },1000,"easeOutBounce" );
                  });
                  $( "h1" ).delay( 800 ).animate({"top": 0 },1000,"easeOutBounce");
              }
              if(url=='./rutaAprendizaje.html'){
                   $( "h1" ).delay( 200 ).animate({"left": 0 },1000,"easeOutBounce", function() {           
                       $( "img" ).animate({"right": 0 },1000,"easeOutBounce");
                       $( "h2" ).animate({"right": 0 },1000,"easeOutBounce", function() {
                            $( ".speech-bocadillo" ).animate({"left": 0 },1000,"easeOutBounce",function() {
                                $( "button" ).animate({"top": 0 },1000,"easeOutBounce")
                            });
                        });
                   });
              }
              if(url=='./accesotirerra.html'){
                   $( ".Contenido" ).delay( 200 ).animate({"top": 0 },1000,"easeOutBounce", function() {           
                       $( "img" ).animate({"top": 0 },1000,"easeOutBounce", function() {
                            $( ".circle-main" ).animate({"top": 0 },1000,"easeOutBounce");
                        });
                   });
              }
              if( url=='./politica.html'){
                   $( "h1" ).delay( 200 ).slideDown( "fast", function() {           
                       $( "img" ).show( "drop", 1000);
                       $( "h2" ).show( "drop", 1000, function() {
                            $( ".circle-main" ).show( "fold", 1000);
                        });
                   });
              }

              if(url=='./introducion.html' || url=='./vision.html' || url=='./vision1.html'){
                $( ".speech-bubble" ).delay( 200 ).animate({"top": 0 },1000,"easeOutBounce", function() {           
                   $( "img" ).animate({"left": 0 },1000,"easeOutBounce");
                       $( ".circle-main" ).delay( 200 ).animate({"top": 0 },1000,"easeOutBounce");
                });
              }
            }
          }
          xhr.open("GET", url, true);
          xhr.setRequestHeader('Content-Type', 'text/html');
          xhr.send();
      }
            $( document ).ready(function() {
              $( "img" ).show( "fold", 2000, function() {
                    $( "button" ).show( "fade", 1000 );
              });
      });

$(function(){
    $("img")
        .delay( 200 )
        .stop()
        .animate({"left": 0 },1000,"easeOutBounce")
        .delay( 1200 )
        .animate({"top":"22vh"},1000); 
    $("#siguiente")
        .delay( 2400 )
        .animate({"left":0},1000); 
     $( "#siguiente" ).click(function() {
          Load('./bienbenida.html');
     });

})