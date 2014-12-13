var bio = {

    "name": "Anna Menitskaya",
    "role": "Web Developer",
    "WelcomeMessage": "Thank you very much for viewing my JavaScript Interactive Resume!",
    "contacts": {
        "mobile": "213-210-1373",
        "email": "menitskaya@gmail.com",
        "github": "fierceblonde",
        "location": "Los Angeles, CA"
    },
    "bioPic": "images/anna.jpg",
    "skills": ["HTML", "CSS", "Javascript", "Garment Manufacturing"]
};

bio.display = function () {

    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedRole);

    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    $("#header").prepend(formattedName);

    var formattedWelcomeMessage = HTMLWelcomeMsg.replace("%data%", bio.WelcomeMessage);
    $("#header").append(formattedWelcomeMessage);

    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    $("#topContacts").append(formattedMobile);

    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    $("#topContacts").append(formattedEmail);

    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    $("#topContacts").append(formattedGithub);

    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts").append(formattedLocation);

    var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic)
    $("#header").append(formattedBioPic);




    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);

        var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
        $("#skills").append(formattedSkill);
        formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
        $("#skills").append(formattedSkill);
        formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
        $("#skills").append(formattedSkill);
        formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
        $("#skills").append(formattedSkill);
    };
}

var work = {
    "jobs": [{
            "employer": "Big Strike",
            "title": "Costing Assistant",
            "location": "Gardena, CA",
            "datesWorked": "Sep 2014 - present",
            "description": "Manufactured costing and technical package preparation"
        },

        {
            "employer": "MJLA Design LLC",
            "title": "E-commerce Manager",
            "location": "Los Angeles, CA",
            "datesWorked": "Aug 2011 - Jul 2014",
            "description": "Provided back office support in e-commerce software platforms, Managed day-to-day business requirements such as updating catalog categories and adding new product, supporting site SEO, and engaging on customer service issues; Suggested site development improvements and supported the development process"
        },

        {
            "employer": "Miami Beach Jewelry",
            "title": "Operations Assistant",
            "datesWorked": "Jan 2007 - Sep 2010",
            "location": "Miami, FL",
            "description": "Responsible for daily operations, website management and new product upload"
        }
     ]

};

work.display = function () {

    for (job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);

        var formattedJobTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);

        var formattedEmployerTitle = formattedEmployer + formattedJobTitle;

        $(".work-entry:last").append(formattedEmployerTitle);

        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        $(".work-entry:last").append(formattedLocation);

        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].datesWorked);
        $(".work-entry:last").append(formattedDates);

        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedDescription);

    }

};

var projects = {
    "projects": [{
            "title": "Interactive Resume",
            "datesWorked": "Nov 2014",
            "description": "Creating interactive resume using basic JavaScript syntax, HTML and CSS",
            "images": ["images/IntResume.jpg"]
 },
        {
            "title": "Website Front Page Redesign",
            "datesWorked": "Nov 2014",
            "description": "Creating graphics for MiJo website and uploading to the front page.",
            "images": ["images/cardigan1.jpg"]
 },

 ]

};

projects.display = function () {
    for (project in projects.projects) {

        $("#projects").append(HTMLprojectStart);

        formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        $(".project-entry:last").append(formattedProjectTitle);

        formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[project].datesWorked);
        $(".project-entry:last").append(formattedProjectDates);

        formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formattedProjectDescription);

        if (projects.projects[project].images.length > 0) {

            for (image in projects.projects[project].images)
                formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
            $(".project-entry:last").append(formattedProjectImage);

        }
    }

}

var education = {
    "schools": [

        {

            "name": "Saint-Petersburg State University",
            "location": "Saint-Petersburg, Russia",
            "degree": "Master of Science",
            "majors": ["Psychology"],
            "datesAttended": "2001-2006"

},
        {
            "name": "Los Angeles Community College",
            "location": "Los Angeles, CA",
            "degree": "N/A",
            "majors": ["Accounting"],
            "datesAttended": "2009-2010"
}
],

    "onlineCourses": [{
            "title": "Intro to HTML and CSS",
            "school": "Udacity.com",
            "dates": "Oct 2014",
            "url": "https://www.udacity.com/course/ud304"

},

        {
            "title": "Javascript Basics",
            "school": "Udacity.com",
            "dates": "Nov 2014",
            "url": "https://www.udacity.com/course/ud804"

}

]
};

education.display = function () {

    $("#education").append(HTMLschoolStart);

    for (school in education.schools) {



        formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
        $(".education-entry:last").append(formattedSchoolName);
        formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        $(".education-entry:last").append(formattedSchoolDegree);
        formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].datesAttended);
        $(".education-entry:last").append(formattedDates);
        formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
        $(".education-entry:last").append(formattedSchoolLocation);
        if (education.schools[school].majors.length > 0) {
for (major in education.schools[school].majors) {
        formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors[major]);
        $(".education-entry:last").append(formattedSchoolMajor);
            }

        }
    }

    $(".education-entry:last").append(HTMLonlineClasses);

    for (course in education.onlineCourses) {

        formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
        $(".education-entry:last").append(formattedOnlineTitle);

        formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
        $(".education-entry:last").append(formattedOnlineSchool);

        formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
        $(".education-entry:last").append(formattedOnlineDates);

        formattedOnlineUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
        $(".education-entry:last").append(formattedOnlineUrl);

    }

}

$(document).click(function (loc) {
    var x = loc.pageX;
    var y = loc.pageY;

    logClicks(x, y);
});

function inName(name) {
    name = name.trim().split(" ");

    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();

    return name[0] + " " + name[1];
}
$("#main").append(internationalizeButton)

bio.display();
work.display();
projects.display();
education.display();

$("#mapDiv").append(googleMap);