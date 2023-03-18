export class Home {

    constructor() {
        this.cartona = ``;
        document.querySelector(".items .container .row").innerHTML = ``;
    }
    async displayAll(meals) {
        try {
            let api;
            let json;
            if(meals == null) {
                api = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=`);
                json = await api.json();
            } else {
                json = meals;
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
            this.displayClicked(); // Add the event listener to the items
        } catch (error) {
            console.log(error);
        }

    }

    async displayClicked() {
        // document.querySelector(".items .container .row").innerHTML = ``;
        Array.from(document.getElementsByClassName("item")).forEach(element => {
            element.addEventListener("click", async () => {
                let api = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${element.id}`);
                let json = await api.json();

                // set tags html
                let tagsArray = json.meals[0].strTags != null ? json.meals[0].strTags.split(",") : "";
                let tagCartona = ``;
                for (let i = 0; i < tagsArray.length; i++) {
                    tagCartona += `
                        <li class="alert alert-danger m-2 p-1">${tagsArray[i]}</li>
                    `
                }
                // set recipes html
                let recipesCartona = ``;
                for (let i = 1; i <= 20; i++) {
                    if (json.meals[0][`strIngredient${i}`] != null && json.meals[0][`strIngredient${i}`] != "") {
                        recipesCartona += `
                            <li class="alert alert-info m-2 p-1">${json.meals[0][`strIngredient${i}`]} - ${json.meals[0][`strMeasure${i}`]}</li>
                        `
                    }
                }

                document.querySelector(".items .container .row").innerHTML = `
                    <div class="col-md-4">
                        <img src="${json.meals[0].strMealThumb}" class="w-100" alt="${json.meals[0].strCategory}">
                        <h2>Soup</h2>
                    </div>
                    <div class="col-md-8">
                        <h2>Instructions</h2>
                        <p>${json.meals[0].strInstructions}</p>
                        <h2>Area : <span>${json.meals[0].strArea}</span></h2>
                        <h2>Category : <span>${json.meals[0].strCategory}</span></h2>
                        <h2>Recipes :</h2>
                        <ul class="list-unstyled">
                            ${recipesCartona}
                        </ul>
                        <h2>Tags :</h2>
                        <ul class="list-unstyled">
                            ${tagCartona}
                        </ul>
                        <a target="_blank" href="" class="btn btn-success">Source</a>
                        <a target="_blank" href="${json.meals[0].strYoutube}" class="btn btn-danger">Youtube</a>
                    </div>
                `;

            });
        });
    }


}

