// This file contains the course object section data and its methods that are used to enroll and drop students from the course.

const byuiCourse = {
    code: "WDD231",
    name: "Web Frontend Development I",
    sections: [
        {
            sectionNumber: 1,
            enrolled: 88,
            instructor: "Brother Bingham",
        },
        {
            sectionNumber: 2,
            enrolled: 81,
            instructor: "Sister Shultz",
        },
        {
            sectionNumber: 3,
            enrolled: 95,
            instructor: "Sister Smith",
        },
    ],
    changeEnrollment: function (sectionNumber, add = true) {
        // Find the section with the given section number
        const sectionIndex = this.sections.findIndex(
            (section) => section.sectionNumber == sectionNumber
        );
        if (sectionIndex >= 0) {
            if (add) {
                this.sections[sectionIndex].enrolled++;
            } else {
                this.sections[sectionIndex].enrolled--;
            }
        }
    },
};

export default byuiCourse; // Export the course object for use in other modules. Export default means this is the main export for the module, so it can be imported without curly braces. Default exports are useful when a module only has one main thing to export. Default exports can be imported with any name the importer chooses. Default exports can only have one per module. Default exports are often used for classes, functions, or objects that represent the main functionality of the module. Default exports can be imported using the following syntax: import anyName from 'module-path'; Default exports are useful for simplifying imports and improving code readability. You can also have named exports in the same module alongside the default export. Default exports are a key feature of ES6 modules and are widely used in modern JavaScript development. You can only have one default export per module, but you can have multiple named exports. Default exports are often used in libraries and frameworks to provide a single entry point for users to access the main functionality of the library or framework. You can combine default exports with named exports in the same module to provide a more flexible API for users of your module. You dont need a default export in every module, but it can be useful when you want to highlight the primary purpose of the module.