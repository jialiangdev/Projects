if (Posts.find().count() === 0) {
    Posts.insert({

        title: 'Baidu',
        url: 'http://www.baidu.com',
        flagged: false
    });

    Posts.insert({

        title: 'Google',
        url: 'http://www.google.com',
        flagged: false
    });

    Posts.insert({
        title: 'Facebook',
        url: 'http://www.facebook.com',
        flagged: false,
        author: 'me',
        category: 'Java'
    });

}