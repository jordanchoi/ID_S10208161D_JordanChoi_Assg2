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
        fetch('https://gnews.io/api/v4/top-headlines?token=97a0880c40b7e3640d55b48f6553b8f2&q="covid-19"&country=sg&lang=en')
            .then(function (response) {
                return response.json();
        })
            .then(function (data) {
                // article 1
                $("#article1-img").attr('src', data.articles[0].image);
                $("#article-title1").text(data.articles[0].title);
                $("#article-content1").text(data.articles[0].description);
                $("#article1-link").attr('href', data.articles[0].url);
                var publishedDate = new Date(data.articles[0].publishedAt);
                var showDate = publishedDate.getDate() + "-" + (publishedDate.getMonth() + 1) + "-" + publishedDate.getFullYear();
                $("#article1-date").text(showDate);
                // article 2
                $("#article2-img").attr('src', data.articles[1].image);
                $("#article-title2").text(data.articles[1].title);
                $("#article-content2").text(data.articles[1].description);
                $("#article2-link").attr('href', data.articles[1].url);
                var publishedDate = new Date(data.articles[1].publishedAt);
                var showDate = publishedDate.getDate() + "-" + (publishedDate.getMonth() + 1) + "-" + publishedDate.getFullYear();
                $("#article2-date").text(showDate);
                // article 3
                $("#article3-img").attr('src', data.articles[2].image);
                $("#article-title3").text(data.articles[2].title);
                $("#article-content3").text(data.articles[2].description);
                $(".article3-link").attr('href', data.articles[2].url);
                var publishedDate = new Date(data.articles[2].publishedAt);
                var showDate = publishedDate.getDate() + "-" + (publishedDate.getMonth() + 1) + "-" + publishedDate.getFullYear();
                $("#article3-date").text(showDate);
                // article 4
                $("#article4-img").attr('src', data.articles[3].image);
                $("#article-title4").text(data.articles[3].title);
                $("#article-content4").text(data.articles[3].description);
                $(".article4-link").attr('href', data.articles[3].url);
                var publishedDate = new Date(data.articles[3].publishedAt);
                var showDate = publishedDate.getDate() + "-" + (publishedDate.getMonth() + 1) + "-" + publishedDate.getFullYear();
                $("#article4-date").text(showDate);
                //article 5
                $("#article5-img").attr('src', data.articles[4].image);
                $("#article-title5").text(data.articles[4].title);
                $("#article-content5").text(data.articles[4].description);
                $(".article5-link").attr('href', data.articles[4].url);
                var publishedDate = new Date(data.articles[4].publishedAt);
                var showDate = publishedDate.getDate() + "-" + (publishedDate.getMonth() + 1) + "-" + publishedDate.getFullYear();
                $("#article5-date").text(showDate);
        });

        // charts fx
        function makeMainChart(d) {
            var ctx = document.getElementById("totalCasesChart");
            var totalCasesChart = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: ["Deceased", "Recovered"],
                datasets: [{
                    label: 'Test',
                    data: [0,0],
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

            return totalCasesChart;
        };

        function makeMainChart(d) {
            var ctx = document.getElementById("totalCasesChart");
            var totalCasesChart = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: ["Deceased", "Recovered"],
                datasets: [{
                    label: 'Total Cases',
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

        function makeLocalChart(d) {
            var ctx = document.getElementById("activeCasesChart");
            var activeCasesChart = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: ["In Critical Condition", "In Community Facilities", "Stablized in Hospital"],
                datasets: [{
                    label: 'Active Cases Conditions',
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

        function makeRequestChart(d) {
            var rctx = document.getElementById("totalCasesChart");
            var totalCasesChart = new Chart(rctx, {
            type: 'pie',
            data: {
                labels: ["Deceased", "Recovered"],
                datasets: [{
                    label: 'Requested Total Cases',
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

        // statistics api
        // main stats (total cases, discharged and deceased figures)

        var query = "Singapore";

        var initialAjax = $.ajax({
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
                $("#data-flag").attr("src", data.countryInfo.flag);
                $("#total-cases-figure").text(data.cases);
                $("#recovered-figure").text(data.recovered);
                $("#deceased-figure").text(data.deaths);
                if (data.todayCases != null) {
                    $("#new-cases").text("+" + data.todayCases + " today");
                }
                else {
                    $("#new-cases").text("+0 today");
                }
                if (data.todayRecovered != null) {
                    $("#new-recovery-figure").text("+" + data.todayRecovered + " today");
                }
                else {
                    $("#new-recovery-figure").text("+0 today");
                }
                if (data.todayDeaths != null) {
                    $("#new-deaths-figure").text("+" + data.todayDeaths + " today");
                }
                else {
                    $("#new-deaths-figure").text("+0 today");
                }
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

        // country button
        $('#country-Btn').click(function(e){
            e.preventDefault();
            let query = $('#country-input').val();
            $('#country-input').val('');
            
            fetch("https://corona.lmao.ninja/v2/countries/" + query)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                initialAjax.abort();
                $("#data-flag").attr("src", data.countryInfo.flag);
                $('#scope').text(data.country);
                    if (data.cases != null) {
                        $("#total-cases-figure").text(data.cases);
                    } 
                    else {
                        $("#total-cases-figure").text("0");
                    }
                    if (data.recovered != null) {
                        $("#recovered-figure").text(data.recovered);
                    }
                    else {
                        $("#recovered-figure").text("0");
                    }
                    if (data.deaths != null) {
                        $("#deceased-figure").text(data.deaths);
                    }
                    else {
                        $("#deceased-figure").text("0");
                    }
                
                    if (data.todayCases != null) {
                        $("#new-cases").text("+" + data.todayCases + " today");
                    }
                    else {
                        $("#new-cases").text("+0 today");
                    }
                    if (data.todayRecovered != null) {
                        $("#new-recovery-figure").text("+" + data.todayRecovered + " today");
                    }
                    else {
                        $("#new-recovery-figure").text("+0 today");
                    }
                    if (data.todayDeaths != null) {
                        $("#new-deaths-figure").text("+" + data.todayDeaths + " today");
                    }
                    else {
                        $("#new-deaths-figure").text("+0 today");
                    }
                makeRequestChart(data)
            })
        });
    });