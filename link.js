export const linkedlist=()=>{
    let heads=null;
    let tails=null;
  let count=0;
 function append(value){
      const newNode = new Node(value);
      ++count;
if (!heads) heads = tails = newNode;
else {
  tails.nextnode = newNode;
  tails = newNode;
}
 }
 function prepend(value){
    const newNode= new Node(value);
    ++count;
    if(heads===null){
        heads=tails=newNode;
    }else{
         newNode.nextnode=heads;
        heads=newNode;    
}
}
 function size(){
    return count;
 }
 function head(){
if(heads!==null){
    return heads.value;
}else return undefined;
 }
 function tail(){
   if(tails!==null){
    return tails.value;
}else return undefined;
 }
 function atindex(index){
    
    let current = heads;
    for (let i = 0; i < index && current; i++) {
        current = current.nextnode;
    }
    return current?.value;
}
    
 
 function pop() {
    if (heads === null) return undefined;

    const temp = heads.value;
    heads = heads.nextnode;   // move head
    --count;

    if (heads === null) tails = null;   // fix tails if list became empty

    return temp;
}
 
 function contains(value) {
  let temp = heads;

  while (temp !== null) {

    if (temp.value === value) {
      return true;
    }
    temp = temp.nextnode;
  }

  return false;
}
 function findindex(value){
let temp=heads;
let index=0;
while(temp!==null){
    if(temp.value===value){
        return index;
    }temp=temp.nextnode;
    ++index;
}
return -1;
 }
function toString() {
    if (heads === null) return "";  // empty list

    let current = heads;
    let result = "";

    while (current !== null) {
        result += `( ${current.value} ) -> `;
        current = current.nextnode;
    }

    result += "null";  // end of list
    return result;
}
 
 function insertat(index,value){
    let temp=heads;
   let i=0;
   while(i<index){
    temp=temp.nextnode;
   }temp.value=value;
 }
 function removeatindex(index){
    let temp=heads;
    
    for(let i=0;i<=index;++i){
        temp=temp.nextnode;

    }temp.value=temp.nextnode.value;
 }
 return{append,prepend,size,head,tail,atindex,pop,contains,findindex,toString,insertat,removeatindex}
}
class Node{
    constructor(value=null,nextnode=null){
        this.value=value;
        this.nextnode=nextnode;
    }
}