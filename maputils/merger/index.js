let urlForm = document.getElementById("urlForm");

urlForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // let url1 = String(document.getElementById("url1").value);
    // let url2 = String(document.getElementById("url2").value);

    // url1 = url1.replace(
    //     "https://icedodo.onionfist.com/singleplayer?mapUrl=",
    //     "https://fn.onionfist.com/icemaprun.js?v8="
    // );

    // url2 = url2.replace(
    //     "https://icedodo.onionfist.com/singleplayer?mapUrl=",
    //     "https://fn.onionfist.com/icemaprun.js?v8="
    // );
    
    // console.log(url1);
    // console.log(url2);

    // fetch(url1) // the URL of the JavaScript file
    //     .then(res => res.text()) // get the text content of the response
    //     .then(text => {
    //         // declare a variable and assign the text to it
    //         var file1 = text;
    //         console.log(file1);
    //         var beautified1 = js_beautify(file1, { indent_size: 4});
    //         console.log(`beautified: ${beautified1}`);
    //         list1 = beautified1.split("\\n");
    //         console.log(list1);
    // })

    // fetch(url2) // the URL of the JavaScript file
    //     .then(res => res.text()) // get the text content of the response
    //     .then(text => {
    //         // declare a variable and assign the text to it
    //         var file2 = text;
    //         console.log(file2);
    //         var beautified2 = js_beautify(file2, { indent_size: 4});
    //         console.log(`beautified: ${beautified2}`);
    //         list2 = beautified2.split("\\n");
    //         console.log(list2);
    // })

    // let file1 = list1;
    // let file2 = list2;

    let file1 = String(document.getElementById("url1").value).split("\n");
    let file2 = String(document.getElementById("url2").value).split("\n");

    console.log(file1);
    console.log(file2);

    var i = 0;
    for (var line of file1) {
        if (line.includes("a.e") || line.includes("E")) {
            file1.splice(i, 1);
        }

        i++;
    }

    var endInit = false;
    var endInitPos = 0;

    var endPost = false;
    var endPostPos = 0;

    var maxCase = -1;
    var endSection = false;
    var endSectionPos = 0;

    var idDict = {};
    var endReset = false;
    var endResetPos = 0;

    var i = 0;
    for (var line of file1) {
        if (!endInit && line.includes("},")) {
            endInit = true;
            endInitPos = i;
        } else if (!endPost && line.includes("},")) {
            endPost = true;
            endPostPos = i;
        } else if (!endSection && line.includes("},")) {
            endSection = true
            endSectionPos = i;
        } else if (!endReset && line.includes("},")) {
            endReset = true;
            endResetPos = i;
        }
        
        if (line.includes("        case")) {
            maxCase += 1;
        }
        
        if (line.includes("a.re")) {
            var firstQuote = 0;
            var secondQuote = 0;
            j=0;
            for (var character of line) {
                if (firstQuote == 0) {
                    if (character == "'") {
                        firstQuote = j;
                    }
                } else {
                    if (character == "'") {
                        secondQuote = j;
                    }
                }

                j++;
            }

            if (idDict.hasOwnProperty(line[firstQuote+1])) {
                if (parseInt(line.substring(firstQuote+2, secondQuote)) > idDict[line[firstQuote+1]]) {
                    idDict[line[firstQuote+1]] = parseInt(line.substring(firstQuote+2, secondQuote));
                }
            } else {
                idDict[line[firstQuote+1]] = parseInt(line.substring(firstQuote+2, secondQuote));
            }
        }

        i++;
    } 

    var endInit2 = false;
    var endInitPos2 = 0;

    var endPost2 = false;
    var endPostPos2 = 0;

    var endSection2 = false;
    var endSectionPos2 = 0;

    var endReset2 = false;
    var endResetPos2 = 0;

    var i = 0;
    for (var line of file2) {
        if (!endInit2 && line.includes("},")) {
            endInit2 = true;
            endInitPos2 = i;
        } else if (!endPost2 && line.includes("},")) {
            endPost2 = true;
            endPostPos2 = i;
        } else if (!endSection2 && line.includes("},")) {
            endSection2 = true
            endSectionPos2 = i;
        } else if (!endReset2 && line.includes("},")) {
            endReset2 = true;
            endResetPos2 = i;
        }

        if (line.includes("a.u") || line.includes("a.re") || line.includes("a.mov") || line.includes("a.rot")) {
            var firstQuote3 = 0;
            var secondQuote3 = 0;

            j=0;
            for (var character of line) {
                if (firstQuote3 == 0) {
                    if (character == "'") {
                        firstQuote3 = j;
                    }
                } else {
                    if (character == "'") {
                        secondQuote3 = j;
                        break;
                    }
                }

                j++;
            }

            if (idDict.hasOwnProperty(line[firstQuote3+1])) {
                file2[i] = line.substring(0, firstQuote3+2) + String(idDict[line[firstQuote3+1]]+parseInt(line.substring(firstQuote3+2, secondQuote3))+1) + line.slice(secondQuote3);
            }
        }
        
        if (line.includes("        case")) {
            var caseStart = 0;
            var caseEnd = 0;

            function isInteger (str) {
                // Check if the input is a string
                if (typeof str !== "string") {
                  return false;
                }
                // Remove any leading or trailing whitespace
                str = str.trim ();
                // Check if the string is empty
                if (str.length === 0) {
                  return false;
                }
                // Check if the string contains only digits
                for (let i = 0; i < str.length; i++) {
                  let char = str[i];
                  // If the first character is a minus sign, skip it
                  if (i === 0 && char === "-") {
                    continue;
                  }
                  // If the character is not a digit, return false
                  if (char < "0" || char > "9") {
                    return false;
                  }
                }
                // If all checks passed, return true
                return true;
              }

            j=0;
            for (var character of line) {
                if (caseStart == 0 && isInteger(character)) {
                    caseStart = j;
                    caseEnd = j;
                    console.log(caseEnd);
                } else {
                    if (isInteger(character)) {
                        caseEnd = j;
                    }
                }

                j++;
            }
            console.log(`casestart: ${caseStart}`);
            console.log(`caseend: ${caseEnd}`);
            file2[i] = line.substring(0, caseStart) + String(parseInt(line.substring(caseStart, caseEnd+1))+maxCase+1) + line.slice(caseEnd+1);
        }

        i++;
    }

    newMap = "";

    for (i=0;i<endInitPos;i++) {
        newMap+= file1[i] + "\n";
    }
    for (i=6;i<endPostPos2;i++) {
        newMap+= file2[i] + "\n";
    }
    for (i=endInitPos+2;i<endSectionPos-1;i++) {
        newMap+= file1[i] + "\n";
    }
    for (i=endPostPos2+5;i<endSectionPos2+1;i++) {
        newMap+= file2[i] + "\n";
    }
    for (i=endSectionPos+1;i<endResetPos;i++) {
        newMap+= file1[i] + "\n";
    }
    for (i=endSectionPos2+3;i<endResetPos2+4;i++) {
        newMap+= file2[i] + "\n";
    }

    document.getElementById("output").value = newMap;
    
    /*
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
    var beautified1 = js_beautify(file1, { indent_size: 4});
    console.log(`beautified: ${beautified1}`);
    list1 = beautified1.split("\\n");
    console.log(list1);

    var endInit = false;
    var endInitPos = 0;

    var endPost = false;
    var endPostPos = 0;

    var i = 0;
    for (var line of list1) {
        if (!endInit && line.includes("a.e")) {
            list1.splice(i, 1);
        }
        if (!endInit && line.includes("},")) {
            endInit = true;
            endInitPos = i;
        }
        if (!endPost && line.includes("},")) {
            endPost = true;
            endPostPos = i;
        }
        // make note of case IDs. maps cannot have messages with the word "case".

        i++;
    }
    })

    fetch(url2) // the URL of the JavaScript file
        .then(res => res.text()) // get the text content of the response
        .then(text => {
    // declare a variable and assign the text to it
    var file2 = text;
    console.log(file2);
    })
  .catch(err => console.error(err)); // handle errors
  */
})