export function validateCourseName(text){
    // const regx = RegExp(/^[a-z ,.'-]+$/i);
    // return !regx.test(text)
    if(text.length < 8){
        return true;
    }
    return false;
}

export function courseName(text){
    if(text == "" || text == undefined || text == null){
        return true;
    }
    else{
        return false;
    }
}

export function courseDescription(text){
    if(text == "" || text == undefined || text == null){
        return true;
    }
    else{
        return false;
    }
}

export function courseCredit(text){
    
    if(text == "" || text == undefined || text == null){
        return true;
    }
    else{
        return false;
    }
}

export function fileValidation(file){

    // console.log(file.name);
    var fileName, fileExtension, fileSize, fileType, dateModified;
      // FILE NAME AND EXTENSION.
      fileName = file.name;
      fileExtension = fileName.replace(/^.*\./, '');
     
    // console.log(fileExtension);
      if (fileExtension.toLowerCase() == 'png' || fileExtension.toLowerCase() == 'jpg' || fileExtension.toLowerCase() == 'jpeg' ) {
        //   console.log("fgfg")
       readImageFile(file);             // GET IMAGE INFO USING fileReader().
    }
    else {
        return true;
    }
 
    
}

function readImageFile(file) {    
    var reader = new FileReader(); // CREATE AN NEW INSTANCE.

    // console.log("== in  read image file")
    reader.onload = function (e) {
        var img = new Image();      
        img.src = e.target.result;

        // console.log("=== on load image")
        img.onload = function () {
            var w = this.width;
            var h = this.height;

        //    console.log("w"+w);
        //    console.log("h"+h);
           return false;
        }
    };
    reader.readAsDataURL(file);
}