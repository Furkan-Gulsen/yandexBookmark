$("#addBookmark").click(function(){
    $("#add_box").slideToggle(400);
})

$("#customize_layout").click(function(){
     $(".fa-times").css("opacity","1")
})

var background = document.getElementById("backgrounds_gallery");
background.addEventListener("click",backgroundChange);

var i;

function backgroundChange(){
    var back = document.querySelector(".container-fluid");
    
    console.log(i)
    if(i == undefined){
        back.style.background = "url('https://wallpaper.wiki/wp-content/uploads/2017/05/Fire-Planet-Space-Fancy-Wallpaper-Free.jpg')";
        back.style.width = "auto";
        back.style.height = "100vh";
        back.style.backgroundSize = "cover";
        i = 1;
    }else if(i == 1 ){
        back.style.background = "url('https://wallpaperstock.net/wallpapers/thumbs1/45988wide.jpg')";
        back.style.width = "auto";
        back.style.height = "100vh";
        back.style.backgroundSize = "cover";
        i ++;
    }else if(i == 2){
        back.style.background = "url('https://www.edubuntu.org/sites/default/files/docimages/wallpapers-oneiric/Stalking_Ocelot_by_Sayantan_Chaudhuri-full.jpg')";
        back.style.width = "auto";
        back.style.height = "100vh";
        back.style.backgroundSize = "cover";
        i ++;
    }else if(i == 3 ){
        back.style.background = "url('https://galeri14.uludagsozluk.com/762/gok-girsin-kizil-ciksin_1603707.jpg')";
        back.style.width = "auto";
        back.style.height = "100vh";
        back.style.backgroundSize = "cover";
        i = undefined;
    }
    
}