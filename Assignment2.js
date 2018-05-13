
var page = require('webpage').create();


var url = "https://login.yahoo.com/";


page.open(url , function(status){
  page.evaluate(function(){
    document.querySelector("input[name='username']").value = "narendertyagi18@yahoo.com";
    document.getElementById("login-username-form").submit();
  });
  console.log("Page Url : " + page.url);
  console.log("Page Title : "+ page.title);
  page.render("username-added.png");
  setTimeout(function(){
    if(page.title == "Yahoo"){
      page.evaluate(function(){
        document.querySelector("input[name='check']").click();
        document.getElementById("login-notarobot-form").submit();
      });
    }
    setTimeout(function(){page.render("after-step1.png");
    page.evaluate(function(){
      document.querySelector("input[name='passwd']").value = "password";
      document.getElementById("login-username-form").submit();
    });
    console.log("Page Url : " + page.url);
    console.log("Page Title : "+ page.title);
    page.render("password-added.png");
    console.log("Done");
    phantom.exit();},15000)
    } , 15000);
});
