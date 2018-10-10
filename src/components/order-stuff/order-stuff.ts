import { Component,Input} from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';
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
    @Input() private orderHeader: string = '';
    private usedItems: string[] = [];
	catName = Trig0Page;
	items = [];
	nCorrect = 0;
	bWidth: string;
  maxLine: string = '20px';
  sortType: string = 'largest to smallest';


  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage, private platform: Platform) {

  	this.maxLine = (this.platform.height()/8).toString()+'px';

  	
  }



  ngOnInit() {
    this.storage.get(this.pointsHere).then((val) => {
	    this.nCorrect = val;
	    this.bWidth = (this.nCorrect*10).toString()+'px'; 

	  });
    this.mixEmUp();
    this.maxLine = (this.platform.height()/(this.usedItems.length+3)).toString()+'px';



    
  }

  ngOnChanges() {

  }

  mixEmUp(){
  	this.items = [];
    if (this.orderedItems.length>0 && Array.isArray(this.orderedItems[0])){
      this.usedItems = this.orderedItems;
    }
    else{
      this.usedItems = this.orderedItems;
    }
  	let rand_array = this.getRandomArray(this.usedItems.length);
  	for (let x = 0; x < this.usedItems.length; x++) {
      this.usedItems[rand_array[x]]=this.usedItems[rand_array[x]].split("@").join("\\");
      this.items.push(this.usedItems[rand_array[x]]);
    }
    
  }

  reorderItems(indexes) {
    let element = this.items[indexes.from];
    this.items.splice(indexes.from, 1);
    this.items.splice(indexes.to, 0, element);

    let isOrdered = true;
    if (this.sortType=='smallest to largest'){
      for (let x = 0; x < this.usedItems.length; x++) {
      	if (this.items[x]!=this.usedItems[x]){
      		isOrdered = false;
      	}
      }
    }
    else if (this.sortType=='largest to smallest'){
      for (let x = 0; x < this.usedItems.length; x++) {
        if (this.items[x]!=this.usedItems[this.usedItems.length-x-1]){
          isOrdered = false;
        }
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
    if (this.sortType=='smallest to largest'){
      if (Math.random()<.333){
        this.sortType='smallest to largest';
      }
      else{
        this.sortType='largest to smallest';
      }
    }
    else{
      if (Math.random()<.666){
        this.sortType='smallest to largest';
      }
      else{
        this.sortType='largest to smallest';
      }
    }
		if (arrayLen>1 && this.sortType=='smallest to largest'){
			if (rand_array[0]==0 && rand_array[1]==1){
				rand_array[0]=1;
				rand_array[1]=0;
			}
		}
    else if (arrayLen>1 && this.sortType=='largest to smallest'){
      if (rand_array[0]==arrayLen-1 && rand_array[1]==arrayLen-2){
        rand_array[0]=arrayLen-2;
        rand_array[1]=arrayLen-1;
      }
    }
		return rand_array;
	}

}
