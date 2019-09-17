import { Directive } from '@angular/core';
import { Validator, FormGroup, NG_VALIDATORS } from '@angular/forms';

@Directive({
    selector: '[appValidationLocation]',
    providers: [{provide: NG_VALIDATORS, useExisting: LocationValidatorDirective, multi: true}]
})
export class LocationValidatorDirective implements Validator {
   
    validate(formGroup: FormGroup): { [key: string]: any } {
       
        //console.log('formgroup: ' ,  formGroup);
        

        const addressControl = formGroup.controls.address;
        console.log('address: ' ,  addressControl);
        
        const cityControl = formGroup.controls.city;
        console.log('city: ' ,  cityControl);
        
        const countryControl = formGroup.controls.country;
        console.log('country: ' ,  countryControl);
        
        const onlineUrlControl = (formGroup.root as FormGroup).controls.onlineUrl;

  

        if ((addressControl && addressControl.value && cityControl && cityControl.value && countryControl && countryControl.value)
            || (onlineUrlControl && onlineUrlControl.value)) {

                console.log('address: ', addressControl.value);
                console.log('city: ', cityControl.value);
                console.log('country: ', countryControl.value);
                console.log('onlineUrl: ', onlineUrlControl.value);


                return null;
        }
        return { validationLocation: false};
    }
}
