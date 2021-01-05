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
* Charts: #FFC533, #A30101, #079BFF

Choice of Colors Rationale:
* Simple colors was used so that it does not clutter the site. 
* Aside from the Navbar, Footer and Buttons, light colors were used to increase the liveliness of the site and to prevent the user's mood to become dull from the already dull-circumstance amidst this chaotic situation.
* Colors chosen also blends together well and is aesthetically pleasing.

Live Demo:
> https://jordanchoi.github.io/ID_S10208161D_JordanChoi_Assg2/index.html

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

### Potential Features
1. Preloader with "Stay Safe" Message
    > Animated Preloader with a Stay Safe message when users arrives to the site.
2. Symptom Checker
    > An application to allow users to check for their risk level of contracting COVID-19 based on symptoms. No current API is available but can be programmed with JS.
3. Email API to contact COVID-19 departments
    > Email API Integration to allow users to contact relevant COVID-19 departments or agencies if necessary.
4. Specific's Country News
    > Allow users to specify country and fetch news based on the country.
5. Fetch More News Article
    > Allow users to request to display more news article relating to COVID-19 with a click of a button.
6. Historical COVID-19 Data & Chart
    > Users can input a specific datetime and retrieve the data as of that datetime.
7. CountUp.js to increase the interactiveness and aesthetics of the site.
    > The data figures can count from 0 to the actual figure retrieved from the API.

