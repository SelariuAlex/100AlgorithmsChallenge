function incrementalBackups(lastBackupTime, changes) {
  let backup = [];

  changes.forEach(change => {
    if (change[0] > lastBackupTime) {
      if (!backup.includes(change[1])) {
        backup.push(change[1]);
      }
    }
  });

  return backup.sort((id1, id2) => id1 - id2);
}

console.log(
  incrementalBackups(461620205, [
    [461620203, 1],
    [461620204, 2],
    [461620205, 6],
    [461620206, 5],
    [461620207, 3],
    [461620207, 5],
    [461620208, 1]
  ])
);
