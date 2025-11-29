const ipToNumber = (ip = '127.0.0.1') => {
  return ip.split('.')
    .map(Number) 
    .reduce((acc, octet, index) => {
      const shift = (3 - index) * 8;
      return acc + (octet << shift);
    }, 0);
};

// Приклади використання:
console.log(ipToNumber('127.0.0.1'));     // 2130706433
console.log(ipToNumber('10.0.0.1'));      // 167772161
console.log(ipToNumber('192.168.1.10'));  // -1062731510