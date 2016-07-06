import {Injectable} from '@angular/core';

export class LoggingService {
    private _lastMessage = '';

    log(message: string){
        console.log('Current Message:' + message + ', Last Message: ' + this._lastMessage);
        this._lastMessage = message;
    }
}
