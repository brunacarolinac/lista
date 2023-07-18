 function addItem() {
            var input = document.getElementById('item-input');
            var select = document.getElementById('category-select');
            var itemText = input.value;
            var category = select.value;
            
            if (itemText !== '' && category !== '') {
                var listItem = document.createElement('li');
                listItem.classList.add('item');
                
                var checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                
                var span = document.createElement('span');
                span.textContent = itemText + ' - ' + category;
                
                listItem.appendChild(checkbox);
                listItem.appendChild(span);
                
                document.getElementById('item-list').appendChild(listItem);
                
                input.value = '';
                select.value = '';
            }
        }