import { Component, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  bloodBank:any = [
    { bldGrp: 'A+',bldCount: 3 },
    { bldGrp: 'B+',bldCount: 8 },
    { bldGrp: 'O+',bldCount: 2 },
    { bldGrp: 'AB+',bldCount: 5 },
    { bldGrp: 'A-',bldCount: 9 },
    { bldGrp: 'B-',bldCount: 6 },
    { bldGrp: 'O-',bldCount: 8 },
    { bldGrp: 'AB-',bldCount: 5 }
  ];

  bottles:any = [1,2,3,4,5,6,7,8];

  bCount:any = '';
  dragCount:number;

  ngOnChanges(changes: SimpleChanges){
    console.log("changes :: ", changes);
  }

  drop(ev) {
    ev.preventDefault();
    let data = ev.dataTransfer.getData("text");
    let tempCount = ev.dataTransfer.getData("text/html");
    let oCount:any;
    // ev.target.appendChild(document.getElementById(data));
    let eCopy:any = document.getElementById(data).cloneNode(true);
    if(this.bCount && this.bCount >= tempCount){
      oCount = this.bCount - tempCount;
      eCopy.lastChild.firstChild.textContent = tempCount;
      document.getElementById(data).lastChild.firstChild.textContent = "0";
    }
    else if(this.bCount && this.bCount < tempCount){
      oCount = tempCount - this.bCount;
      eCopy.lastChild.firstChild.textContent = this.bCount;
      document.getElementById(data).lastChild.firstChild.textContent = oCount;
    }

    if(this.dragCount){
      this.dragCount += Number(eCopy.lastChild.textContent);
    }
    else{
      this.dragCount = Number(eCopy.lastChild.textContent);
    }

    if(this.dragCount === Number(this.bCount)){
      (document.querySelectorAll('[draggable="true"]') as any as Array<HTMLElement>).forEach(elem=>{
      elem.setAttribute("draggable", "false");
      });
    }
    
    const idNum = data.match(/\d+$/)[0];
    eCopy.id = "newId-"+idNum; /* We cannot use the same ID */
    
    ev.target.appendChild(eCopy);
  }

  allowDrop(ev) {
    ev.preventDefault();
  }

  drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
    let tempCount = ev.target.lastChild.textContent;
    let oCount:any;
    // if(this.bCount && this.bCount >= tempCount){
    //   oCount = this.bCount - tempCount;
    // }
    // else if(this.bCount && this.bCount < tempCount){
    //   oCount = tempCount - this.bCount;
    // }
    // ev.dataTransfer.setData("text/html", oCount);
    ev.dataTransfer.setData("text/html", tempCount);
  }

  bloodGroupChange(data:any){
    console.log("Inside bloodGroupChange :: ", data);
    this.bloodBank.forEach(element => {
      if(element.selData){
        delete element.selData;
      }
    });
    switch (data.value) {

      case "O-":
          this.bloodBank.filter((bData:any)=>{
            if(bData.bldGrp==='O-'){
              bData.selData={lSelected : true};
            }
          });
          break;

      case "O+":
          this.bloodBank.filter((bData:any)=>{
            if(bData.bldGrp==='O-'){
              bData.selData={lSelected : true};
            }
            if(bData.bldGrp==='O+'){
              bData.selData={lSelected : true};
            }
          });
          break;

      case "A+":
          this.bloodBank.filter((bData:any)=>{
            if(bData.bldGrp==='O-'){
              bData.selData={lSelected : true};
            }
            if(bData.bldGrp==='O+'){
              bData.selData={lSelected : true};
            }
            if(bData.bldGrp==='A-'){
              bData.selData={lSelected : true};
            }
            if(bData.bldGrp==='A+'){
              bData.selData={lSelected : true};
            }
          });
          break;

      case "A-":
          this.bloodBank.filter((bData:any)=>{
            if(bData.bldGrp==='O-'){
              bData.selData={lSelected : true};
            }
            if(bData.bldGrp==='A-'){
              bData.selData={lSelected : true};
            }
          });
          break;

      case "B+":
          this.bloodBank.filter((bData:any)=>{
            if(bData.bldGrp==='O-'){
              bData.selData={lSelected : true};
            }
            if(bData.bldGrp==='B-'){
              bData.selData={lSelected : true};
            }
            if(bData.bldGrp==='O+'){
              bData.selData={lSelected : true};
            }
            if(bData.bldGrp==='B+'){
              bData.selData={lSelected : true};
            }
          });
          break;

      case "B-":
          this.bloodBank.filter((bData:any)=>{
            if(bData.bldGrp==='O-'){
              bData.selData={lSelected : true};
            }
            if(bData.bldGrp==='B-'){
              bData.selData={lSelected : true};
            }
          });
          break;

      case "AB+":
          this.bloodBank.filter((bData:any)=>{
            if(bData.bldGrp==='O-'){
              bData.selData={lSelected : true};
            }
            if(bData.bldGrp==='B-'){
              bData.selData={lSelected : true};
            }
            if(bData.bldGrp==='O+'){
              bData.selData={lSelected : true};
            }
            if(bData.bldGrp==='B+'){
              bData.selData={lSelected : true};
            }
            if(bData.bldGrp==='A-'){
              bData.selData={lSelected : true};
            }
            if(bData.bldGrp==='AB-'){
              bData.selData={lSelected : true};
            }
            if(bData.bldGrp==='A+'){
              bData.selData={lSelected : true};
            }
            if(bData.bldGrp==='AB+'){
              bData.selData={lSelected : true};
            }
          });
          break;

      case "AB-":
          this.bloodBank.filter((bData:any)=>{
            if(bData.bldGrp==='O-'){
              bData.selData={lSelected : true};
            }
            if(bData.bldGrp==='B-'){
              bData.selData={lSelected : true};
            }
            if(bData.bldGrp==='A-'){
              bData.selData={lSelected : true};
            }
            if(bData.bldGrp==='AB-'){
              bData.selData={lSelected : true};
            }
          });
          break;
    }
    // console.log("bCount :: ", this.bCount);
    if(this.bCount){
      this.bloodBank.forEach(element => {
        if(element.selData){
         if(element.selData.lSelected){
           if(element.bldCount >= this.bCount){
             element.selData.dSelected = true;
           }
         };
        }
      });
      // console.log("bloodBank inside if :: ", this.bloodBank);
    }
  }

  bottlesChange(data:any){
    this.bCount = data.value;
    this.bloodBank.forEach(element => {
      if(element.selData){
       if(element.selData.lSelected){
         if(element.bldCount >= data.value){
           element.selData.dSelected = true;
         }
       };
      }
    });
  }


}
