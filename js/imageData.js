var source;
$("#siteImg").on("change",function(e){
  for (var i = 0; i < e.originalEvent.srcElement.files.length; i++) {
    var file = e.originalEvent.srcElement.files[i];
        
    // image operation
    var reader = new FileReader();
    reader.onloadend = function() {
        source = String(reader.result);
    }
    reader.readAsDataURL(file);
    };
})


//save bookmark
function addBookmark(){
    // set variables
    var siteName = document.getElementById("siteName").value;
    var siteURL = document.getElementById("siteURL").value;
    var siteImg = source;

    if(!validateForm(siteName, siteURL)){
        return false;
    }

    var bookmark = {
        name: siteName,
        url : siteURL,
        img : siteImg
    };

    if(localStorage.getItem("bookmarks") === null){
        var bookmarks = [];
        bookmarks.push(bookmark);
        localStorage.setItem("bookmarks",JSON.stringify(bookmarks));
    }else{
        var bookmarks = JSON.parse(localStorage.getItem("bookmarks"));
        bookmarks.push(bookmark);
        localStorage.setItem("bookmarks",JSON.stringify(bookmarks));
    }
    fetchBookmarks();
};

fetchBookmarks();


function fetchBookmarks(){
    var bookmarks = JSON.parse(localStorage.getItem("bookmarks"));
    var tabs = document.getElementById("tabs");

    tabs.innerHTML = "";
    for(var i=0; i < bookmarks.length; i++){
        var name = bookmarks[i].name;
        var url = bookmarks[i].url;
        var img = bookmarks[i].img;
        var book_mark_box = '<div id ="' + name + '" class ="bookmark-box">' +
                            '<div class="tab_image">' +
                            '<a href ="' + addhttp(url) +
                            '" target = "_blank" ' +
                            'data-toggle="tooltip" ' +
                            'title=' + name + '>' +
                            '<img src='+ img +'>' + 
                            '</a>' +
                            '<i class="fas fa-times" title="remove" onclick="deleteBookmark(\''+url+'\')"></i>' +
                            '</div>' +
                            '</div>';
        tabs.innerHTML += book_mark_box;
    };

}
function validateForm(siteName, siteURL){
  if(!siteName || !siteURL){
    alert('Please fill in the form');
    return false;
  }

  var expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
  var regex = new RegExp(expression);

  if(!siteURL.match(regex)){
    alert('Please use a valid URL');
    return false;
  }
  return true;
}

function addhttp(url) {
  if (!/^(?:f|ht)tps?\:\/\//.test(url)) {
      url = "http://" + url;
  }
  return url;
}


