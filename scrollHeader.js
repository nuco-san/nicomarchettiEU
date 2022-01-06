		var maxSize = document.getElementById("head").offsetHeight + 50;

		setInitialValues();

		window.addEventListener('resize', function(event){
			setInitialValues();
		});

		function setInitialValues() {
			if(window.innerWidth > 650) {
				document.getElementById("contenitore-immagini").style.marginTop = maxSize + "px";
				document.getElementById("head").style.height = maxSize + "px";
			}
		}