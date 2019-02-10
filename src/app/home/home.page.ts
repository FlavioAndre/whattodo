import { Task } from './../models/task.model';
import { Component } from '@angular/core';
import { List } from '../models/list.model';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public list: List;
  public lists: List[] = [];

  constructor(private alertCtrl: AlertController) {
    const tasks: Task[] = [];
    tasks.push(new Task('Passar com o cachorro', false));
    tasks.push(new Task('Ir ao supermercado', false));
    tasks.push(new Task('Cortar o cabelo', true));
    this.list = new List('Minha Lista de Tarefas', tasks);

  }

  async load() {
    if (this.lists.length === 0) {
      this.showAddList();
    }
  }

  async addList(title: String) {
    this.lists.push(new List(title, []));
    this.list = this.lists[this.lists.length - 1];
  }

  async addItem(title: String) {
    this.list.tasks.push(new Task(title, false));
  }

  async showAddList() {
    const alert = await this.alertCtrl.create({
      header: 'Lista de Tarefa',
      subHeader: 'Criar nova lista de tarefas',
      inputs: [
        {
          name: 'title',
          type: 'text',
          placeholder: 'Nome da lista'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        }, {
          text: 'Salvar',
          handler: (data) => {
            this.addList(data.title);

          }
        }
      ]
    });

    await alert.present();
  }

  async showAddTask() {
    const alert = await this.alertCtrl.create({
      header: 'Compras',
      subHeader: 'Criar nova tarefa em Compras',
      inputs: [
        {
          name: 'title',
          type: 'text',
          placeholder: 'Nome da tarefa'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        }, {
          text: 'Salvar',
          handler: (data) => {
            this.addItem(data.title);
          }
        }
      ]
    });

    await alert.present();
  }

  async showLists() {
    const alert = await this.alertCtrl.create({
      header: 'Suas Listas',
      inputs: [
        {
          name: 'radio1',
          type: 'radio',
          label: 'Radio 1',
          value: 'value1',
          checked: true
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        }, {
          text: 'Selecionar',
          handler: (data) => {
            console.log(data);
          }
        }
      ]
    });

    await alert.inputs.push({
      name: 'OLHA EU AQUI',
      type: 'radio',
      label: 'OLHA EU AQUI',
      value: 'VALOR'
    });

    await alert.present();
  }
}
