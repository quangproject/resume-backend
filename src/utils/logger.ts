export function logInfo(message: string) {
  console.log(`[LOG]:`, message);
}

export function logError(message: string, error: any) {
  console.error(`[ERROR]: ${message}`, error);
}
