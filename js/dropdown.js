function fdropdown(condition) {
    var dropdown=document.getElementById("fdropdown");
    if (condition === 1) {
        dropdown.style.opacity=1;
        dropdown.style.paddingTop="60px";
        dropdown.style.height="100px";
    }
    else {
        dropdown.style.opacity=0;
        dropdown.style.paddingTop="0px";
        dropdown.style.height="50px";
    }
    
}