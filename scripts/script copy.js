function setLocalStorage(q) {
    localStorage.setItem('country', q);
}

$(document).ready(function() {
    var query = localStorage.getItem('country');

    if (query == null) {
        query = 'Singapore';
        setLocalStorage(query);     
    }
    
    function requestMainData(query) {
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
                $("#data-flag").attr("src", data.countryInfo.flag);
                $('#scope').text(data.country);
                $('#country-name').text(data.country)

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
                
                totalCasesChart.data.datasets[0].data = [data.deaths, data.recovered, data.active];
                totalCasesChart.update();
            },
            error: function() {
                alert('An error occurred. You may have entered an invalid country.')
            }
        });
    }
    requestMainData(query);
    updateData(query);
    
    // requestLocalData();
    function requestGlobalData() {
        $.ajax({
            type: "GET",
            dataType: "json",
            contentType: "text/plain",
            url: "https://corona.lmao.ninja/v2/all?yesterday=false",
            success: function(data) {
                $("#data-flag").attr('src', 'images/icons/global-icon.png');
                $('#scope').text("Global");
                $('#country-name').text("Global");
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
                totalCasesChart.data.datasets[0].data = [data.deaths, data.recovered, data.active];
                totalCasesChart.update();

                $('.dorscon-level').hide();
                $('.phase-level').hide();        
                $("#stable-cases-figure").text("No Data Available");
                $("#community-facilities-figure").text("No Data Available");
                $("#stable-cases-figure").removeClass('text-primary');
                $("#community-facilities-figure").removeClass("text-primary");
                $("#stable-cases-figure").removeClass('large-text');
                $("#community-facilities-figure").removeClass("large-text");
                $("#stable-cases-figure").css({
                    'color' : 'red',
                    'font-family' : 'Montserrat, "sans-serif"'
                });
                $("#community-facilities-figure").css({
                    'color' : 'red',
                    'font-family' : 'Montserrat, "sans-serif"'
                });

                if (data.active != null) {
                    $("#active-cases-figure").text(data.active);
                } 
                else {
                    $("#active-cases-figure").text("0");
                }
                if (data.critical != null) {
                    $("#icu-cases-figure").text(data.critical);
                }
                else {
                    $("#icu-cases-figure").text("0");
                }

                activeCasesChart.data.labels = ["In Critical Condition", "Others"];
                activeCasesChart.data.datasets[0].data = [data.critical, data.active - data.critical];
                activeCasesChart.update();
            },
        })
    };

    // in-depth local statistics (active cases, ICU, Hospitalized, Community Facilities figures)
    function requestLocalData() {
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
                activeCasesChart.data.datasets[0].data = [data.criticalHospitalized, data.inCommunityFacilites, data.stableHospitalized];
                activeCasesChart.update();
            },
        });
    }

    // advisories language buttons
    $('#swap_en').click(function(e) {                                           // english
        $('#safe-shop').attr('src', 'images/safe-shopping_eng.jpg');
        $('#safe-outdoors').attr('src', 'images/safe-outdoors_eng.jpg');
        $('#safe-dining').attr('src', 'images/safe-dining_eng.jpg');
        $('#safe-commuting').attr('src', 'images/safe-commuting_eng.jpg');
    })

    $('#swap_ch').click(function(e) {                                           // chinese
        $('#safe-shop').attr('src', 'images/safe-shopping_chi.jpg');
        $('#safe-outdoors').attr('src', 'images/safe-outdoors_chi.jpg');
        $('#safe-dining').attr('src', 'images/safe-dining_chi.jpg');
        $('#safe-commuting').attr('src', 'images/safe-commuting_chi.jpg');
    })

    $('#swap_ml').click(function(e) {                                           // malay
        $('#safe-shop').attr('src', 'images/safe-shopping_ml.jpg');
        $('#safe-outdoors').attr('src', 'images/safe-outdoors_ml.jpg');
        $('#safe-dining').attr('src', 'images/safe-dining_ml.jpg');
        $('#safe-commuting').attr('src', 'images/safe-commuting_ml.jpg');
    })

    $('#swap_tl').click(function(e) {                                           // tamil
        $('#safe-shop').attr('src', 'images/safe-shopping_tl.jpg');
        $('#safe-outdoors').attr('src', 'images/safe-outdoors_tl.jpg');
        $('#safe-dining').attr('src', 'images/safe-dining_tl.jpg');
        $('#safe-commuting').attr('src', 'images/safe-commuting_tl.jpg');
    })

    // news api to retrieve latest Singapore news in English related to Covid-19 - PARAMS passed in URL. 100 Requests Limit.
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

    function updateData(q) {
        requestMainData(q);
        q = q.toLowerCase();

        if (q == 'singapore' || q == 'sg') {
            $('.dorscon-level').show();
            $('.phase-level').show();

            $("#stable-cases-figure").addClass('text-primary');
            $("#community-facilities-figure").addClass("text-primary");
            $("#stable-cases-figure").addClass('large-text');
            $("#community-facilities-figure").addClass("large-text");
            $("#stable-cases-figure").css({
                'font-family' : 'Expletus Sans, "sans-serif"'
            });
            $("#community-facilities-figure").css({
                'font-family' : 'Expletus Sans, "sans-serif"'
            });

            removeData(activeCasesChart);
            activeCasesChart.data.labels = ["In Critical Condition", "In Community Facilities", "Stablized in Hospital"];
            requestLocalData();
            activeCasesChart.update();
        }
        else {
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
                    $('.dorscon-level').hide();
                    $('.phase-level').hide();        
                    $("#stable-cases-figure").text("No Data Available");
                    $("#community-facilities-figure").text("No Data Available");
                    $("#stable-cases-figure").removeClass('text-primary');
                    $("#community-facilities-figure").removeClass("text-primary");
                    $("#stable-cases-figure").removeClass('large-text');
                    $("#community-facilities-figure").removeClass("large-text");
                    $("#stable-cases-figure").css({
                        'color' : 'red',
                        'font-family' : 'Montserrat, "sans-serif"'
                    });
                    $("#community-facilities-figure").css({
                        'color' : 'red',
                        'font-family' : 'Montserrat, "sans-serif"'
                    });

                    if (data.active != null) {
                        $("#active-cases-figure").text(data.active);
                    } 
                    else {
                        $("#active-cases-figure").text("0");
                    }
                    if (data.critical != null) {
                        $("#icu-cases-figure").text(data.critical);
                    }
                    else {
                        $("#icu-cases-figure").text("0");
                    }

                    activeCasesChart.data.labels = ["In Critical Condition", "Others"];
                    activeCasesChart.data.datasets[0].data = [data.critical, data.active - data.critical];
                    activeCasesChart.update();
                },
            });
        }
    }
        // country-search button
        $('#country-search').submit(function(e){
            e.preventDefault();
            query = $('#country-input').val();
            $('#country-input').val('');
            updateData(query);
            setLocalStorage(query);
        });

        // quick countries buttons
        $('#sg-stats').on('click', function(e) {
            e.preventDefault();
            query = 'Singapore';
            updateData(query);
            setLocalStorage(query);
        });

        $('#us-stats').on('click', function(e) {
            e.preventDefault();
            query = 'USA';
            updateData(query);
            setLocalStorage(query);
        });

        $('#in-stats').on('click', function(e) {
            e.preventDefault();
            query = 'India';
            updateData(query);
            setLocalStorage(query);
        });

        $('#bra-stats').on('click', function(e) {
            e.preventDefault();
            query = 'Brazil';
            updateData(query);
            setLocalStorage(query);
        });

        $('#global-stats').on('click', function(e) {
            e.preventDefault();
            requestGlobalData();
        });
});