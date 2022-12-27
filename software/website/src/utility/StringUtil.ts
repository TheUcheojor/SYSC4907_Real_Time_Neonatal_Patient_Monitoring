export function toTitleCase(str: string): string {
    if(str !== undefined && str.length > 0){
        return str.charAt(0).toUpperCase() + str.substring(1, str.length);
    }
}

export function toDateString(utcMS: number): string {
    const date = new Date(utcMS);
    return numberToCalendarMonth(date.getMonth()) + " " + date.getDay() + ", " + date.getFullYear();
}

export function toClockString(utcMSstart: number, utcMSend: number): string {
    const start = new Date(utcMSstart)
    const end = new Date(utcMSend)

    return start.getHours() + ":" + start.getMinutes() + ":" + start.getSeconds() + " - " + end.getHours() + ":" + end.getMinutes() + ":" + end.getSeconds();
}

export function elapsedDurationInHoursAndMinutes(utcMSstart: number, utcMSend: number): string {
    return Math.floor((utcMSend - utcMSstart) / 3600000).toString() +"h " + Math.ceil((utcMSend - utcMSstart) % 3600000 / 60000) + "m";
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