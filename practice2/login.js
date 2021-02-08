
    var attempt=3;
    var userList = { "users" : [ 
{ "userName":"Gurpreet" , "keyPassword":"123" },
{ "userName":"Anna" , "keyPassword":"456" },
{ "userName":"Peter" , "keyPassword":"789" }
 ]};
    // var userObj={
    //     "Saumya":"$$$",
    //     "Gurpreet":"123$",
    //     "Hardeep":"1234",
    //     "Raman":"555"
    // }

    //Raiden
    var isCredValid = false;
    //Raiden

    console.log(attempt)
    function validate()
    {
        var username=document.getElementById("name").value;
        var inputPassword=document.getElementById("pass").value;
        console.log(username);
       
        //Raiden
        //var checkUser;
        //var checkPass;
        //for(var i=0;i<2;i++) //Why hardcoded 2?
        for(var i=0;i<userList.users.length;i++)
        {
            console.log(i)
            user=userList.users[i].userName;
            pass=userList.users[i].keyPassword;
            if(user==username && pass==inputPassword)
            {
                //Raiden
                //checkUser=user
                //checkPass=pass
                isCredValid = true;
                break;
            }
           
            console.log(checkUser)
            console.log(checkPass)
        }
        // var checkUser=userList.users["+username+"].userName;
        // var checkPass=userList.users["+password+"].passWord;
       
        console.log(i)    
        //Raiden
        //if(checkUser!=null && checkPass!=null)
        if(isCredValid)
        {
            alert("Successfully Login");
            return false;   
        }       
        // if ( Object.values(userObj).includes(username) && Object.values(userObj).includes(password) )
        // {
                 
        // }        
        else
        {
            attempt--;
            alert("you have left "+attempt+" attempt");

            if(attempt==0)
            {
                document.getElementById("name").disabled=true;
                document.getElementById("pass").disabled=true;
                document.getElementById("submit").disabled=true;
                return false;
            }
        }
    }
