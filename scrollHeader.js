		var maxSize = document.getElementById("head").offsetHeight + 50;
		var mobileSize = 550;
		var isMobileTextHidden = true;

		document.getElementById("contenitore-immagini").style.height = "1000vh";


		setInitialValues();
		mobileInfoHide();


		function setInitialValues() {
			document.getElementById("contenitore-immagini").style.marginTop = maxSize + "px";
            document.getElementById("head").style.height = maxSize + "px";
		}

		function mobileInfoHide() {
			if(window.innerWidth <= 650) {
				if(document.getElementById("head").offsetHeight / window.innerHeight >= 0.9) {
					document.getElementById("head").style.height = mobileSize + "px";
					document.getElementById("contenitore-immagini").style.marginTop = mobileSize + "px";
					document.getElementById("contenitore-immagini").style.marginTop = mobileSize + "px";
					document.getElementById("show-text-button").style.display = "inline";

					var gradientColor = RGBToHex(document.body.style.backgroundColor);
					document.getElementById("text-hide-gradient").style.backgroundImage = "linear-gradient(#0000, " + gradientColor + ")";
				}
			}
		}

		function expandMobileInfo() {
			if(isMobileTextHidden == true) {
				document.getElementById("contenitore-immagini").style.marginTop = maxSize + "px";
				document.getElementById("head").style.height = maxSize + "px";
				document.getElementById("show-text-button").innerHTML = "read less";

				document.getElementById("text-hide-gradient").style.backgroundImage = "linear-gradient(#0000, #0000)";

				isMobileTextHidden = false;
				return;
			} 
			else {
				mobileInfoHide();
				document.getElementById("show-text-button").innerHTML = "read more";
				
				var gradientColor = RGBToHex(document.body.style.backgroundColor);
				document.getElementById("text-hide-gradient").style.backgroundImage = "linear-gradient(#0000, " + gradientColor + ")";

				isMobileTextHidden = true;
			}

		}


		window.addEventListener("load", function () {
				document.getElementById("contenitore-immagini").style.height = "auto";
		  });



		  function RGBToHex(rgb) {
			// Choose correct separator
			let sep = rgb.indexOf(",") > -1 ? "," : " ";
			// Turn "rgb(r,g,b)" into [r,g,b]
			rgb = rgb.substr(4).split(")")[0].split(sep);
		  
			let r = (+rgb[0]).toString(16),
				g = (+rgb[1]).toString(16),
				b = (+rgb[2]).toString(16);
		  
			if (r.length == 1)
			  r = "0" + r;
			if (g.length == 1)
			  g = "0" + g;
			if (b.length == 1)
			  b = "0" + b;
		  
			return "#" + r + g + b;
		  }