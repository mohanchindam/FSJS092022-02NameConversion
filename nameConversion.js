let converBtn=document.getElementById('convert-btn');
converBtn.addEventListener("click",()=>{
    let textEntered=document.getElementById('text').value;
    console.log(textEntered);
    document.getElementById('camel-case').innerHTML=camelCase(textEntered);
    document.getElementById('pascal-case').innerHTML=PascalCase(textEntered);
    document.getElementById('snake-case').innerHTML=snake_case(textEntered);
    document.getElementById('screaming-snake-case').innerHTML=screaming_snake_case(textEntered);
    document.getElementById('kebab-case').innerHTML=kebabCase(textEntered);
    document.getElementById('screaming-kebab-case').innerHTML=ScreamingKebabCase(textEntered);
})

//camelCase
let camelCase = (textEntered)=>{
    const pattern=  /[\s-_]\w/ig;
    return textEntered.toLowerCase().replace(pattern,(match)=>{
        return match[1].toUpperCase();
    })
}

//PascalCase
function PascalCase(textEntered) {
    const pattern=/[\s-_]?\w+/ig;
    return textEntered.replace(pattern,(match,index)=>{
        console.log(match,index);
        return index===0?match[0].toUpperCase()+match.substr(1).toLowerCase():match[1].toUpperCase()+match.substr(2).toLowerCase()
})
}

//snake_case
function snake_case(textEntered) {
    const pattern=/[\s-]?\w+/ig;
    return textEntered.replace(pattern,(match,index)=>{
        console.log(match,index);
        return index===0?match[0].toLowerCase()+match.substr(1):"_"+match[1].toLowerCase()+match.substr(2);
})
}

//SCREAMING_SNAKE_CASE
function screaming_snake_case(textEntered) {
    const pattern=/[\s-]?\w+/ig;
    return textEntered.replace(pattern,(match,index)=>{
        console.log(match,index);
        return index===0?match[0].toUpperCase()+match.substr(1).toUpperCase():"_"+match[1].toUpperCase()+match.substr(2).toUpperCase();
})
}

//kebab-case
function kebabCase(textEntered) {
    const pattern=/[\s_]?\w+/ig;
    return textEntered.replace(pattern,(match,index)=>{
        console.log(match,index);
        return index===0?match[0].toLowerCase()+match.substr(1):"-"+match[1].toLowerCase()+match.substr(2);
})
}

//SCREAMING-KEBAB-CASE
function ScreamingKebabCase(textEntered) {
    const pattern=/[\s_]?\w+/ig;
    return textEntered.replace(pattern,(match,index)=>{
        console.log(match,index);
        return index===0?match[0].toUpperCase()+match.substr(1).toUpperCase():"-"+match[1].toUpperCase()+match.substr(2).toUpperCase();
})
}