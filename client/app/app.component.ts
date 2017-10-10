import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { TabsComponent } from './tabs/tabs.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PaymentCheckoutComponent } from './payment-checkout/payment-checkout.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(public auth: AuthService) { }

}
