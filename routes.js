// Home Page
FlowRouter.route('/', {
    name: 'home',
    action() {
        BlazeLayout.render("MainLayout", {main: "Home"});
    }
});

// Home Page
FlowRouter.route('/dashboard', {
    name: 'dashboard',
    action() {
        BlazeLayout.render("HomeLayout", {main: "Dashboard"});
    }
});


// Staff Finance Mangment
FlowRouter.route('/sallery', {
    name: 'sallery',
    action() {
        BlazeLayout.render("HomeLayout", {main: "sallery"});
    }
});

FlowRouter.route('/deduction', {
    name: 'deduction',
    action() {
        BlazeLayout.render("HomeLayout", {main: "deduction"});
    }
});

FlowRouter.route('/loan', {
    name: 'loan',
    action() {
        BlazeLayout.render("HomeLayout", {main: "loan"});
    }
});

FlowRouter.route('/attendance', {
    name: 'attendance',
    action() {
        BlazeLayout.render("HomeLayout", {main: "attendance"});
    }
});

// End Staff Finance Mangment
//Print
FlowRouter.route('/AttendancePrevewPrint', {
    name: 'attendance',
    action() {
        BlazeLayout.render("TestLayout", {main: "AttendancePrevewPrint"});
    }
});

FlowRouter.route('/salleryprint', {
    name: 'salleryprint',
    action() {
        BlazeLayout.render("TestLayout", {main: "salleryprint"});
    }
});


FlowRouter.route('/reservationhistory/:id', {
    name: 'reservationhistory',
    action() {
        BlazeLayout.render('HomeLayout', {main: 'reservationhistory'});
    }
});

FlowRouter.route('/DrNotification', {
    name: 'DrNotification',
    action() {
        BlazeLayout.render('HomeLayout', {main: 'DrNotification'});
    }
});

FlowRouter.route('/newPatient', {
    name: 'newPatient',
    action() {
        BlazeLayout.render('HomeLayout', {main: 'newPatient'});
    }
});


FlowRouter.route('/reservation', {
    name: 'reservation',
    action() {
        BlazeLayout.render("HomeLayout", {main: "Reservation"});
    }
});

FlowRouter.route('/NurseNotification', {
    name: 'reservations',
    action() {
        BlazeLayout.render("HomeLayout", {main: "NurseNotification"});
    }
});

FlowRouter.route('/addReservation/:id', {
    name: 'addReservation',
    action() {
        BlazeLayout.render("HomeLayout", {main: "addReservation"});
    }
});

FlowRouter.route('/PatientDetails/:id', {
    name: 'PatientDetails',
    action() {
        BlazeLayout.render('HomeLayout', {main: 'PatientDetails'});
    }
});

FlowRouter.route('/patientReport/:id', {
    name: 'patientReport',
    action() {
        BlazeLayout.render("HomeLayout", {main: "patientReport"});
    }
});
FlowRouter.route('/setting', {
    name: 'setting',
    action() {
        BlazeLayout.render("HomeLayout", {main: "setting"});
    }
});



FlowRouter.route('/lab/', {
    name: 'lab',
    action() {
        BlazeLayout.render('HomeLayout', {main: 'lab'});
    }
});

FlowRouter.route('/report', {
    name: 'report',
    action() {
        BlazeLayout.render('HomeLayout', {main: 'report'});
    }
});
FlowRouter.route('/photos', {
    name: 'photos',
    action() {
        BlazeLayout.render('HomeLayout', {main: 'photos'});
    }
});



FlowRouter.route('/examination/:id', {
    name: 'examination',
    action() {
        BlazeLayout.render('HomeLayout', {main: 'examination'});
    }
});


FlowRouter.route('/Antenatal', {
    name: 'Antenatal',
    action() {
        BlazeLayout.render('HomeLayout', {main: 'Antenatal'});
    }
});


FlowRouter.route('/viewAntenatal/:id', {
    name: 'viewAntenatal',
    action() {
        BlazeLayout.render('HomeLayout', {main: 'viewAntenatal'});
    }
});

FlowRouter.route('/personalHistory/:id', {
    name: 'personalHistory',
    action() {
        BlazeLayout.render('HomeLayout', {main: 'personalHistory'});
    }
});

FlowRouter.route('/newpersonalHistory', {
    name: 'newpersonalHistory',
    action() {
        BlazeLayout.render('HomeLayout', {main: 'newpersonalHistory'});
    }
});


FlowRouter.route('/mangment', {
    name: 'mangment',
    action() {
        BlazeLayout.render('HomeLayout', {main: 'mangment'});
    }
});
FlowRouter.route('/mangmentView/:id', {
    name: 'mangmentView',
    action() {
        BlazeLayout.render('HomeLayout', {main: 'mangmentView'});
    }
});

FlowRouter.route('/addMangment/:id', {
    name: 'addMangment',
    action() {
        BlazeLayout.render('HomeLayout', {main: 'addMangment'});
    }
});

FlowRouter.route('/gallery', {
    name: 'gallery',
    action() {
        BlazeLayout.render('HomeLayout', {main: 'gallery'});
    }
});
FlowRouter.route('/personalHistory', {
    name: 'personalHistory',
    action() {
        BlazeLayout.render('HomeLayout', {main: 'personalHistory'});
    }
});


FlowRouter.route('/newexamination', {
    name: 'newexamination',
    action() {
        BlazeLayout.render('HomeLayout', {main: 'newexamination'});
    }
});

FlowRouter.route('/clinicalData', {
    name: 'clinicalData',
    action() {
        BlazeLayout.render('HomeLayout', {main: 'clinicalData'});
    }
});

FlowRouter.route('/drbills', {
    name: 'drbills',
    action() {
        BlazeLayout.render('HomeLayout', {main: 'drbills'});
    }
});








FlowRouter.route('/VisitHistory', {
    name: 'VisitHistory',
    action() {
        BlazeLayout.render('HomeLayout', {main: 'VisitHistory'});
    }
});
// Stock Page
FlowRouter.route('/Stock', {
    name: 'stockstatus',
    action() {
        BlazeLayout.render('HomeLayout', {main: 'stockstatus'});
    }
});

FlowRouter.route('/stockstatus', {
    name: 'stockstatus',
    action() {
        BlazeLayout.render('HomeLayout', {main: 'Stock'});
    }
});

FlowRouter.route('/ReservationBills', {
    name: 'ReservationBills',
    action() {
        BlazeLayout.render('HomeLayout', {main: 'ReservationBills'});
    }
});

FlowRouter.route('/ClinicalBills', {
    name: 'ClinicalBills',
    action() {
        BlazeLayout.render('HomeLayout', {main: 'ClinicalBills'});
    }
});
FlowRouter.route('/viewclinicalbill/:id', {
    name: 'viewclinicalbill',
    action() {
        BlazeLayout.render('HomeLayout', {main: 'viewclinicalbill'});
    }
});
FlowRouter.route('/viewprocedurelbill/:id', {
    name: 'viewprocedurelbill',
    action() {
        BlazeLayout.render('HomeLayout', {main: 'viewprocedurelbill'});
    }
});

FlowRouter.route('/viewpatientBill/:billid/:patientId', {
    name: 'viewpatientBill',
    action() {
        BlazeLayout.render('HomeLayout', {main: 'viewpatientBill'});
    }
});

FlowRouter.route('/addclinicalbill', {
    name: 'addclinicalbill',
    action() {
        BlazeLayout.render('HomeLayout', {main: 'addclinicalbill'});
    }
});

FlowRouter.route('/StockBills', {
    name: 'StockBills',
    action() {
        BlazeLayout.render('HomeLayout', {main: 'StockBills'});
    }
});
FlowRouter.route('/ProcedureBills', {
    name: 'ProcedureBills',
    action() {
        BlazeLayout.render('HomeLayout', {main: 'ProcedureBills'});
    }
});

FlowRouter.route('/search', {
    name: 'search',
    action() {
        BlazeLayout.render('HomeLayout', {main: 'search'});
    }
});

FlowRouter.route('/mangmentReports', {
    name: 'mangmentReports',
    action() {
        BlazeLayout.render('HomeLayout', {main: 'mangmentReports'});
    }
});

FlowRouter.route('/MangmentHistory/:id', {
    name: 'mangment',
    action() {
        BlazeLayout.render('HomeLayout', {main: 'MangmentHistory'});
    }
});
FlowRouter.route('/bills', {
    name: 'bills',
    action() {
        BlazeLayout.render('HomeLayout', {main: 'bills'});
    }
});


FlowRouter.route('/billsSearch', {
    name: 'billsSearch',
    action() {
        BlazeLayout.render('HomeLayout', {main: 'billssearch'});
    }
});

FlowRouter.route('/addPatientBill/:id', {
    name: 'addPatientBills',
    action() {
        BlazeLayout.render('HomeLayout', {main: 'addPatientBill'});
    }
});


FlowRouter.route('/stocksearch', {
    name: 'stocksearch',
    action() {
        BlazeLayout.render('HomeLayout', {main: 'stocksearch'});
    }
});

FlowRouter.route('/ExaminationHistory', {
    name: 'ExaminationHistory',
    action() {
        BlazeLayout.render('HomeLayout', {main: 'ExaminationHistory'});
    }
});

FlowRouter.route('/AntenatalHistory', {
    name: 'AntenatalHistory',
    action() {
        BlazeLayout.render('HomeLayout', {main: 'AntenatalHistory'});
    }
});


FlowRouter.route('/newAntenatal', {
    name: 'newAntenatal',
    action() {
        BlazeLayout.render('HomeLayout', {main: 'newAntenatal'});
    }
});


FlowRouter.route('/reservationsearch', {
    name: 'reservationsearch',
    action() {
        BlazeLayout.render('HomeLayout', {main: 'reservationsearch'});
    }
});
var adminRoutes = FlowRouter.group({
	prefix: '/admin',
	name: 'admin'
});

adminRoutes.route('/users', {
    name: 'users',
    action() {
        BlazeLayout.render("HomeLayout", {main: "Users"});
    }
});

// Doctors Pages
FlowRouter.route('/drAccounting', {
    name: 'drAccounting',
    action() {
        BlazeLayout.render("HomeLayout", {main: "drAccounting"});
    }
});

// End Doctors Pages
FlowRouter.route('/createPDF/:_ParamId', function() { var paramId = this.params._ParamId; if (!paramId) return;

var doc = new PDFDocument({
    size: 'A4',
    margins: {
        top: 50,
        bottom: 0,
        left: 50,
        right: 50,
    }
});

doc.image(process.env.PWD + '/public/sample1.jpg', 0, 30);

this.response.writeHead(200, {
    'Content-type': 'application/pdf',
    'Content-Disposition': 'attachment; filename=somename.pdf'
});
this.response.end(doc.outputSync());}, { where: 'server' });
