import {getPostsArray} from './data.js';
import {renderPictures} from './pictures.js';
// import {getConsoleLog} from './big-picture.js';
// import './modal-big-pic.js';
import {getComment} from './big-picture.js'

const POSTS_COUNT = 25;
const postsArray = getPostsArray(POSTS_COUNT)
console.log(postsArray)
renderPictures(postsArray);

getComment(postsArray[3])












