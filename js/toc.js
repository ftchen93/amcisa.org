//Table of Contents Plugin
var toc={
  anchorList:[]
};

$(document).ready(function(){
  insertTOC("panel");
  insertAnchor("panel-heading");
  clickScrollTo(main);
});

function insertTOC(classType){
  var html="<div class=\"panel panel-success section\">"+
           "<div class=\"panel-heading toc-head\">"+
           "<h3>Table of Contents</h3></div>"+
           "<div class=\"panel-body toc-body\"></div></div>";
  $("."+classType+":first").before(html);
  main.anchorList=findClass(main.anchorArr); 
}

function insertAnchor(classType){
  $("."+classType+":not(.toc-head)").each(function(){
    toc.anchorList.push(prettyID($(this).text()));
    var html ="<a href=\"\" class=\"toc-a\"><div>"+$(this).text()+"</div></a>";
    $(".toc-body").append(html);
  });
}

function clickScrollTo(state){
  $(".toc-a").click(function(){
    state.scroll=toc.anchorList.indexOf(prettyID($(this).text()))+1;
    scrollToElement(state.anchorList[state.scroll]);
    return false;
  }); 
}

function prettyID(text){
  return text.trim().replace(/\W+/g,'-').toLowerCase();
}