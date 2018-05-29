function square(whichpic)
{  
	var sourcepic=whichpic.getAttribute("href");
	var back=document.getElementById("back");
    back.setAttribute("src",sourcepic);
    var text=whichpic.getAttribute("title");
    var des=document.getElementById("des");
    var test1="new";
    des.innerHTML=text;
}
  

function countBodyChildren()
{
	var body_element=document.getElementsByTagName("body")[0];
	alert(body_element.childNodes.length);


}