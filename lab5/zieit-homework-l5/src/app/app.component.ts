import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { MyValidator } from './my,validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'zieit-homework-l5';
  form: FormGroup;

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email, MyValidator.restrictedEmails]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
      address: new FormGroup({
        country: new FormControl('ua'),
        city: new FormControl('Запорожье', [Validators.required, Validators.minLength(3)])
      }),
      skills: new FormArray([])
    })
  }

  getSkills() {
    return this.form.get('skills');
  }

  remove(idx) {
    (<FormArray>this.form.get('skills')).removeAt(idx);
  }

  addSkill() {
    const control = new FormControl('', Validators.required);
    (<FormArray>this.form.get('skills')).push(control);
  }

  getMinLength() {
    return this.form.get('password').errors['minlength'];
  }

  setCapital() {
    const mapCity = {
      "ua": "Киев",
      "pl": "Варшава",
      "de": "Берлин"
    };

    const c: string = this.form.get('address')?.value.country || 'ua';
    const capital = Object.entries(mapCity).find(e => e[0] === c)[1];
    this.form.get('address').patchValue({ city: capital });
  }

  submit() {
    const formControl = { ...this.form.value }
    console.log(formControl)
    this.form.reset()
  }

}
