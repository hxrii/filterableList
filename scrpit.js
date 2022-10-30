let filterInput = document.getElementById('filterInput');
filterInput.addEventListener('keyup',(e)=>{
    let person = document.getElementById('filterInput')
                        .value.toUpperCase();
    
    let names = document.getElementById('names');
    let li = names.querySelectorAll("li.collection-item");

    //loop through
    for(let i =0; i<li.length;i++)
    {
        let a = li[i].getElementsByTagName('a')[0];
        //matching
        if(a.innerHTML.toUpperCase().indexOf(person)> -1)
        {
            li[i].style.display = '';
        }
        else{
            li[i].style.display = 'none';
        }
    }

    

});