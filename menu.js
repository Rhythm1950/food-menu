{/* <body>
    <div class="container">
        <form class="col-md-6 m-auto py-5">
            <div class="input-group mb-3">
                <input id="place" type="text" value="" class="form-control" placeholder="Enter a location for Weather ...">
                <div class="input-group-append">
                    <button id="search" type="button" class="btn btn-danger">Search</button>
                </div>
            </div>
        </form>
        <div class="weather-status text-white text-center">
            <img id="icon" src="https://openweathermap.org/img/wn/02d@2x.png" alt="">
            <h1 id="location">Dhaka</h1>
            <h3><span id="temperature"> 38.06</span>&deg;C</h3>
            <h1 id="condition" class="lead">Clouds</h1>
        </div>
    </div> */}


        document.getElementById("search").addEventListener("click", function(){
            const menuInput = document.getElementById("menu-input").value;           
            fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${menuInput}`)
            .then(abc => abc.json())
            .then(data=>{
                console.log(data);
                // let unorderedList = data.
                // let cityName = data.name;
                // let condition = data.weather[0].main;
                // document.getElementById("location").innerText = cityName;

            });
        })

        