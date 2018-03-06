Router.configure({
    //javascript object
    layoutTemplate: "layout",
    loadingTemplate: "loading",
    notFoundTemplate: "notFound",
    waitOn: function() { return Meteor.subscribe("allPosts"); }
});


//main page route
Router.route('/', { name: 'postsList' }); //luyouguize postsList
// main page should use root path : '/'

Router.route('/posts/:_id', {
    name: 'postPage',
    data: function() { return Posts.findOne(this.params._id) }
});

// This is a hook
Router.onBeforeAction('dataNotFound', { only: 'postPage' });