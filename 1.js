var nut_tt = document.querySelectorAll('.tintuc');
var slides = document.querySelectorAll('.ndslide ul li')
var nut =document.querySelectorAll('.nutchuyen ul li');
for (let i = 0; i < nut_tt.length; i++) {
    nut_tt[i].onclick = function(){
        var dt = this.getAttribute('data-show');
        var tt_tintuc = document.getElementById(dt);
        tt_tintuc.classList.toggle('active');
    } 
}
for (let a = 0; a < nut.length; a++) {
    nut[a].onclick=function(){
        for (let k = 0; k < nut.length; k++) {
            nut[k].classList.remove('active2');
        }
        this.classList.add('active2');
        var nutactive =this;
        var vt = 0;
        for (vt = 0; nutactive=nutactive.previousElementSibling; vt++) {}
        console.log('vi tri='+vt);
        for (i = 0; i < slides.length; i++) {
            slides[i].classList.remove('active2');
            slides[vt].classList.add('active2');
        }
    }
}
autoSlide();
function autoSlide(){
    var thoigian = setInterval(function(){
        var vtslide = 0;
        var slidehientai = document.querySelector('.ndslide ul li.active2');
        for(var vtslide =0; slidehientai=slidehientai.previousElementSibling;vtslide++){}
        if(vtslide<(slides.length-1)){
            for(var i=0; i<slides.length;i++){
                slides[i].classList.remove('active2');
                nut[i].classList.remove('active2');
            }
            slides[vtslide].nextElementSibling.classList.add('active2');
            nut[vtslide].nextElementSibling.classList.add('active2');
        }
        else{
            for(var  i = 0; i<slides.length;i++){
                slides[i].classList.remove('active2');
                nut[i].classList.remove('active2')
            }
            slides[0].classList.add('active2');
            nut[0].classList.add('active2')
        }
    },5000)
}