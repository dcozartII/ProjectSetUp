
$(document).ready(function() {

    $.each(devProfile, function(key, valueObj) {

        if (key == 'pic') {
            console.log('<img src="' + valueObj + '" alt="dev pic" class="mx-auto d-block img-fluid rounded"/>');
            $('#dev-profile-data').append('<img src="' + valueObj + '" alt="dev pic" class="mx-auto d-block img-fluid rounded"/>');
        } else {
            $('#dev-profile-data').append("<p><b>" + key + ":</b>" + " " + valueObj + "</p>");
        }
    });

    $('#month-box li').click(function() {
        $('#console-box').text($(this).text());
        $(this).toggleClass('selected').siblings().removeClass('selected');;
    });
});

var DevProfile = {
    "Students": {
        "Student": [
            {
                "Username": "dcozartII",
                "ProfileUrl": "https://github.com/dcozartII",
                "firstName": "David",
                "lastName": "Cozart",
                "MajorandGradYear": "CIS and December 2021",
                "Experience": "No work experience but plenty of classes and personal curiosity",
                "Interests": "I hate to say it but I feel like I enjoy more of the IT side of things rather than programming and coding.IS, networking, and systems design. ",
                "Certifications": "Studying for the CompTIA Netowrk+" } ] } 
            };