/*var title=document.getElementsByClassName('title');
console.log(Array.isArray(Array.from(title)));
Array.from(title).forEach(function(item){
    console.log(item);
})
const wrap=document.querySelector('#book-list li:nth-child(2).name');
var books=document.querySelector('#book-list li .name');
books=document.querySelectorAll('#book-list li .name');
console.log(books);


var books=document.querySelector('#book-list li .name');
Array.from(books).foreach(function(book){
    book.textContent +='book title'
})


const book_liste=document.querySelector('#bool-list');
book_liste.innerHTML='<h2> books and more books ......</h2>';
book_liste.innerHTML+='<p>this is how you add HTML</p>';

const banner=document.querySelector('#page-banner');
 console.log('#page-banner node type is:',banner.nodeType);
 console.log('#page-banner node name is:',banner.nodeName);
 console.log('#page-banner has child node:',banner.hasChildNodes());


 const clonedBanner=banner.cloneNode(true);
 console.log(clonedBanner);

 const bookList=document.querySelector('#book-list');
 console.log('the parent node is:',bookList.parentNode);
 console.log('the parent element is:',bookList.parentElement.parentElement);
 console.log(bookList.childNodes);
 console.log(bookList.children);


 const bookList=document.querySelector('#book-list');
 console.log('booklist next sibling is:',bookList.nextSibling);
 console.log('booklist next elemet sibling is:', bookList.nextElementSibling);

 console.log('booklist previous sibling is:',bookList.previousSibling);
 console.log('booklist previous element sibling is:',bookList.previousElementSibling);

bookList.previousElementSibling.querySelector('p').innerHTML+='<br/> Too cool for everyone else!'




var btns=document.querySelectorAll('#book-list .delete');
 Array.from(btns).forEach(function(btn){
    btn.addEventListener('click',function(e){
        const li= e.target.parentElement;
        li.parentNode.removeChild(li);

    });
 });
var link=document.querySelector('#page-banner a')
link.addEventListener('click',function(e){
    e.preventDefault();
    console.log('navigation to',e.target.textContent,'was prevented')
})*/


//remove book
const list=document.querySelector('#book-list ul');
list.addEventListener('click',function(e){
    if(e.target.className=='delete') {
        const li=e.target.parentElement;
        list.removeChild(li);
    }
})
 // add book
 const addForm=document.forms ['add-book'];
 addForm.addEventListener('submit',function(e){
    e.preventDefault();
    const value = addForm.querySelector('input[type="text"]').value;
     // create elment
     const li=document.createElement('li');
     const bookName=document.createElement('span');
     const deleteBtn=document.createElement('span');

     //add content
     deleteBtn.textContent='delete';
     bookName.textContent= value;

     // add classes

     bookName.classList.add('name');
     deleteBtn.classList.add('delete');
     //append to document
     li.appendChild(bookName);
     li.appendChild(deleteBtn);
     list.appendChild(li);

     document.querySelector('#add-task label')=""

 
 })




 //remove book

const hideBox=document.querySelector('#hide');
hideBox.addEventListener('change',function(e){
    if(hideBox.clicked){
        list.style.display="none";
    }else{
        list.style.display="initial";
    }

});

