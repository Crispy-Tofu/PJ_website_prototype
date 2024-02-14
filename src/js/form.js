// // MORE INFO SUBSECTION

const priceListTrigger = document.getElementById("pricelist-trigger");
const priceListSection = document.getElementById("pricelist-section");

priceListTrigger.addEventListener("click", () => {
  if (priceListSection.classList.contains("pricelist-section-hidden")) {
    priceListSection.classList.remove("pricelist-section-hidden");
    priceListTrigger.firstElementChild.innerText = "Hide price list";
  } else {
    priceListSection.classList.add("pricelist-section-hidden");
    priceListTrigger.firstElementChild.innerText = "Click for our price list";
  }
});

priceListTrigger.addEventListener("keypress", (event) => {
  if (event.key === " " || event.key === "Enter") {
    if (priceListSection.classList.contains("pricelist-section-hidden")) {
      priceListSection.classList.remove("price-list-section-hidden");
      priceListTrigger.firstElementChild.innerText = "Hide price list";
    } else {
      priceListSection.classList.add("price-list-section-hidden");
      priceListTrigger.firstElementChild.innerText = "Click for our price list";
    }
  }
});

// PRODUCT SELECTION

const generalInfo = document.getElementById("general-info");

const subquestionsArray = document.getElementsByClassName("subquestions");

const flyerInput = document.getElementById("flyers");
const flyerSubquestions = document.getElementById("flyers-selected");

const posterInput = document.getElementById("posters");
const posterSubquestions = document.getElementById("posters-selected");

const buttonInput = document.getElementById("buttons");
const buttonSubquestions = document.getElementById("buttons-selected");

const zinesInput = document.getElementById("zines");
const zinesSubquestions = document.getElementById("zines-selected");

const booksInput = document.getElementById("books");
const booksSubquestions = document.getElementById("books-selected");

flyerInput.addEventListener("click", () => {
  for (i = 0; i < subquestionsArray.length; i++) {
    subquestionsArray[i].classList.add("hidden");
  }
  flyerSubquestions.classList.remove("hidden");
  generalInfo.classList.remove("hidden");
});

posterInput.addEventListener("click", () => {
  for (i = 0; i < subquestionsArray.length; i++) {
    subquestionsArray[i].classList.add("hidden");
  }
  posterSubquestions.classList.remove("hidden");
  generalInfo.classList.remove("hidden");
});

buttonInput.addEventListener("click", () => {
  for (i = 0; i < subquestionsArray.length; i++) {
    subquestionsArray[i].classList.add("hidden");
  }
  buttonSubquestions.classList.remove("hidden");
  generalInfo.classList.remove("hidden");
});

zinesInput.addEventListener("click", () => {
  for (i = 0; i < subquestionsArray.length; i++) {
    subquestionsArray[i].classList.add("hidden");
  }
  zinesSubquestions.classList.remove("hidden");
  generalInfo.classList.remove("hidden");
});

booksInput.addEventListener("click", () => {
  for (i = 0; i < subquestionsArray.length; i++) {
    subquestionsArray[i].classList.add("hidden");
  }
  booksSubquestions.classList.remove("hidden");
  generalInfo.classList.remove("hidden");
});

const productOptions = document.querySelectorAll(
  "input[name='product-options']"
);

for (option of productOptions) {
  option.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      for (i = 0; i < subquestionsArray.length; i++) {
        subquestionsArray[i].classList.add("hidden");
      }
    }
  });
}

// SUBSELECTION

const dropdownbtn = document.querySelectorAll(".dropdownbtn");
const dropdown = document.querySelector(".dropdown-content");
const formSection = document.querySelectorAll(".form-section-drop");
const inputBtn = document.querySelectorAll(".inputbtn");
const inputs = document.querySelectorAll("input");
const arrows = document.querySelectorAll(".paperdropdown__arrow");

for (let j = 0; j < dropdownbtn.length; j++) {
  dropdownbtn[j].addEventListener("click", (event) => {
    if (event.target.getAttribute("data-status") === "open") {
      closeMenu(event);
      //close menu
    } else {
      // close all other menus
      closeAllMenus();

      //open clicked menu
      openMenu(event);
    }
  });
}

for (let j = 0; j < dropdownbtn.length; j++) {
  dropdownbtn[j].addEventListener("keypress", (event) => {
    if (
      event.target.getAttribute("data-status") === "open" &&
      event.key === "Enter"
    ) {
      closeMenu(event);
    } else if (
      event.target.getAttribute("data-status") === "open" &&
      event.key === " "
    ) {
      closeMenu(event);
    } else if (
      event.target.getAttribute("data-status") === "closed" &&
      event.key === "Enter"
    ) {
      // close all other menus
      closeAllMenus();
      //open clicked menu
      openMenu(event);
    } else if (
      event.target.getAttribute("data-status") === "closed" &&
      event.key === " "
    ) {
      // close all other menus
      closeAllMenus();
      //open clicked menu
      openMenu(event);
    }
  });
}

function closeMenu(event) {
  event.target.setAttribute("data-status", "closed");
  // rotate all arrows back
  for (let i = 0; i < arrows.length; i++) {
    arrows[i].classList.remove("flip-vertical");
  }
  for (let i = 0; i < event.target.nextElementSibling.children.length; i++) {
    event.target.nextElementSibling.children[i].classList.remove(
      "translate-form-" + (i + 1)
    );
    event.target.nextElementSibling.children[
      i
    ].firstElementChild.firstElementChild.setAttribute("tabindex", "-1");
    event.target.nextElementSibling.children[i].setAttribute(
      "data-status",
      "inactive"
    );
  }
}

function openMenu(event) {
  event.target.setAttribute("data-status", "open");
  event.target.firstElementChild.firstElementChild.classList.add(
    "flip-vertical"
  );
  for (let i = 0; i < event.target.nextElementSibling.children.length; i++) {
    event.target.nextElementSibling.children[i].classList.add(
      "translate-form-" + (i + 1)
    );
    event.target.nextElementSibling.children[
      i
    ].firstElementChild.firstElementChild.setAttribute("tabindex", "0");
    setTimeout(function () {
      event.target.nextElementSibling.children[i].setAttribute(
        "data-status",
        "active"
      );
    }, 800);
  }
}

function closeAllMenus() {
  for (let k = 0; k < dropdownbtn.length; k++) {
    for (let i = 0; i < arrows.length; i++) {
      arrows[i].classList.remove("flip-vertical");
    }
    for (
      let l = 0;
      l < dropdownbtn[k].nextElementSibling.children.length;
      l++
    ) {
      dropdownbtn[k].setAttribute("data-status", "closed");
      dropdownbtn[k].nextElementSibling.children[l].classList.remove(
        "translate-form-" + (l + 1)
      );
      dropdownbtn[k].nextElementSibling.children[
        l
      ].firstElementChild.firstElementChild.setAttribute("tabindex", "-1");
    }
    dropdownbtn[k].nextElementSibling.firstElementChild.setAttribute(
      "data-status",
      "inactive"
    );
  }
}

// FORM VALIDATION

const printingForm = document.getElementById("form");
const submitButton = document.getElementById("submit-form");
const orderName = document.getElementById("order-name");
const contact = document.getElementById("contact");
const amount = document.getElementById("amount");
const fileUpload = document.getElementById("file-upload");

submitButton.addEventListener("click", function (event) {
  event.preventDefault();
  formValidate();
});
submitButton.addEventListener("keypress", function (event) {
  event.preventDefault();
  formValidate();
});

let now = new Date();
minDate = now.toISOString().substring(0, 10);

function formValidate() {
  let errorsTotal = 0;
  let errorMsgArray = [];
  let errMsgPaper = document.createElement("div");

  errMsgPaper.classList.add("paper");
  errMsgPaper.classList.add("pink");
  errMsgPaper.classList.add("error-message");

  let errMsgRemove = document.createElement("div");

  errMsgRemove.classList.add("paper");
  errMsgRemove.classList.add("white");
  errMsgRemove.classList.add("error-message-remove");
  errMsgRemove.innerText = "X";
  errMsgPaper.append(errMsgRemove);
  errMsgRemove.addEventListener("click", () => {
    errMsgPaper.remove();
  });

  let errMsgIntro = document.createElement("p");
  errMsgIntro.classList.add("paper");
  errMsgIntro.classList.add("white");
  errMsgIntro.classList.add("border");
  errMsgIntro.classList.add("error-message-intro");
  errMsgIntro.innerText =
    "We have found some issues with your order. Please press the links below to solve them";

  errorMsgArray.push(errMsgIntro);

  if (orderName.value.length < 3) {
    errorMsgArray.push(
      createErrorMsg("#order-name", "Please give your order a name")
    );
    errorsTotal++;
  }

  if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(contact.value)) {
    errorMsgArray.push(
      createErrorMsg(
        "#contact",
        "Please give a valid email where we can contact you"
      )
    );
    errorsTotal++;
  }

  if (date.value < minDate) {
    errorMsgArray.push(
      createErrorMsg(
        "#date",
        "Please give a date in the future when you would like to pick up the order"
      )
    );
    errorsTotal++;
  }

  let selectedProduct;

  for (option of productOptions) {
    if (option.checked) {
      selectedProduct = option.value;
    }
  }

  let dropdowns = document.getElementById(selectedProduct + "-selected");

  let subquestionsAll = dropdowns.querySelectorAll(".dropdown-content");
  let errorElements = [];
  for (subquestion of subquestionsAll) {
    let unchecked = 0;
    for (option of subquestion.children) {
      if (!option.firstElementChild.firstElementChild.checked) {
        unchecked++;
      }

      if (unchecked === subquestion.children.length) {
        errorElement = subquestion.previousElementSibling.getAttribute("for");
        errorElements.push(errorElement);
      }
    }
  }

  for (error of errorElements) {
    errorsTotal++;

    if (error.includes("papersize")) {
      errorMsgArray.push(
        createErrorMsg(
          `#${error}`,
          "Please specify the size of paper you want us to print"
        )
      );
    }
    if (error.includes("thickness")) {
      errorMsgArray.push(
        createErrorMsg(
          `#${error}`,
          "Please specify the thickness of the paper we should print on (80 grams is standard)"
        )
      );
    }

    if (error.includes("colourbw")) {
      errorMsgArray.push(
        createErrorMsg(
          `#${error}`,
          "Please specify if we should print in colour or black and white"
        )
      );
    }

    if (error.includes("singledouble")) {
      errorMsgArray.push(
        createErrorMsg(
          `#${error}`,
          "Please specify if we should print single-sided or double-sided"
        )
      );
    }

    if (error.includes("trim")) {
      errorMsgArray.push(
        createErrorMsg(
          `#${error}`,
          "Please specify if we should trim the white edges"
        )
      );
    }

    if (error.includes("buttons-size")) {
      errorMsgArray.push(
        createErrorMsg(`#${error}`, "Please specify the size of button")
      );
    }
    if (error.includes("inside")) {
      errorMsgArray.push(
        createErrorMsg(
          `#${error}`,
          "Please specify how we should print the inside of your book"
        )
      );
    }
    if (error.includes("cover")) {
      errorMsgArray.push(
        createErrorMsg(
          `#${error}`,
          "Please specify how we should print the cover of your book"
        )
      );
    }
  }
  if (amount.value === "" || amount.value < 1) {
    errorMsgArray.push(
      createErrorMsg("#amount", "Please specify the amount of prints")
    );
    errorsTotal++;
  }

  if (!fileUpload.value) {
    errorMsgArray.push(
      createErrorMsg("#file-upload", "Please upload a file for us to print")
    );
    errorsTotal++;
  }

  if (errorsTotal > 5) {
    let tooManyErrors = document.createElement("p");
    tooManyErrors.classList.add("white");
    tooManyErrors.classList.add("border");
    tooManyErrors.classList.add("paper");
    tooManyErrors.classList.add("error-message-text");
    tooManyErrors.innerText =
      "You have not filled out most of the form. It is important for us to know what we should print and how. \n Please fill out all of the question and click each of the questions about the product to choose your options";
    errMsgPaper.append(tooManyErrors);

    errMsgPaper.append(createMoreInfoMsg());
    errMsgPaper.append(createErrMsgContact());
    if (document.querySelector(".error-message")) {
      document.querySelector(".error-message").remove();
    }
    document.querySelector("main").appendChild(errMsgPaper);
  } else if (errorsTotal > 0) {
    errorMsgArray.forEach((element) => errMsgPaper.append(element));
    if (document.querySelector(".error-message")) {
      document.querySelector(".error-message").remove();
    }
    errMsgPaper.append(createMoreInfoMsg());
    errMsgPaper.append(createErrMsgContact());
    document.querySelector("main").appendChild(errMsgPaper);
  } else {
    printingForm.submit();
  }
}

function createErrorMsg(link, message) {
  let errMsgText = document.createElement("a");
  errMsgText.classList.add("white");
  errMsgText.classList.add("border");
  errMsgText.classList.add("paper");
  errMsgText.classList.add("error-message-text");
  errMsgText.setAttribute("href", link);
  errMsgText.innerText = message;

  return errMsgText;
}

function createMoreInfoMsg() {
  let errMsgContact = document.createElement("a");
  errMsgContact.setAttribute("href", "#more-info");
  errMsgContact.classList.add("white");
  errMsgContact.classList.add("border");
  errMsgContact.classList.add("paper");
  errMsgContact.classList.add("error-message-text");
  errMsgContact.innerHTML =
    "If you have any questions about how we print or the printing form, please click here for more info";
  return errMsgContact;
}
function createErrMsgContact() {
  let errMsgContact = document.createElement("p");
  errMsgContact.classList.add("white");
  errMsgContact.classList.add("border");
  errMsgContact.classList.add("paper");
  errMsgContact.classList.add("error-message-contact");
  errMsgContact.innerHTML =
    "You can also contact us at <br> <strong>info@paperjamcollective.nl</strong>";
  return errMsgContact;
}
