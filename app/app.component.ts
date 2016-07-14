import { Component } from '@angular/core';
import { CustomerComponent } from './customer/customer.component';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives: [CustomerComponent] 
})
export class AppComponent {
    // [] means property binding
    // () mean event binding  
    // [()] 

    title='Customer App';
    name='Jared';
    nameColor='red';
    idColor = 'blue'
    customers = [
        {id: 1, name:'Ward'},
        {id: 2, name:'Kevin'},
        {id: 3, name:'Eric'},
        {id: 4, name:'John'},
        {id: 5, name:'Emmet'}
    ];

    changeNameColor() {
        this.nameColor = this.nameColor === 'blue'? 'red' : 'blue';
    }
}
