import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
    selector: 'app-forms',
    templateUrl: './forms.component.html',
    styleUrl: './forms.component.scss'
})
export class FormsComponent {

    public myForm = new FormGroup({
        login: new FormControl("", Validators.required),
        email: new FormControl("", [Validators.required, Validators.email]),
        password: new FormControl("", Validators.required)
    });

    public handleValue() {
        if (this.myForm.valid) {
            console.log(this.myForm.value);
        } else {
            alert("Please enter a valid value");
        }
        console.log(this.myForm.get(['login'])?.value)
    };

}
