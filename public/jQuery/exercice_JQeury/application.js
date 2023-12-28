// L'efficacité du travail a été améliorée en ajoutant event.preventDefault() et
// en affichant le contenu lorsqu'on clique sur un bouton d'exercice.


$(document).ready(function(){ 
    $('#btn_Exe_1').click(function(event) {
        event.preventDefault();
        if($('#Exe1').is(':hidden')){
          //  $('#Exe1').show();
            alert('Element cache');
        }
        else{
          //  $('#Exe1').hide();
            alert('Element visible');
        }
        $('#Exe1').toggle();
    });
   
    $('#btn_Exe_2').click(function(event) {     
        event.preventDefault();   
        $('#Exe2').show();
        $('#Exe2 :button').click(() => {
            let contenuTextarea = $('textarea').val();
            alert(contenuTextarea);
        });
    });

    $('#btn_Exe_3').click(function(event) {    
        event.preventDefault();   
        $('#Exe3'). show();
        $('#img_3').attr("src","image3.2.png");
    });
   
    $('#btn_Exe_4').click(function(event) { 
        event.preventDefault();
        $('#Exe4'). show();    
        $('#Exe4').css('transform', 'rotate(180deg)');
        $('#Exe4').css('text-shadow', '2px 2px 4px #000');
    });

    $('#btn_Exe_5').click(function(event) {  
        event.preventDefault();
        $('#Exe5'). show();
        $('#img_4').hover(()=> {
            $('#img_4').css("opacity","0.5");   
        })
    });

    $('#btn_Exe_6').click(function(event) { 
        event.preventDefault();
        $('#Exe6'). show();
        $('#Exe6').html(
            '<input type="radio" id="1ere" name="rd_ex6" value="1ere">' +
            '<label for="1ere">1ere</label>' +
            '<input type="radio" id="2ieme" name="rd_ex6" value="2ieme">' +
            '<label for="2ieme">2ieme</label>' +
            '<input type="radio" id="3ieme" name="rd_ex6" value="3ieme">' +
            '<label for="3ieme">3ieme</label>'
        );
    });

    $('#btn_Exe_7').click(function(event) {    
        event.preventDefault();
        $('#Exe7'). show();
        let valueRd = $('input[name="rd_ex6"]:checked').val();
        alert(valueRd);
    });

    $('#btn_Exe_8').click(function(event) {   
        event.preventDefault();
        $('#Exe8'). show();
        $('#Exe8').html(
            '<label for="accord">Accord sur les règles et droits du site </label>' +
            '<input type="checkbox" id="chk_ex" name="accord_ex8" value="accord">'
        );
    });
    
    $('#btn_Exe_9').click(function(event) {
        event.preventDefault();
        $('#Exe9'). show();
        let bip = new Audio("bip.mp3");
        let valueChk = $('input[name="accord_ex8"]:checked').val();
        valueChk ? alert(valueChk) : bip.play();
    });

    $('#btn_Exe_10').click(function(event) {   
        event.preventDefault();
        $('#Exe10'). show();
        $('td[id^="Exe"]').hide();
       // $('td:even').hide();
    });
        
});