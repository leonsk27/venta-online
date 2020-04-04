import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//import { MiddleService } from 'src/app/services/middle.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formGroup: FormGroup;
  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router) { }

    ngOnInit() {
      this.buildForm();
    }
    private buildForm() {
      this.formGroup = this.formBuilder.group(
        {
          usuario: ['', [Validators.required]],
          password: ['', [Validators.required]]
        }
      );
    }
    login() {
      const res = this.authService.login(this.formGroup.value).subscribe(
        res => {
          localStorage.setItem('token', res.token);
          this.router.navigate(['/product']);
        },
        err => {
          console.log('err desde servicio: ', err);
        }
      );;
    }
}
