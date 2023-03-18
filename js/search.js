import { Home } from "./home.js";

export class Search {

    constructor() {
        this.cartona = ``;
        document.querySelector(".items .container .row").innerHTML = ``;
        this.home = new Home();
    }
    displayAll() {
        this.cartona = `
        <div class="col-md-6">
            <input type="text" class="form-control bg-dark text-white" placeholder="Search By Name" id="search-name">
        </div>
        <div class="col-md-6">
            <input type="text" class="form-control bg-dark text-white" placeholder="Search By First Letter" id="search-letter">
        </div>
        `;
        document.querySelector(".items .container .row").innerHTML += this.cartona;

        document.getElementById("search-name").addEventListener("input", async (e) => {
            let name = e.target.value;
            await this.searchByName(name);
        });
    }

    async searchByName(name) {
        try {
            this.cartona = ``;
            let api = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`);
            let  json = await api.json();

            if(json.meals == null) {
                document.querySelector(".items .container .row").innerHTML = `<h2 class="text-center">No meals found</h2>`;
                return;
            }

            for (let i = 0; i < json.meals.length; i++) {
                this.cartona += `
                <div class="col-md-3 gy-3">
                    <div class="item cursor-pointer rounded-3 overflow-hidden position-relative" id="${json.meals[i].idMeal}">
                        <img src="${json.meals[i].strMealThumb}" class="w-100" alt="soup">
                        <div class="overlay">${json.meals[i].strMeal}</div>
                    </div>
                </div>
                `;
            }
            document.querySelector(".items .container .row").innerHTML = this.cartona;
            this.home.displayAll(name); // Add the event listener to the items
        } catch (error) {
            console.log(error);
        }

    }


}

