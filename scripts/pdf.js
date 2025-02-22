// Select elements
const openModalBtn = document.querySelector(".bio__resume");
const modal = document.querySelector(".modal");
const closeModalBtn = document.querySelector(".resume__close");
const closeModalFooterBtn = document.querySelector(".resume__close-btn");
const canvas = document.getElementById("pdfCanvas");
const downloadBtn = document.querySelector(".resume__download-btn");

// URL of the PDF file
const pdfUrl = '../files/Resume.pdf'; // Replace with your PDF file path

// Function to open the modal and render the PDF
function openModal() {
    modal.style.display = "block";
    renderPDF(pdfUrl);
}

// Function to render the PDF
function renderPDF(url) {
    pdfjsLib.getDocument(url).promise.then(function (pdf) {
        // Render the first page of the PDF
        pdf.getPage(1).then(function (page) {
            const scale = 1.5; // Adjust the scale
            const viewport = page.getViewport({ scale: scale });

            // Get canvas context
            const context = canvas.getContext('2d');
            
            // Set canvas size
            canvas.height = viewport.height;
            canvas.width = viewport.width;

            // Render the page on the canvas
            page.render({ canvasContext: context, viewport: viewport });
        });
    });
}

// Close the modal when the close button is clicked
closeModalBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

// Close the modal from the footer button
closeModalFooterBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

// Trigger PDF download
downloadBtn.addEventListener("click", () => {
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = "resume.pdf"; // Default name for download
    link.click();
});

openModalBtn.addEventListener("click", () => {
  openModal();
})
