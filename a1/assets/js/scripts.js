"use strict";

document.addEventListener("DOMContentLoaded", function () {
    setupBookFilters();
    setupGalleryModal();
    setupImageValidation();
    setupAddBookForm();
});

function setupBookFilters() {
    const buttons = document.querySelectorAll("[data-filter]");
    const rows = document.querySelectorAll("#booksTableBody tr");

    buttons.forEach(function (button) {
        button.addEventListener("click", function () {
            const filter = button.dataset.filter;

            buttons.forEach(function (item) {
                item.classList.remove("active", "btn-primary-custom");
                item.classList.add("btn-outline-custom");
            });

            button.classList.add("active", "btn-primary-custom");
            button.classList.remove("btn-outline-custom");

            rows.forEach(function (row) {
                row.classList.toggle(
                    "d-none",
                    filter !== "all" && row.dataset.status !== filter
                );
            });
        });
    });
}

function setupGalleryModal() {
    const modalImage = document.querySelector("#modalImage");
    const modalTitle = document.querySelector("#imageModalLabel");

    document.querySelectorAll("[data-gallery-image]").forEach(function (item) {
        item.addEventListener("click", function () {
            modalImage.src = item.dataset.galleryImage;
            modalImage.alt = item.dataset.galleryTitle + " book cover";
            modalTitle.textContent = item.dataset.galleryTitle;
        });
    });
}

function setupImageValidation() {
    const imageInput = document.querySelector("#bookImage");
    const imageError = document.querySelector("#imageError");

    if (!imageInput) {
        return;
    }

    imageInput.addEventListener("change", function () {
        const file = imageInput.files[0];

        if (!file) {
            hideImagePreview();
            return;
        }

        const extension = file.name.split(".").pop().toLowerCase();
        const validExtensions = ["jpg", "jpeg", "png", "gif"];

        if (!validExtensions.includes(extension)) {
            imageInput.value = "";
            imageError.textContent = "Please select a JPG, JPEG, PNG or GIF image.";
            hideImagePreview();
            return;
        }

        imageError.textContent = "";
        showImagePreview(file);
    });
}

function showImagePreview(file) {
    const preview = document.querySelector("#imagePreview");

    if (!preview) {
        return;
    }

    preview.src = URL.createObjectURL(file);
    preview.classList.remove("d-none");
}

function hideImagePreview() {
    const preview = document.querySelector("#imagePreview");

    if (preview) {
        preview.src = "";
        preview.classList.add("d-none");
    }
}

function setupAddBookForm() {
    const form = document.querySelector("#addBookForm");
    const message = document.querySelector("#formMessage");

    if (!form) {
        return;
    }

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        if (!form.checkValidity()) {
            event.stopPropagation();
            form.classList.add("was-validated");
            return;
        }

        message.textContent = "Book added successfully.";
        message.className = "alert alert-success";
        form.reset();
        form.classList.remove("was-validated");
        hideImagePreview();
    });
}