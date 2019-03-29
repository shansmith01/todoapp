import { isToday, addDays, isWithinRange } from "date-fns";

const dueDate = (data, daysAway) => {
  let counter = 0;
  const now = Date.now();
  const diff = addDays(now, daysAway);

  const today = Object.keys(data).map(todo => {
    var dueDate = data[todo].dueDate;
    var done = data[todo].complete;
    if (daysAway === null) {
      !done && counter++;
    } else if (daysAway === 0) {
      if (isToday(new Date(dueDate)) && !done) {
        counter++;
      }
    } else if (
      isWithinRange(new Date(dueDate), new Date(now), new Date(diff)) &&
      !done
    ) {
      counter++;
    }
  });
  return counter;
};

export default dueDate;
