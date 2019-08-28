app.controller("maincontroller",function($scope){
    $scope.array=[];
  
  
  


   
    console.log("you are inside main controler");
   
    $scope.add=()=>{
        

    
      
        
        if($scope.id && $scope.name && $scope.branch){
            var id=$scope.id;

            var name=$scope.name;
            var branch=$scope.branch;
            // var studentobj={
            //     id:id,
            //     name:name,branch:branch
            // }
          
            var existingitem=$scope.array.find(function(element){
                return element.id==id;
                
    
            })
            if(existingitem){
                console.log("existoing",existingitem);
                alert("Another Item with same ID exists!");
                $scope.id="";
            }
            else{
                console.log("existoing",existingitem);
       
                var newobj=new Student(id,name,branch)
                $scope.array.push(newobj);
                console.log("add clicked",    $scope.array);
                $scope.id="";
                $scope.name="";
                $scope.branch="";
            }
        }
        else{
            alert("Please fill out the details!");
            }}
        
    $scope.update=()=>{
        console.log("upadate clicked");
        var id=$scope.id;

        var name=$scope.name;
        var branch=$scope.branch;
        var markeditems=$scope.array.filter(item=>item.marked==true);
        if(markeditems.length>1){
            alert("Select only one row at a time for updation!");
        }
        else{
            var markedindex=$scope.array.findIndex(item=>item.marked==true);
            console.log("marked item is",markedindex);
            // var existingitem=$scope.array.find(function(element){
            //     return element.id==id;
                
    
            // })
            // if(existingitem){
            //     console.log("existoing",existingitem);
            //     alert("Another Item with same ID exists!");
            //     $scope.id="";
            // }
           // else{
              //  console.log("existoing",existingitem);
       
                var newobj=new Student(id,name,branch);
             
                $scope.array[markedindex] = newobj;
                console.log("add clicked",    $scope.array);
                $scope.id="";
                $scope.name="";
                $scope.branch="";
    
        }
      
        //}
    }
    $scope.delete=()=>{
        
        console.log("delete clicked");
        $scope.array=$scope.array.filter(item=>item.marked==false);

    }
    $scope.markupdate=(id)=>{
        console.log("mark update clicked",id);
        var selectedindex=$scope.array.findIndex(function(element){
            return element.id==id;
            

        })
        var selecteditem=$scope.array[selectedindex];
        $scope.id=selecteditem.id;
        $scope.name=selecteditem.name;

        $scope.branch=selecteditem.branch;
        
        selecteditem.marked=!selecteditem.marked;
    }
    $scope.markdelete=(id)=>{
        
        console.log("mark delete clicked",id);
        var selecteditem=$scope.array.find(function(element){
            return element.id==id;
            

        })
        console.log("selecteditem",selecteditem);
        selecteditem.marked=!selecteditem.marked;
     

    }
    

})