import { BioType } from "./documents/bioType";
import { cvType } from "./documents/cvType";
import { projectType } from "./documents/projectType";
import { heroType } from "./objects/hero";
import { imageGalleryType } from "./objects/imageGallery";
import { textImageType } from "./objects/textImageType";
import { titleText } from "./objects/TitleText";
import { videoType } from "./objects/videoType";



export const schemaTypes = [
    // pageType,
    BioType,
    cvType,
    projectType,
    heroType,
    textImageType,
    imageGalleryType,
    videoType,
    titleText
]