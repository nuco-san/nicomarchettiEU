


window.addEventListener("load", (event) => {


    var divs = document.querySelectorAll(".image-layout-0, .image-layout-1, .image-layout-2");
    console.log(divs);
    const elems = Array.prototype.slice.call(divs);

    elems.forEach((el) => {
        el.classList.add("loadin");
    });
    
    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.1
    };
    
    function observerCallback(entries) {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("loaded");
            }
            // Add the else if you want to fade out images out of the viewport
            /* else {
                entry.target.classList.remove("loaded");
            } */
        });
    }
    
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    elems.forEach((el) => observer.observe(el));    
});


