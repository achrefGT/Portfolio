$(document).ready(function() {
function verifdate() {
    const inputDate = new Date($('#dateNaissance').val());
    const currentDate = new Date();

    if (inputDate >= currentDate) {
        alert("La date de naissance doit être dans le passé.");
        $('#dateNaissance').val(''); 
    }
}


    let contacts = JSON.parse(localStorage.getItem('contacts')) || [];

    function enregistreContacts() {
        localStorage.setItem('contacts', JSON.stringify(contacts));
    }

    function construitTable(tableauDeContacts) {
        $('#contacts tbody').html('');
        let i=0;
        tableauDeContacts.forEach(function(contact) {
            let row = `<tr>
                    <td><img src="document.png" alt="document" class="drag-icon" draggable="true"></td>
                    <td>${contact.prenom}</td>
                    <td>${contact.nom}</td>
                    <td>${contact.telephone}</td>
                    <td>${contact.email}</td>
                    <td>${contact.dateNaissance}</td>
                    <td>${contact.nombreEnfants}</td>
                    <td><img src="delete.jpg" alt="Supprimer" class="delete-icon" id="del${i++}"></td>
                 </tr>`;


            $('#contacts tbody').append(row);
        });
    }

    function supprimeContact(index) {
        contacts.splice(index, 1); 
        enregistreContacts(); 
        construitTable(contacts);
    }
    
    $(document).on('click', '.delete-icon', function() {
        let index = $(this).attr('id').replace('del', ''); 
        supprimeContact(index);
    });
    
    $('.drag-icon').on('dragstart', function(event) {
        const index = $(this).closest('tr').index(); 
        event.originalEvent.dataTransfer.setData("text/plain", index); 
    });
    
    $('#poubelle').on('drop', function(event) {
        event.preventDefault();
        const index = event.originalEvent.dataTransfer.getData("text"); 
        supprimeContact(index); 
        audio = new Audio('poubelleSound.mp3');
        audio.play();
    });

    $('#poubelle').on('dragover', function(event) {
        event.preventDefault();
    });
        

    $('#formContacts form').submit(function(e) {
        e.preventDefault();
        let contact = {
            nom: $('#nom').val(),
            prenom: $('#prenom').val(),
            telephone: $('#telephone').val(),
            email: $('#email').val(),
            dateNaissance: $('#dateNaissance').val(),
            nombreEnfants: $('input[type="range"]').val()
        };
        contacts.push(contact);
        enregistreContacts();
        construitTable(contacts);
        $(this).trigger("reset");
    });

    construitTable(contacts);

   
});
