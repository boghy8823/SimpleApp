import moment from 'moment';

const formatEventStartDate = (date) => {
    let currentTme = moment.utc();
    let startDate = moment(date);

    if (startDate.dayOfYear() === currentTme.dayOfYear()) {
        return `Today, ${startDate.format("HH:MM")}`;
    }

    return startDate.format("YYYY-MM-DD, HH:MM");
}

export default formatEventStartDate;