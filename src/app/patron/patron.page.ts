import { Component, OnInit } from '@angular/core';
import PatternLock from '@phenax/pattern-lock-js';

const values = {
  '11': '1', '21': '2', '31': '3',
  '12': '4', '22': '5', '32': '6',
  '13': '7', '23': '8', '33': '9',
}

const tema = {
	default: {
		colors: {
			accent: 'white',
			primary: 'white',
			bg: 'green',
		},
		dimens: {
      line_width: 6,
      node_radius: 20,
      node_core: 8,
      node_ring: 1,
    },
	},
	success: {
		colors: {
			accent: '#27ae60',
		}
	},
	failure: {
		colors: {
			accent: '#e74c3c',
		}
	},
}

@Component({
  selector: 'app-patron',
  templateUrl: './patron.page.html',
  styleUrls: ['./patron.page.scss'],
})
export class PatronPage  {

  constructor() {

  }

  // ngOnInit() {
  ionViewDidEnter() {
    const lock = PatternLock({
      $canvas: document.querySelector('#example'),
      width: 300,
      height: 430,
      theme: tema,
      grid: [3,3]
    });

    lock.onComplete(s => {
      console.log('s', s);
      // const valor = this.convertNodesToNumber(s.nodes);
      // console.log(valor);
      let ret = '';

      s.nodes.forEach(el => {
        console.log('el', `${el.row}${el.col}`);
        ret += values[`${el.row}${el.col}`];
      });
      console.log('ret', ret);
    });

  }

  // convertNodesToNumber(nodes): string {
  //   let ret = '';
  //   if(nodes === []) { return ''; }

  //   nodes.forEach(el => {
  //     console.log('el', `${el.row}${el.col}`);
  //     ret += values[`${el.row}${el.col}`];
  //   });
  //   console.log('ret', ret);
  //   return ret;
  // }  

}
