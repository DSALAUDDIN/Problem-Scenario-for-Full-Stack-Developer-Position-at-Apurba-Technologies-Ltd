angular.module('myBlogApp', [])
    .controller('PostController', function($scope, $http) {
        $scope.posts = [];
        $scope.newPost = {};
        $scope.newPostFormVisible = false;
        $scope.editingPost = null;
        $scope.isEditing = false;

        // Fetch posts on load
        $scope.getPosts = function() {
            $http.get('http://localhost:8080/posts') // Updated API endpoint
                .then(function(response) {
                    $scope.posts = response.data;
                })
                .catch(function(error) {
                    console.error("Error fetching posts:", error);
                });
        };

        // Create a new post
        $scope.createPost = function() {
            if ($scope.newPost.title && $scope.newPost.content && $scope.newPost.author) {
                $http.post('http://localhost:8080/posts', $scope.newPost) // Updated API endpoint
                    .then(function(response) {
                        $scope.posts.push(response.data);
                        $scope.newPost = {};
                        $scope.newPostFormVisible = false;
                        $scope.isEditing = false;
                    })
                    .catch(function(error) {
                        console.error("Error creating post:", error);
                    });
            }
        };

        // Edit an existing post
        $scope.editPost = function(post) {
            $scope.editingPost = angular.copy(post);
            $scope.newPost = angular.copy(post);
            $scope.newPostFormVisible = true;
            $scope.isEditing = true;
        };

        // Update an existing post
        $scope.updatePost = function() {
            if ($scope.editingPost.id) {
                $scope.editingPost.title = $scope.newPost.title;
                $scope.editingPost.content = $scope.newPost.content;
                $scope.editingPost.author = $scope.newPost.author;

                $http.put('http://localhost:8080/posts/' + $scope.editingPost.id, $scope.editingPost) // Updated API endpoint
                    .then(function(response) {
                        const postIndex = $scope.posts.findIndex(p => p.id === response.data.id);
                        if (postIndex !== -1) {
                            $scope.posts[postIndex] = response.data;
                        }
                        $scope.editingPost = null;
                        $scope.newPost = {};
                        $scope.newPostFormVisible = false;
                        $scope.isEditing = false;
                    })
                    .catch(function(error) {
                        console.error("Error updating post:", error);
                    });
            }
        };

        // Delete a post
        $scope.deletePost = function(postId) {
            $http.delete('http://localhost:8080/posts/' + postId) // Updated API endpoint
                .then(function(response) {
                    $scope.posts = $scope.posts.filter(function(p) {
                        return p.id !== postId;
                    });
                })
                .catch(function(error) {
                    console.error("Error deleting post:", error);
                });
        };

        $scope.getPosts(); // Fetch initial data
    });