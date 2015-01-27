'use strict';
/**
 * Created by zazou on 11/07/14.
 */
angular.module("FireBaseService", []).factory('FBRetrieve', ['$q', function($q){
    var biblioData = new Object();

    // defferred pattern

    biblioData.getData = function(type) {

        var biblioRef = new Firebase('https://legalcitator.firebaseio.com/'+type),
            //$q servic helps my stuff run asynchronously
            deferred = $q.defer();

        //using on to lisen to changes in firebase url.

        biblioRef.on('value', function(data) {
            if (data.val() === null) {
                deferred.reject('ERROR');
            }
            //data.val becomes the argument for the deferred.promise(arg)


            deferred.resolve(data.val());
        });

        return deferred.promise;
    };

    return biblioData;
}]);

/*
$scope.getBiblioData = function(type){
    console.log('https://legalcitator.firebaseio.com/'+type);
    var biblioRef = new Firebase('https://legalcitator.firebaseio.com/'+type);
    biblioRef.on('value', function(data){
        if(data.val() === null){
            return;
        }
        else{
            console.log(data.val().sam.author);
            return data;

        }

    });
};*/