import {
  IdeMessageService,
  Message
} from '@palmyra-devkit/core-api/client/messages';

export class IDEMessageService extends IdeMessageService {
  pushSuccess(message: Message): void {
    console.log('Success : ' + message.detail);
  }
  pushError(message: Message): void {
    console.log('Error : ' + message.detail);
  }
  pushInfo(message: Message): void {
    console.log('Info : ' + message.detail);
  }
  pushWarning(message: Message): void {
    console.log('Warning : ' + message.detail);
  }
}
