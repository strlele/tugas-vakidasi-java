// Validasi form contact di index.html
function validateContactForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;

    var nameRegex = /^[A-Za-z\s]+$/;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!nameRegex.test(name)) {
        alert("Harap masukkan nama yang valid.");
        document.getElementById("name").focus();
        return false;
    }

    if (!emailRegex.test(email)) {
        alert("Harap masukkan email yang valid.");
        document.getElementById("email").focus();
        return false;
    }

    if (subject.trim() === "") {
        alert("Harap masukkan subjek.");
        document.getElementById("subject").focus();
        return false;
    }

    if (message.trim() === "") {
        alert("Harap masukkan pesan.");
        document.getElementById("message").focus();
        return false;
    }

    return true;
}

document.getElementById("contactForm").onsubmit = validateContactForm;

// Validasi form peminjaman buku di pinjam.html
function validateLoanForm() {
    var name = document.getElementById("nameform").value;
    var phoneNumber = document.getElementById("number").value;
    var classSelect = document.getElementById("class").value;
    var major = document.getElementById("major").value;
    var bookTitle = document.getElementById("bookTitle").value;
    var classificationNumber = document.getElementById("classificationNumber").value;
    var date = document.getElementById("date").value;

    var nameRegex = /^[A-Za-z\s]+$/;
    var phoneRegex = /^\d{12,15}$/;
    var classificationRegex = /^[0-9.]+$/; 

    if (!nameRegex.test(name)) {
        alert("Harap masukkan nama yang valid (hanya huruf).");
        document.getElementById("nameform").focus();
        return false;
    }

    if (!phoneRegex.test(phoneNumber)) {
        alert("Harap masukkan nomor telepon yang valid.");
        document.getElementById("number").focus();
        return false;
    }

    if (classSelect === "") {
        alert("Harap pilih kelas.");
        document.getElementById("class").focus();
        return false;
    }

    if (major === "") {
        alert("Harap pilih kejuruan.");
        document.getElementById("major").focus();
        return false;
    }

    if (bookTitle.trim() === "") {
        alert("Harap masukkan judul buku.");
        document.getElementById("bookTitle").focus();
        return false;
    }

    if (!classificationRegex.test(classificationNumber)) {
        alert("Harap masukkan nomor klasifikasi yang valid (hanya angka dan titik).");
        document.getElementById("classificationNumber").focus();
        return false;
    }

    if (date === "") {
        alert("Harap masukkan tanggal peminjaman.");
        document.getElementById("date").focus();
        return false;
    }

    alert("Berhasil Terkirim");
    return true;
}
