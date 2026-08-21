# COSC2446 Web Programming – Assessment 1
# BookVerse Online Bookstore Platform

## Student Details

| Item | Details |
|---|---|
| Joseph Saba |
| s4007558 |
| https://github.com/s4007558/wp-1
| https://jupiter.csit.rmit.edu.au/~s4007558/wp/a1/|

---

## 1. Purpose of This README

This README documents the Assessment 1 project and should be completed by the student.

It is used to:

- summarise the project;
- explain the structure and technical choices;
- document testing and deployment;
- support marking of documentation and submission quality;
- help AI tools such as GitHub Copilot follow the assessment requirements.

TODO: After completing the project, update every TODO section in this file.

---

## 2. Copilot and AI Coding Instructions

This section must be completed by the student after reading the Assessment 1 brief.

Write clear instructions that would help GitHub Copilot or another AI tool produce code that follows the Assessment 1 requirements.

Your instructions should help the AI understand what it is allowed to generate, what it must not generate, and which assessment constraints must be followed.

TODO: Include instructions about:

- allowed technologies;
- technologies, frameworks, or tools that must not be used;
- required files and folders;
- CSS and JavaScript file requirements;
- whether inline CSS or inline JavaScript is allowed;
- Bootstrap layout requirements;
- form requirements;
- image validation requirements;
- gallery modal requirements;
- book status filtering requirements;
- accessibility and usability expectations;
- AI usage and process-evidence requirements.

### My Copilot / AI instructions

TODO: Write your Copilot/AI instructions here in clear bullet points.
---

## 3. Project Overview
BookVerse is a static online bookstore website for browsing and viewing books. Users can browse book information, filter books by status, view book covers in a gallery, and complete an Add Book form. The website uses HTML5, CSS3, Bootstrap 5, JavaScript, Google Fonts, and Material Icons. No backend or database is used for this assessment.

---

## 4. Website Structure

Complete the table below by describing the purpose of each page.

| File | Purpose |
|---|---|
| `index.html` | Homepage featuring a Bootstrap carousel and responsive cards for selected books. |
| `books.html` | Displays all books in a table and allows users to filter them by availability status using JavaScript. |
| `gallery.html` | Displays book covers in a responsive grid and opens each cover in a Bootstrap modal when selected. |
| `add.html` | Provides a required form for entering book details, validating the cover image extension, and previewing the selected image. |
---

## 5. Project Folder Structure

Show the final structure of your `a1` folder.

TODO: Update this structure if your final project contains additional required files or folders.

```text
a1/
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── scripts.js
│   └── images/
│       └── covers/
├── index.html
├── books.html
├── gallery.html
├── add.html
├── README.md
└── process-evidence.md
```

## 6. Technologies Used

Complete the table below. Explain how each technology was used in your project.

| Technology | How it was used |
|---|---|
| HTML5 | Page structure, navigation, tables, gallery, forms, and semantic content |
| CSS3 | Shared colours, typography, spacing, cards, status labels, and responsive styling |
| Bootstrap 5 | Responsive layout, navigation, carousel, buttons, grid, table, and modal |
| JavaScript | Status filters, gallery modal content, image validation, image preview, and form feedback |
| Google Fonts | Righteous for headings and Elms Sans for body text |
| Material Icons | Book icon used in the navigation brand |
| GitHub | Version control and repository hosting |
| Coreteaching server | Deployment of the completed static website |
| AI tools | Used for code suggestions, debugging support, and documentation assistance |


## 7. Design and Layout

Based on the assessment document, describe the design and layout choices.

The website uses teal and amber as its main brand colours. The primary teal colour is used for navigation, buttons, headings, and interactive elements. Amber is used for accents and focus indicators. Righteous is used for headings and the navbar brand, while Elms Sans is used for body text, labels, navigation links, and buttons.

Bootstrap provides the responsive container, grid, navigation, carousel, table, form, and modal components. Material Icons provide a consistent book icon in the navigation brand. The layout adapts to smaller screens using Bootstrap breakpoints and custom responsive CSS.

## 8. Required Features

Complete the table below by explaining where and how each required feature should be implemented.

| Feature | Page | Explanation |
|---|---|---|
| Carousel | `index.html` | Displays four static book images using a Bootstrap carousel |
| Responsive book layout | `index.html` | Displays featured books in a responsive Bootstrap grid |
| Book table | `books.html` | Shows book titles, authors, genres, prices, and statuses |
| Status filter | `books.html` | JavaScript filters rows by book status |
| Gallery grid | `gallery.html` | Displays book covers in a responsive grid |
| Bootstrap image modal | `gallery.html` | Opens the selected cover in a Bootstrap modal |
| Add Book form | `add.html` | Provides all required book information fields |
| Image validation | `add.html` | Checks the selected file extension using JavaScript |
| Image preview | `add.html` | Displays a preview of a valid selected image |

## 9. JavaScript Functionality

Describe the JavaScript features that should be implemented in your website.

| JavaScript feature | Page | How it works |
|---|---|---|
| Image extension validation | `add.html` | Accepts JPG, JPEG, PNG, and GIF files only |
| Image preview | `add.html` | Creates a temporary object URL and displays the selected image |
| Gallery modal | `gallery.html` | Copies the selected image and title into the Bootstrap modal |
| Book status filter | `books.html` | Shows or hides table rows according to their `data-status` value |

## 10. Form Validation

Describe the validation that should be used on the Add Book form.

TODO: Explain:

which fields are required;
how labels are associated with form fields;
which input types were used;
how the image file type is checked;
which image file extensions are accepted;
how the image preview works;
what feedback the user receives if the selected file is invalid.

## 11. Accessibility and Usability

Briefly describe what accessibility and usability features must be implemented.

TODO: Mention relevant items such as:

meaningful page titles;
semantic HTML;
form labels;
image alt text;
consistent navigation;
readable text;
colour contrast;
responsive layout;
clear user feedback.

## 12. Testing and Validation

Complete this section after testing your website.

HTML Validation
File	Result	Notes
index.html	TODO: Pass / Issues found	TODO
books.html	TODO: Pass / Issues found	TODO
gallery.html	TODO: Pass / Issues found	TODO
add.html	TODO: Pass / Issues found	TODO

CSS Validation
File	Result	Notes
assets/css/style.css	TODO: Pass / Issues found	TODO

Functionality Testing
Feature tested	Result	Notes
Navigation links	TODO	TODO
Carousel	TODO	TODO
Gallery modal	TODO	TODO
Book status filter	TODO	TODO
Add Book form validation	TODO	TODO
Image preview	TODO	TODO
Deployed site links/assets	TODO	TODO

## 13. Deployment

Provide details of your deployed website.

| Item | Details |
|---|---|
| Deployed website URL | https://jupiter.csit.rmit.edu.au/~s4007558/wp/a1/ |
| Coreteaching server | jupiter.csit.rmit.edu.au |
| Deployment folder | ~/public_html/wp/a1/ |
| `.htaccess` location | Not used |

The deployed website was tested by opening each page directly and using the navigation links. The carousel, gallery modal, status filters, form validation, and image preview were checked on the deployed version. Asset paths were also checked to confirm that styles, scripts, fonts, and images loaded correctly.

## 14. Git and Development Process

Briefly describe how you used Git during the project.

Git was used to record progressive development throughout the project. Commits were made after implementing page structure, styling, navigation, gallery functionality, form validation, and JavaScript features. Commit messages describe the changes made and are linked to the relevant records in `process-evidence.md`.


## 15. AI Use Declaration

AI tools are required for this assessment.

Confirm the following:
- [ ] I used AI tools meaningfully during this assessment.
- [ ] I recorded meaningful AI use in `process-evidence.md`.
- [ ] I reviewed, tested, and adapted AI-assisted output.
- [ ] I can explain all AI-assisted code submitted.

TODO: Write 2–5 sentences.

Detailed AI usage records must be included in process-evidence.md.

## 16. Process Evidence

Confirm that your process evidence file has been completed.

Requirement	Completed?
process-evidence.md file included	TODO: Yes / No
At least 2 debugging records included	TODO: Yes / No
At least 2 meaningful AI usage records included	TODO: Yes / No
Relevant commit links included	TODO: Yes / No

## 17. Known Issues or Limitations

List any known issues or limitations in your submitted project.

Issue or limitation	Explanation
TODO	TODO
TODO	TODO

If there are no known issues, write:

> No known issues at the time of submission.
