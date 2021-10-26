const sum = (...args) => {
    const arg = args;
    return arg.reduce((a, b) => a + b, 0);
  }