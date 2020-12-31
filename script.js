$(document).ready(function() {
        // advisories language buttons
        $('#swap_en').click(function(e) {
            $('#safe-shop').attr('src', 'images/safe-shopping_eng.jpg');
            $('#safe-outdoors').attr('src', 'images/safe-outdoors_eng.jpg');
            $('#safe-dining').attr('src', 'images/safe-dining_eng.jpg');
            $('#safe-commuting').attr('src', 'images/safe-commuting_eng.jpg');
        })

        $('#swap_ch').click(function(e) {
            $('#safe-shop').attr('src', 'images/safe-shopping_chi.jpg');
            $('#safe-outdoors').attr('src', 'images/safe-outdoors_chi.jpg');
            $('#safe-dining').attr('src', 'images/safe-dining_chi.jpg');
            $('#safe-commuting').attr('src', 'images/safe-commuting_chi.jpg');
        })

        $('#swap_ml').click(function(e) {
            $('#safe-shop').attr('src', 'images/safe-shopping_ml.jpg');
            $('#safe-outdoors').attr('src', 'images/safe-outdoors_ml.jpg');
            $('#safe-dining').attr('src', 'images/safe-dining_ml.jpg');
            $('#safe-commuting').attr('src', 'images/safe-commuting_ml.jpg');
        })

        $('#swap_tl').click(function(e) {
            $('#safe-shop').attr('src', 'images/safe-shopping_tl.jpg');
            $('#safe-outdoors').attr('src', 'images/safe-outdoors_tl.jpg');
            $('#safe-dining').attr('src', 'images/safe-dining_tl.jpg');
            $('#safe-commuting').attr('src', 'images/safe-commuting_tl.jpg');
        })

        // news api
        var newsParams = {
            "country": "sg",
            "apiKey": "d1c7ff50b90a4d8babc2ef549ad4505c",
            "top-headlines": "Covid-19"
        }

        $.ajax({
            type: "GET",
            dataType: "json",
            contentType: "text/plain",
            url: "https://newsapi.org/v2/top-headlines?q=covid-19",
            headers: {

            },
            data: {
                country: 'sg',
                apiKey: 'd1c7ff50b90a4d8babc2ef549ad4505c'
            },
            success: function(data) {
                console.log(data)
            },
        });
        

        // statistics api
            // main stats (total cases, discharged and deceased figures)
            // @params setting

        var params = {
            "yesterday": "false",
            "strict": "true",
            "query": "Singapore",
            "country": "Singapore",
            "allowNull": "true"
        };

        var query = "Singapore";

        $.ajax({
            type: "GET",
            dataType: "json",
            contentType: "text/plain",
            url: "https://corona.lmao.ninja/v2/countries/" + query,
            headers: {

            },
            data: {
                yesterday: "false",
                strict: "true",
                allowNull: "true"
            },
            success: function(data) {
                console.log("Cases: " + data.country + data.cases);
                $("#data-flag").attr("src", data.countryInfo.flag);
                $("#total-cases-figure").text(data.cases);
                $("#recovered-figure").text(data.recovered);
                $("#deceased-figure").text(data.deaths);
                makeMainChart(data);
            },
        });

        // in-depth local statistics (active cases, ICU, Hospitalized, Community Facilities figures)
        $.ajax({
            type: "GET",
            dataType: "json",
            contentType: "text/plain",
            url: "https://api.apify.com/v2/key-value-stores/yaPbKe9e5Et61bl7W/records/LATEST?disableRedirect=true",
            headers: {

            },
            data: {

            },
            success: function(data) {
                $("#active-cases-figure").text(data.activeCases);
                $("#stable-cases-figure").text(data.stableHospitalized);
                $("#icu-cases-figure").text(data.criticalHospitalized);
                $("#community-facilities-figure").text(data.inCommunityFacilites);
                makeLocalChart(data);
            },
        });

        function makeMainChart(d) {
            var ctx = document.getElementById("totalCasesChart");
            var totalCasesChart = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: ["Deceased", "Recovered"],
                datasets: [{
                    label: 'Test',
                    data: [d.deaths, d.recovered],
                    backgroundColor: [
                        'rgba(186, 0, 0, 1)',
                        'rgba(54, 162, 235, 1)',
                    ],
                    borderWidth: 0
                }]
            },
                options: {
                    legend: {
                        position: 'right'
                    }
                }
            })
        };

        // charts fx

        function makeLocalChart(d) {
            var ctx = document.getElementById("activeCasesChart");
            var activeCasesChart = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: ["In Critical Condition", "In Community Facilities", "Stablized in Hospital"],
                datasets: [{
                    label: 'Test',
                    data: [d.criticalHospitalized, d.inCommunityFacilites, d.stableHospitalized],
                    backgroundColor: [
                        'rgba(186, 0, 0, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                    ],
                    borderWidth: 0
                }]
            },
                options: {
                    legend: {
                        position: 'left'
                    }
                }
            })
        }



});