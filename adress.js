fetch("https://jsonplaceholder.typicode.com/users/1")
    .then(antwortvomserver => antwortvomserver.json() )
    .then(datensatz => felderholen(datensatz))
    .catch(fehler => document.getElementById("Adressregisterfehler").innerHTML=fehler.message)
    
    function felderholen(datensatz){
        console.log(datensatz)
        document.getElementById("Adressnummer"      ).value = datensatz.id
        document.getElementById("Vorname/Nachname"  ).value = datensatz.name
        document.getElementById("Benutername"       ).value = datensatz.username
        document.getElementById("Email"             ).value = datensatz.email
        document.getElementById("Strasse"           ).value = datensatz.address.street
        document.getElementById("Hausnummer"        ).value = datensatz.address.suite
        document.getElementById("Stadt"             ).value = datensatz.address.city
        document.getElementById("PLZ"               ).value = datensatz.address.zipcode
        document.getElementById("Längengrad"        ).value = datensatz.address.geo.lat
        document.getElementById("Breitengrad"       ).value = datensatz.address.geo.lng
        document.getElementById("Telefon"           ).value = datensatz.phone
        document.getElementById("Webseite"          ).value = datensatz.website
        document.getElementById("Firmenname"        ).value = datensatz.company.name
        document.getElementById("Werbespruch"       ).value = datensatz.company.catchPhrase
        document.getElementById("Bemerkung"         ).value = datensatz.company.bs
    }
