/**
 * Created by vjain3 on 3/14/16.
 */
angular.module('contiv.models', []);
var ContivGlobals = (function () {
    var NETMASTER = 'http://localhost:9999';
    var CLUSTER = 'http://contiv150.insieme.local:9876';
    var VOLMASTER = 'http://contiv150.insieme.local:9005';
    return {
        //REST endpoints for NETMASTER
        'NETWORKS_ENDPOINT': NETMASTER + '/api/networks/',
        'POLICIES_ENDPOINT': NETMASTER + '/api/policys/',
        'RULES_ENDPOINT': NETMASTER + '/api/rules/',
        'APPLICATIONGROUPS_ENDPOINT': NETMASTER + '/api/endpointGroups/',

        //REST endpoints for VOLMASTER
        'VOLUMES_ENDPOINT': VOLMASTER + '/list',

        //REST endpoints for CLUSTER
        'NODES_LIST_ENDPOINT': CLUSTER + '/info/nodes',
        'NODES_COMMISSION_ENDPOINT': CLUSTER + '/commission/node/',
        'NODES_DECOMMISSION_ENDPOINT': CLUSTER + '/decommission/node/',
        'NODES_MAINTENANCE_ENDPOINT': CLUSTER + '/maintenance/node/',

        //RegEx for validation
        'CIDR_REGEX' : '^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])(\/([0-9]|[1-2][0-9]|3[0-2]))$'
    }
})();
