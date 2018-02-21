function filterAgeGroup(events, ageGroup) {
  return events.filter(event => {
    return event.ageGroups.indexOf(ageGroup) !== -1;
  });
}

export { filterAgeGroup };