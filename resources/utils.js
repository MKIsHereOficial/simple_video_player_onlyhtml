class FormattedTime {
    constructor(number = 60 * 60 * 60) {
        var hour = Math.floor(number / 3600);
        //if (hour < 10) hour = "0" + hour;
        number %= 3600;
        var minute = Math.floor(number / 60);
        //if (minute < 10) minute = "0" + minute;
        var second = number % 60;
        if (second < 10) second = "0" + second;

        this.object = {hour: (hour > 0) ? hour : false, minute, second}

        
    }

    format() {
        var sec = Math.floor(this.object.second);
        if (this.object.hour) {
            return `${this.object.hour}:${this.object.minute}:${sec < 10 ? "0" + sec : sec}`;
        } else {
            return `${this.object.minute}:${sec < 10 ? "0" + sec : sec}`;
        }
    }
    
}

window.FormattedTime = FormattedTime;