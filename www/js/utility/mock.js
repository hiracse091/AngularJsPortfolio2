app.run(function($httpBackend) {
	var events = [{
                id:1,
                name: 'Seminar on New Muslim',
                cost: '5000',
                type: 'pledge',
                collected: '3000',
                mosque: "Al Taqwa Mosque",
                date_time: new Date(2015, 9, 25),
                description: "Description of the event"

        }, {
            id:2,
            name: 'Fitra Collection',
            cost: '15,000',
            type: 'pledge',
            collected: '3000',
            mosque: null,
            date_time: null,
            description: "Description of the event"
        }, {
            id:3,
            name: 'Zakir Nayek Seminar',
            cost: '25',
            type: 'ticket_sale',
            mosque: "Al Taqwa Mosque",
            date_time: new Date(2015, 9, 25),
            description: "Description of the event"
        },{
            id:3,
            name: 'Billal Phillip Seminar',
            cost: '50',
            type: 'ticket_sale',
            mosque: "Al Taqwa Mosque",
            date_time: new Date(2015, 9, 25),
            description: "Description of the event"
        },{
            id:3,
            name: 'Seminar on Zaqat',
            cost: '60',
            type: 'ticket_sale',
            mosque: "Al Taqwa Mosque",
            date_time: new Date(2015, 9, 25),
            description: "Description of the event"
        }, {
            id:4,
            name: 'Dsicussion On Zakat',
            cost: null,
            type: 'free',
            mosque: "Al Taqwa Mosque",
            date_time: new Date(2015, 9, 25),
            description: "Description of the event"
        }, {
            id:5,
            name: 'Child Care Charity',
            cost: '15,000',
            type: 'pledge',
            collected: '3000',
            mosque: null,
            date_time: null,
            description: "Description of the event"
    }];
    var jobs = [{
                id:1,
                title:"Plumbing",
                description:"A job description may include relationships with other people in the organization",
                tags:"Plumbing",
                location:"Melbourne",
                address:"Melbourne",
                date_time:"2015-11-05T18:00:00.000Z",
                created_by:""
                },{
                    id:2,
                    title:"Cleaning",
                    description:"A job description may include relationships with other people in the organization",
                    tags:"Cleaning",
                    location:"Melbourne",
                    address:"Melbourne",
                    date_time:"2015-11-05T18:00:00.000Z",
                    created_by:""
                },{
                    id:3,
                    title:"Painting",
                    description:"A job description may include relationships with other people in the organization",
                    tags:"Painting",
                    location:"Melbourne",
                    address:"Melbourne",
                    date_time:"2015-11-05T18:00:00.000Z",
                    created_by:""
                },{
                    id:4,
                    title:"Electrician",
                    description:"A job description may include relationships with other people in the organization",
                    tags:"Electrician",
                    location:"Melbourne",
                    address:"Melbourne",
                    date_time:"2015-11-05T18:00:00.000Z",
                    created_by:""
    }];
    $httpBackend.whenPOST('test').respond(function(method, url, data) {
        var msg = {
            success: true,
            message: 'Successfully created event!'
        };
        return [200, msg, {}];
    });
    $httpBackend.whenGET('getLatestEvents').respond(function(method, url, data) {
        var response = {
            success: true,
            data:events,
            message: 'Successfully get event!'
        };
        return [200, response, {}];
    });
    $httpBackend.whenPOST('getEventById').respond(function(method, url, data) {
                var id = data,
                    msg, event;
                event = events.filter(function(u) {
                    return u.id == id;
                });

                if (event.length > 0) {
                    msg = {
                        success: true,
                        data: event[0]
                    };
                } else {
                    msg = {
                        success: false,
                        message: 'Invalid event'
                    };
                }
                return [200, msg, {}];
    });
    $httpBackend.whenPOST('addNewMember').respond(function(method, url, data) {
        var msg = {
            success: true,
            message: 'Successfully added Member!'
        };
        return [200, msg, {}];
    });
    $httpBackend.whenPOST('createJob').respond(function(method, url, data) {
        var msg = {
            success: true,
            message: 'Successfully posted job!'
        };
        return [200, msg, {}];
    });
    $httpBackend.whenPOST('searchJobByParams').respond(function(method, url, data) {

        var msg = {
            success: true,
            data: jobs
        };
        return [200, msg, {}];
    });
    $httpBackend.whenPOST('getJobById').respond(function(method, url, data) {
                var id = data,
                    msg, job;
                job = jobs.filter(function(u) {
                    return u.id == id;
                });

                if (job.length > 0) {
                    msg = {
                        success: true,
                        data: job[0]
                    };
                } else {
                    msg = {
                        success: false,
                        message: 'Invalid job'
                    };
                }
                return [200, msg, {}];
    });
    $httpBackend.whenGET('getLatestJobs').respond(function(method, url, data) {
        var response = {
            success: true,
            data:jobs,
            message: 'Successfully get jobs!'
        };
        return [200, response, {}];
    });
    $httpBackend.whenPOST('pledge').respond(function(method, url, data) {
        var msg = {
            success: true,
            message: 'Successfully donated for this event!'
        };
        return [200, msg, {}];
    });
    $httpBackend.whenPOST('buy_ticket').respond(function(method, url, data) {
        var msg = {
            success: true,
            message: 'You have successfully bought ticket!'
        };
        return [200, msg, {}];
    });
    $httpBackend.whenGET(/^views\//).passThrough();
    $httpBackend.whenGET(/https:\/\/raw.githubusercontent.com/).passThrough();
});
