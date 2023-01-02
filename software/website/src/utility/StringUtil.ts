export function toTitleCase(str: string): string {
    if(str !== undefined && str.length > 0){
        return str.charAt(0).toUpperCase() + str.substring(1, str.length);
    }
}

export function toDateString(utcS: number): string {
    const date = new Date(utcS * 1000);
    return numberToCalendarMonth(date.getMonth() + 1) + " " + date.getDay() + ", " + date.getFullYear();
}

export function toClockString(utcStartS: number, utcEndS: number): string {
    const start = new Date(utcStartS * 1000)
    const end = new Date(utcEndS * 1000)

    return start.getHours() + ":" + start.getMinutes() + ":" + start.getSeconds() + " - " + end.getHours() + ":" + end.getMinutes() + ":" + end.getSeconds();
}

export function elapsedDurationInHoursAndMinutes(utcStartS: number, utcEndS: number): string {
    return Math.floor((utcEndS - utcStartS) / 3600).toString() +"h " + Math.ceil((utcEndS - utcStartS) % 3600000 / 60) + "m";
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