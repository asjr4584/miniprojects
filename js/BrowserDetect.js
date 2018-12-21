<script type="text/javascript">
//Javascript that detects the browser			
      		$(window).on('load', function(){
        
				// browser detect      	
				var winNav = window.navigator;
				var vendorName = winNav.vendor;		
				var isIEedge = winNav.userAgent.indexOf("Edge") > -1;
				var isIOSChrome = winNav.userAgent.match("CriOS");
				var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
				var isChromium = window.chrome, isOpera = window.navigator.userAgent.indexOf("OPR") > -1 || window.navigator.userAgent.indexOf("Opera") > -1;
				var isSafari = /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor);
				var isfirefox = /firefox/i.test(navigator.userAgent);
				var isEdge = /Edge/.test(navigator.userAgent);
				var isEdge = !(/*@cc_on!@*/false || !!document["documentMode"]) && !!window["StyleMedia"] && isChrome === false && isfirefox === false;


				var BrowserDetect = {
						init: function() {
						this.browser = this.searchString(this.dataBrowser) || "An unknown browser";
						this.version = this.searchVersion(navigator.userAgent) || this.searchVersion(navigator.appVersion) || "an unknown version";
						this.OS = this.searchString(this.dataOS) || "an unknown OS";
					},
					searchString: function(data) {
						for (var i = 0; i < data.length; i++) {
							var dataString = data[i].string;
							var dataProp = data[i].prop;
							this.versionSearchString = data[i].versionSearch || data[i].identity;
							if (dataString) {
								if (dataString.indexOf(data[i].subString) != -1) return data[i].identity;
							} else if (dataProp) return data[i].identity;
						}
					},
					searchVersion: function(dataString) {
						var index = dataString.indexOf(this.versionSearchString);
						if (index == -1) return;
						return parseFloat(dataString.substring(index + this.versionSearchString.length + 1));
					},
					dataBrowser: [{
						string: navigator.userAgent,
						subString: "Chrome",
						identity: "Chrome"			
					}, {
						string: navigator.userAgent,
						subString: "OmniWeb",
						versionSearch: "OmniWeb/",
						identity: "OmniWeb"
					}, {
						string: navigator.vendor,
						subString: "Apple",
						identity: "Safari",
						versionSearch: "Version"
					}, {
						prop: window.opera,
						identity: "Opera",
						versionSearch: "Version"
					}, {
						string: navigator.vendor,
						subString: "iCab",
						identity: "iCab"
					}, {
						string: navigator.vendor,
						subString: "KDE",
						identity: "Konqueror"
					}, {
						string: navigator.userAgent,
						subString: "Firefox",
						identity: "Firefox"
					}, {
						string: navigator.vendor,
						subString: "Camino",
						identity: "Camino"
					}, { // for newer Netscapes (6+)
						string: navigator.userAgent,
						subString: "Netscape",
						identity: "Netscape"
					}, {
						string: navigator.userAgent,
						subString: "MSIE",
						identity: "Explorer",
						versionSearch: "MSIE"
					}, {
						string: navigator.userAgent,
						subString: "Gecko",
						identity: "Mozilla",
						versionSearch: "rv"
					}, { // for older Netscapes (4-)
						string: navigator.userAgent,
						subString: "Mozilla",
						identity: "Netscape",
						versionSearch: "Mozilla"
					}],
					dataOS: [{
						string: navigator.platform,
						subString: "Win",
						identity: "Windows"
					}, {
						string: navigator.platform,
						subString: "Mac",
						identity: "Mac"
					}, {
						string: navigator.userAgent,
						subString: "iPhone",
						identity: "iPhone/iPod"
					}, {
						string: navigator.platform,
						subString: "Linux",
						identity: "Linux"
					}]

				};
				BrowserDetect.init();

				///// mobile
				var isMobile = {
					Android: function() {
						return navigator.userAgent.match(/Android/i);
					},
					BlackBerry: function() {
						return navigator.userAgent.match(/BlackBerry/i);
					},
					iOS: function() {
						return navigator.userAgent.match(/iPhone|iPad|iPod/i);
					},
					Opera: function() {
						return navigator.userAgent.match(/Opera Mini/i);
					},
					Windows: function() {
						return navigator.userAgent.match(/IEMobile/i);
					},
					any: function() {
						return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
					}
				};

//This is MS 10
					if (/MSIE 10/i.test(navigator.userAgent)) {

						// This is internet explorer 10
						var elem = document.getElementById( 'el2' );
						elem.classList.add('notransition'); // Add class

						window.alert('isIE10');

					}
//This is MS 11
					if (/MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent)) {

						// This is internet explorer 9 or 11
						//window.location = 'pages/core/ie.htm';

						window.alert('isIE11');

					}

					if (isEdge !== null && typeof isEdge !== "undefined" && vendorName !== "Google Inc." && isChrome === false && isfirefox === false){

// This is Microsoft Edge				
						//var elem = document.getElementById( 'el23' ).src = "/img/newearth.svg";						
						//elem.classList.add('notransition'); // Add class
						
						//var elem = document.getElementById( 'el23' );
						//elem.classList.add('resizeEdge'); // Add class
						//elem.src = "/img/newearth.svg";						
						
						/*var deg = 0;
						window.setInterval(function() {
							deg += 1;
							$("#el23").css('-webkit-transform','rotate(' + deg + 'deg)');
						}, 25);*/

						window.alert('Microsoft Edge');
						//alert("Microsoft Edge Again");

					}			

					if (isChromium !== null && isOpera === true) {			

						var elem = document.getElementById( 'el2' );
						elem.classList.add('notransition'); // Add class

						alert("Opera");

					}

					if (isChrome !== null && isOpera === false && isfirefox === false && isEdge === false ) {			

//This is Google Chrome
						//var elem = document.getElementById( 'el23' );
						//elem.classList.remove('icon'); // Add class
						//elem.classList.add('rotate'); // Add class
						
						//var elem = document.getElementById( 'el23' );
						//elem.classList.add('resizeChrome'); // Add class
						//elem.src = "/img/newearth.svg";						
						
						/*var deg = 0;
						window.setInterval(function() {
							deg += 1;
							$("#el23").css('-webkit-transform','rotate(' + deg + 'deg)');
						}, 25);*/
						
						//window.onload=function() {
							// Get the Object by ID
							//var a = document.getElementById("dalasite1");
							
							
							// Get the SVG document inside the Object tag
							//var svgDoc = a.contentDocument;
							// Get one of the SVG items by ID;
							//var svgItem = svgDoc.getElementById("Earth");
							// Set the colour to something else
							//svgItem.setAttribute("class", "notransition");
						//}
						
						/*function loadImage() {
						  alert("Image is loaded");
						}*/
						
						//alert("Earth Element");
						alert("Google Chrome");

					}

//This is Safari				
					if (isSafari) {			

						var elem = document.getElementById( 'el2' );
						elem.classList.add('notransition'); // Add class

						alert("Safari");		

					}

//This is Firefox				
					if (isfirefox !== null && isChrome === false && isEdge === false ) {			

						//var elem = document.getElementById( 'el23' );
						//elem.classList.remove('icon'); // Add class
						//elem.classList.add('rotate'); // Add class
						
						//var elem = document.getElementById( 'el23' );
						//elem.classList.add('resizeChrome'); // Add class
						//var elem = document.getElementById( 'el23' ).src = "/img/newearth.svg";						
						
						/*var deg = 0;
						window.setInterval(function() {
							deg += 1;
							$("#el23").css('-webkit-transform','rotate(' + deg + 'deg)');
						}, 25);*/

						alert("Firefox");

					}

				});
	</script>
<!--end of script-->