//Get all the accordion items
//We add listeners to each accordion heading
//When that accordion is clicked I want to change the max height of the answer with scrollHeight

const accordItemsAll = document.querySelectorAll(".accordion__item");

function openAccordion () {
    for (let item of accordItemsAll) {
        const accordHeading = item.firstElementChild;
        accordHeading.addEventListener("click", function () {
            const accordDetails = this.nextElementSibling;
            const accordIcon = this.lastElementChild;
            let toClose = accordDetails.style.maxHeight;

            
            if (toClose) {
                accordIcon.innerHTML = "+";
                accordDetails.style.maxHeight = null;
            } else {
                accordIcon.innerHTML = "-";
                accordDetails.style.maxHeight = accordDetails.scrollHeight + "px";
            }
            // // if (accordDetails.style.maxHeight === "0px" || accordDetails.style.maxHeight == '') {
            // //     accordDetails.style.maxHeight = accordDetails.scrollHeight + "px";
            // // } else if (accordDetails.style.maxHeight) { 
            // //     accordDetails.style.maxHeight = "0";
            // // }
        })
    }
}

openAccordion();


