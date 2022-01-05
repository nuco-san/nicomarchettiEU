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
					window.scrollTo(0, 200);
				}
			}
		}

		window.addEventListener("load", function () {
				document.getElementById("contenitore-immagini").style.height = "auto";
		  });
