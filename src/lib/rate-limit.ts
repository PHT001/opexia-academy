const rateLimit = (options: { interval: number; uniqueTokenPerInterval: number }) => {
  const tokenCache = new Map<string, number[]>();

  return {
    check: (limit: number, token: string): { success: boolean; remaining: number } => {
      const now = Date.now();
      const windowStart = now - options.interval;
      const timestamps = tokenCache.get(token) || [];
      const valid = timestamps.filter(t => t > windowStart);

      if (valid.length >= limit) {
        tokenCache.set(token, valid);
        return { success: false, remaining: 0 };
      }

      valid.push(now);
      tokenCache.set(token, valid);

      // Cleanup old entries periodically
      if (tokenCache.size > options.uniqueTokenPerInterval) {
        const entries = Array.from(tokenCache.entries());
        for (const [key, val] of entries) {
          const filtered = val.filter(t => t > windowStart);
          if (filtered.length === 0) tokenCache.delete(key);
          else tokenCache.set(key, filtered);
        }
      }

      return { success: true, remaining: limit - valid.length };
    }
  };
};

export default rateLimit;
