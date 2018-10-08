# Running example: 
https://dhormale.github.io/google-places-autocomplete/

[![](https://cdn-images-1.medium.com/max/1000/1*053IRgRkvTVTUIczfWWUhw.gif)](
https://dhormale.github.io/google-places-autocomplete/)


https://medium.com/@dhormale/use-google-places-api-autocomplete-using-angular-for-resident-and-office-address-23cc33078e8


It’s effortless with Google Places API to add addresses in seconds against traditional inputs accepting Street Number, Street Name, City, State, Zip.

Google Autocomplete showed almost 20% time savings and error reduction on mobile. You save time by no longer dealing with incorrect addresses and the resulting problems.

There are multiple ways in Angular 2+ to implement google places API’s. Following steps shows how we can create a reusable component that can be used to autocomplete address.

## Step 1: Install type/googlemaps

```npm install --save @types/googlemaps```

## Steps 2: Add google API in index.html with own key

```<script src=”https://maps.googleapis.com/maps/api/js?libraries=places&key=GOOGLE_KEY"></script>```

## Step 3: Create a component like google-places.component.ts


## Step 4: Use AutocompleteComponent with adressType input.

For Residential Address:

```<AutocompleteComponent (setAddress)="getAddress($event)" adressType="geocode"></AutocompleteComponent>```

For Office Address:

```<AutocompleteComponent (setAddress)="getEstablishmentAddress($event)" adressType="establishment"></AutocompleteComponent>```
