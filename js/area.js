import { Home } from "./home.js";

export class Area {

    constructor() {
        this.cartona = ``;
        document.querySelector(".items .container .row").innerHTML = ``;
        this.home = new Home();
    }
    async display() {
        let api = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`);
        let json = await api.json();

        for(let i = 0; i < json.meals.length ; i++) {
            this.cartona += `
            <div class="col-md-3">
                <div class="item text-white text-center cursor-pointer">
                    <i class="fa-solid fa-house-laptop fa-4x"></i>
                    <p class="fs-2">${json.meals[i].strArea}</p>
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
                // console.log(element.innerText);
                let api = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${element.innerText}`);
                let json = await api.json();
                this.home.displayAll(json);       
            });
        });
    }
}

