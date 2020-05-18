import { SecurityClientApi } from '@palmyra-devkit/core-api/client';
import { Observable, of } from 'rxjs';

import { Role } from '@palmyra-devkit/core-api/shared';

import { ROLES } from '../mocked-response/mock';

export class SecurityClientApiImpl implements SecurityClientApi {
  getRoles(): Observable<Role[]> {
    return of(ROLES);
  }
}
