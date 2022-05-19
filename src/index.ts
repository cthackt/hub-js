import { searchContent, IBooleanOperator, IContentSearchOptions, ContentSearchService, ISearchRequest, IContentSearchFilter } from '@esri/hub-search';
import { UserSession } from "@esri/arcgis-rest-auth";
import { ArcGISIdentityManager } from '@esri/arcgis-rest-request';

const session = new UserSession({username: 'sccwrp', password: 'L[k9B47P&H5Y'});

console.log(session);


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
