import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-real-state',
  templateUrl: './real-state.component.html',
  styleUrls: ['./real-state.component.sass']
})
export class RealStateComponent implements OnInit {

  angeliqueProject = [
    {
      id: 1,
      img: 'Angelique_1.jpeg'
    },
    {
      id: 1,
      img: 'Angelique_2.jpeg'
    },
    {
      id: 1,
      img: 'Angelique_3.jpeg'
    },
    {
      id: 1,
      img: 'Angelique_4.jpeg'
    },
    {
      id: 1,
      img: 'Angelique_5.jpeg'
    },
    {
      id: 1,
      img: 'Angelique_6.jpeg'
    },
    {
      id: 1,
      img: 'Angelique_7.jpeg'
    }
  ]

  hunabProject = [
    {
      id: 1,
      img: 'Hunab_Cocina.jpg'
    },
    {
      id: 2,
      img: 'Hunab_Fachada.jpg'
    },
    {
      id: 3,
      img: 'Hunab_Pool.jpg'
    },
    {
      id: 4,
      img: 'Hunab_Roof.jpg'
    },
    {
      id: 5,
      img: 'Hunab_RoofGarden.jpg'
    },
    {
      id: 6,
      img: 'Hunab_Room.jpg'
    },
    {
      id: 7,
      img: 'Hunab_Sala.jpg'
    },
    {
      id: 8,
      img: 'Hunab_Terraza.jpg'
    }
  ]

  mariaTulumProject = [
    {
      id: 1,
      img: 'Maria-tulum-1.jpg'
    },
    {
      id: 2,
      img: 'Maria-tulum-2.jpg'
    },
    {
      id: 3,
      img: 'Maria-tulum-3.jpg'
    },
    {
      id: 4,
      img: 'Maria-tulum-4.jpg'
    },
    {
      id: 5,
      img: 'Maria-tulum-5.jpg'
    },
    {
      id: 6,
      img: 'Maria-tulum-6.png'
    },
    {
      id: 7,
      img: 'Maria-tulum-7.png'
    },
  ]

  responsiveOptions = [
    {
        breakpoint: '1199px',
        numVisible: 2,
        numScroll: 1
    },
    {
        breakpoint: '780px',
        numVisible: 1,
        numScroll: 1
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
