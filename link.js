export const linkedlist=()=>{
    let head=null;
  
 function append(value){
      const newNode = new Node(value);
    if(head===null){
  head=newNode;
  return;
    }else{
        let tmp=head;
        while(tmp.nextnode!==null){
        tmp=tmp.nextnode;
    }
    tmp.nextnode=newNode;
}
 }
 function prepend(value){
    const newNode= new Node(value);
    if(head===null){
        head=newNode;
    }else{
         newNode.nextnode=head;
        head=newNode;    
}
}
 function size(){
    return Node.length;
 }
 function head(){
if(head!==null){
    return head.value;
}else return undefined;
 }
 function tail(){}
 function atindex(index){}
 function node(){}
 function contains(){}
 function indexvalue(value){}
 function tostring(){}
 function insertat(index,value){}
 function removeatindex(index){}
 return{append,prepend,size,head,tail,atindex,node,contains,indexvalue,tostring,insertat,removeatindex}
}
class Node{
    constructor(value=null,nextnode=null){
        this.value=value;
        this.nextnode=nextnode;
    }
}