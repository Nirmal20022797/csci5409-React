// export function validateNotesTitle(text){
//     const regx = RegExp(/^[a-z ,.'-]+$/i);
//     return !regx.test(text)
// }

export function selectCourse(text){
    if(text == "" || text == undefined || text == null){
        return true;
    }
    else {
        return false;
    }
}

export function notesName(text){
    if(text == "" || text == undefined || text == null){
        return true;
    }
    else {
        return false;
    }
}

export function notesTitle(text){
    if(text == "" || text == undefined || text == null){
        return true;
    }
    else{
        return false;
    }
}

export function notesDescription(text){
    if(text == "" || text == undefined || text == null){
        return true;
    }
    else{
        return false;
    }
}
