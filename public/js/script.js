let experienceData = {
    Keyring: {
        company: "Keyring",
        title: "Software Engineering Intern",
        logo: "public/imgs/keyringlogo.png",
        link: "https://joinkeyring.com",
        time: "Apr 2020 - Present",
        description: "Bundling platform for streaming services.",
        expImg: "keyringexp.svg"
    },
    VT: {
        company: "Varsity Tutors",
        title: "Web Development Tutor",
        logo: "public/imgs/varsitytutors.png",
        link: "https://www.varsitytutors.com/tutors/878747878",
        time: "Feb 2020 - Present",
        description: "Assisting students in various web development bootcamps and classes.",
        expImg: "varsityexp.png"
        
    },
    Cootbie: {
        company: "Cootbie",
        title: "Back-End Development Intern",
        logo: "public/imgs/cootbie.svg",
        link: "https://cootbie.com",
        time: "Jul 2019 - Jan 2020",
        description: "Giving job-seekers a voice in the journey of recruitment.",
        expImg: "cootbieback.png"
    },
    Titan: {
        company: "Titan Robotics 2022",
        title: "Web Developer",
        logo: "public/imgs/titan2022.png",
        link: "https://titanrobotics2022.com",
        time: "Jun 2019 - Jul 2019",
        description: "Showcasing robotics team for business partnerships.",
        expImg: "roboticsexp.png"
    },
    PWP: {
        company: "Packed With Purpose",
        title: "Graphic Design Intern",
        logo: "public/imgs/pwp.png",
        link: "https://packedwithpurpose.gifts",
        time: "Jun 2018 - Jul 2018",
        description: "Corportae gifting combined with sustainable practices.",
        expImg: "pwpexp.png"
    }
}

let projectData = {
    Titan: {
        title: "Titan Robotics 2022",
        logo: "public/imgs/titan2022.png",
        link: "https://titanrobotics2022",
        description: "Redesigning robotics team website for business partnerships.",
        back: "titanback.png"
    },
    DIYHacks: {
        title: "DIYHacks",
        logo: "public/imgs/diyhackslogo.png",
        link: "https://diyhacks.tech",
        description: "Dynamic hackathon & project creation for students.",
        back: "diyhacksback.png"
    },
    CA: {
        title: "Code Authority",
        logo: "public/imgs/calogo.png",
        link: "https://cootbie.com",
        description: "Designed and developed interview website within a week.",
        back: "caback.png"
    },
    Bordar: {
        title: "Bordar",
        logo: "public/imgs/bordarlogo.png",
        link: "https://bordar.site",
        description: "Data analytics for curriculum development.",
        back: "bordarback.png"
    },
    SEVC: {
        title: "SEVC",
        logo: "public/imgs/sevclogo.png",
        link: "https://packedwithpurpose.gifts",
        description: "Student-driven ventures impacting world sustainability.",
        back: "sevcback.png"
    }
}



/**
 * 3D rotation of "Aye I'm Sam"
 * Y coordinate determines rotation on x axis
 * Z coordinate determines rotation of y and z axis
 * Function also adds changing gradient to element
 */
$.fn.nameMove = function(x, y) {
    let xfocalpoint = $(document).width() / 2;
    let yfocalpoint = $(window).height() / 2;
    let xmovemeter = -(x - xfocalpoint);
    let ymovemeter = -(y - yfocalpoint);
    let background = "linear-gradient(" + xmovemeter / 20 + "deg, #be5108, #be5108,#be5108,  #ca3954, #ae478a, #755ea8, #2e6ca4, #2e6ca4, #2e6ca4)";
    $("#ayeimsam").css("background-image", background);
    $("#ayeimsam").css("transform", `rotateX(${-(ymovemeter/yfocalpoint)/24}turn) rotateY(${-(xmovemeter/xfocalpoint)/16}turn) rotateZ(${-(xmovemeter/xfocalpoint)/150}turn) skewX(${(xmovemeter/xfocalpoint)}deg)`);
}

function disableScrolling(){
    let x=window.scrollX;
    let y=window.scrollY;
    window.onscroll=function(){window.scrollTo(x, y);};
}

function enableScrolling(){
    window.onscroll=function(){};
}

function experienceDataLoad(key, data) {
    let template = `
    <div class="info-wrapper exp-info-wrapper position-relative" data-external-link=${data.link} data-company=${key}>
        <span class = "externalButton center">
            <svg class="bi bi-box-arrow-up-right externalIcon" width="1em" height="1em" viewBox="0 0 16 16" fill="white" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M1.5 13A1.5 1.5 0 003 14.5h8a1.5 1.5 0 001.5-1.5V9a.5.5 0 00-1 0v4a.5.5 0 01-.5.5H3a.5.5 0 01-.5-.5V5a.5.5 0 01.5-.5h4a.5.5 0 000-1H3A1.5 1.5 0 001.5 5v8zm7-11a.5.5 0 01.5-.5h5a.5.5 0 01.5.5v5a.5.5 0 01-1 0V2.5H9a.5.5 0 01-.5-.5z" clip-rule="evenodd"/>
                <path fill-rule="evenodd" d="M14.354 1.646a.5.5 0 010 .708l-8 8a.5.5 0 01-.708-.708l8-8a.5.5 0 01.708 0z" clip-rule="evenodd"/>
            </svg>
        </span>
        <div class="row info-item my-2 justify-content-start">
            <div class="col-2 h-100 justify-content-center company-logo-col center-vert">
                <img src="${data.logo}" class="img-fluid company-logo" alt="Company Logo" />
            </div>
            <div class="col-8 h-100 center-vert expTextRow">
                <div class="envelope">
                    <div class="row">
                        <div class="col-12 info-text">
                            <h2>${data.company}</h2>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12 info-text">
                            <p>${data.title}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `

    $("#experienceList").append(template);
}
function projectDataLoad(key, data) {
    let template = `
    <div class="info-wrapper project-info-wrapper position-relative" data-external-link=${data.link} data-project=${key}>
        <span class = "externalButton center">
            <svg class="bi bi-box-arrow-up-right externalIcon" width="1em" height="1em" viewBox="0 0 16 16" fill="white" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M1.5 13A1.5 1.5 0 003 14.5h8a1.5 1.5 0 001.5-1.5V9a.5.5 0 00-1 0v4a.5.5 0 01-.5.5H3a.5.5 0 01-.5-.5V5a.5.5 0 01.5-.5h4a.5.5 0 000-1H3A1.5 1.5 0 001.5 5v8zm7-11a.5.5 0 01.5-.5h5a.5.5 0 01.5.5v5a.5.5 0 01-1 0V2.5H9a.5.5 0 01-.5-.5z" clip-rule="evenodd"/>
                <path fill-rule="evenodd" d="M14.354 1.646a.5.5 0 010 .708l-8 8a.5.5 0 01-.708-.708l8-8a.5.5 0 01.708 0z" clip-rule="evenodd"/>
            </svg>
        </span>
        <div class="row my-2 justify-content-center">
            <div class="col-9 h-100 company-logo-col">
                <img src="${data.logo}" class="img-fluid company-logo" alt="Company Logo" />
            </div>
        </div>
    </div>
    `
    $("#projectList").append(template);
}
function projectHoverLoad(company) {}
//Toggling description displays
function toggleDisplays(toggleType) {
    switch (toggleType) {
        case "description":
            $("#invisibleSpace").removeClass("inactive").addClass("active")
            $("#black").removeClass("inactive").addClass("active")
            $("#projectContainer").css("filter", "blur(10px)");
            break;
        case "outfocus":
            if ($("#black").hasClass("active")) {
                $("#invisibleSpace").removeClass("active").addClass("inactive")
                $("#black").removeClass("active").addClass("inactive")
            }
            $("#projectContainer").css({
                filter: "blur(0px)"
            })
    }
}


$(document).ready(function() {
    //no Scrolling for this site!
    disableScrolling();
    $(".scroll-down-arrow").click(function() {
        enableScrolling();
        let position = $(window).scrollTop() + $(window).height();
        $("html, body").animate(
            {scrollTop: `${position}px`},
            {
                duration: 900,
                specialEasing: {
                    scrollTop: "swing"
                },
                complete: function() {
                    disableScrolling();
                }
            }
        )
    });
    $(".scroll-up-arrow").click(function() {
        enableScrolling();
        let position = $(window).scrollTop() - $(window).height();
        $("html, body").animate(
            {scrollTop: `${position}px`},
            {
                duration: 900,
                specialEasing: {
                    scrollTop: "swing"
                },
                complete: function() {
                    disableScrolling();
                }
            }
        )
    })

    //enabling tooltips
    //$('[data-toggle="tooltip"]').tooltip();
    //Moving elements
    if(window.innerWidth > 600) {
        $(document).on("mousemove", function(event) {
            let x = event.pageX;
            let y = event.pageY;
            $("#nameContainer").nameMove(x, y);
        });
    }
    

    //loading experience
    Object.keys(experienceData).forEach(key => {
        experienceDataLoad(key, experienceData[key]);
    })

    Object.keys(projectData).forEach(key => {
        projectDataLoad(key, projectData[key]);
    })

    //On click experience external links
    $('.info-wrapper').click(function() {
        let link = $(this).attr('data-external-link');
        window.open(link, '_blank');
    });

    let lastEnteredExp = '';
    $('.exp-info-wrapper').mouseenter(function() {
        let key = $(this).attr('data-company');
        if($("[data-company='Keyring']").hasClass('info-wrapper-initial-hover')) {
            $("[data-company='Keyring']").removeClass('info-wrapper-initial-hover')
        }
        if(lastEnteredExp != key) {
            let { time, description, expImg } = experienceData[key];
            let finishedAnim = false
            $("#expInfoRow").css({
                "opacity": "0",
                "transform": "translateY('0px')"
            })
            setTimeout(function() {
                finishedAnim = true;
                $("#expTimePost").text(time);
                $("#expDescPost").text(description);
                $("#expImg").attr('src', `/public/imgs/expBacks/${expImg}`)
            }, 200)
            let loadIn = setTimeout(function() {
                $("#expInfoRow").css({
                    "opacity": "1",
                    "transform": "translateY('30px')"
                })
            }, 220)
            if(finishedAnim) {
                clearTimeout(loadIn)
            } 
            lastEnteredExp = key;
            
        } else {
            $("#expInfoRow").css({
                "opacity": "1",
                "transform": "translateY('30px')"
            })
        }
        
    })
    $('.exp-info-wrapper').mouseleave(function() {
        $("#expInfoRow").css({
            "opacity": "0.2",
            "transform": "translateY('0px')"
        })
    })

    let lastEnteredProjectP = '';
    $('.project-info-wrapper').mouseenter(function() {
        let key = $(this).attr('data-project');
        if($("[data-project='Titan']").hasClass('info-wrapper-initial-hover')) {
            $("[data-project='Titan']").removeClass('info-wrapper-initial-hover')
        }
        if(lastEnteredProjectP != key) {
            let { title, description, back } = projectData[key];
            let finishedAnim = false
            $("#projectInfoRow").css({
                "opacity": "0",
                "transform": "translateY('0px')"
            })
            setTimeout(function() {
                finishedAnim = true;
                $("#projectTitlePost").text(title);
                $("#projectDescPost").text(description);
                $("#projectImg").attr('src', `/public/imgs/projectBacks/${back}`)
            }, 200)
            let loadIn = setTimeout(function() {
                $("#projectInfoRow").css({
                    "opacity": "1",
                    "transform": "translateY('30px')"
                })
            }, 220)
            if(finishedAnim) {
                clearTimeout(loadIn)
            } 
            lastEnteredProjectP = key;
            
        } else {
            $("#projectInfoRow").css({
                "opacity": "1",
                "transform": "translateY('30px')"
            })
        }
        
    })
    $('.project-info-wrapper').mouseleave(function() {
        $("#projectInfoRow").css({
            "opacity": "0.2",
            "transform": "translateY('0px')"
        })
    })

    //make the first element hovered state on initial load
    $(".exp-info-wrapper").first().addClass("info-wrapper-initial-hover");
    let { time, description } = experienceData[Object.keys(experienceData)[0]];
    $("#expTimePost").text(time);
    $("#expDescPost").text(description);
    $(".info-wrapper").first().one("mouseleave", function() {
        $(this).removeClass("info-wrapper-initial-hover");
    })

    $(".project-info-wrapper").first().addClass("info-wrapper-initial-hover");
    let { titleP, descriptionP } = projectData[Object.keys(projectData)[0]];
    $("#projectTitlePost").text(titleP);
    $("#projectDescPost").text(descriptionP);
    $(".project-info-wrapper").first().one("mouseleave", function() {
        $(this).removeClass("info-wrapper-initial-hover");
    })

    $("#intro").scroll(function() {
        let floaterContainerElTop = document.querySelector("#expDesc").getBoundingClientRect().top;
        let floaterElBottom = document.querySelector("#expInfoRow").getBoundingClientRect().top + $("#expInfoRow").outerHeight();
        let stopPoint = floaterContainerElTop + $("#expDesc").outerHeight() - $("#expInfoRow").outerHeight();
        if(floaterElBottom < window.innerHeight && stopPoint > 0) {
            $("#expInfoRow").css("top", `${window.innerHeight - floaterElBottom}px`);
        }
    })
    //loading page
    $(document).one("mousemove", function() {
        $("#invisibleSpace").removeClass("active").addClass("inactive")
        anime({
            targets: "#env",
            opacity: [0, 1],
            duration: 500,
            easing: "easeOutQuad"
        });
    });

    //Media Queries
    if(window.innerWidth < 600) {
        $(".info-wrapper").addClass("info-wrapper-initial-hover")
        anime({
            targets: "#env",
            opacity: [0, 1],
            duration: 500,
            easing: "easeOutQuad"
        });
    }
});