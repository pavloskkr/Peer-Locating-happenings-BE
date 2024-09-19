import {DecodedIdToken} from "firebase-admin/lib/auth";

declare global {
    namespace Express {
        interface Request {
            user: DecodedIdToken;
        }
    }
}