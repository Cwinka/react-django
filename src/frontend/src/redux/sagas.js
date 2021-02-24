import {FETCH_WORKS, FETCH_PREVIEW_IMAGES} from './types'
import { takeEvery, call } from 'redux-saga/effects'
import PortfolioService from 'components/middleware/portfolioservice';
import { put } from 'redux-saga/effects';

const ports = new PortfolioService();
export function* sagaWatcher(){
    yield takeEvery(FETCH_WORKS, sagaWorker);
}

function* sagaWorker() {
    const payload = yield call(() => requestPreviewImages('mid'));
    yield put({type: FETCH_PREVIEW_IMAGES, payload})
}
async function requestPreviewImages(s){
    const response = await ports.getSizedImages(s, true);
    return response.data
}