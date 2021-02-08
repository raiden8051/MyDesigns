$(document).ready(()=>{
    $(".type").hide()
    // $(".mailtype").hide()
    // $(".no").hide()
    // $(".contact").hide()
    // $(".mail").hide()
    $(".start").hide()
    $(".list-element1").click(()=>{
        $('body').css("background-color"," #ee6c44")
    })
    $("#con").click(()=>{
        $(".type").slideToggle()
    })
    $(".type:nth-child(2)").click(()=>{
        $(".mailtype").slideToggle()
    })
    $(".right").hover(()=>{
        $(".start").slideToggle()
    })
    $('.dropdown-toggle').dropdown()


var attempt=3;
function validate()
{
    var username=document.getElementById("name").Value;
    var password=document.getElementById("pass").Value;
    if ( username=="Gurpreet" && password=="123")
    {
        alert("Successfully Login");
        return false;
    }
    

    else
    {
        attempt--;
        alert("you have left "+attempt+"attempt");

        if(attempt==0)
        {
            document.getElementById("name").disabled=true;
            document.getElementById("pass").disabled=true;
            document.getElementById("submit").disabled=true;
            return false;
        }
    }
}
