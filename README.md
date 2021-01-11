# JC COVID-19 Information
This web application is created for the second assignment of the Interactive Development module, a year-1 module in the pursuance of my diploma studies at Ngee Ann Polytechnic.

This web application mainly provides Singapore’s COVID-19 information such as the statistics, top headlines, DORSCON Status, Phase Level and some COVID-19 advisories.

However, users can also search for COVID-19 statistics of a specific country by inputting a country’s name. The APIs utilised will fetch the relevant data and modify accordingly through jQuery DOM Manipulation. Global stats are also available.

The statistics includes:
* Total Amount of Cases
* Recovered Cases Figures
* Deceased Figures
* Active Cases Figures
* Current Critical Condition Figures
* In Community Facilities Figures (Singapore Only)
* Hospitalized and In Stable Condition Figures (Singapore Only)

## Design Process & Rationale
This website is created for Singaporeans as the primary user and as well as non-Singaporeans as a secondary user. The web application compiles and consolidate COVID-19 Information and news into a single site and allow interested or concerned users to view these data in a glance.

As there are plenty of such data on the internet, such as WHO’s website, MOH’s website, GOV.sg’s website and etc, users may find it inconvenient to navigate from one to another to view these data and news. Thus, this site compiles these data and Singapore’s news into one and allow users to view at ease.

### Website’s Scope & Agenda:
1. Simple & Intuitive
2. Provide Good UI & UX to allow users to have a pleasant experience when searching for these data.
3. Allow users to view up-to-date local, global and other countries figures related to COVID-19.
4. Allow users to view latest and up-to-date local (SG) news related to COVID-19.
5. Provides COVID-19 advisories to users and subsequently prevent the spread of the virus.
6. Responsive throughout most devices

### Wireframe:
> https://xd.adobe.com/view/bfcae48c-b134-4121-9f71-bdd6b80c7fe0-ea99/

### Color Scheme:
* Navbar: #212629
* Buttons: #1C2024
* Sidebar: #F8F9FA
* Background: #FFFFFF
* Texts: #000000, #0E6EFD, #FFA600, #198753, #038004, #0D58CA
* Charts: #FFC533, #A30101, #079BFF, #1F9501

Choice of Colors Rationale:
* Simple colors was used so that it does not clutter the site. 
* Aside from the Navbar, Footer and Buttons, light colors were used to increase the liveliness of the site and to prevent the user's mood to become dull from the already dull-circumstance amidst this chaotic situation.
* Colors chosen also blends together well and is aesthetically pleasing.

Live Demo:
> https://jordanchoi.github.io/ID_S10208161D_JordanChoi_Assg2/ID_S10208161D_JordanChoi_Website/index.html

## Features
### Existing Features in the Web Application
1. Responsive Design 
    > Site can be viewed from mobile, tablets and computers.
2. Collapsible Hamburger Icon for Tablet & Mobile
    > Navigation bar will be hidden and hamburger icon will be expanded when on tablet or mobile dimensions.
3. Specific Country's Statistic Search
    > Users can search for a specific's country COVID-19 data through a search box by inputting the country's name. Current AJAX XHR request will be aborted and the necessary parameters will be adjusted to accomodate to the user's request and fetch its data.
4. Local Storage
    > Local Storage was used to store the last searched or inputted country, to display them at the previous state when user closes the browser or session.
5. Quick Search to Read & Update Data
    > Several Shortcut Icons (Countries' Flags) has been added to allow users to switch to the country's data with ease. Includes global cases, local data and current top 3 countries with the most number of COVID-19 cases.
6. New Cases
    > The number of new cases is displayed alongside the respective figures to show users the amount of the instances such as total number of cases or deceased figure occurred today.
7. Chart & Diagram
    > Charts were used to display the retrieved data visually.
8. Local News
    > API was used to retrieve the latest local news related to COVID-19. Users can view these top headlines alongside with the current live data implemented in the features mentioned above.
9. Change Language of Advisories Poster
    > Users can change the language of the advisory poster to either English, Malay, Chinese, or Tamil with a click of a button.
10. Preloader with "Stay Safe" Message
    > Animated Preloader with a Stay Safe message when users arrives to the site.
### Potential Features
1. Symptom Checker
    > An application to allow users to check for their risk level of contracting COVID-19 based on symptoms. No current API is available but can be programmed with JS.
2. Email API to contact COVID-19 departments
    > Email API Integration to allow users to contact relevant COVID-19 departments or agencies if necessary.
3. Specific's Country News
    > Allow users to specify country and fetch news based on the country.
4. Fetch More News Article
    > Allow users to request to display more news article relating to COVID-19 with a click of a button.
5. Historical COVID-19 Data & Chart
    > Users can input a specific datetime and retrieve the data as of that datetime.
6. CountUp.js to increase the interactiveness and aesthetics of the site.
    > The data figures can count from 0 to the actual figure retrieved from the API.
## Technologies Used
* HTML5
  * HTML5 was used in this project for the structure, contents and layout.
* CSS3
  * CSS3 was used in this project for the styles and appearance of the website.
* [Bootstrap 5.0](https://getbootstrap.com/)
  * Bootstrap 5.0 was used for fast and responsive website.
* JavaScript
  * Basic JavaScript was used in this project to increase the interactiveness of the website. Such as Chart.js, Local Storage.
* [jQuery](https://jquery.com/)
  * jQuery was used to manipulate DOMs of the website. Such as hiding of elements, change of image src, modifying the data displayed based on the API fetch.
* API
  * APIs were used to retrieve the necessary data such as the COVID-19 countries and global statistics and news article.
* JSON
  * JSON was used to create and retrieve Local Storage.
* Adobe XD
  * Adobe XD was used to create and design the wireframe of the site.
* Adobe Photoshop
  * Adobe Photoshop was used to resize the advisory posters.
### Scripts Used
* [Chart.js](https://www.chartjs.org/)
  * Chart.js was used to create chart based on the data retrieved by API.

### API Used
* [Disease-SH API](https://github.com/disease-sh/API)
  * Disease-SH API was used to retrieve local, global and other countries' COVID-19 statistics, such as the total number of cases.

* [GNews API](https://gnews.io/)
  * GNews API was used to retrieve local news articles relating to COVID-19.

* [Tugkan COVID-19 SG API](https://apify.com/tugkan/covid-sg)
  * Tugkan COVID-19 SG API was used to retrieve local COVID-19 Statistics such as the number of active cases in Singapore.

## Testing
  ### Desktop
  ![Manual Test Case](/Site-Testing/Manual-User-Testing-Case.png)

  ### Mobile
  ![Manual Test Case Mobile](/Site-Testing/Manual-User-Testing-Case-Mobile.png)
## Credits
* Framework
  * [Bootstrap 5.0](https://getbootstrap.com/)
* Libraries & Scripts
  * [Chart.js](https://www.chartjs.org/)
  * [jQuery](https://jquery.com/)
* Fonts
  * **Google Fonts** - Expletus Sans, Montserrat, Nunito Sans, Quattrocento Sans, Source Sans Pro, Open Sans
* COVID-19 Statistics (Total Cases, Recovered Cases, Deceased Cases)
  * [Disease-SH API](https://github.com/disease-sh/API)
* COVID-19 Statistics (Local Cases, Active Cases, In Community Facilities, Hospitalized & Stablized)
  * [Tugkan COVID-19 SG API](https://apify.com/tugkan/covid-sg)
* News Articles
  * [GNews API](https://gnews.io/)

* Media
  * Countries Icon
    * Freepik, Global Icon, Retrieved from https://www.flaticon.com/free-icon/world_52349?term=global&page=1&position=11&related_item_id=52349
    * Freepik, Country Flags, Retrieved from https://www.flaticon.com/packs/country-flags?k=1609656054883
  * COVID-19 Advisory Icons
    * Freepik, Mask, Retrieved from https://www.flaticon.com/free-icon/medical-mask_2949936?related_item_id=2949936&term=mask&related_item_id=2949936
    * MOH, Trace Together Icon, Retrieved from https://www.moh.gov.sg/covid-19
    * Pixel Perfect, Pax Limitation Icon, Retrieved from https://www.flaticon.com/free-icon/people_3922935?term=safe%20distancing&page=1&position=31&related_item_id=3922935
    * Freepik, Safe Distancing Icon, Retrieved from https://www.flaticon.com/free-icon/queue_2949754?term=safe%20distancing&page=1&position=1&related_item_id=2949754
    * Freepik, Wash Hand Icon, Retrieved from https://www.flaticon.com/free-icon/liquid-soap_2913371?term=wash%20hands&page=1&position=4&related_item_id=2913371
    * Freepik, QR code Scan Icon, Retrieved from https://www.flaticon.com/free-icon/qr-code-scan_3126504?term=scan%20qr&page=1&position=8&related_item_id=3126504
  * COVID-19 Advisory Posters
    * MOH, Safe Shopping EN, Retrieved from https://www.moh.gov.sg/docs/librariesprovider5/covid-19-inforgraphics/safe-shopping_eng.jpg

    * MOH, Safe Outdoor EN, Retrieved from https://www.moh.gov.sg/docs/librariesprovider5/covid-19-inforgraphics/safe-outdoors_eng.jpg

    * MOH, Safe Dining EN, Retrieved from https://www.moh.gov.sg/docs/librariesprovider5/covid-19-inforgraphics/safe-dining_eng.jpg

    * MOH, Safe Commuting EN, Retrieved from https://www.moh.gov.sg/docs/librariesprovider5/covid-19-inforgraphics/safe-commuting_eng.jpg

    * MOH, Safe Shopping CH, Retrieved from https://www.moh.gov.sg/docs/librariesprovider5/covid-19-inforgraphics/safe-shopping_chi.jpg

    * MOH, Safe Outdoor CH, Retrieved from https://www.moh.gov.sg/docs/librariesprovider5/covid-19-inforgraphics/safe-outdoors_chi.jpg

    * MOH, Safe Dining CH, Retrieved from https://www.moh.gov.sg/docs/librariesprovider5/covid-19-inforgraphics/safe-dining_chi.jpg

    * MOH, Safe Commuting CH, Retrieved from https://www.moh.gov.sg/docs/librariesprovider5/covid-19-inforgraphics/safe-commuting_chi.jpg

    * MOH, Safe Shopping ML, Retrieved from https://www.moh.gov.sg/docs/librariesprovider5/covid-19-inforgraphics/safe-shopping_ml.jpg

    * MOH, Safe Outdoor ML, Retrieved from https://www.moh.gov.sg/docs/librariesprovider5/covid-19-inforgraphics/safe-outdoors_ml.jpg

    * MOH, Safe Dining ML, Retrieved from https://www.moh.gov.sg/docs/librariesprovider5/covid-19-inforgraphics/safe-dining_ml.jpg

    * MOH, Safe Commuting ML, Retrieved from https://www.moh.gov.sg/docs/librariesprovider5/covid-19-inforgraphics/safe-commuting_ml.jpg

    * MOH, Safe Shopping TL, Retrieved from https://www.moh.gov.sg/docs/librariesprovider5/covid-19-inforgraphics/safe-shopping_tl.jpg

    * MOH, Safe Outdoor TL, Retrieved from https://www.moh.gov.sg/docs/librariesprovider5/covid-19-inforgraphics/safe-outdoors_tl.jpg

    * MOH, Safe Dining TL, Retrieved from https://www.moh.gov.sg/docs/librariesprovider5/covid-19-inforgraphics/safe-dining_tl.jpg

    * MOH, Safe Commuting TL, Retrieved from https://www.moh.gov.sg/docs/librariesprovider5/covid-19-inforgraphics/safe-commuting_tl.jpg

    * Generated Photos, Asian Female & Asian Male, Retrieved from https://generated.photos/

    * Razerzone, Surgical Mask on Asians, Retrieved from https://assets2.razerzone.com/images/razerforlife/masks/razerforlife-surgical-mask.png
## References & Acknowledgments
* Themes
  * [Bootstrap Example - Dashboard](https://getbootstrap.com/docs/5.0/examples/dashboard/) was referenced for the layout of the site.
  * [Generated.Photos](https://generated.photos/faces#) was used to retrieve fictional and images of humans created through Artificial Intelligence
  * [King Rayhan](https://kingrayhan.medium.com/create-a-simple-preloader-with-jquery-c6efb03c7f23) was **referenced** for the script of preloader