
		var newSize = 0;
		var minSize = window.innerHeight * 0.037;
		var maxSize = document.getElementById("head").offsetHeight;

		setInitialValues();

		window.onscroll = function() {scrollHeader()};

		function setInitialValues() {
			document.getElementById("contenitore-immagini").style.marginTop = maxSize + "px";
            document.getElementById("head").style.height = maxSize + "px";
		}


		function scrollHeader() {

			newSize = maxSize - document.documentElement.scrollTop;

			if(newSize > maxSize) {
				document.getElementById("head").style.height = maxSize + "px";
			}

			if (newSize <= maxSize && newSize >= minSize) {
				document.getElementById("head").style.height = newSize + "px";
                document.getElementById("head-dx").style.display = "inline-block";
                document.getElementById("titolo-progetto").classList.remove("testo-gigante-shrink");
                document.getElementsByClassName("back-svg")[0].classList.remove("back-svg-shrink");
			}

            if (newSize < minSize) {
				document.getElementById("head").style.height = minSize + "px";
                document.getElementById("head-dx").style.display = "none";
                document.getElementById("titolo-progetto").classList.add("testo-gigante-shrink");
                document.getElementsByClassName("back-svg")[0].classList.add("back-svg-shrink");
			}			
		}