// *****************SCRIPT FOR COURSE LIST******************

const dialogBox = document.querySelector('#dialog-box'); // The dialog element itself, hidden by default
const dialogContent = document.querySelector('.dialog-content'); // The content area of the dialog
;

// Data: Array of course objects
const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
]

// Select the h2 element with the ID 'current-filter'
const currentFilter = document.getElementById('current-filter');

// Function to build the course cards
function createCourseCards(filteredCourses) {
    filteredCourses.forEach(course => {
        let courseCard = document.createElement('section');
        courseCard.classList.add('course-card');
        if (course.completed) {
            courseCard.classList.add('completed');
        }
        courseCard.innerHTML =
            `<h2>${course.subject} ${course.number}: ${course.title}</h2>`;
        // Add event listener to open dialog on click
        courseCard.addEventListener('click', () => {
            dialogContent.innerHTML = `
                        <div class="dialog-header">
                            <h2 id="course-code">${course.subject} ${course.number}</h2>
                            <button id="close-btn" class="close-btn" aria-label="close dialog box"></button>
                        </div>
                        <h3 id="course-title">${course.title}</h3>
                        <p id="course-credits">Credits: ${course.credits}</p>
                        <p>Certificate: ${course.certificate}</p>
                        <p id="course-description">${course.description}</p>
                        <p id="course-technology">Technology: ${course.technology}</p>
                    `;
            dialogBox.showModal();
            // Re-attach the close event listener to the new close button
            const newCloseButton = document.querySelector('#close-btn');
            newCloseButton.addEventListener('click', () => {
                dialogBox.close();
            });
        });
        document.querySelector('.course-list').appendChild(courseCard);
    });
}

// Function to get total credits possible and completed
function updateCredits(filteredCourses) {
    const creditsDiv = document.querySelector('.credits');
    const totalCredits = filteredCourses.reduce((sum, course) => sum + course.credits, 0);
    const completedCredits = filteredCourses
        .filter(course => course.completed)
        .reduce((sum, course) => sum + course.credits, 0);
    creditsDiv.textContent = `Credits Completed: ${completedCredits} / ${totalCredits}`;
}

// Initial load of entire course list
createCourseCards(courses);

// Initial credits update
updateCredits(courses);

// Filter course list for (All) Courses
const allCoursesLink = document.querySelector('#all');
allCoursesLink.addEventListener('click', function () {
    document.querySelector('.course-list').innerHTML = '';
    createCourseCards(courses);
    currentFilter.textContent = allCoursesLink.textContent;
    updateCredits(courses);
});

// Filter course list for (WDD) Courses
const wddCoursesLink = document.querySelector('#wdd');
wddCoursesLink.addEventListener('click', function () {
    document.querySelector('.course-list').innerHTML = '';
    createCourseCards(courses.filter(course => course.subject === "WDD"));
    currentFilter.textContent = wddCoursesLink.textContent;
    updateCredits(courses.filter(course => course.subject === "WDD"));
});

// Filter course list for (CSE) Courses
const cseCoursesLink = document.querySelector('#cse');
cseCoursesLink.addEventListener('click', function () {
    document.querySelector('.course-list').innerHTML = '';
    createCourseCards(courses.filter(course => course.subject === "CSE"));
    currentFilter.textContent = cseCoursesLink.textContent;
    updateCredits(courses.filter(course => course.subject === "CSE"));
});



