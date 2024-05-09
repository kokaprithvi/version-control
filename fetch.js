import { fetchFile1 } from './DiffFetch.js';
import { fetchFile2 } from './DiffFetch.js';
import { getDiff } from './DiffFetch.js';
import { renderDiff } from './DiffFetch.js';
import { adjustZoom } from './DiffFetch.js';

window.fetchFile1 = fetchFile1;
window.fetchFile2 = fetchFile2;
window.getDiff = getDiff;
window.renderDiff = renderDiff;
window.adjustZoom = adjustZoom;