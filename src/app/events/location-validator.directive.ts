import { Directive } from '@angular/core';
import { Validator, FormGroup } from '@angular/forms';

@Directive({
    selector: '[appValidationLocation]'
})
export class LocationValidatorDirective implements Validator {
    validate(formGroup: FormGroup): { [key: string]: any } {
        const addressControl = formGroup.controls.address;
        const cityControl = formGroup.controls.ctiy;
        const countryControl = formGroup.controls.country;
        const onlineUrlControl = (formGroup.root as FormGroup).controls.onlineUrl;

        console.log('address: ', addressControl.value);
        console.log('city: ', cityControl.value);
        console.log('country: ', countryControl.value);
        console.log('onlineUrl: ', onlineUrlControl.value);

        if ((addressControl && addressControl.value && cityControl && cityControl.value && countryControl && countryControl.value)
            || (onlineUrlControl && onlineUrlControl.value)) {
                return null;
        }
        return { validationLocation: false};
    }
}
