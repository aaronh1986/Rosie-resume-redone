/*function sendMail(contactForm){
    emailjs.send("gmail", "user_eN10YMDS4ed30xK86H2be", {"from_name": contactForm.name.value,
"from_name":contactForm.emailaddress.value,
"project_requeest": contactForm.projectsummary.value })
.then (
    function(response){
       console.log("SUCCESS", response);
    },
    function(error){
        console.log("ERROR", error);
    })
return false;}*/


function sendMail(contactForm) {
    emailjs.send("service_pow46zn", "template_55eq4vr", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "project_request": contactForm.projectsummary.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;  // To block from loading a new page
}
