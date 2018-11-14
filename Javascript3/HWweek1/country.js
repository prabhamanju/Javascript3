let httprequest = new XMLHttpRequest();
        
        let get_result = httprequest.open('Get', 'https://restcountries.eu/rest/v2/all' );
        httprequest.send();
        
        httprequest.onreadystatechange = function(){
            if(httprequest.readyState === 4 && httprequest.status === 200) {   
                let response = JSON.parse(httprequest.response);
                let text = '';
                for (var i = 0; i < response.length; i++) {

                   text += '<li>' + response[i].name + '<li>';
                   //console.log(response[i].name);
                }
                 document.getElementById("demo").innerHTML = text;
            }
        }

// to get Specific Country name , Capital and Border oonclik Button

document.getElementById("myBtn").addEventListener("click", myButton);

function myButton() {
        let endpoint = document.getElementById("myText").value;
        let final = "";
        let httprequest2 = new XMLHttpRequest();
        
        httprequest2.open('Get', "https://restcountries.eu/rest/v2/name/" + endpoint);
        httprequest2.send();

            httprequest2.onreadystatechange = function(){
            if(httprequest2.readyState === 4 && httprequest2.status === 200) {
            let response_for_specific_country = JSON.parse(httprequest2.response);
            for (let x in response_for_specific_country){
            final += "Country Name : " + response_for_specific_country[x].name + "<br>" + "Capital Name : " + response_for_specific_country[x].capital + "<br>" + "Borders Countries Name : " + response_for_specific_country[x].borders + "<br>";
            
            }
            document.getElementById("demo1").innerHTML = final;
        }else{
        document.getElementById("demo1").innerHTML ="Country does not found";
        }
        
    }
    

}