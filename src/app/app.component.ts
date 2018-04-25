import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data = [
    {id: 1, name: 'maquina 1', lat: 6.00045, lon: -75.66555, access: true},
    {id: 2, name: 'maquina 2', lat: 6.00015, lon: -75.66585, access: false},
  	{id: 3, name: 'maquina 3', lat: 6.00020, lon: -75.66556, access: true},
  ];

  latitude = 51.678418;
  longitude = 7.809007;

  onChoseLocation(event) {
    console.log(event);
    this.latitude = event.coords.lat;
    this.longitude = event.coords.lng;
  }


  // if (navigator.geolocation) {
  //   navigator.geolocation.getCurrentPosition(showPosition);
  // }
  //  showPosition(position) {
  //     this.latitude  = position.coords.latitude;
  //     this.longitude = position.coords.longitude;
  //   }

}
