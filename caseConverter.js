var x = document.getElementById("myTextarea").value;

const buttonUpp = document.querySelector('#upper-case');
const buttonLow = document.querySelector('#lower-case');
const buttonProp = document.querySelector('#proper-case');
const buttonSent = document.querySelector('#sentence-case');

function textProperCase()  {
    document.getElementById("myTextarea").value  = x.split(/\s+/).map(word => word[0].toUpperCase() + word.substring(1)).join(' ');
    /*
    var words = x.split(" ");
    let chars = [];    
  for (let value of words) { 
   var s = value[0].toUpperCase() + value.slice(1);
   chars.push(s);
  }
let str = chars.join(" ");
    document.getElementById("myTextarea").value = str;*/
};
/*
document.getElementById("proper-case")
    .addEventListener("click",function(){
        text.value = text.value.split(/\s+/).map(word => word[0].toUpperCase() + word.substring(1)).join(' ');
    });
*/
function textSentenceCase() {
    x.trim();
    x.toLowerCase();
    document.getElementById("myTextarea").value = x[0].toUpperCase() + x.slice(1);
};

function textUpperCase() {    
       x.trim();
        document.getElementById("myTextarea").value = x.toUpperCase();
       };


function textLowerCase() {
   x.trim();
    document.getElementById("myTextarea").value = x.toLowerCase();
   };


buttonUpp.addEventListener('click', textUpperCase);
 
buttonLow.addEventListener('click', textLowerCase);
buttonProp.addEventListener('click', textProperCase);
buttonSent.addEventListener('click', textSentenceCase);
// Когда кнопка нажата, вы должны получить текст в элементе textarea и сгенерировать text.txtфайл. 
// Полученный файл должен содержать текст из textareaэлемента.
// Вот фрагмент кода, показывающий, как это можно реализовать:


function download(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
  
    element.style.display = 'none';
    document.body.appendChild(element);
  
    element.click();
  
    document.body.removeChild(element);
  }
  
  document.getElementById("save-text-file")
        .addEventListener("click",  function(){
            let text = document.getElementById("myTextarea").value;
            let element = document.createElement('a');
            element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
            element.setAttribute('download', "text.txt");
          
            element.style.display = 'none';
            document.body.appendChild(element);
          
            element.click();
          
            document.body.removeChild(element);
          });
   
  // document.getElementById("save-text-file")
     //   .addEventListener("click", download);

//  var x = document.getElementById("myTextarea").value;
// Другое решение :
/*
   

document.getElementById("upper-case")
.addEventListener("click",function(){
    text.value = text.value.toUpperCase();
});

document.getElementById("lower-case")
.addEventListener("click",function(){
text.value = text.value.toLowerCase();
});

document.getElementById("proper-case")
.addEventListener("click",function(){
    text.value = text.value.split(/\s+/).map(word => word[0].toUpperCase() + word.substring(1)).join(' ');
});

document.getElementById("sentence-case")
.addEventListener("click",function(){
let words = text.value.toLowerCase().split(' ');
let result = "";
for(let i=0; i < words.length; i++){
    if (i === 0) {
        result += capitalize(words[i]) + " ";
    }else {
        let lastWord = words[i - 1];
        if (lastWord.charAt(lastWord.length - 1) === '.') {
            result += capitalize(words[i]) + " ";
        }else{
            result += words[i] + " ";
        }
    }
}
text.value = result.trimEnd();
});


let capitalize = function(string) {
return string.charAt(0).toUpperCase() + string.substring(1);
}
*/