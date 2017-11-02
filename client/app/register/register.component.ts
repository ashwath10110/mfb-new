import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { UserService } from '../services/user.service';
import { LocalStorageService } from '../services/local-storage/local-storage.service';
import { ToastComponent } from '../shared/toast/toast.component';
import { AppService } from '../app.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  username = new FormControl('', [Validators.required,
  Validators.minLength(2),
  Validators.maxLength(30),
  Validators.pattern('[a-zA-Z0-9_-\\s]*')]);
  email = new FormControl('', [Validators.required,
  Validators.minLength(3),
  Validators.maxLength(100)]);
  password = new FormControl('', [Validators.required,
  Validators.minLength(6)]);

  itemTypes = ['exotic-vegetables', 'leafy-green-vegetables', 'fresh-vegetables', 'fresh-fruits'];

  role = new FormControl('', [Validators.required]);

  captchaFlag = '';

  captchaValid = false;

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private appService: AppService,
    public toast: ToastComponent,
    private userService: UserService,
    private localStorageService: LocalStorageService,
  ) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      username: this.username,
      email: this.email,
      password: this.password
      // role: this.role
    });
  }

  setClassUsername() {
    return { 'has-danger': !this.username.pristine && !this.username.valid };
  }
  setClassEmail() {
    return { 'has-danger': !this.email.pristine && !this.email.valid };
  }
  setClassPassword() {
    return { 'has-danger': !this.password.pristine && !this.password.valid };
  }

  resolved(event) {
    this.captchaFlag = event;
    this.captchaValid = true;
  }

  prepareForRegister() {
    this.register();
    // if (this.captchaValid) {
    //   this.register();
    // } else {
    //   this.toast.setMessage('Press the captcha!', 'warning');
    // }
  }

  refresh(): void {
    window.location.reload();
  }

  register() {
    let user = this.registerForm.value;
    user.role = 'admin';
    this.userService.register(user).subscribe(
      res => {
        this.toast.setMessage('you successfully registered!', 'success');
        this.localStorageService.clearLocalStorageItem();
        this.router.navigate(['/login']);
      },
      error => {

        this.toast.setMessage('email already exists', 'danger');
        if (this.captchaFlag) {
          this.refresh();
        }
      }
    );
  }
}
