ShareMe is React App that is something like Instagram Clone.  
On the Master branch you can find the Frontend part of the App and on the Main branch you can find the Backend part of the App.  
For the Backend I'm using Sanity, which is Free for using. I'm using GROQ for querying the data from Sanity.  
My Sanity Schema is hosted live here: https://shareme-aleksandro.sanity.studio/desk  You can check all the data.  
I'm using Google Authenticatior for login, also I'm using console.cloud.google APIS where I manage the Google credentials for login and logout.  
You can Login only by using a google account.  
Once you are logged in, the app redirects you to the homepage where you see all the Pins and your google data from your Google account are stored in localstorage.  
If you are using large screen the Categories will be on your left side, while if you are on small screen you can open them by clicking the Menu button in the Navbar.  
You can search for pins in the Search component on the Navbar. The Search is searchyng by category,about and title! 
You can add new Pin by clicking in the + button next to the Search bar. You must upload photo by clicking on Select File, then you must provide Title, destination, about and choose category where you will store the Pin.  
Once you created the Pin, it will took some time to be rendered in the Home page and in his Category type.  
You can add some comments to a Pin, you can Download the Picture of a Pin and you can Save a Pin and you can visit the destination page of the pin.  
You can open the Pin and see all it's comments, about,  destination pages and more!  
You can open your Profile by clicking on your Google Image Icon in the Navbar.  There you will find all yours pins and all yours saved pins. You can also logout in the right top corner by clicking Logout.  
This React App is using the modern react router dom v6.  
For the Styling I'm using Tailwind CSS
You can check the app here: https://shareme-aleksandro.netlify.app/
