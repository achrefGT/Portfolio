function moyenne(frm) {
    var n1=frm.note1.value;
    var n2=frm.note2.value;
    var n3=frm.note3.value;
    var c1=frm.coef1.value;
    var c2=frm.coef2.value;
    var c3=frm.coef3.value;
    var moy= (parseInt(n1) * parseInt(c1) + parseInt(n2) * parseInt(c2) + parseInt(n3) * parseInt(c3))/(parseInt(c1)+parseInt(c2)+parseInt(c3))
    alert(moy)

}