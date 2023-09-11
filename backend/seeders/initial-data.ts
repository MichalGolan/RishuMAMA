import {prismaClient} from '../prisma/client';
const url = "";

(async function fillTables() {
    console.log("data for courses");
    await prismaClient.$connect();

    //Creating Computer Science Courses
    await prismaClient.course.createMany({
        data:
            [
                {
                    name: "מבוא למדעי המחשב",
                    department: "COMPUTER_SCIENCE",
                    semester: "A",
                    year: "A",
                    exam_A: "2024-01-09T09:00:00Z",
                    exam_B: "2024-01-23T09:00:00Z"
                },
                {
                    name: "חשבון דיפרנציאלי ואינטגרלי 1",
                    department: "COMPUTER_SCIENCE",
                    semester: "A",
                    year: "A",
                    exam_A: "2024-01-11T09:00:00Z",
                    exam_B: "2024-01-25T09:00:00Z"
                },
                {
                    name: "לוגיקה",
                    department: "COMPUTER_SCIENCE",
                    semester: "A",
                    year: "A",
                    exam_A: "2024-02-22T09:00:00Z",
                    exam_B: "2024-03-07T09:00:00Z"
                },
                {
                    name: "מבני נתונים",
                    department: "COMPUTER_SCIENCE",
                    semester: "A",
                    year: "B",
                    exam_A: "2024-02-24T10:00:00Z",
                    exam_B: "2024-03-09T10:00:00Z"
                },
                {
                    name: "מערכות הפעלה",
                    department: "COMPUTER_SCIENCE",
                    semester: "A",
                    year: "C",
                    exam_A: "2024-02-29T11:00:00Z",
                    exam_B: "2024-03-14T11:00:00Z"
                },
                {
                    name: "למידה חישובית עם פייתון",
                    department: "COMPUTER_SCIENCE",
                    semester: "A",
                    year: "OPTIONAL_COURSES",
                    exam_A: "2024-01-25T12:00:00Z",
                    exam_B: "2024-02-08T12:00:00Z"
                },
                {
                    name: "יצירת ערך",
                    department: "COMPUTER_SCIENCE",
                    semester: "A",
                    year: "OPTIONAL_COURSES",
                    exam_A: "2024-02-01T13:00:00Z",
                    exam_B: "2024-02-15T13:00:00Z"
                },
                {
                    name: "אלגברה לינארית 1",
                    department: "COMPUTER_SCIENCE",
                    semester: "B",
                    year: "A",
                    exam_A: "2024-06-10T09:00:00Z",
                    exam_B: "2024-06-24T09:00:00Z"
                },
                {
                    name: "חשבון דיפרנציאלי ואינטגרלי 2",
                    department: "COMPUTER_SCIENCE",
                    semester: "B",
                    year: "A",
                    exam_A: "2024-06-13T09:00:00Z",
                    exam_B: "2024-06-27T09:00:00Z"
                },
                {
                    name: "מתמטיקה בדידה",
                    department: "COMPUTER_SCIENCE",
                    semester: "B",
                    year: "A",
                    exam_A: "2024-06-19T09:00:00Z",
                    exam_B: "2024-06-30T09:00:00Z"
                },
                {
                    name: "אלגוריתמים",
                    department: "COMPUTER_SCIENCE",
                    semester: "B",
                    year: "B",
                    exam_A: "2024-06-15T10:00:00Z",
                    exam_B: "2024-06-29T10:00:00Z"
                },
                {
                    name: "סיבוכיות",
                    department: "COMPUTER_SCIENCE",
                    semester: "B",
                    year: "C",
                    exam_A: "2024-06-20T11:00:00Z",
                    exam_B: "2024-07-04T11:00:00Z"
                },
                {
                    name: "תקשורת מחשבים",
                    department: "COMPUTER_SCIENCE",
                    semester: "A",
                    year: "OPTIONAL_COURSES",
                    exam_A: "2024-01-16T12:00:00Z",
                    exam_B: "2024-01-30T12:00:00Z"
                },
                {
                    name: "שפת ג'אווה",
                    department: "COMPUTER_SCIENCE",
                    semester: "B",
                    year: "OPTIONAL_COURSES",
                    exam_A: "2024-06-21T11:00:00Z",
                    exam_B: "2024-07-05T11:00:00Z"
                },
                {
                    name: "ניהול מערכות",
                    department: "COMPUTER_SCIENCE",
                    semester: "B",
                    year: "OPTIONAL_COURSES",
                    exam_A: "2024-06-24T11:00:00Z",
                    exam_B: "2024-07-12T11:00:00Z"
                },
                {
                    name: "סטטיסטיקה מכוונת למידה",
                    department: "COMPUTER_SCIENCE",
                    semester: "B",
                    year: "OPTIONAL_COURSES",
                    exam_A: "2024-06-27T11:00:00Z",
                    exam_B: "2024-07-18T11:00:00Z"
                },
                {
                    name: "מבוא ללמידת מכונה",
                    department: "COMPUTER_SCIENCE",
                    semester: "SUMMER",
                    year: "OPTIONAL_COURSES",
                    exam_A: "2024-07-10T10:00:00Z",
                    exam_B: "2024-07-24T10:00:00Z"
                },
                {
                    name: "מבוא לפונקציות מרוכבות",
                    department: "COMPUTER_SCIENCE",
                    semester: "SUMMER",
                    year: "OPTIONAL_COURSES",
                    exam_A: "2024-09-05T09:00:00Z",
                    exam_B: "2024-09-19T09:00:00Z"
                },
                {
                    name: "שפת ג'אווה",
                    department: "COMPUTER_SCIENCE",
                    semester: "SUMMER",
                    year: "OPTIONAL_COURSES",
                    exam_A: "2024-09-10T10:00:00Z",
                    exam_B: "2024-09-24T10:00:00Z"
                },
                {
                    name: "חישוביות",
                    department: "COMPUTER_SCIENCE",
                    semester: "A",
                    year: "C",
                    exam_A: "2024-09-15T11:00:00Z",
                    exam_B: "2024-09-29T11:00:00Z"
                },
                {
                    name: "הנמקה",
                    department: "COMPUTER_SCIENCE",
                    semester: "A",
                    year: "A",
                    exam_A: "2024-01-10T09:00:00Z",
                    exam_B: "2024-01-24T09:00:00Z"
                },
                {
                    name: "מבנה מחשבים",
                    department: "COMPUTER_SCIENCE",
                    semester: "A",
                    year: "B",
                    exam_A: "2024-01-16T10:00:00Z",
                    exam_B: "2024-01-30T10:00:00Z"
                },
                {
                    name: "מבוא לתקשורת מחשבים",
                    department: "COMPUTER_SCIENCE",
                    semester: "A",
                    year: "OPTIONAL_COURSES",
                    exam_A: "2024-01-26T12:00:00Z",
                    exam_B: "2024-02-09T12:00:00Z"
                },
                {
                    name: "אבטחת מידע ממוחשב",
                    department: "COMPUTER_SCIENCE",
                    semester: "A",
                    year: "OPTIONAL_COURSES",
                    exam_A: "2024-02-02T13:00:00Z",
                    exam_B: "2024-02-16T13:00:00Z"
                },
                {
                    name: "אלגברה לינארית 1",
                    department: "COMPUTER_SCIENCE",
                    semester: "SUMMER",
                    year: "A",
                    exam_A: "2024-09-11T10:00:00Z",
                    exam_B: "2024-09-25T10:00:00Z"
                },
                {
                    name: "אלגוריתמים",
                    department: "COMPUTER_SCIENCE",
                    semester: "SUMMER",
                    year: "B",
                    exam_A: "2024-09-12T10:00:00Z",
                    exam_B: "2024-09-26T10:00:00Z"
                },
                {
                    name: "סיבוכיות (חוזרים)",
                    department: "COMPUTER_SCIENCE",
                    semester: "SUMMER",
                    year: "C",
                    exam_A: "2024-09-13T10:00:00Z",
                    exam_B: "2024-09-27T10:00:00Z"
                },
            ]
    });

    //Creating Psychology Courses
    await prismaClient.course.createMany({
        data:
            [
                {
                    name: "פסיכולוגית חברתית א'",
                    department: "PSYCHOLOGY",
                    semester: "A",
                    year: "A",
                    exam_A: "2024-01-18T09:00:00Z",
                    exam_B: "2024-02-24T09:00:00Z"
                },
                {
                    name: "שיטות מחקר איכותניות",
                    department: "PSYCHOLOGY",
                    semester: "A",
                    year: "B",
                    exam_A: "2024-01-15T10:00:00Z",
                    exam_B: "2024-01-29T10:00:00Z"
                },
                {
                    name: "פסיכופתולוגיה א",
                    department: "PSYCHOLOGY",
                    semester: "A",
                    year: "C",
                    exam_A: "2024-01-20T11:00:00Z",
                    exam_B: "2024-02-03T11:00:00Z"
                },
                {
                    name: "פסיכופתולוגיה ב",
                    department: "PSYCHOLOGY",
                    semester: "A",
                    year: "C",
                    exam_A: "2024-01-21T11:00:00Z",
                    exam_B: "2024-02-04T11:00:00Z"
                },
                {
                    name: "דינמיקה קבוצתית",
                    department: "PSYCHOLOGY",
                    semester: "A",
                    year: "OPTIONAL_COURSES",
                    exam_A: "2024-01-25T12:00:00Z",
                    exam_B: "2024-02-08T12:00:00Z"
                },
                {
                    name: "מבוא לפסיכולוגיה רפואית",
                    department: "PSYCHOLOGY",
                    semester: "A",
                    year: "OPTIONAL_COURSES",
                    exam_A: "2024-02-01T13:00:00Z",
                    exam_B: "2024-02-15T13:00:00Z"
                },
                {
                    name: "מבחנים וחברה",
                    department: "PSYCHOLOGY",
                    semester: "B",
                    year: "OPTIONAL_COURSES",
                    exam_A: "2024-06-10T09:00:00Z",
                    exam_B: "2024-06-24T09:00:00Z"
                },
                {
                    name: "פסיכולוגיה של הלמידה",
                    department: "PSYCHOLOGY",
                    semester: "B",
                    year: "B",
                    exam_A: "2024-06-15T10:00:00Z",
                    exam_B: "2024-06-29T10:00:00Z"
                },
                {
                    name: "מבחנים והערכה",
                    department: "PSYCHOLOGY",
                    semester: "B",
                    year: "C",
                    exam_A: "2024-06-17T11:00:00Z",
                    exam_B: "2024-07-02T11:00:00Z"
                },
                {
                    name: "פסיכולוגיה פיזיולוגית א''",
                    department: "PSYCHOLOGY",
                    semester: "B",
                    year: "A",
                    exam_A: "2024-06-22T11:00:00Z",
                    exam_B: "2024-07-13T11:00:00Z"
                },
                {
                    name: "נושאים נבחרים בפסיכיאטריה ביולוגית",
                    department: "PSYCHOLOGY",
                    semester: "B",
                    year: "OPTIONAL_COURSES",
                    exam_A: "2024-06-25T11:00:00Z",
                    exam_B: "2024-07-09T11:00:00Z"
                },
                {
                    name: "ילדים בחירום",
                    department: "PSYCHOLOGY",
                    semester: "SUMMER",
                    year: "A",
                    exam_A: "2024-09-05T09:00:00Z",
                    exam_B: "2024-09-19T09:00:00Z"
                },
                {
                    name: "מבוא לנוירופסיכולוגיה",
                    department: "PSYCHOLOGY",
                    semester: "SUMMER",
                    year: "B",
                    exam_A: "2024-09-10T10:00:00Z",
                    exam_B: "2024-09-24T10:00:00Z"
                },
                {
                    name: "יישומים סטטיסטיים א",
                    department: "PSYCHOLOGY",
                    semester: "SUMMER",
                    year: "C",
                    exam_A: "2024-09-15T11:00:00Z",
                    exam_B: "2024-09-29T11:00:00Z"
                },
                {
                    name: "שיטות מחקר",
                    department: "PSYCHOLOGY",
                    semester: "A",
                    year: "B",
                    exam_A: "2024-01-16T10:00:00Z",
                    exam_B: "2024-01-30T10:00:00Z"
                },
                {
                    name: "מבוא לפסיכותרפיה וייעוץ",
                    department: "PSYCHOLOGY",
                    semester: "A",
                    year: "OPTIONAL_COURSES",
                    exam_A: "2024-01-26T12:00:00Z",
                    exam_B: "2024-02-09T12:00:00Z"
                },
                {
                    name: "מבוא ללימודי אובדן ואבל",
                    department: "PSYCHOLOGY",
                    semester: "A",
                    year: "OPTIONAL_COURSES",
                    exam_A: "2024-02-02T13:00:00Z",
                    exam_B: "2024-02-16T13:00:00Z"
                }
            ]
    });

    //Psychology addition
    await prismaClient.course.createMany({
        data: [
            // Year A, Semester A
            {
                name: "מבוא לסוציולוגיה ולחברה הישראלית א",
                department: "PSYCHOLOGY",
                semester: "A",
                year: "A",
                exam_A: "2024-01-01T09:00:00Z",
                exam_B: "2024-02-01T09:00:00Z"
            },
            {
                name: "פסיכולוגיה התפתחותית א",
                department: "PSYCHOLOGY",
                semester: "A",
                year: "A",
                exam_A: "2024-01-05T10:00:00Z",
                exam_B: "2024-02-05T10:00:00Z"
            },
            {
                name: "מבוא לאנתרופולוגיה",
                department: "PSYCHOLOGY",
                semester: "A",
                year: "A",
                exam_A: "2024-01-10T11:00:00Z",
                exam_B: "2024-02-10T11:00:00Z"
            },

            // Year A, Semester B
            {
                name: "מבוא לסוציולוגיה ולחברה הישראלית ב",
                department: "PSYCHOLOGY",
                semester: "B",
                year: "A",
                exam_A: "2024-06-01T09:00:00Z",
                exam_B: "2024-07-01T09:00:00Z"
            },
            {
                name: "סטטיסטיקה ב",
                department: "PSYCHOLOGY",
                semester: "B",
                year: "A",
                exam_A: "2024-06-05T10:00:00Z",
                exam_B: "2024-07-05T10:00:00Z"
            },
            {
                name: "פסיכולוגיה התפתחותית ב",
                department: "PSYCHOLOGY",
                semester: "B",
                year: "A",
                exam_A: "2024-06-10T11:00:00Z",
                exam_B: "2024-07-10T11:00:00Z"
            },

            // Year B, Semester B
            {
                name: "יישומים סטטיסטיים ב",
                department: "PSYCHOLOGY",
                semester: "B",
                year: "B",
                exam_A: "2024-06-15T09:00:00Z",
                exam_B: "2024-07-15T09:00:00Z"
            },
            {
                name: "סדנת מחקר ב",
                department: "PSYCHOLOGY",
                semester: "B",
                year: "B",
                exam_A: "2024-06-20T10:00:00Z",
                exam_B: "2024-07-20T10:00:00Z"
            },
            {
                name: "תיאוריות סוציולוגיות ב",
                department: "PSYCHOLOGY",
                semester: "B",
                year: "B",
                exam_A: "2024-06-25T11:00:00Z",
                exam_B: "2024-07-25T11:00:00Z"
            },

            // Year B, Semester A
            {
                name: "תיאוריות סוציולוגיות א",
                department: "PSYCHOLOGY",
                semester: "A",
                year: "B",
                exam_A: "2024-01-02T09:00:00Z",
                exam_B: "2024-01-25T09:00:00Z"
            },
            {
                name: "סדנת מחקר א",
                department: "PSYCHOLOGY",
                semester: "A",
                year: "B",
                exam_A: "2024-01-07T10:00:00Z",
                exam_B: "2024-01-30T10:00:00Z"
            },

            // Year C, Semester A
            {
                name: "פסיכולוגיה חברתית א",
                department: "PSYCHOLOGY",
                semester: "A",
                year: "C",
                exam_A: "2024-01-15T09:00:00Z",
                exam_B: "2024-01-31T09:00:00Z"
            },

            // Year C, Semester B
            {
                name: "ניקוד",
                department: "PSYCHOLOGY",
                semester: "B",
                year: "C",
                exam_A: "2024-06-01T09:00:00Z",
                exam_B: "2024-07-01T09:00:00Z"
            },
            {
                name: "פסיכולוגיה חברתית ב",
                department: "PSYCHOLOGY",
                semester: "B",
                year: "C",
                exam_A: "2024-06-05T10:00:00Z",
                exam_B: "2024-07-05T10:00:00Z"
            },

            // Year OPTIONAL_COURSES, Semester SUMMER
            {
                name: "סוגיות בפסיכולוגיית ספורט קליני",
                department: "PSYCHOLOGY",
                semester: "SUMMER",
                year: "OPTIONAL_COURSES",
                exam_A: "2024-09-01T09:00:00Z",
                exam_B: "2024-09-15T09:00:00Z"
            },
            {
                name: "מנהיגות בספורט",
                department: "PSYCHOLOGY",
                semester: "SUMMER",
                year: "OPTIONAL_COURSES",
                exam_A: "2024-09-06T10:00:00Z",
                exam_B: "2024-09-20T10:00:00Z"
            },
            {
                name: "הנעה בספורט ובפעילות גופנית",
                department: "PSYCHOLOGY",
                semester: "SUMMER",
                year: "OPTIONAL_COURSES",
                exam_A: "2024-09-11T11:00:00Z",
                exam_B: "2024-09-25T11:00:00Z"
            },
            {
                name: "פסיכולוגיה של ביצוע מיטבי",
                department: "PSYCHOLOGY",
                semester: "SUMMER",
                year: "OPTIONAL_COURSES",
                exam_A: "2024-09-16T12:00:00Z",
                exam_B: "2024-09-30T12:00:00Z"
            },

            // Year OPTIONAL_COURSES, Semester B
            {
                name: "פסיכולוגיה קהילתית",
                department: "PSYCHOLOGY",
                semester: "B",
                year: "OPTIONAL_COURSES",
                exam_A: "2024-06-01T09:00:00Z",
                exam_B: "2024-06-15T09:00:00Z"
            },
            {
                name: "מדע ויהדות",
                department: "PSYCHOLOGY",
                semester: "B",
                year: "OPTIONAL_COURSES",
                exam_A: "2024-06-06T10:00:00Z",
                exam_B: "2024-06-20T10:00:00Z"
            },
            {
                name: "אסטרופיזיקה",
                department: "COMPUTER_SCIENCE",
                semester: "A",
                year: "OPTIONAL_COURSES",
                exam_A: "2024-01-25T10:00:00Z",
                exam_B: "2024-02-26T10:00:00Z"
            },
            {
                name: "מבוא לבינה מלאכותית",
                department: "COMPUTER_SCIENCE",
                semester: "A",
                year: "OPTIONAL_COURSES",
                exam_A: "2024-02-21T10:00:00Z",
                exam_B: "2024-03-29T10:00:00Z"
            },
            {
                name: "ניתוח מערכות",
                department: "COMPUTER_SCIENCE",
                semester: "A",
                year: "OPTIONAL_COURSES",
                exam_A: "2024-02-20T10:00:00Z",
                exam_B: "2024-03-11T10:00:00Z"
            },
            {
                name: "סדנה בתכנות תחרותי",
                department: "COMPUTER_SCIENCE",
                semester: "A",
                year: "OPTIONAL_COURSES",
                exam_A: "2024-02-25T10:00:00Z",
                exam_B: "2024-03-15T10:00:00Z"
            },
            {
                name: "ניהול מוצר",
                department: "COMPUTER_SCIENCE",
                semester: "A",
                year: "OPTIONAL_COURSES",
                exam_A: "2024-02-29T10:00:00Z",
                exam_B: "2024-03-19T10:00:00Z"
            },
        ] 
    });

})();

// set DATABASE_URL={railway-pgadmin-DATABASE_URL} && npx ts-node .\seeders\initial-data.ts
