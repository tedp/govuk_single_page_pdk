import { UpgradeAdapter } from '@angular/upgrade';
import { AppModule } from './app.module';

let upgradeAdapter = new UpgradeAdapter(AppModule);

upgradeAdapter.bootstrap(document.documentElement, ['govuk-single-page-pdk.docs']);