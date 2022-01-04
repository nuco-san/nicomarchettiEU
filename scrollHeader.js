		var maxSize = document.getElementById("head").offsetHeight + 50;
		document.getElementById("contenitore-immagini").style.height = "1000vh";


		setInitialValues();


		function setInitialValues() {
			document.getElementById("contenitore-immagini").style.marginTop = maxSize + "px";
            document.getElementById("head").style.height = maxSize + "px";
		}


		window.addEventListener("load", function () {
				document.getElementById("contenitore-immagini").style.height = "auto";
		  });