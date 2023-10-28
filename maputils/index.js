document.getElementById("calcForm").addEventListener("submit", (event) => {
    event.preventDefault();

    let ca = parseInt(document.getElementById("ca").value);
    let a = parseInt(document.getElementById("a").value);
    let r = parseInt(document.getElementById("r").value);
    let cr = parseInt(document.getElementById("cr").value);

    document.getElementById("ratio").value = (ca + 0.5 * a) + ":" + (Math.round((3 + 1.5 * (cr + 0.5 * r))));
    (ca + 0.5 * a) >= Math.round((3 + 1.5 * (cr + 0.5 * r)))? 
        document.getElementById("ratio").style.setProperty("color", "rgb(15, 224, 15)") :
        document.getElementById("ratio").style.setProperty("color", "red");
});