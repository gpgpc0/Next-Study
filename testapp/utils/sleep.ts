/**
 * @abstract SleepFunction
 * @param ms 
 * @returns void
 * @example sleep(1000); //1000ms stop
 * @link https://jp-seemore.com/web/13912/
 */
export function sleep(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
}