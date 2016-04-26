/**
 * Created by vjain3 on 3/22/16.
 */
angular.module('contiv.volumes', ['contiv.models'])
    .config(function ($stateProvider) {
        $stateProvider
            .state('contiv.volumes.list', {
                url: '/list',
                controller: 'VolumeListCtrl as volumeListCtrl',
                templateUrl: 'volumes/volumelist.html'
            })
        ;
    })
    .controller('VolumeListCtrl', ['$scope', '$interval', 'VolumesModel', function ($scope, $interval, VolumesModel) {
        var volumeListCtrl = this;

        function getVolumes(reload) {
            VolumesModel.get(reload)
                .then(function (result) {
                    volumeListCtrl.volumes = result;
                });
        }

        //Load from cache for quick display initially
        getVolumes(false);

        var promise;
        //Don't do auto-refresh if one is already in progress
        if (!angular.isDefined(promise)) {
            promise = $interval(function () {
                getVolumes(true);
            }, 5000);
        }
        //stop polling when user moves away from the page
        $scope.$on('$destroy', function () {
            $interval.cancel(promise);
        });
    }]);