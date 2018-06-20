let calendar = {
    from: new Date('2018-01-01T15:09:10Z'),
    to: new Date('2018-02-01T10:09:10Z')
};
let arrDay = [];

calendar[Symbol.iterator] = function () {
    let dateFrom = this.from,
        dateTo = this.to,
        dateFromMilliseconds = +dateFrom,
        dateToMilliseconds = +dateTo,
        saturday,
        sunday,
        result,
        getDate;


    return {
        next() {
            if (dateFromMilliseconds < +dateToMilliseconds) {

                dateFromMilliseconds = dateFromMilliseconds + 86400000;
                saturday = new Date(dateFromMilliseconds).toLocaleString("ru", {weekday: 'long'}) == 'суббота'; // есть ли еще способы найти выходной?
                sunday = new Date(dateFromMilliseconds).toLocaleString("ru", {weekday: 'long'}) == 'воскресенье';
                getDate = String(new Date(dateFromMilliseconds).getDate());

                if (getDate < 10) {
                    getDate = '0' + getDate;
                }

                result = getDate;

                if (saturday || sunday) {
                    result = '[' + getDate + ']';
                }

                return {
                    done: false,
                    value: result
                };

            } else {
                return {
                    done: true
                };
            }
        }
    }
};


for (let day of calendar) {
    arrDay.push(day);
}
console.log(arrDay);

