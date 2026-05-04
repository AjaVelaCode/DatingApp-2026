import { HttpClient } from '@angular/common/http';
import { Component, signal, inject, OnInit } from '@angular/core';
import { Nav } from "../layout/nav/nav";
import { lastValueFrom } from 'rxjs';
import { User } from '../types/user';
import { Router, RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-root',
  imports: [Nav, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected router = inject(Router);



}
