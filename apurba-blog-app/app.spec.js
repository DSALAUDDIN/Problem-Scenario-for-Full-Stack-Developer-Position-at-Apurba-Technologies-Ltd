// File: app.spec.js

const angular = require('angular');
require('angular-mocks');

describe('PostController', function() {
    var $controller, $rootScope, $scope;

    beforeEach(angular.mock.module('myBlogApp'));

    beforeEach(inject(function(_$controller_, _$rootScope_) {
        $controller = _$controller_;
        $rootScope = _$rootScope_;
        $scope = $rootScope.$new();
        $controller('PostController', { $scope: $scope });
    }));

    it('should validate the new post form', function() {
        // Initialize form data
        $scope.newPost = {
            title: '',
            content: '',
            author: ''
        };

        // Check initial form validity
        expect($scope.newPostForm.$valid).toBe(false);

        // Fill in the form
        $scope.newPost.title = 'Test Title';
        $scope.newPost.content = 'Test Content';
        $scope.newPost.author = 'Test Author';

        // Trigger form validation
        $scope.$digest();

        // Check form validity after filling in the form
        expect($scope.newPostForm.$valid).toBe(true);
    });
});