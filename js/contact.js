/*





*/

export class Contact {

    constructor() {
        this.cartona = ``;
        document.querySelector(".items .container .row").innerHTML = ``;
    }
    async display() {
        this.cartona += `
                <div class="contact-us">     
                    <div class="row justify-content-center w-100 gy-3">
                        <div class="col-md-6">
                            <input type="text" class="form-control" placeholder="Enter Your Name" id="name">
                            <div id="nameAlert" class="alert alert-danger w-100 mt-2 d-none">
                                Special characters and numbers not allowed
                            </div>
                        </div>
                        <div class="col-md-6">
                            <input type="text" class="form-control" placeholder="Enter Your Email" id="email">
                            <div id="emailAlert" class="alert alert-danger w-100 mt-2 d-none">
                                Email not valid *exemple@yyy.zzz
                            </div>
                        </div>
        
                        <div class="col-md-6">
                            <input type="text" class="form-control" placeholder="Enter Your Phone" id="phone">
                            <div id="phoneAlert" class="alert alert-danger w-100 mt-2 d-none">
                                Enter valid Phone Number
                            </div>
                        </div>
                        <div class="col-md-6">
                            <input type="number" class="form-control" placeholder="Enter Your Age" id="age">
                            <div id="ageAlert" class="alert alert-danger w-100 mt-2 d-none">
                                Enter valid age
                            </div>
                        </div>
        
                        <div class="col-md-6">
                            <input type="password" class="form-control" placeholder="Enter Your Password" id="password">
                            <div id="passwordAlert" class="alert alert-danger w-100 mt-2 d-none">
                                Enter valid password *Minimum eight characters, at least one letter and one number:*
                            </div>
                        </div>
                        <div class="col-md-6">
                            <input type="password" class="form-control" placeholder="Repassword" id="re-password">
                            <div id="rePasswordAlert" class="alert alert-danger w-100 mt-2 d-none">
                                Passwords don't match
                            </div>
                        </div>
        
                        <div class="col-md-1">
                            <button class="btn btn-outline-danger disabled" id="submit-btn">submit</button>
                        </div>
                    </div>
                </div>
        `;
        

        document.querySelector(".items .container .row").innerHTML = this.cartona;
        this.regex();
    }

    regex() {
        let tests = 0;
        // regex for password
        let name = document.getElementById("name");
        let nameAlert = document.getElementById("nameAlert");
        let regex = /^[a-zA-Z ]{2,30}$/;
        name.addEventListener("input", () => {
            console.log(regex.test(name.value));
            if (regex.test(name.value) || name.value == "")
            {
                nameAlert.classList.add("d-none");
                tests++;
            }
            else {
                nameAlert.classList.remove("d-none");
                tests = Math.max(0, tests - 1);
            }
        });



        let email = document.getElementById("email");
        let emailAlert = document.getElementById("emailAlert");
        regex = /^[[a-zA-z][a-zA-z0-9]{2,}@[[a-zA-z]{3,}.[[a-zA-z]{3,}$/;
        email.addEventListener("input", () => {
            if (regex.test(email.value) || email.value == "") 
            {
                emailAlert.classList.add("d-none");
                tests++;
            }
            else 
            {
                emailAlert.classList.remove("d-none");
                tests = Math.max(0, tests - 1);
            }
        });

        let phone = document.getElementById("phone");
        let phoneAlert = document.getElementById("phoneAlert");
        regex = /^01(0|1|2|5)[0-9]{8}$/;
        phone.addEventListener("input", () => {
            if (regex.test(phone.value) || phone.value == "") 
            {
                phoneAlert.classList.add("d-none");
                tests++;
            }
            else 
            {
                phoneAlert.classList.remove("d-none");
                tests = Math.max(0, tests - 1);
            }
        });

        let age = document.getElementById("age");
        let ageAlert = document.getElementById("ageAlert");
        regex = /^[1-9][0-9]?$/;
        age.addEventListener("input", () => {
            if (regex.test(age.value) || age.value == "") {
                ageAlert.classList.add("d-none");
                tests++;
            }
            else
            {
                ageAlert.classList.remove("d-none");
                tests = Math.max(0, tests - 1);
            }
        });

        let password = document.getElementById("password");
        let rePassword = document.getElementById("re-password");
        let passwordAlert = document.getElementById("passwordAlert");
        let rePasswordAlert = document.getElementById("rePasswordAlert");


        let submitBtn = document.getElementById("submit-btn");

        regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{8,32}$/;
        password.addEventListener("input", () => {
            if (regex.test(password.value) || password.value == "") {
                passwordAlert.classList.add("d-none");
                tests++;
            } else {
                passwordAlert.classList.remove("d-none");
                tests = Math.max(0, tests - 1);
            }
        });

        rePassword.addEventListener("input", () => {
            if (rePassword.value == password.value || password.value == "") {
                rePasswordAlert.classList.add("d-none");
            } else {
                rePasswordAlert.classList.remove("d-none");
                tests = Math.max(0, tests - 1);
            }
        });
        
        if(tests == 6)
        {
            submitBtn.classList.remove("disabled");
        } 
        else
        {
            submitBtn.classList.add("disabled");
        }
        
    }
}
