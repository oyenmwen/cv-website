AOS.init();
function swapStyleSheet(){
  if(document.getElementById('pagestyle').getAttribute('href')=='public/css/styles.css' ){
document.getElementById('pagestyle').setAttribute('href','public/css/dark.css' );
$('#icon').attr('data-icon','icomoon-free:sun');
document.getElementById('icon').setAttribute('data-icon','icomoon-free:sun' );

}
else{
document.getElementById('pagestyle').setAttribute('href','public/css/styles.css' );
document.getElementById('icon').setAttribute('data-icon','uil:moon' );
}
}
