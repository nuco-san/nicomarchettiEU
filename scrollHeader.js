		var maxSize = document.getElementById("head").offsetHeight + 50;

		setInitialValues();


		function setInitialValues() {
			document.getElementById("contenitore-immagini").style.marginTop = maxSize + "px";
            document.getElementById("head").style.height = maxSize + "px";
		}