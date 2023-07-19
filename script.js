var items = []; // Array para armazenar os itens
        
function renderList() {
    var itemList = document.getElementById("item-list");
    itemList.innerHTML = ""; // Limpa a lista antes de renderizar novamente
    
    for (var i = 0; i < items.length; i++) {
        var listItem = document.createElement("li");
        listItem.classList.add("item");
        
        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        
        var span = document.createElement("span");
        span.textContent = items[i].text + " - " + items[i].category;
        
        var removeButton = document.createElement("button");
        removeButton.classList.add("remove-btn");
        removeButton.textContent = "Remover";
        removeButton.addEventListener("click", removeItem);
        
        listItem.appendChild(checkbox);
        listItem.appendChild(span);
        listItem.appendChild(removeButton);
        
        itemList.appendChild(listItem);
    }
}

function addItem() {
    var input = document.getElementById("item-input");
    var select = document.getElementById("category-select");
    var itemText = input.value;
    var category = select.value;
    
    if (itemText !== "" && category !== "") {
        var newItem = {
            text: itemText,
            category: category
        };
        
        items.push(newItem); // Adiciona o novo item ao array de itens
        renderList(); // Renderiza novamente a lista atualizada
        
        input.value = "";
        select.value = "";
    }
}

function removeItem() {
    var listItem = this.parentNode;
    listItem.remove();
}

renderList(); // Renderiza a lista inicialmente