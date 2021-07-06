import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialsModule } from './materials/materials.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ServicesService } from './services/services.service';
import { ChatRoomComponent } from './components/chat-room/chat-room.component';
import { ChatappService } from './services/chatapp.service';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    routingComponents,
    ChatRoomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialsModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ServicesService, ChatappService],
  bootstrap: [AppComponent]
})
export class AppModule { }
