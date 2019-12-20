import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, ValidationErrors, FormGroup, AbstractControl } from '@angular/forms';


@Directive({
    selector:'passwordMatch',
    providers: [{ provide: NG_VALIDATORS, useExisting: PasswordMatch, multi: true }]
})
export class PasswordMatch implements Validator{
    validate(control:AbstractControl){
        console.log('entrou')
        if(!control){
            return {'string':true}
        }
        else return null
    }
}