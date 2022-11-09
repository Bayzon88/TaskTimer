export default function SideButtons({ selectTimerType }: any) {
  return (
    <span className='timer__container--selection'>
      <button onClick={(e) => selectTimerType(e)} className=' bg-primary d-flex'>
        Pomodoro
      </button>
      <button onClick={(e) => selectTimerType(e)} className=' bg-primary d-flex'>
        Break
      </button>
      <button onClick={(e) => selectTimerType(e)} className=' bg-primary d-flex'>
        Long-Break
      </button>
    </span>
  );
}
