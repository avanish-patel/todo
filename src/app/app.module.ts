import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";
import { MatButtonModule, MatCheckboxModule } from "@angular/material";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule, MatCheckboxModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
