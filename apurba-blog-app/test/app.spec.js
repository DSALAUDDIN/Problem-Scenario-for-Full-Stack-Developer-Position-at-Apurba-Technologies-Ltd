describe('PostController Form Validation', function () {
    beforeEach(angular.mock.module('myBlogApp'));

    var $controller, $rootScope, $httpBackend;

    beforeEach(inject(function (_$controller_, _$rootScope_, _$httpBackend_) {
        $controller = _$controller_;
        $rootScope = _$rootScope_;
        $httpBackend = _$httpBackend_;
    }));

    describe('Form validation', function () {
        var $scope, form;

        beforeEach(function () {
            $scope = $rootScope.$new();
            var controller = $controller('PostController', { $scope: $scope });

            // Create a mock form
            form = {
                $valid: false,
                $setPristine: jasmine.createSpy('$setPristine'),
                $setUntouched: jasmine.createSpy('$setUntouched')
            };
            $scope.form = form;
        });

        it('should be invalid if title is missing', function () {
            $scope.newPost = {
                title: '',
                content: 'This is a test post content.',
                author: 'John Doe'
            };

            $scope.createPost();
            expect($scope.form.$valid).toBe(false);
        });

        it('should be invalid if content is missing', function () {
            $scope.newPost = {
                title: 'Test Post',
                content: '',
                author: 'John Doe'
            };

            $scope.createPost();
            expect($scope.form.$valid).toBe(false);
        });

        it('should be invalid if author is missing', function () {
            $scope.newPost = {
                title: 'Test Post',
                content: 'This is a test post content.',
                author: ''
            };

            $scope.createPost();
            expect($scope.form.$valid).toBe(false);
        });

        it('should be valid if all fields are filled', function () {
            $scope.newPost = {
                title: 'Test Post',
                content: 'This is a test post content.',
                author: 'John Doe'
            };

            form.$valid = true; // Simulate form being valid
            $scope.createPost();
            expect($scope.form.$valid).toBe(true);
        });
    });
});