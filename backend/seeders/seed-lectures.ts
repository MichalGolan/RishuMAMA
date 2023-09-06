import {prismaClient} from '../prisma/client';
const url = "";

(async function fillTables() {
    console.log("data for courses");
    await prismaClient.$connect();

    await prismaClient.lecture.createMany({
        data: [
            {
                startTime: "08:15",
                endTime: "09:45",
                day: "SUNDAY",
                lecutrer: "גברת רבקה לוי",
                isLecture: true,
                group: 1,
                practices: [],
                courseId: 1
              },
              {
                startTime: "09:45",
                endTime: "11:15",
                day: "MONDAY",
                lecutrer: "פרופסור יעל גולדשטיין",
                isLecture: true,
                group: 1,
                practices: [],
                courseId: 2
              },
              {
                startTime: "10:15",
                endTime: "12:45",
                day: "TUESDAY",
                lecutrer: "דוקטור אביגיל רבין",
                isLecture: true,
                group: 1,
                practices: [],
                courseId: 3
              },
              {
                startTime: "16:15",
                endTime: "17:45",
                day: "WEDNESDAY",
                lecutrer: "דוקטור אביגיל רבין",
                isLecture: true,
                group: 1,
                practices: [],
                courseId: 4
              },
              {
                startTime: "16:45",
                endTime: "18:45",
                day: "THURSDAY",
                lecutrer: "פרופסור מאיה שרון",
                isLecture: true,
                group: 1,
                practices: [],
                courseId: 5
              },
              {
                startTime: "17:15",
                endTime: "18:45",
                day: "SUNDAY",
                lecutrer: "דוקטור נעמה כהן",
                isLecture: true,
                group: 1,
                practices: [],
                courseId: 6
              },
              {
                startTime: "09:15",
                endTime: "11:45",
                day: "MONDAY",
                lecutrer: "מר אהרון גולדמן",
                isLecture: true,
                group: 1,
                practices: [],
                courseId: 7
              },
              {
                startTime: "10:45",
                endTime: "12:15",
                day: "TUESDAY",
                lecutrer: "גברת אביגיל לוי",
                isLecture: true,
                group: 1,
                practices: [],
                courseId: 8
              },
              {
                startTime: "10:15",
                endTime: "11:45",
                day: "WEDNESDAY",
                lecutrer: "פרופסור דניאלה רז",
                isLecture: true,
                group: 1,
                practices: [],
                courseId: 9
              },
              {
                startTime: "14:15",
                endTime: "15:45",
                day: "SUNDAY",
                lecutrer: "דוקטור נטע יצחק",
                isLecture: true,
                group: 1,
                practices: [],
                courseId: 10
              },
              {
                startTime: "14:45",
                endTime: "16:45",
                day: "TUESDAY",
                lecutrer: "מר דוד גורדון",
                isLecture: true,
                group: 1,
                practices: [],
                courseId: 11
              },
              {
                startTime: "15:15",
                endTime: "17:45",
                day: "MONDAY",
                lecutrer: "דוקטור אריאל גולדמן",
                isLecture: true,
                group: 1,
                practices: [],
                courseId: 12
              },
              {
                startTime: "13:15",
                endTime: "15:45",
                day: "SUNDAY",
                lecutrer: "דוקטור אביה שטרן",
                isLecture: true,
                group: 1,
                practices: [],
                courseId: 13
              },
              {
                startTime: "08:45",
                endTime: "11:15",
                day: "THURSDAY",
                lecutrer: "פרופסור ליאון רפאל",
                isLecture: true,
                group: 1,
                practices: [],
                courseId: 14
              },
              {
                startTime: "10:15",
                endTime: "12:45",
                day: "WEDNESDAY",
                lecutrer: "דוקטור נילי גל",
                isLecture: true,
                group: 1,
                practices: [],
                courseId: 15
              },
              {
                startTime: "08:15",
                endTime: "09:45",
                day: "THURSDAY",
                lecutrer: "דוקטור נילי גל",
                isLecture: true,
                group: 1,
                practices: [],
                courseId: 16
              },
              {
                startTime: "17:15",
                endTime: "19:45",
                day: "TUESDAY",
                lecutrer: "מר יוסף כהן",
                isLecture: true,
                group: 1,
                practices: [],
                courseId: 17
              },
              {
                startTime: "16:15",
                endTime: "17:45",
                day: "SUNDAY",
                lecutrer: "פרופסור גלעד רז",
                isLecture: true,
                group: 1,
                practices: [],
                courseId: 18
              },
              {
                startTime: "08:15",
                endTime: "09:45",
                day: "MONDAY",
                lecutrer: "פרופסור גלעד רז",
                isLecture: true,
                group: 1,
                practices: [],
                courseId: 19
              },
              {
                startTime: "09:45",
                endTime: "11:15",
                day: "TUESDAY",
                lecutrer: "פרופסור אריאל כהן",
                isLecture: true,
                group: 1,
                practices: [],
                courseId: 20
              },
              {
                startTime: "10:15",
                endTime: "12:45",
                day: "WEDNESDAY",
                lecutrer: "גברת לאה לוי",
                isLecture: true,
                group: 1,
                practices: [],
                courseId: 21
              },
              {
                startTime: "15:15",
                endTime: "17:45",
                day: "THURSDAY",
                lecutrer: "פרופסור ישראל כהן",
                isLecture: true,
                group: 1,
                practices: [],
                courseId: 22
              },
              {
                startTime: "16:45",
                endTime: "18:15",
                day: "WEDNESDAY",
                lecutrer: "פרופסור ישראל כהן",
                isLecture: true,
                group: 1,
                practices: [],
                courseId: 23
              },
              {
                startTime: "17:15",
                endTime: "19:45",
                day: "TUESDAY",
                lecutrer: "פרופסור יעקב כהן",
                isLecture: true,
                group: 1,
                practices: [],
                courseId: 24
              },
              {
                startTime: "18:15",
                endTime: "19:45",
                day: "MONDAY",
                lecutrer: "דוקטור דני אהרון",
                isLecture: true,
                group: 1,
                practices: [],
                courseId: 25
              },
              {
                startTime: "09:45",
                endTime: "11:15",
                day: "SUNDAY",
                lecutrer: "דוקטור אברהם רז",
                isLecture: true,
                group: 1,
                practices: [],
                courseId: 26
              },
              {
                startTime: "10:15",
                endTime: "12:45",
                day: "WEDNESDAY",
                lecutrer: "דוקטור דוד לוי",
                isLecture: true,
                group: 1,
                practices: [],
                courseId: 27
              },
              {
                startTime: "10:15",
                endTime: "11:45",
                day: "MONDAY",
                lecutrer: "דוקטור דוד לוי",
                isLecture: true,
                group: 1,
                practices: [],
                courseId: 28
              },
              {
                startTime: "10:45",
                endTime: "12:15",
                day: "TUESDAY",
                lecutrer: "דוקטור איתן רוזנברג",
                isLecture: true,
                group: 1,
                practices: [],
                courseId: 29
              },
              {
                startTime: "10:15",
                endTime: "12:45",
                day: "WEDNESDAY",
                lecutrer: "מר יוסף אלכסנדר",
                isLecture: true,
                group: 1,
                practices: [],
                courseId: 30
              },
              {
                startTime: "08:15",
                endTime: "09:45",
                day: "THURSDAY",
                lecutrer: "דוקטור נועה שטרן",
                isLecture: true,
                group: 1,
                practices: [],
                courseId: 31
              },
              {
                startTime: "09:15",
                endTime: "11:45",
                day: "SUNDAY",
                lecutrer: "דוקטור נתנאל יעקוב",
                isLecture: true,
                group: 1,
                practices: [],
                courseId: 32
              },
              {
                startTime: "09:15",
                endTime: "10:45",
                day: "MONDAY",
                lecutrer: "מר דוד גורדון",
                isLecture: true,
                group: 1,
                practices: [],
                courseId: 33
              },
              {
                startTime: "08:15",
                endTime: "09:45",
                day: "TUESDAY",
                lecutrer: "פרופסור אהרון גולדמן",
                isLecture: true,
                group: 1,
                practices: [],
                courseId: 34
              },
              {
                startTime: "10:45",
                endTime: "12:15",
                day: "WEDNESDAY",
                lecutrer: "דוקטור גבריאל שטרן",
                isLecture: true,
                group: 1,
                practices: [],
                courseId: 35
              },
              {
                startTime: "10:15",
                endTime: "12:45",
                day: "THURSDAY",
                lecutrer: "דוקטור דניאל פריד",
                isLecture: true,
                group: 1,
                practices: [],
                courseId: 36
              },
              {
                startTime: "08:15",
                endTime: "09:45",
                day: "SUNDAY",
                lecutrer: "דוקטור איתן כהן",
                isLecture: true,
                group: 1,
                practices: [],
                courseId: 37
              },
              {
                startTime: "09:45",
                endTime: "11:15",
                day: "MONDAY",
                lecutrer: "דוקטור אריאל גולדמן",
                isLecture: true,
                group: 1,
                practices: [],
                courseId: 38
              },
              {
                startTime: "13:15",
                endTime: "15:45",
                day: "TUESDAY",
                lecutrer: "דוקטור נתנאל פרידמן",
                isLecture: true,
                group: 1,
                practices: [],
                courseId: 39
              },
              {
                startTime: "13:15",
                endTime: "14:45",
                day: "WEDNESDAY",
                lecutrer: "דוקטור אריאל יעקוב",
                isLecture: true,
                group: 1,
                practices: [],
                courseId: 40
              },
              {
                startTime: "16:45",
                endTime: "18:45",
                day: "THURSDAY",
                lecutrer: "דוקטור נועה לוי",
                isLecture: true,
                group: 1,
                practices: [],
                courseId: 41
              },
              {
                startTime: "18:15",
                endTime: "20:45",
                day: "SUNDAY",
                lecutrer: "דוקטור טל רוזנברג",
                isLecture: true,
                group: 1,
                practices: [],
                courseId: 42
              },
              {
                startTime: "17:15",
                endTime: "19:45",
                day: "MONDAY",
                lecutrer: "דוקטור גבריאל פרידמן",
                isLecture: true,
                group: 1,
                practices: [],
                courseId: 43
              },
              {
                startTime: "16:45",
                endTime: "18:15",
                day: "TUESDAY",
                lecutrer: "פרופסור דוד גורדשטיין",
                isLecture: true,
                group: 1,
                practices: [],
                courseId: 44
              },
              {
                startTime: "16:15",
                endTime: "17:45",
                day: "WEDNESDAY",
                lecutrer: "פרופסור דוד גורדשטיין",
                isLecture: true,
                group: 1,
                practices: [],
                courseId: 45
              },
              {
                startTime: "17:15",
                endTime: "18:45",
                day: "THURSDAY",
                lecutrer: "פרופסור אברהם לוי",
                isLecture: true,
                group: 1,
                practices: [],
                courseId: 46
              },
              {
                startTime: "15:45",
                endTime: "17:15",
                day: "TUESDAY",
                lecutrer: "גברת אהובה רז",
                isLecture: true,
                group: 1,
                practices: [],
                courseId: 47
              },
              {
                startTime: "15:15",
                endTime: "16:45",
                day: "WEDNESDAY",
                lecutrer: "דוקטור טל ברק",
                isLecture: true,
                group: 1,
                practices: [],
                courseId: 48
              },
              {
                startTime: "08:15",
                endTime: "09:45",
                day: "SUNDAY",
                lecutrer: "דוקטור מאיה שטרן",
                isLecture: true,
                group: 1,
                practices: [],
                courseId: 49
              },
              {
                startTime: "09:45",
                endTime: "11:15",
                day: "MONDAY",
                lecutrer: "דוקטור מאיה שטרן",
                isLecture: true,
                group: 1,
                practices: [],
                courseId: 50
              },
              {
                startTime: "10:15",
                endTime: "12:45",
                day: "WEDNESDAY",
                lecutrer: "דוקטור איתן כהן",
                isLecture: true,
                group: 1,
                practices: [],
                courseId: 51
              },
              {
                startTime: "09:15",
                endTime: "10:45",
                day: "SUNDAY",
                lecutrer: "דוקטור איתן כהן",
                isLecture: true,
                group: 1,
                practices: [],
                courseId: 52
              },
              {
                startTime: "09:45",
                endTime: "11:15",
                day: "THURSDAY",
                lecutrer: "מר יוסף לוי",
                isLecture: true,
                group: 1,
                practices: [],
                courseId: 53
              },
              {
                startTime: "10:15",
                endTime: "12:45",
                day: "TUESDAY",
                lecutrer: "דוקטור יוסף פרידמן",
                isLecture: true,
                group: 1,
                practices: [],
                courseId: 54
              },
              {
                startTime: "10:45",
                endTime: "12:15",
                day: "SUNDAY",
                lecutrer: "מר נתנאל רוזנברג",
                isLecture: true,
                group: 1,
                practices: [],
                courseId: 55
              },
              {
                startTime: "12:45",
                endTime: "14:15",
                day: "MONDAY",
                lecutrer: "פרופסור משה לוי",
                isLecture: true,
                group: 1,
                practices: [],
                courseId: 56
              },
              {
                startTime: "14:15",
                endTime: "16:45",
                day: "WEDNESDAY",
                lecutrer: "פרופסור משה לוי",
                isLecture: true,
                group: 1,
                practices: [],
                courseId: 57
              },
              {
                startTime: "08:15",
                endTime: "09:45",
                day: "SUNDAY",
                lecutrer: "דוקטור מרים כהן",
                isLecture: true,
                group: 1,
                practices: [],
                courseId: 58
              },
              {
                startTime: "12:45",
                endTime: "14:15",
                day: "TUESDAY",
                lecutrer: "דוקטור מרים כהן",
                isLecture: true,
                group: 1,
                practices: [],
                courseId: 59
              },
              {
                startTime: "13:15",
                endTime: "15:45",
                day: "THURSDAY",
                lecutrer: "מר אריאל פרידמן",
                isLecture: true,
                group: 1,
                practices: [],
                courseId: 60
              },
              {
                startTime: "08:15",
                endTime: "09:45",
                day: "SUNDAY",
                lecutrer: "דוקטור דניאל רוזנברג",
                isLecture: true,
                group: 1,
                practices: [],
                courseId: 61
              },
              {
                startTime: "09:45",
                endTime: "11:15",
                day: "TUESDAY",
                lecutrer: "מר אריאל פרידמן",
                isLecture: true,
                group: 1,
                practices: [],
                courseId: 62
              },
              {
                startTime: "10:15",
                endTime: "12:45",
                day: "MONDAY",
                lecutrer: "מר ליאון רז",
                isLecture: true,
                group: 1,
                practices: [],
                courseId: 63
              },
              {
                startTime: "08:15",
                endTime: "09:45",
                day: "WEDNESDAY",
                lecutrer: "פרופסור ליאון רפאל",
                isLecture: true,
                group: 1,
                practices: [],
                courseId: 64
              },              
        ]
    });



})();
// set DATABASE_URL={railway-pgadmin-DATABASE_URL} && npx ts-node .\seeders\seed-lectures.ts
/*
              {
                startTime: "15:45",
                endTime: "17:15",
                day: "TUESDAY",
                lecutrer: "דוקטור רחל אהרון",
                isLecture: true,
                group: 1,
                practices: [],
                courseId: 65
              },
              {
                startTime: "14:15",
                endTime: "15:45",
                day: "THURSDAY",
                lecutrer: "דוקטור רחל אהרון",
                isLecture: true,
                group: 1,
                practices: [],
                courseId: 66
              },
              {
                startTime: "14:15",
                endTime: "16:45",
                day: "SUNDAY",
                lecutrer: "פרופסור מאיה שרון",
                isLecture: true,
                group: 1,
                practices: [],
                courseId: 67
              },
              {
                startTime: "12:45",
                endTime: "14:15",
                day: "MONDAY",
                lecutrer: "דוקטור נועה לוי",
                isLecture: true,
                group: 1,
                practices: [],
                courseId: 68
              },
              {
                startTime: "10:15",
                endTime: "12:45",
                day: "WEDNESDAY",
                lecutrer: "דוקטור מיה כהן",
                isLecture: true,
                group: 1,
                practices: [],
                courseId: 69
              }

*/