function tab(evt, opTab)
{
var i,content,tablinks;

content=document.getElementsByClassName("content");
for(i=0;i<content.length;i++)
{
    content[i].style.display="none";
}

tablinks=document.getElementsByClassName("tablinks");
for(i=0;i<tablinks.length;i++)
{
tablinks[i].className=tablinks[i].className.replace(" active","");
}

document.getElementById(opTab).style.display="block";
evt.currentTarget.className +=" active";
}
document.getElementById("defaultOpen").click();

