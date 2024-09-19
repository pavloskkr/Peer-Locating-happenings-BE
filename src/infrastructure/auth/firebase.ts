import * as admin from 'firebase-admin';
import * as serviceAccount from '../../serviceAccount.json';
import { logger } from '../logger';

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount as any),
});

logger.info('Firebase initialized');

export default admin;