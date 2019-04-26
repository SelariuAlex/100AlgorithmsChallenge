function domainType(domains) {
  let domainType = [];

  for (let i = 0; i < domains.length; i++) {
    let domain = domains[i].split('.');
    let lastDomain = domain[domain.length - 1];

    if (lastDomain === 'org') {
      domainType.push('organization');
    } else if (lastDomain === 'com') {
      domainType.push('commercial');
    } else if (lastDomain === 'net') {
      domainType.push('network');
    } else if (lastDomain === 'info') {
      domainType.push('information');
    }
  }
  return domainType;
}

console.log(
  domainType(['en.wiki.org', 'codefights.com', 'happy.net', 'code.info'])
);

console.log(
  domainType([
    'en.wiki.org',
    'org.com',
    'codefights.com',
    'happy.net',
    'code.info'
  ])
);
