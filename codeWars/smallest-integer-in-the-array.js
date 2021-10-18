// Best practices
class SmallestIntegerFinder {
    findSmallestInt(args) {
      return Math.min(...args)
    }
  }

// My solution
class SmallestIntegerFinder2 {
    findSmallestInt(args) {
        let min = args[0];
        for (let i = 0; i < args.length; i++) {
            if (args[i] < min) {
                min = args[i];
            }
        }
        return min;
      
    }
  }