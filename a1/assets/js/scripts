"use strict";


/*
    BOOKVERSE - SHARED JAVASCRIPT
*/


document.addEventListener("DOMContentLoaded", function () {

    setupBookFilters();

    setupGalleryModal();

    setupImageValidation();

    setupAddBookForm();

});


/*
    BOOK STATUS FILTER
    Uses the required data-status attribute.
*/

function setupBookFilters() {

    const filterButtons = document.querySelectorAll("[data-filter]");
    const bookRows = document.querySelectorAll("#booksTableBody tr");

    if (filterButtons.length === 0 || bookRows.length === 0) {
        return;
    }

    filterButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const selectedFilter = button.dataset.filter;

            filterButtons.forEach(function (item) {
                item.classList.remove("active");
            });

            button.classList.add("active");

            bookRows.forEach(function (row) {

                const bookStatus = row.dataset.status;

                if (
                    selectedFilter === "All" ||
                    bookStatus === selectedFilter
                ) {
                    row.style.display = "";
                } else {
                    row.style.display = "none";
                }

            });

        });

    });

}


/*
    GALLERY BOOTSTRAP MODAL
*/

function setupGalleryModal() {

    const galleryModal = document.getElementById("galleryModal");

    if (!galleryModal) {
        return;
    }

    galleryModal.addEventListener(
        "show.bs.modal",
        function (event) {

            const clickedButton = event.relatedTarget;

            if (!clickedButton) {
                return;
            }

            const imagePath = clickedButton.dataset.image;
            const imageTitle = clickedButton.dataset.title;

            const modalImage =
                document.getElementById("modalBookImage");

            const modalTitle =
                document.getElementById("galleryModalLabel");

            if (modalImage) {
                modalImage.src = imagePath;
                modalImage.alt = imageTitle + " cover";
            }

            if (modalTitle) {
                modalTitle.textContent = imageTitle;
            }

        }
    );

}


/*
    IMAGE FILE EXTENSION VALIDATION
*/

function setupImageValidation() {

    const imageInput = document.getElementById("image_path");
    const imageError = document.getElementById("imageError");

    if (!imageInput) {
        return;
    }

    imageInput.addEventListener("change", function () {

        const selectedFile = imageInput.files[0];

        if (!selectedFile) {
            return;
        }

        const fileName = selectedFile.name;

        const extension = fileName
            .split(".")
            .pop()
            .toLowerCase();

        const allowedExtensions = [
            "jpg",
            "jpeg",
            "png",
            "gif",
            "webp"
        ];

        if (!allowedExtensions.includes(extension)) {

            imageInput.value = "";

            if (imageError) {
                imageError.textContent =
                    "Invalid file type. Please select a JPG, JPEG, PNG, GIF or WEBP image.";
            }

            hideImagePreview();

            return;
        }

        if (imageError) {
            imageError.textContent = "";
        }

        showImagePreview(selectedFile);

    });

}


/*
    IMAGE PREVIEW
*/

function showImagePreview(file) {

    const previewContainer =
        document.getElementById("imagePreviewContainer");

    const previewImage =
        document.getElementById("imagePreview");

    if (!previewContainer || !previewImage) {
        return;
    }

    const reader = new FileReader();

    reader.addEventListener("load", function () {

        previewImage.src = reader.result;

        previewContainer.classList.remove("d-none");

    });

    reader.readAsDataURL(file);

}


function hideImagePreview() {

    const previewContainer =
        document.getElementById("imagePreviewContainer");

    const previewImage =
        document.getElementById("imagePreview");

    if (previewContainer) {
        previewContainer.classList.add("d-none");
    }

    if (previewImage) {
        previewImage.src = "";
    }

}


/*
    ADD BOOK FORM
*/

function setupAddBookForm() {

    const form = document.getElementById("addBookForm");

    if (!form) {
        return;
    }

    form.addEventListener("submit", function (event) {

        event.preventDefault();

        const imageInput =
            document.getElementById("image_path");

        const formMessage =
            document.getElementById("formMessage");

        if (!form.checkValidity()) {

            event.stopPropagation();

            form.classList.add("was-validated");

            if (formMessage) {
                formMessage.textContent =
                    "Please complete all required fields.";
                formMessage.classList.add("error");
            }

            return;
        }


        if (!imageInput || !imageInput.files.length) {

            if (formMessage) {
                formMessage.textContent =
                    "Please select a cover image.";
                formMessage.classList.add("error");
            }

            return;
        }


        const selectedFile =
            imageInput.files[0];

        const extension =
            selectedFile.name
                .split(".")
                .pop()
                .toLowerCase();

        const allowedExtensions = [
            "jpg",
            "jpeg",
            "png",
            "gif",
            "webp"
        ];


        if (!allowedExtensions.includes(extension)) {

            if (formMessage) {
                formMessage.textContent =
                    "Please select a valid image file.";
                formMessage.classList.add("error");
            }

            return;
        }


        if (formMessage) {

            formMessage.textContent =
                "Book information is valid. No data has been submitted because this is a static Assessment 1 form.";

            formMessage.classList.remove("error");
            formMessage.classList.add("success");

        }

    });

}