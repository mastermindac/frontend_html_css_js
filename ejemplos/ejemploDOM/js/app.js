const liItems=document.getElementsByTagName('li');

console.log("documento: "+document.nodeType);
console.log("HTMLCollection: "+liItems.nodeType);

for (const liItem of liItems) {
    console.log("liElement: "+liItem.nodeType);
}