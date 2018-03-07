function filterAgeGroup(events, ageGroup) {
  return events.filter(event => {
    return event.ageGroups.indexOf(ageGroup) !== -1;
  });
}
function filterEventDate(events, dateRange) {
  return events.filter(event => {
    return event.start < dateRange[1] && event.end > dateRange[0];
  });
}

export { filterAgeGroup, filterEventDate };
