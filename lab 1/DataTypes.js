array = [ 5, 121, 'rabbit' , -71, 'plane', true, ];

let object = NewObject();

function ObjectKey(key){
    if (key in object){
        object [key] += 1
    }
    else object [key] = 1;
}

for (let element of array){

    if (typeof element == "number"){
        type = "number"
    }else if (typeof element == "string"){
        type = "string"
    }else if (typeof element == "boolean"){
        type = "boolean"
    }
    objectKey(type)
    console.log("Тип елемент масива, та елемент:",typeof element, element)
}

console.log(object)