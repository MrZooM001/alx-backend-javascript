/// <reference path="./subjects/Cpp.ts" />
/// <reference path="./subjects/Java.ts" />
/// <reference path="./subjects/React.ts" />
/// <reference path="./subjects/Subject.ts" />
/// <reference path="./subjects/Teacher.ts" />

namespace Subjects {
    export const cpp: Cpp = new Cpp();
    export const java: Java = new Java();
    export const react: React = new React();
    export const cTeacher: Teacher = {
        firstName: 'Hazem',
        lastName: 'Magdy',
        experienceTeachingC: 10
    }

    console.log('C++');
    cpp.teacher = cTeacher;
    console.log(cpp.getRequirements());
    console.log(cpp.getAvailableTeacher());

    console.log('Java');
    java.teacher = cTeacher;
    console.log(java.getRequirements());
    console.log(java.getAvailableTeacher());

    console.log('React');
    react.teacher = cTeacher;
    console.log(react.getRequirements());
    console.log(react.getAvailableTeacher());
}
