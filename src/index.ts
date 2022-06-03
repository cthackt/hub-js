import { searchContent, IBooleanOperator, IContentSearchOptions, ContentSearchService, ISearchRequest, IContentSearchFilter } from '@esri/hub-search';
import { UserSession } from "@esri/arcgis-rest-auth";
import { ArcGISIdentityManager } from '@esri/arcgis-rest-request';

const contentSearchService = new ContentSearchService({
   portal: "https://sccwrp.maps.arcgis.com/sharing/rest",
   isPortal: true
});

const filter: IContentSearchFilter = {
   "owner": "sccwrp"
}
const search = async () => {
   const result = await contentSearchService.search({filter: filter})
   console.log(result.results);
   console.log("total results >>>", result.total);
}

search();


