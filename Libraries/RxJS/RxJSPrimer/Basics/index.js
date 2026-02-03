const { fromEvent } = rxjs;

fromEvent(document, 'click').subscribe(() => console.log('Clicked!!!'));