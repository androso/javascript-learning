
//Get all the accordion items
//We add listeners to each accordion heading
//When that accordion is clicked I want to change the max height of the answer with scrollHeight

const accordItemsAll = document.querySelectorAll(".accordion__item");

function openAccordion () {
    for (let item of accordItemsAll) {
        const accordHeading = item.firstElementChild;
        accordHeading.addEventListener("click", function () {
            const accordDetails = this.nextElementSibling;
            let toClose = accordDetails.style.maxHeight;
            if (toClose) { 
                accordDetails.style.maxHeight = "0";
            } else {
                accordDetails.style.maxHeight = accordDetails.scrollHeight + "px";
            }
        })
    }
}

openAccordion();