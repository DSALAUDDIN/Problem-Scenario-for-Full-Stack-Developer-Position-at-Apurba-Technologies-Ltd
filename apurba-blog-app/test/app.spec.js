// test/app.spec.js
describe('PostController', function () {
    beforeEach(angular.mock.module('myBlogApp'));

    var $controller, $rootScope, $httpBackend;

    beforeEach(inject(function (_$controller_, _$rootScope_, _$httpBackend_) {
        $controller = _$controller_;
        $rootScope = _$rootScope_;
        $httpBackend = _$httpBackend_;
    }));

    describe('$scope.createPost', function () {
        it('should create a new post', function () {
            var $scope = $rootScope.$new();
            var controller = $controller('PostController', { $scope: $scope });

            $scope.newPost = {
                title: 'Test Post',
                content: 'This is a test post content.',
                author: 'John Doe'
            };

            $httpBackend.expectPOST('http://localhost:3011/posts').respond(201, {
                id: 1,
                title: 'Test Post',
                content: 'This is a test post content.',
                author: 'John Doe',
                createdAt: new Date()
            });

            $scope.createPost();
            $httpBackend.flush();

            expect($scope.posts.length).toBe(1);
            expect($scope.posts[0].title).toBe('Test Post');
        });
    });

    describe('$scope.deletePost', function () {
        it('should delete a post by id', function () {
            var $scope = $rootScope.$new();
            var controller = $controller('PostController', { $scope: $scope });

            $scope.posts = [
                { id: 1, title: 'Post 1', content: 'Content 1', author: 'Author 1' },
                { id: 2, title: 'Post 2', content: 'Content 2', author: 'Author 2' }
            ];

            $httpBackend.expectDELETE('http://localhost:3011/posts/1').respond(204);

            $scope.deletePost(1);
            $httpBackend.flush();

            expect($scope.posts.length).toBe(1);
            expect($scope.posts[0].id).toBe(2);
        });
    });

    describe('$scope.editPost', function () {
        it('should set isEditing to true and populate newPost with the post data', function () {
            var $scope = $rootScope.$new();
            var controller = $controller('PostController', { $scope: $scope });

            var post = { id: 1, title: 'Post 1', content: 'Content 1', author: 'Author 1' };

            $scope.editPost(post);

            expect($scope.isEditing).toBe(true);
            expect($scope.newPost).toEqual(post);
        });
    });
});