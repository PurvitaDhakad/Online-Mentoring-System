const navBar = document.querySelector("nav"),
       menuBtns = document.querySelectorAll(".menu-icon"),
       overlay = document.querySelector(".overlay");
     menuBtns.forEach((menuBtn) => {
       menuBtn.addEventListener("click", () => {
         navBar.classList.toggle("open");
       });
     });
     overlay.addEventListener("click", () => {
       navBar.classList.remove("open");
     });
     
$(document).ready(function(){
$('[data-toggle="tooltip"]').tooltip();
});


function exportToPDF() {
    var doc = new jsPDF();
    doc.text("Report", 10, 10); // Add a title

    // Convert table to canvas and add it to PDF
    var table = document.querySelector("table");
    var canvas = document.createElement("canvas");
    canvas.width = table.offsetWidth;
    canvas.height = table.offsetHeight;
    var context = canvas.getContext("2d");
    var rows = table.querySelectorAll("tr");
    var imageData;
    rows.forEach(function(row, index) {
        var y = index * row.offsetHeight;
        context.drawImage(row, 0, y, row.offsetWidth, row.offsetHeight);
    });
    imageData = canvas.toDataURL("image/jpeg", 1.0);
    doc.addImage(imageData, "JPEG", 10, 20);

    // Save the PDF
    doc.save("report.pdf");
}
document.getElementById("fileInput").addEventListener("change", function(event) {
    var file = event.target.files[0];
    var reader = new FileReader();
    reader.onload = function(event) {
        var imageUrl = event.target.result;
        var img = document.createElement("img");
        img.src = imageUrl;
        document.getElementById("preview").innerHTML = "";
        document.getElementById("preview").appendChild(img);
    };
    reader.readAsDataURL(file);
});
