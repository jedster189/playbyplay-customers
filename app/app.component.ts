import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html' 
})
export class AppComponent {
    // [] means property binding
    // () mean event binding  

    title='Customer App';
    name='Jared';
    nameColor='red';

    changeNameColor() {
        this.nameColor = this.nameColor === 'blue'? 'red' : 'blue';
    }
}
