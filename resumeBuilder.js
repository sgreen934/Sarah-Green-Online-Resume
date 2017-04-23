    var bio = {
        "name": "Sarah L. Green",
        "role": "Director Data Insights",
        "contacts": {
            "mobile": "213-910-9919",
            "email": "sg9148@att.com",
            "github": "sgreen934",
            "location": "Dallas, Texas"
        },
        "welcomeMessage": "Experienced General Manager with Established Record of Results",
        "skills": ["Big Data, Office of the President, Customer Care", " Network Operations, Federal Regulatory, Program Management"],
        "biopic": "images/me.jpg",
        "display": function() {

            $("#header").prepend(HTMLheaderRole.replace('%data%', bio.role)); // Displays role
            $("#header").prepend(HTMLheaderName.replace('%data%', bio.name)); // Displays name
            $('#header').append(HTMLbioPic.replace('%data%', bio.biopic));
            $('#header').append(HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage));
            $('#header').append(HTMLskillsStart);

            //Displays skills next to biopic 

            $.each(bio.skills, function(data2) {
                $('#skills').append(HTMLskills.replace('%data%', bio.skills[data2]));
            });

            //Displays contadt info on the page header and footer

            $.each(bio.contacts, function(data1, data2) {
                $('#topContacts').append(HTMLcontactGeneric.replace("%contact%", data1).replace('%data%', data2));
                $('#footerContacts').append(HTMLcontactGeneric.replace("%contact%", data1).replace('%data%', data2));
            });

        }

    };

 //Displays the bio information
  bio.display();

 // Displays the education information

    var education = {
        "schools": [{
            "name": "University of Southern California",
            "location": "Los Angeles, California",
            "degree": "Master of Arts",
            "majors": ["Communication Management"],
            "dates": "1999-2000",
            "url": "http://www.usc.edu",
        }, {
            "name": "Augustana College",
            "location": "Sioux Falls, South Dakota",
            "degree": "Bachelor of Arts",
            "majors": ["Communiction and Journalism"],
            "dates": "1993-1997",
            "url": "http://www.augie.edu",
		}, {	
			"name": "Don Quijote International",
            "location": "Salamanca, Spain; Granada, Spain",
            "degree": "Intensive Language Study Certificate",
            "majors": ["Spanish"],
            "dates": "March-April 1999",
            "url": "http://www.donquijote.org/en/spanish-schools-in-spain",
        }],
        "onlineCourses": [{
            "title": "Introduction To Programming Nanodegree",
            "school": "Udacity",
            "dates": "2017",
            "url": "https://www.udacity.com/course/intro-to-programming-nanodegree--nd000",
        }],

        //Displays schools and education information including online course information
        "display": function() {

            $.each(education.schools, function(edu) {

                $('#education').append(HTMLschoolStart); //Appends school and eduction details to the #education header

                var educations = education.schools;
                var myName = HTMLschoolName.replace('%data%', educations[edu].name).replace("#", educations[edu].url);
                var myDegree = HTMLschoolDegree.replace('%data%', educations[edu].degree);
                $('.education-entry:last').append(myName + myDegree);

                var myDates = HTMLschoolDates.replace('%data%', educations[edu].dates);
                $('.education-entry:last').append(myDates);

                var myLocation = HTMLschoolLocation.replace('%data%', educations[edu].location);
                $('.education-entry:last').append(myLocation);

                var myMajors = HTMLschoolMajor.replace('%data%', educations[edu].majors);
                $('.education-entry:last').append(myMajors);
            });

            $('#education').append(HTMLonlineClasses); //Appends online education to the #education header

            $.each(education.onlineCourses, function(edu) {
                $('#education').append(HTMLschoolStart);
                var onlineEd = education.onlineCourses;
                var myTitle = HTMLonlineTitle.replace('%data%', onlineEd[edu].title);
                var mySchool = HTMLonlineSchool.replace('%data%', onlineEd[edu].school);
                $('.education-entry:last').append(myTitle + mySchool);

                var myDates = HTMLonlineDates.replace('%data%', onlineEd[edu].dates);
                $('.education-entry:last').append(myDates);

                var myUrl = HTMLonlineURL.replace("#", onlineEd[edu].url).replace('%data%', onlineEd[edu].url);
                $('.education-entry:last').append(myUrl);

            });
        }
    };

//Displays educaation information

    education.display(); 

    // Displays work details

    var work = {
        "jobs": [{
            "employer": "AT&T Services, Inc.",
            "title": "Director Data Insights, Big Data",
            "location": "Plano, Texas",
            "dates": "April 2014 - present",
            "description": "Delivered $1.7B in Net Present Value over the next 20 years by guiding the fiber build plan with data science."
        }, {
            "employer": "AT&T Services, Inc.",
            "title": "Director Project Program Managment, Office of the President",
            "location": "Atlanta, Georgia",
            "dates": "February 2012 - April 2014",
            "description": "Led a geographically diverse team of 102 care agents" +
                "and technical members troubleshot complex TV and " +
                "broadband issues for Officer level customer escalations.",
        }, {
            "employer": "AT&T Services, Inc.",
            "title": "Director Project Managment, Customer Solutions Centers",
            "location": "Atlanta, Georgia",
            "dates": "July 2010 - February 2012",
            "description": "Program managed all Consumer marketing initiatives" +
                " (100+) for the now defunct AT&T T-Mobile merger." +
                " Orchestrated business case development and implementation" +
                " of 52 large-scale projects, representing ~$300M in investment.",
        }, {
            "employer": "AT&T Services, Inc.",
            "title": "Senior Project Manager, Call Centers Support, Strategy, and Business Unit Advising",
            "location": "Washington, District of Columbia",
            "dates": "September 2009 - July 2010",
            "description": "Drove $14.6M in annual savings by transforming a cost savings" +
                " concept into a viable business case. Selected by senior" +
                " leadership to design and implement a change control process" +
                " that drove down call volumes to record lows.",
        }, {
            "employer": "AT&T Services, Inc.",
            "title": "Area Manager – National Customer Care Strategy/Transformation",
            "location": "Washington, District of Columbia",
            "dates": "May 2008 - August 2009",
            "description": "Saved $1.1M by diagnosing call transfer defects and implementing changes.",
        }, {
            "employer": "AT&T Services, Inc.",
            "title": "Area Manager – Quality/Methods and Procedures",
            "location": "Washington, District of Columbia",
            "dates": "May 2007 - May 2008",
            "description": "Obliterated offshore call transfer rate by 30% by restructuring call routing methods and procedures.",
        }, {
            "employer": "AT&T Services, Inc. (formerly SBC)",
            "title": "Associate Director – Federal Regulatory",
            "location": "Washington, District of Columbia",
            "dates": "September 2004 - May 2007",
            "description": "Protected the $4B special access revenue stream through advocacy, defending the FCC’s pricing framework.",
        }, {
            "employer": "AT&T Services, Inc. (formerly SBC)",
            "title": "Senior Billing Manager, Global Markets Customer Care",
            "location": "San Francisco, California",
            "dates": "Feberuary 2004 - September 2004",
            "description": "Negotiated and implemented separation of work agreements with executives across multiple business units.",
        },{
            "employer": "AT&T Services, Inc. (formerly SBC)",
            "title": "Associate Director - Business Strategy eChannel Marketing",
            "location": "Hoffman Estates, Illinois",
            "dates": "May 2003 - February 2004",
            "description": "Redesigned the sbc.com Consumer and Business landing pages in partnershp with outside design firms.",
        },],
        "display": function() {

            $.each(work.jobs, function(j) {

                $('#workExperience').append(HTMLworkStart); //Appends work experience to the #workExperience header
                var myJobs = work.jobs[j];
                var myEmployer = HTMLworkEmployer.replace('%data%', myJobs.employer);
                var myTitle = HTMLworkTitle.replace('%data%', myJobs.title);
                $('.work-entry:last').append(myEmployer + ' ' + myTitle);
                var myDates = HTMLworkDates.replace('%data%', myJobs.dates);
                $('.work-entry:last').append(myDates);
                var myLocation = HTMLworkLocation.replace('%data%', myJobs.location);
                $('.work-entry:last').append(myLocation);
                var myDescription = HTMLworkDescription.replace('%data%', myJobs.description);
                $('.work-entry:last').append(myDescription);

            });

        }

    };

//Displays work history
   work.display(); 

    // Displays project details
    var project = {
        "projects": [{
            "title": "Program Management:  Now defunct AT&T - T-Mobile Merger",
            "dates": "2011-2012",
            "description": "Program managed 100+ Consumer Marketing initiatives for the now defunct merger.",
            "images": ["http://cbsnews2.cbsistatic.com/hub/i/r/2011/08/31/f22a3c96-a643-11e2-a3f0-029118418759/thumbnail/1200x630/5e21e40fb131ac24cc20f70d826b5d49/ATT-and-T-MOBILE-logos_110831.jpg", ],
        }, {
            "title": "iPhone Penetration Curves",
            "dates": "2017",
            "description": "Predict product penetration in the handheld device market.",
            "images": ["https://thomasdorsey.files.wordpress.com/2015/09/iphone-cummalitive-sales1.jpg",],
        },],

        "display": function() {

            $.each(project.projects, function(proj) {

                $('#projects').append(HTMLprojectStart); //Appends projects to the #projects header
                var project = project.projects[proj];
                var myTitle = HTMLprojectTitle.replace('%data%', projects.title);
                $('.project-entry:last').append(myTitle);
                var myDates = HTMLprojectDates.replace('%data%', projects.dates);
                $('.project-entry:last').append(myDates);
                var myDescription = HTMLprojectDescription.replace('%data%', projects.description);
                $('.project-entry:last').append(myDescription);
                $.each(projects.images, function(img) {
                    var myImages = HTMLprojectImage.replace('%data%', projects.images[img]);
                    $('.project-entry:last').append(myImages);
                });

            });

        }

    };

//Displays project details and images
    // project.display();    
 
//Displays the map

function displayMap() {
    $('#mapDiv').append(googleMap);
    }

displayMap();
