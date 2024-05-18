var reverseList = function (val) {
    var head =  val;
    if(head == null){
        console.log("Empty Linked List");
    }
    while(head != null){
        head = head.next
        console.log(head)
    }

};

const list ={
    val: 5,
    next:{
        val: 3,
            next:{
                val: 10,
                next: null,
            }
    }
}

console.log(reverseList(list))