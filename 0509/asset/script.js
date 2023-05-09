/**
 * 요구사항 명세
 * 1. 시간 / 분 / 초를 클릭하면 10씩 추가됩니다.
 * 2. Start를 누르면 타이머가 1초 단위로 감소합니다.
 * 3. Pause를 누르면 타이머가 멈춥니다.
 * 4. 다시 Start를 누르면 재시작됩니다.
 * 5. 0초가 되면 초기화 됩니다.
 * 6. Reset을 누르면 초기화 됩니다.
*/


const $timer = document.querySelector('#timer');
const $counter = $timer.querySelectorAll('.timer-count button');
const $hrs = $timer.querySelector('.hrs');
const $min = $timer.querySelector('.min');
const $sec = $timer.querySelector('.sec');

const $btns = $timer.querySelectorAll('.timer-btns');
const $start = $timer.querySelector('.start');
const $pause = $timer.querySelector('.pause');
const $reset = $timer.querySelector('.reset');
let hours = 0;
let minutes = 0;
let seconds = 0;
let timerId = null;


/**
 * 1. hours, minutes, seconds 기준 설정.
 * 2. hours는24까지 1씩 증가.
 * 3. minutes, seconde는 60까지 10씩 증가.
 */
const timeSet = () => {
    $hrs.innerText = hours < 10 ? `0${hours}` : hours;
    $min.innerText = minutes < 10 ? `0${minutes}` : minutes;
    $sec.innerText = seconds < 10 ? `0${seconds}` : seconds;
};
timeSet();


$counter.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const targetBtn = e.target.closest('button');

        // 시간은 24까지 1씩, 분과 초는 60까지 10씩 증가
        if (targetBtn.classList.contains('hrs')) {
            hours >= 24 ? hours = 0 : hours += 1;
        } else if (targetBtn.classList.contains('min')) {
            minutes >= 60 ? minutes = 0 : minutes += 10;
        } else if (targetBtn.classList.contains('sec')) {
            seconds >= 60 ? seconds = 0 : seconds += 10;
        }
        timeSet();
    });
});




/**
 * 1. Start를 누르면 1초당 second의 innerText 1씩 감소.
 * 2. second의 innerText가 0이 되면 minutes의 innerText 1씩 감소.
 * 3. minutes의 innerText가 0이 되면 hours의 innerText 1씩 감소.
 * 4. second, minutes, hours의 innerText가 0이 되면 clearInterval.
 */

const timeCount = () => {
    if (timerId) {
        clearInterval(timerId);
    }

    timerId = setInterval(() => {
        if (seconds > 0) {
            seconds -= 1;
        } else if (seconds === 0 && minutes > 0) {
            seconds = 59;
            minutes -= 1;
        } else if (seconds === 0 && minutes === 0 && hours > 0) {
            seconds = 59;
            minutes = 59;
            hours -= 1;
        } else if (seconds === 0 && minutes === 0 && hours === 0) {
            clearInterval(timerId);
        }
        timeSet();
    }, 1000);
}

/**
 * 1. Pause를 누르면 clearInterval.
 * 2. Start를 누르면 timeCount 재시작.
 * 3. Reset을 누르면 clearInterval, 시간 초기화.
 */

$btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const targetBtn2 = e.target.closest('button');

        if (targetBtn2.classList.contains('start')) {
            timeCount();
        } else if (targetBtn2.classList.contains('pause')) {
            clearInterval(timerId);
        } else if (targetBtn2.classList.contains('reset')) {
            clearInterval(timerId);
            seconds = 0;
            minutes = 0;
            hours = 0;
            timeSet();
        }
    });
});