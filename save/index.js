import { searchContent, IBooleanOperator, IContentSearchOptions, ContentSearchService, ISearchRequest, IContentSearchFilter } from '@esri/hub-search';
import { UserSession } from "@esri/arcgis-rest-auth";
import { ArcGISIdentityManager } from '@esri/arcgis-rest-request';

// const contentSearchService = new ContentSearchService({
//    portal: "https://qa-pre-hub.mapsqa.arcgis.com/sharing/rest",
//    isPortal: false,
//    authentication: new UserSession({username: 'sccwrp', password: 'L[k9B47P&H5Y'})
// });

// const filter: IContentSearchFilter = {
//    "filterType": "content",
//    "type": "Feature Service",
//    "tags": "bight18-sediment-chemistry"
// }

// const result = contentSearchService.search({filter})
// console.log("hi");

// console.log(result);

// const bootstrapCdnTags = `<script type="module" src="https://js.arcgis.com/calcite-components/1.0.0-beta.82/calcite.esm.js"></script>
// <link rel="stylesheet" type="text/css" href="https://js.arcgis.com/calcite-components/1.0.0-beta.82/calcite.css" />`

// document.querySelector('head').insertAdjacentHTML("beforeend", bootstrapCdnTags);

// const authButton =`<div style="text-align: center; padding: 100px"><button id="authenticate">Authenticate</button></div>`;

// document.querySelector('body').insertAdjacentHTML("beforebegin", authButton);

// const signOutButton =  `<div style="text-align: center; padding: 100px"><button id="signOutButton">Sign Out</button></div>`

// document.querySelector('body').insertAdjacentHTML("beforeend", signOutButton);



// let session = null;
// const clientId = "M92CmlbtoKVEJZvL";
// const redirectUri = 'http://127.0.0.1:5500/hub-js/dist/auth.html'

// const serializedSession = localStorage.getItem("__ARCGIS_REST_USER_SESSION__"); // Check to see if there is a serialized session in local storage.

// if (serializedSession !== null && serializedSession !== "undefined") {
//    session = ArcGISIdentityManager.deserialize(serializedSession);
// }

// function updateSessionInfo(session) {
//    let sessionInfo = document.getElementById("sessionInfo");

//    if (session) {
//       localStorage.setItem("__ARCGIS_REST_USER_SESSION__", session.serialize());
//    } else {
//       console.error("Something went wrong :(")
//    }
// }

// updateSessionInfo(session);

// document.getElementById("authenticate").addEventListener("click", (event) => {
//    // Begin an OAuth2 login using a popup.
//    ArcGISIdentityManager.beginOAuth2({
//       clientId: clientId,
//       redirectUri: redirectUri,
//       popup: true
//    })
//       .then((newSession) => {
//       // Upon a successful login, update the session with the new session.
//       session = newSession;
//       console.log(session);
//       updateSessionInfo(session);
//       console.log(">> authenticated! <<")
//       })
//       .catch((error) => {
//       console.log(error);
//       })
//       .then()
//    event.preventDefault();

// });

// document.getElementById("signOutButton").addEventListener("click", (event) => {
//    event.preventDefault();
//    // call the signOut method to invalidate the token.
//    session.signOut().then(()=>{
//      session = null; // Clear the session from memory.
//      localStorage.removeItem("__ARCGIS_REST_USER_SESSION__");
//      updateSessionInfo();
//    });
//  });