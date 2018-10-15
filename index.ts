import { Observable, of, from, fromEvent, concat } from 'rxjs';
import { allBooks, allReaders } from './data';

/* function subscribe(subscriber) {
    for (let book of allBooks) {
        subscriber.next(book);
    }
}
//let allBooksObservable$ = new Observable(subscribe);
let allBooksObservable$ = Observable.create(subscribe);
allBooksObservable$.subscribe(book => {
    console.log(book.title)
}); */


/* let source1$ = of('hello', 10, true, allReaders[0].name);

source1$.subscribe(value => {
    console.log(value);
})
/
let source2$ = from(allBooks);
 source2$.subscribe(value => {
    console.log(value.title)
})
/

concat(source1$, source2$)
    .subscribe(value => {
        console.log(value);
    }) */


let button = document.getElementById('readersButtom');

fromEvent(button, 'click')
    .subscribe(event => {
        console.log(event);
        let readersDiv = document.getElementById('readers');

        for (let reader of allReaders) {
            readersDiv.innerHTML += reader.name + "</br>";
        }

    });