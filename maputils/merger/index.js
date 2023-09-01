let urlForm = document.getElementById("urlForm");

urlForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let url1 = String(document.getElementById("url1").value);
    let url2 = String(document.getElementById("url2").value);

    url1 = url1.replace(
        "https://icedodo.onionfist.com/singleplayer?mapUrl=",
        "https://fn.onionfist.com/icemaprun.js?v8="
    );

    url2 = url2.replace(
        "https://icedodo.onionfist.com/singleplayer?mapUrl=",
        "https://fn.onionfist.com/icemaprun.js?v8="
    );
    
    console.log(url1);
    console.log(url2);

    fetch(url1) // the URL of the JavaScript file
        .then(res => res.text()) // get the text content of the response
        .then(text => {
    // declare a variable and assign the text to it
    var file1 = text;
    console.log(file1);
    })

    fetch(url2) // the URL of the JavaScript file
        .then(res => res.text()) // get the text content of the response
        .then(text => {
    // declare a variable and assign the text to it
    var file2 = text;
    console.log(file2);
    })
  .catch(err => console.error(err)); // handle errors

  
})