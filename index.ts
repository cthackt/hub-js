import { searchContent, IBooleanOperator, IContentSearchOptions } from '~/@esri/hub-search';
import { UserSession } from 'https://cdn.skypack.dev/@esri/arcgis-rest-auth';

const options: IContentSearchOptions = {
   site: 'https://my-site.hub.arcgis.com',
   portal: 'https://www.arcgis.com',
   // Any private content that the authenticated user can access will be included in the results
   authentication: new UserSession({username: 'sccwrp', password: 'L[k9B47P&H5Y'}),
}