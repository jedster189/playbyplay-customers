import { Component, Input, OnInit } from '@angular/core';

@Component({    
    selector: 'my-customer',
    templateUrl: 'app/customer/customer.component.html'
})
export class CustomerComponent implements OnInit {
    @Input() customer: { id: number, name: string };
    @Input() idColor: string;
    @Input() nameColor: string;

    constructor() { }

    ngOnInit() { }

}