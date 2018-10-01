import {Directive, ElementRef, EventEmitter, Input, Output} from '@angular/core';
import {NgModel} from '@angular/forms';
import { } from '@types/googlemaps';

// declare var google: any;

@Directive({
  selector: '[googleplace]',
  providers: [NgModel],
  host: {
    '(input)' : 'onInputChange()'
  }
})
export class GoogleplaceDirective  {
  @Input() adressType: string;
  @Output() setAddress: EventEmitter<any> = new EventEmitter();
  modelValue: any;
  autocomplete: any;
  private _el: any;

  autoSuggestOptions = {
    componentRestrictions: { country: 'US' },
    types: ['address']  // 'establishment' / 'address'
  };

  constructor(el: ElementRef, private model: NgModel) {
    this._el = el.nativeElement;
    this.modelValue = this.model;
    const input = this._el;
    this.autocomplete = new google.maps.places.Autocomplete(this._el, this.autoSuggestOptions);
    google.maps.event.addListener(this.autocomplete, 'place_changed', () => {
      const place = this.autocomplete.getPlace();
      this.invokeEvent(place);
    });
  }

  invokeEvent(place: Object) {
    this.setAddress.emit(place);
  }


  onInputChange() {
  }
}
