import {Page} from 'ionic-angular';
import {forwardRef} from 'angular2/core';
import {AndroidAttribute} from '../../../directives/helpers';

@Page({
    templateUrl: './build/pages/lists/dividers/template.html',
    directives: [forwardRef(() => AndroidAttribute)]
})
export class DividersPage {
    constructor() {

    }
}
