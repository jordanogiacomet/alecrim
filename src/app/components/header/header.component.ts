import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  menuCategories = [
    {
      category: 'Roupas',
      items: [
        { name: 'Body Baby' },
        { name: 'Macacão' },
        { name: 'Vestido Infantil' }
      ]
    },
    {
      category: 'Acessórios',
      items: [
        { name: 'Boné' },
        { name: 'Meias' },
        { name: 'Luva' }
      ]
    },
    {
      category: 'Calçados',
      items: [
        { name: 'Sapatinho' },
        { name: 'Sandália' },
        { name: 'Tênis' }
      ]
    }
  ];

  // Não é necessário definir aqui, a referência será criada dinamicamente
  menuRefs: any[] = [];
}
