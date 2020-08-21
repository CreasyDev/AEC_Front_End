

//
// let noms = ['Jean', ' Olivier', ' Benoit', ' Sebastien'];
//
//
// const person = noms.map(persons => {
//     document.write(persons);
// });

input = document.querySelector('input');
listItems = document.querySelectorAll('li');
input.addEventListener('input', filter);

function filter() {
    search = input.value.toLowerCase();

    listItems.forEach(function(li){
        text = li.innerHTML.toLowerCase();
        found = text.indexOf(search);

        if(search === '') {
            li.style.display = 'block';

        }
        else if (found === -1) {
            li.style.display = 'none';
        }
        else {
            li.style.display = 'block';
        }
    });
}