/*global legalmvc, angular, Firebase */
'use strict';


legalmvc.controller('FormCtrl',["$scope","FBRetrieve", function ($scope, FBRetrieve) {

    var url = 'https://legalcitator.firebaseio.com';
    var fireRef = new Firebase(url);

    // To communicate with firebase asynchronously via promises
    //then() has two arguments, a success callback and a failure callback
    FBRetrieve.getData('case').then(function(data) {
        $scope.caseData = data;

    }, function() {
        console.log("ERROR");
    });

    FBRetrieve.getData('legislation').then(function(data) {
        $scope.legislationData = data;

    }, function() {
        console.log("ERROR");
    });



    $scope.addCase = function () {

        // object contains information for 'case' parent branch
        $scope.FireBaseCases = new Firebase('https://legalcitator.firebaseio.com/case');

        //initialized variables to input values bound to the scope in index.html
        var newCaseName = $scope.newCaseName;
        var newLawReport = $scope.newLawReport;
        var newYear = $scope.newYear;
        var newVolume = $scope.newVolume;
        var newStartingPage = $scope.newStartingPage;
        var newPinpoint = $scope.newPinpoint;

        if (!newCaseName.length || !newLawReport.length || newYear === null ||
            newStartingPage ===null ) {
            return;
        }
        newCaseName = $scope.newCaseName.trim();
        newLawReport = $scope.newLawReport.trim();


        var newCaseRow = $scope.FireBaseCases.child(newCaseName);

        if(typeof newPinpoint == 'undefined'){
            newPinpoint = -1;
            console.log("npp");
        }
        if(typeof newVolume == 'undefined'){
            newVolume = -1;
            console.log("nV");
        }

        newCaseRow.set({
                type: 'Case',
                name: newCaseName,
                lawReport: newLawReport,
                year: newYear,
                volume: newVolume,
                page: newStartingPage,
                pinpoint: newPinpoint
            }
        );


        $scope.newCaseName = '';
        $scope.newLawReport ='';
        $scope.newYear =null;
        $scope.newVolume = null;
        $scope.newStartingPage = null;
        $scope.newPinpoint = null;

        FBRetrieve.getData('case').then(function(data) {
            $scope.caseData = data;

        }, function() {
            console.log("ERROR");
        });
        /*$scope.FBRetrieve =  FBRetrieve.getData('case');

         console.log($scope.caseData);*/
    };


    $scope.addLegislation = function () {



        $scope.FireBaseCases = new Firebase('https://legalcitator.firebaseio.com/legislation');

        var newTitle = $scope.newTitle;
        var newJurisdiction = $scope.newJurisdiction;

        var newYear = $scope.newYear;
        var newPinpoint = $scope.newPinpoint;


        if (!newTitle.length || !newJurisdiction.length || newYear === null) {
            return;
        }
        newTitle = $scope.newTitle.trim();
        newJurisdiction = $scope.newJurisdiction.trim();


        var newLegislationRow = $scope.FireBaseCases.child(newTitle);

        newLegislationRow.set({
                type: 'legislation',
                title: newTitle,
                jurisdiction: newJurisdiction,
                year: newYear,
                pinpoint: newPinpoint
            }
        );


        $scope.newTitle = "";
        $scope.newJurisdiction = "";
        $scope.newYear = null;
        $scope.newPinpoint = null;

        FBRetrieve.getData('legislation').then(function (data) {
            $scope.legislationData = data;


        }, function () {
            console.log("ERROR");
        });
    };


}]);

