
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
    console.log(attempt)
    function validate()
    {
        var username=document.getElementById("name").value;
        var inputPassword=document.getElementById("pass").value;
        console.log(username);
       
        var checkUser;
        var checkPass;
        for(var i=0;i<2;i++)
        {
            console.log(i)
            user=userList.users[i].userName;
            pass=userList.users[i].keyPassword;
            if(user==username && pass==inputPassword)
            {
                checkUser=user
                checkPass=pass
                break;
            }
           
            console.log(checkUser)
            console.log(checkPass)
        }
        // var checkUser=userList.users["+username+"].userName;
        // var checkPass=userList.users["+password+"].passWord;
       
        console.log(i)    
        if(checkUser!=null && checkPass!=null)
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
