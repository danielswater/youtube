import { Injectable, PipeTransform, Pipe } from '@angular/core';

/**
 * bolds the beggining of the matching string in the item
 */
@Pipe({
    name: 'boldprefix'
})
@Injectable()
export class BoldPrefix implements PipeTransform {
    transform(value: string, keyword: string): any {
        if (!keyword) return '';
        let escaped_keyword = keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        return value.replace(escaped_keyword, function(str) { return str.bold(); });
    }
}