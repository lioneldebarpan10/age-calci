function calculate() {
   setInterval(() => {
      //Input of Birthdate
      let birthdate = new Date(document.getElementById('birthdate').value);

      let now = new Date();
      let ageInMs = now.getTime() - birthdate.getTime();

      let ageInS = ageInMs / 1000; //converting to Seconds
      let ageInmins = ageInS / 60; //converting to minutes
      let ageInhours = ageInmins / 60; //converting to hours
      let ageIndays = ageInhours / 24; //converting to no of days
      let ageInmonths = ageIndays / 30.41 //converting to no of monthes
      let ageInyears = ageInmonths / 12 //converting to no of years


      document.querySelector('#year').innerHTML = Math.floor(ageInyears);
      document.querySelector('#month').innerHTML = Math.floor(ageInmonths % 12);
      document.querySelector('#day').innerHTML = Math.floor(ageIndays % 30.41);
      document.querySelector('#hour').innerHTML = Math.floor(ageInhours % 24);
      document.querySelector('#minute').innerHTML = Math.floor(ageInmins % 60);
      document.querySelector('#second').innerHTML = Math.floor(ageInS % 60);
      document.querySelector('#second').style.border.bottom = '1px grey solid';
   }, 1000);
}
function reset() {
   window.location.reload();
}