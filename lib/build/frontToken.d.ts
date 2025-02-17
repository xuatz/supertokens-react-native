export default class FrontToken {
    private static waiters;
    private constructor();
    static getFrontToken(): Promise<string | null>;
    static getTokenInfo(): Promise<{
        uid: string;
        ate: number;
        up: any;
    } | undefined>;
    private static setFrontToken;
    static removeToken(): Promise<void>;
    static setItem(frontToken: string): Promise<void>;
}
