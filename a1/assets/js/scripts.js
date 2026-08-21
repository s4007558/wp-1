"use strict";

let previewUrl = "";

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
            const selectedFilter = button.dataset.filter;

            buttons.forEach(function (item) {
                item.classList.remove("active", "btn-primary-custom");
                item.classList.add("btn-outline-custom");
            });

            button.classList.add("active", "btn-primary-custom");
            button.classList.remove("btn-outline-custom");

            rows.forEach(function (row) {
                const matchesFilter =
                    selectedFilter === "all" ||
                    row.dataset.status === selectedFilter;

                row.classList.toggle("d-none", !matchesFilter);
            });
        });
    });
}

function setupGalleryModal() {
    const modalImage = document.querySelector("#modalImage");
    const modalTitle = document.querySelector("#imageModalLabel");
    const galleryItems = document.querySelectorAll("[data-gallery-image]");

    if (!modalImage || !modalTitle) {
        return;
    }

    galleryItems.forEach(function (item) {
        item.addEventListener("click", function () {
            const title = item.dataset.galleryTitle;

            modalImage.src = item.dataset.galleryImage;
            modalImage.alt = title + " book cover";
            modalTitle.textContent = title;
        });
    });
}

function setupImageValidation() {
    const imageInput = document.querySelector("#bookImage");
    const imageError = document.querySelector("#imageError");

    if (!imageInput || !imageError) {
        return;
    }

    imageInput.addEventListener("change", function () {
        const file = imageInput.files[0];
        const validExtensions = ["jpg", "jpeg", "png", "gif"];

        imageError.textContent = "";

        if (!file) {
            hideImagePreview();
            return;
        }

        const fileParts = file.name.toLowerCase().split(".");
        const extension = fileParts[fileParts.length - 1];

        if (!validExtensions.includes(extension)) {
            imageInput.value = "";
            imageError.textContent =
                "Please select a JPG, JPEG, PNG or GIF image.";
            hideImagePreview();
            return;
        }

        showImagePreview(file);
    });
}

function showImagePreview(file) {
    const preview = document.querySelector("#imagePreview");

    if (!preview) {
        return;
    }

    if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
    }

    previewUrl = URL.createObjectURL(file);
    preview.src = previewUrl;
    preview.classList.remove("d-none");
}

function hideImagePreview() {
    const preview = document.querySelector("#imagePreview");

    if (!preview) {
        return;
    }

    if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
        previewUrl = "";
    }

    preview.src = "";
    preview.classList.add("d-none");
}

function setupAddBookForm() {
    const form = document.querySelector("#addBookForm");
    const message = document.querySelector("#formMessage");

    if (!form || !message) {
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