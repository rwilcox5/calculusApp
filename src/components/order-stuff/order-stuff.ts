import { Component,Input} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Trig0Page } from '../../pages/trig0/trig0';

/**
 * Generated class for the OrderStuffComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'order-stuff',
  templateUrl: 'order-stuff.html'
})
export class OrderStuffComponent {

  
  	@Input() private orderedItems: string[] = [];
  	@Input() private pointsHere: string = '';
	catName = Trig0Page;
	items = [];
	nCorrect = 0;
	bWidth: string;
  activeFormulae: string = 'x^3';


  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {

  	
  	
  }



  ngOnInit() {
    this.storage.get(this.pointsHere).then((val) => {
	    this.nCorrect = val;
	    this.bWidth = (this.nCorrect*10).toString()+'px'; 

	  });
    this.mixEmUp();
    eval('MathJax.Hub.Queue(["Typeset",MathJax.Hub])');

    
  }

  ngOnChanges() {
    eval('MathJax.Hub.Queue(["Typeset",MathJax.Hub])');
  }

  mixEmUp(){
  	this.items = [];
  	let rand_array = this.getRandomArray(this.orderedItems.length);
  	for (let x = 0; x < this.orderedItems.length; x++) {
      this.orderedItems[rand_array[x]]=this.orderedItems[rand_array[x]].split("@").join("\\")
      this.items.push(this.orderedItems[rand_array[x]]);
    }
  }

  reorderItems(indexes) {
    let element = this.items[indexes.from];
    this.items.splice(indexes.from, 1);
    this.items.splice(indexes.to, 0, element);

    let isOrdered = true;
    for (let x = 0; x < this.orderedItems.length; x++) {
    	if (this.items[x]!=this.orderedItems[x]){
    		isOrdered = false;
    	}
    }
    if (isOrdered){
    	this.nCorrect++;
    	this.bWidth = (this.nCorrect*10).toString()+'px';    	
    	this.storage.set(this.pointsHere, this.nCorrect);
    	this.mixEmUp();

    }
  }



  getRandomArray(arrayLen){
		var this_array = [];
		var rand_array = [];
		let i=0;
		for (i =0; i<arrayLen;i++){
			this_array.push(i);
		}
		for(i = 0;i<arrayLen;i++){
			var randX = Math.floor(Math.random() * (arrayLen-i));
			rand_array.push(this_array[randX]);
			this_array.splice(randX,1);
			
		}
		if (arrayLen>1){
			if (rand_array[0]==0 && rand_array[1]==1){
				rand_array[0]=1;
				rand_array[1]=0;
			}
		}
		return rand_array;
	}

}
