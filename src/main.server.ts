import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './presentation/app/app.component';
import { config } from './config/app/app.config.server';

const bootstrap = () => bootstrapApplication(AppComponent, config);

export default bootstrap;
