import { Component, ViewChild, EventEmitter, Output, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { } from '@types/googlemaps';

@Component({
    selector: 'autocomplete',
    template: `
      <input class="input"
        type="text"
        [(ngModel)]="autocompleteInput"
        id="search_address"
        >
    `,
})
export class AutocompleteComponent implements OnInit {
    @Output() setAddress: EventEmitter<any> = new EventEmitter();

    autocompleteInput: string;
    queryWait: boolean;

    constructor() {
    }

    ngOnInit() {
        this.getPlaceAutocomplete();
    }


    private getPlaceAutocomplete() {
        let inputTextbox: any;
        inputTextbox = document.getElementById('search_address');
        const autocomplete = new google.maps.places.Autocomplete(inputTextbox);
        google.maps.event.addListener(autocomplete, 'place_changed', () => {
            const place = autocomplete.getPlace();
            this.invokeEvent(place);
        });
    }

    invokeEvent(place: Object) {
        this.setAddress.emit(place);
    }

}
