const MINS_IN_HOUR = 60;
const SECS_IN_MIN = 60;
const MS_IN_SEC = 1000;
const MONTH_OFFSET = 1;

export function toTitleCase(str: string): string {
    if(str !== undefined && str.length > 0){
        return str.charAt(0).toUpperCase() + str.substring(1, str.length);
    }
}

export function toDateString(utcS: number): string {
    // using local time
    const date = new Date(utcS * MS_IN_SEC);
    return numberToCalendarMonth(date.getMonth() + MONTH_OFFSET) + " " + (date.getDate()) + ", " + date.getFullYear();
}

export function toClockString(utcStartS: number, utcEndS: number): string {
    // using local time
    const start = new Date(utcStartS * MS_IN_SEC)
    const end = new Date(utcEndS * MS_IN_SEC)

    return start.getHours().toString().padStart(2, '0') + ":" + start.getMinutes().toString().padStart(2, '0') + ":" + start.getSeconds().toString().padStart(2, '0') + " - " + end.getHours().toString().padStart(2, '0') + ":" + end.getMinutes().toString().padStart(2, '0') + ":" + end.getSeconds().toString().padStart(2, '0');
}

export function elapsedDurationInHoursAndMinutes(utcStartS: number, utcEndS: number): string {
    // using local time
    return Math.floor((utcEndS - utcStartS) / (MINS_IN_HOUR * SECS_IN_MIN)) +"h " + Math.ceil((utcEndS - utcStartS) % (MINS_IN_HOUR* SECS_IN_MIN) / SECS_IN_MIN) + "m";
}

function numberToCalendarMonth(month: number): string {
    switch(month) {
        case 1:
            return "Jan";
        case 2:
            return "Feb";
        case 3:
            return "Mar";
        case 4:
            return "Apr";
        case 5:
            return "May";
        case 6:
            return "Jun";
        case 7:
            return "Jul";
        case 8:
            return "Aug";
        case 9:
            return "Sep";
        case 10: 
            return "Oct";
        case 11:
            return "Nov";
        case 12:
            return "Dec";
    }
}