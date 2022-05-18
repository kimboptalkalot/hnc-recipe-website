function toggleRecipe(recipeId){
    document.getElementById("method-"+recipeId).style.display = "none";
    document.getElementById("recipe-"+recipeId).style.display = "block";

    document.getElementById("method-toggle-"+recipeId).classList.remove("selected");
    document.getElementById("recipe-toggle-"+recipeId).classList.add("selected");
}

function toggleMethod(recipeId){
    document.getElementById("recipe-"+recipeId).style.display = "none";
    document.getElementById("method-"+recipeId).style.display = "block";

    document.getElementById("recipe-toggle-"+recipeId).classList.remove("selected");
    document.getElementById("method-toggle-"+recipeId).classList.add("selected");
}