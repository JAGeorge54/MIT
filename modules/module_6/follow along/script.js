const list = [5, 8, 9, 2, 7, 6, 3, 1, 4];

function callback(list){
    const newList = [];
    for (i = 0; i < list.length; i++){
        if (list[i] < 5){
            newList += list.[i];
        }
    }
    return newList;
}

const filtered = filter(list, callback);



