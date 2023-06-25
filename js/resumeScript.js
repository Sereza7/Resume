window.addEventListener('load', event => {
    onLoad()
});
function onLoad(){
    //Update all of the displayBoxes
    var toggles = document.getElementsByClassName("details-toggler");

    for (var index = 0; index < toggles.length; index++) {
        toggles[index].addEventListener("click", function() {
        let toggeablePan = document.getElementById(this.getAttribute('aria-controls'));
        toggeablePan.classList.toggle("opened");
        toggeablePan.ariaExpanded= toggeablePan.ariaExpanded === 'false';
      });
    }
    
}
