Template.MainNav.events({
    'click .login-toggle': () => {
        Session.set('nav-toggle', 'open');
    }
});