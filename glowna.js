let ktorezdjecie = 0;

var galeria = [];
galeria[0] = new Image();
galeria[0].src="../galery/e46.jpg";
galeria[1] = new Image();
galeria[1].src="../galery/lambo.jpg";
galeria[2] = new Image();
galeria[2].src="../galery/ship.jpg";

function nextimage(){
    console.log("nastepen zdjece");
    ktorezdjecie++;
    if(ktorezdjecie>2){ktorezdjecie=0}
    if(ktorezdjecie === 0){
        document.getElementById("zdjecieoferty").src = galeria[0].src;
    }
    if(ktorezdjecie === 1){
        document.getElementById("zdjecieoferty").src = galeria[1].src;
    }
    if(ktorezdjecie === 2){
        document.getElementById("zdjecieoferty").src = galeria[2].src;
    }
    console.log(ktorezdjecie);
}

function previmage(){
    console.log("wczesniejsze zdjecie");
    ktorezdjecie--;
    if(ktorezdjecie<0){ktorezdjecie=2}
    if(ktorezdjecie === 0){
        document.getElementById("zdjecieoferty").src = galeria[0].src;
    }
    if(ktorezdjecie === 1){
        document.getElementById("zdjecieoferty").src = galeria[1].src;
    }
    if(ktorezdjecie === 2){
        document.getElementById("zdjecieoferty").src = galeria[2].src;
    }
    console.log(ktorezdjecie);
}
    
function oferta1()
{
    document.getElementById("zdjecieoferty").src = galeria[0].src;
    let ktorezdjecie = 0;
}
function oferta2()
{
    document.getElementById("zdjecieoferty").src = galeria[1].src;
    let ktorezdjecie = 1;
}
function oferta3()
{
    document.getElementById("zdjecieoferty").src = galeria[2].src;
    let ktorezdjecie = 2;
}