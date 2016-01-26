// Home Page
FlowRouter.route('/', {
    name: 'home',
    action() {
        BlazeLayout.render("HomeLayout", {main: "Home"});
    }
});

// Home Page
FlowRouter.route('/dashboard', {
    name: 'dashboard',
    action() {
        BlazeLayout.render("AppLayout", {main: "Dashboard"});
    }
});


// Login Routes
FlowRouter.route('/user/:id', {
    name: 'User Profile',
    action() {
        BlazeLayout.render("MainLayout", {main: "UserProfile"});
    }
});