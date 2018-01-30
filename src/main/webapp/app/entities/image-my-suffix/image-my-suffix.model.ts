import { BaseEntity } from './../../shared';

export const enum SctType {
    'EPSFEIN',
    'EPSGROB',
    'PDFFEIN',
    'PDFGROB',
    'PREVIEWGROB'
}

export class ImageMySuffix implements BaseEntity {
    constructor(
        public id?: number,
        public filePath?: string,
        public type?: SctType,
        public mandantId?: string,
        public kundenId?: string,
        public imageName?: string,
    ) {
    }
}
