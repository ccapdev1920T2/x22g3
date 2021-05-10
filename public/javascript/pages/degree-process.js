var requestDocumentButton = document.getElementById("request-document-btn");
var requestDocumentOption = docement.getElementById("documentType");
var requestDocumentForm = document.getElementById("documentform")

requestDocumentForm.onsubmit = function (e){
    axios
    .post("/api/document-request/new", {
        documentType: requestDocumentOption.value
    })
    .then(function (response){
        alert("Sent");
    })
    .catch(function (err) {
        console.log(err);
      });
    
}

