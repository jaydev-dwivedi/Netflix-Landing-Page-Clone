const faqs = document.querySelectorAll('.faq');

faqs.forEach((faq) => {
    faq.addEventListener("click", () => {
        if (faq.classList.contains("active")) {
            faq.classList.remove("active");
        }
        else {
            faq.classList.add("active");
            faqs.forEach((otherFaq) => {
                if (otherFaq != faq) {
                    otherFaq.classList.remove("active");
                }
            })
        }
    })
})

// const input = document.getElementsByClassName('input');
// const placeholder = document.getElementsByClassName('placeholder');


// if (document.getElementsByClassName('input').value != '') {
//     placeholder.style.color = 'red';
// }