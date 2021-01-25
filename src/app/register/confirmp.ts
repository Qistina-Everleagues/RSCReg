import { NG_VALIDATORS, Validator, AbstractControl } from "@angular/forms";
import { Directive, Input } from "@angular/core";

@Directive ({
    selector: '[appConfirmp]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: Confirmp,
        multi: true
    }]
})

export class Confirmp implements Validator {
    @Input() appConfirmp: string;
    validate(control: AbstractControl): {[key:string]: any} | null {
        const controlToCompare = control.parent.get(this.appConfirmp);
        if (controlToCompare && controlToCompare.value !== control.value) {
            return { 'notEqual': true };
        }

        return null;
    }
}