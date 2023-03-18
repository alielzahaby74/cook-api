import { Home } from "./home.js";

export class Ingredients {

    constructor() {
        this.cartona = ``;
        document.querySelector(".items .container .row").innerHTML = ``;
        this.home = new Home();
    }
    async display() {
        let api = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`);
        let json = await api.json();

        for(let i = 0; i < json.meals.length ; i++) {
            if(json.meals[i].strDescription == null) continue;
            let desc = json.meals[i].strDescription.split(" ", 10).join(" ");
            this.cartona += `
            <div class="col-md-3">
                <div class="item text-white text-center cursor-pointer">
                    <i class="fa-solid fa-drumstick-bite fa-4x"></i>
                    <p class="fs-2">${json.meals[i].strIngredient}</p>
                    <p>${desc}</p>
                </div>
            </div>
            `;
        }

        document.querySelector(".items .container .row").innerHTML = this.cartona;
        this.displayClicked();
    }

    displayClicked() {
        Array.from(document.getElementsByClassName("item")).forEach(element => {
            element.addEventListener("click", async () => { 
                // console.log(element.children[1].innerText);
                let api = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${element.children[1].innerText}`);
                let json = await api.json();
                this.home.displayAll(json);       
            });
        });
    }
}
