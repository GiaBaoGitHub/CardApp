import { Component } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";

import { AuthService } from "../auth.service";

@Component({
    selector: "app-reset-password",
    templateUrl: "./reset-password.component.html",
    styleUrls: ["./reset-password.component.scss"],
})
export class ResetPasswordComponent {
    
    constructor(public AuthService: AuthService, private router: Router) {

    }
    ngOnInit(): void {
    }
       
}