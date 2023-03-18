import { Home } from "./home.js";
export class Category {

    constructor() {
        this.cartona = ``;
        document.querySelector(".items .container .row").innerHTML = ``;
        this.home = new Home();
    }
    async display() {
        let api = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`);
        let json = await api.json();

        for(let i = 0; i < json.categories.length ; i++) {
            this.cartona += `
            <div class="col-md-3 gy-3">
                <div class="item cursor-pointer rounded-3 overflow-hidden position-relative">
                    <img src="${json.categories[i].strCategoryThumb}" class="w-100" alt="soup">
                    <div class="overlay">${json.categories[i].strCategory}</div>
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
                let api = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${element.innerText}`);
                let json = await api.json();
                this.home.displayAll(json);       
            });
        });
    }
}
