import {Component, OnInit} from "@angular/core"
import { Services } from "./providers/services"
import { DataManager } from "./providers/manager"

@Component({
  selector: 'mt-app',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {

  content = 'Bem vindo ao SDO!'
  user: string

  constructor(private data:DataManager) { }

  ngOnInit() {
    this.user = this.data.getUser()
  }

}
